import { UISelect } from '@/shared/ui'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { form, FormField, minLength, required, submit } from '@angular/forms/signals'
import { MessageService } from 'primeng/api'
import { Button } from 'primeng/button'
import { FileUpload } from 'primeng/fileupload'
import { MultiSelect } from 'primeng/multiselect'
import { Rating } from 'primeng/rating'
import { Toast } from 'primeng/toast'
import { CreateProductFormDataInterface } from '../../domain/interfaces/create-product-formData.interface'
import { CreateProductStore } from '../../store/create-product.store'

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormField,
    MultiSelect,
    Button,
    FileUpload,
    Toast,
    Rating,
    UISelect,
  ],
  templateUrl: './create-product-page.html',
  styleUrl: './create-product-page.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductPage {
  protected readonly store = inject(CreateProductStore)
  private readonly messageService = inject(MessageService)

  protected readonly selectedFiles = signal<File[]>([])
  protected readonly MAX_IMAGES = 3

  protected readonly model = signal<CreateProductFormDataInterface>({
    title: '',
    rating: 0,
    brand: '',
    images: [],
    price: 0,
    fabric: '',
    pattern: '',
    fit: '',
    neck: '',
    sleeve: '',
    comment: '',
    category: '',
    productType: '',
    dressStyle: '',
    colors: [],
    sizes: [],
    description: '',
  })

  protected productForm = form(this.model, (schema) => {
    required(schema.title, { message: 'Это поле обязательно' })
    minLength(schema.title, 3, { message: 'Минимум 3 символа' })
    required(schema.brand, { message: 'Это поле обязательно' })
    required(schema.images, { message: 'Это поле обязательно' })
    required(schema.price, { message: 'Это поле обязательно' })
    required(schema.comment, { message: 'Это поле обязательно' })
    required(schema.category, { message: 'Это поле обязательно' })
    required(schema.productType, { message: 'Это поле обязательно' })
    required(schema.dressStyle, { message: 'Это поле обязательно' })
    required(schema.description, { message: 'Это поле обязательно' })
    minLength(schema.description, 10, { message: 'Минимум 10 символов' })
  })

  constructor() {
    effect(() => {
      const uploadedPaths = this.store.uploadedImagePaths()
      if (uploadedPaths.length > 0) {
        this.model.update((m) => ({ ...m, images: uploadedPaths }))
      }
    })
  }

  /**
   * Обработчик выбора изображений (не загружает на сервер сразу)
   */
  protected onImageSelect(event: { files: File[] }): void {
    const newFiles = event.files
    if (!newFiles || newFiles.length === 0) return

    const currentFiles = this.selectedFiles()
    const totalFiles = currentFiles.length + newFiles.length

    // Проверяем лимит
    if (totalFiles > this.MAX_IMAGES) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Превышен лимит',
        detail: `Можно загрузить максимум ${this.MAX_IMAGES} изображения`,
        life: 3000,
      })
      // Добавляем только те, которые помещаются в лимит
      const allowedCount = this.MAX_IMAGES - currentFiles.length
      const filesToAdd = newFiles.slice(0, allowedCount)
      this.selectedFiles.set([...currentFiles, ...filesToAdd])
      return
    }

    // Сохраняем файлы локально
    this.selectedFiles.set([...currentFiles, ...newFiles])
  }

  /**
   * Удаление конкретного изображения
   */
  protected removeImage(index: number): void {
    const files = this.selectedFiles()
    this.selectedFiles.set(files.filter((_, i) => i !== index))
  }

  /**
   * Удаление всех выбранных изображений
   */
  protected clearAllImages(): void {
    this.selectedFiles.set([])
    this.model.update((m) => ({ ...m, images: [] }))
  }

  protected onSubmit(event: Event): void {
    event.preventDefault()

    submit(this.productForm, async () => {
      // Если есть выбранные файлы, сначала загружаем их
      const files = this.selectedFiles()

      if (files.length > 0) {
        // Загружаем изображения на сервер
        this.store.uploadImages(files)

        // Ждем пока uploadedImagePaths обновится
        // Effect выше автоматически обновит model().images
        await new Promise<void>((resolve) => {
          const checkInterval = setInterval(() => {
            const paths = this.store.uploadedImagePaths()
            if (paths.length > 0 && !this.store.isUploadingImages()) {
              clearInterval(checkInterval)
              resolve()
            }
          }, 100)

          // Таймаут на случай ошибки
          setTimeout(() => {
            clearInterval(checkInterval)
            resolve()
          }, 10000)
        })
      }

      // Получаем данные из модели формы
      const formData: CreateProductFormDataInterface = this.model()

      // Отправляем через store
      this.store.createProduct(formData)
    }).catch((error) => {
      console.error('❌ Form submission error:', error)
    })
  }

  protected onReset(): void {
    // Сбрасываем файлы
    this.selectedFiles.set([])

    // Сбрасываем модель формы
    this.model.set({
      title: '',
      rating: 0,
      brand: '',
      images: [],
      price: 0,
      comment: '',
      category: '',
      productType: '',
      dressStyle: '',
      colors: [''],
      sizes: [''],
      fabric: '',
      pattern: '',
      fit: '',
      neck: '',
      sleeve: '',
      description: '',
    })

    // Сбрасываем состояние store
    this.store.resetState()

    this.messageService.add({
      severity: 'info',
      summary: 'Форма очищена',
      life: 2000,
    })
  }
}
