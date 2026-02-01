import { Injectable } from '@angular/core'
import { CategoriesInterface } from '../domain/interfaces/categories.interface'

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  categoriesMen: CategoriesInterface[] = [
    {
      image: '/assets/images/categories/categories-men-1.png',
      category: 'Shirts',
      description: 'Explore Now!',
    },
    {
      image: '/assets/images/categories/categories-men-2.png',
      category: 'Printed T-Shirts',
      description: 'Explore Now!',
    },
    {
      image: '/assets/images/categories/categories-men-7.png',
      category: 'Activewear',
      description: 'Explore Now!',
    },
    {
      image: '/assets/images/categories/categories-men-8.png',
      category: 'Boxers',
      description: 'Explore Now!',
    },
  ]

  categoriesWomen: CategoriesInterface[] = [
    {
      image: '/assets/images/categories/categories-women-1.png',
      category: 'Hoodies & Sweetshirt',
      description: 'Explore Now!',
    },
    {
      image: '/assets/images/categories/categories-women-2.png',
      category: 'Coats & Parkas',
      description: 'Explore Now!',
    },
    {
      image: '/assets/images/categories/categories-women-3.png',
      category: 'Tees & T-Shirt',
      description: 'Explore Now!',
    },
    {
      image: '/assets/images/categories/categories-women-4.png',
      category: 'Boxers',
      description: 'Explore Now!',
    },
  ]

  getCategoriesMen(): CategoriesInterface[] {
    return this.categoriesMen
  }

  getCategoriesWoman(): CategoriesInterface[] {
    return this.categoriesWomen
  }
}
