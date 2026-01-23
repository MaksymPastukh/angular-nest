import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { Field, form, minLength, required, submit } from '@angular/forms/signals'
import { MessageService } from 'primeng/api'
import { Button } from 'primeng/button'
import { FileUpload } from 'primeng/fileupload'
import { InputNumber } from 'primeng/inputnumber'
import { MultiSelect } from 'primeng/multiselect'
import { Rating } from 'primeng/rating'
import { Select } from 'primeng/select'
import { Toast } from 'primeng/toast'
import { CreateProductStore } from '../../../features/personal/admin/shop/store/create-product.store'
import { CreateProductFormData } from '../../../features/personal/admin/shop/types/create-product.interface'

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Field,
    InputNumber,
    Select,
    MultiSelect,
    Button,
    FileUpload,
    Toast,
    Rating,
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProduct {
  protected readonly store = inject(CreateProductStore)
  private readonly messageService = inject(MessageService)

  /** Выбранный файл изображения (до загрузки на сервер) */
  protected readonly selectedFile = signal<File | null>(null)

  protected readonly model = signal<CreateProductFormData>({
    title: '',
    rating: 0,
    brand: '',
    image: '',
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
    color: '',
    size: [],
    isLiked: false,
    description: '',
    userComments: '',
    questionsAnswers: '',
  })

  protected readonly productForm = form(this.model, (schema) => {
    required(schema.title, { message: 'Это поле обязательно' })
    minLength(schema.title, 3, { message: 'Минимум 3 символа' })
    required(schema.brand, { message: 'Это поле обязательно' })
    required(schema.image, { message: 'Это поле обязательно' })
    required(schema.price, { message: 'Это поле обязательно' })
    required(schema.comment, { message: 'Это поле обязательно' })
    required(schema.category, { message: 'Это поле обязательно' })
    required(schema.productType, { message: 'Это поле обязательно' })
    required(schema.dressStyle, { message: 'Это поле обязательно' })
    required(schema.color, { message: 'Это поле обязательно' })
    required(schema.size, { message: 'Это поле обязательно' })
    required(schema.description, { message: 'Это поле обязательно' })
    minLength(schema.description, 10, { message: 'Минимум 10 символов' })
  })

  constructor() {
    effect(() => {
      const uploadedPath = this.store.uploadedImagePath()
      if (uploadedPath && this.model().image !== uploadedPath) {
        this.model.update((m) => ({ ...m, image: uploadedPath }))
      }
    })
  }

  /**
   * Обработчик выбора изображения (не загружает на сервер сразу)
   */
  protected onImageSelect(event: { files: File[] }): void {
    const file = event.files[0]
    if (!file) return

    // Сохраняем файл локально
    this.selectedFile.set(file)

    // Временно отмечаем поле как заполненное
    this.model.update((m) => ({ ...m, image: 'pending' }))
  }

  /**
   * Удаление выбранного изображения
   */
  protected removeImage(): void {
    this.selectedFile.set(null)
    this.model.update((m) => ({ ...m, image: '' }))
  }

  protected onSubmit(event: Event): void {
    event.preventDefault()

    submit(this.productForm, async () => {
      // Если есть выбранный файл, сначала загружаем его
      const file = this.selectedFile()

      if (file) {
        // Загружаем изображение на сервер
        this.store.uploadImage(file)

        // Ждем пока uploadedImagePath обновится
        // Effect выше автоматически обновит model().image
        await new Promise<void>((resolve) => {
          const checkInterval = setInterval(() => {
            const path = this.store.uploadedImagePath()
            if (path && !this.store.isUploadingImage()) {
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
      const formData: CreateProductFormData = this.model()

      // Отправляем через store
      this.store.createProduct(formData)
    }).catch((error) => {
      console.error('❌ Form submission error:', error)
    })
  }

  protected onReset(): void {
    // Сбрасываем файл
    this.selectedFile.set(null)

    // Сбрасываем модель формы
    this.model.set({
      title: '',
      rating: 0,
      brand: '',
      image: '',
      price: 0,
      comment: '',
      category: '',
      productType: '',
      dressStyle: '',
      color: '',
      size: [],
      fabric: '',
      isLiked: false,
      pattern: '',
      fit: '',
      neck: '',
      sleeve: '',
      description: '',
      userComments: '',
      questionsAnswers: '',
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
