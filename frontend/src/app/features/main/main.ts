import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Carousel } from 'primeng/carousel'
import { GalleriaModule } from 'primeng/galleria'
import { ProductInterface } from '../../shared/domain/interfaces/product.interface'
import { ProductCardComponent } from '../catalog/ui/product-card/product-card'
import { CategoriesService } from '../categories/data-access/categories.service'
import { CategoriesInterface } from '../categories/domain/interfaces/categories.interface'
import { CategoriesCardComponent } from '../categories/ui/categories-card/categories-card'

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    Carousel,
    GalleriaModule,
    CategoriesCardComponent,
    ProductCardComponent,
    RouterLink,
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  categoryService = inject(CategoriesService)
  categoriesMen: CategoriesInterface[] = []
  categoriesWoman: CategoriesInterface[] = []
  productsInTheLimelight: ProductInterface[] = []
  // В компоненте
  slides = [
    {
      image: '/assets/images/shop-slide-1.png',
      category: 'T-Shirt / Tops',
      title: 'Summer Value Pack',
      description: 'cool / colorful / comfy',
    },
    {
      image: '/assets/images/shop-slide-2.jpg',
      category: 'Jackets / Coats',
      title: 'Winter Collection',
      description: 'warm / stylish / trendy',
    },
  ]

  discounts = [
    {
      image: '/assets/images/discounts-main-one.png',
      category: 'Low Price',
      title: 'High Coziness',
      description: 'UPTO 50% OFF',
    },
    {
      image: '/assets/images/discounts-main-two.png',
      category: 'Beyoung Presents',
      title: 'Breezy Summer Style',
      description: 'UPTO 50% OFF',
    },
  ]

  feedback = [
    {
      image: '/assets/images/feedback/feedback-person-1.png',
      rating: 5,
      name: 'Floyd Miles',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      image: '/assets/images/feedback/feedback-person-2.png',
      rating: 3.5,
      name: 'Name',
      description:
        'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      image: '/assets/images/feedback/feedback-person-3.png',
      rating: 4,
      name: 'Savannah Nguyen',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      image: '/assets/images/feedback/feedback-person-4.png',
      rating: 5,
      name: 'Name Last',
      description: 'Feedback',
    },
    {
      image: '/assets/images/feedback/feedback-person-5.png',
      rating: 4,
      name: 'Name',
      description: 'Feedback',
    },
  ]

  newArrival = [
    {
      image: '/assets/images/arrival/item-1.png',
      title: 'Knitted Joggers',
    },
    {
      image: '/assets/images/arrival/item-2.png',
      title: 'Full Sleeve',
    },
    {
      image: '/assets/images/arrival/item-3.png',
      title: 'Active T-Shirts',
    },
    {
      image: '/assets/images/arrival/item-4.png',
      title: 'Urban Shirts',
    },
    {
      image: '/assets/images/arrival/item-5.png',
      title: 'Plain T-Shirt',
    },
  ]

  constructor() {}

  ngOnInit() {
    this.categoriesMen = this.categoryService.getCategoriesMen()
    this.categoriesWoman = this.categoryService.getCategoriesWoman()
  }
}
