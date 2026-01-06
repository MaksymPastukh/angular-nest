import {Component} from '@angular/core';
import {ProductCardComponent} from '../../shared/components/product-card/product-card';
import {ProductFilterComponent} from '../../shared/components/products-filter/products-filter';
import {ProductType} from '../../shared/product.type';
import {FilterState} from '../../shared/types/products-filter.types';
import {TableBestPrice} from '../../shared/components/table-best-price/table-best-price';
import {TableBestPriceInterface} from '../types/table-best-price.interface';

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    ProductFilterComponent,
    TableBestPrice,
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  products: ProductType[] = [];
  filteredProducts: ProductType[] = [];
  categoryName: string = 'All';
  readonly itemsTableBestPrice: TableBestPriceInterface[] = [
    {
      title: 'Pick Any 4- Womens Plain T-shirt Combo',
      price: 1099,
      link: '/#',
    },
    {
      title: 'Pick Any 4 - Plain Womens Boxer Combo',
      price: 1099,
      link: '/#',
    },
    {
      title: 'Pick Any 4 - Women Plain Full Sleeve T-shirt Combo',
      price: 1399,
      link: '/#',
    },
    {
      title: 'Multicolor Checkered Long Casual Shirts for Women',
      price: 499,
      link: '/#',
    },
    {
      title: 'Pick Any 2: Plain Boxy Casual Shirts for Women Combo',
      price: 799,
      link: '/#',
    },
  ]


  onFilterChange(filters: FilterState) {
    console.log('Filters applied:', filters);

    // Применяем фильтры к товарам
    this.filteredProducts = this.products.filter(product =>
      // Фильтр по цене
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Обновляем название категории
    if (filters.selectedCategories.length > 0) {
      this.categoryName = filters.selectedCategories[0].split(':')[0];
    } else {
      this.categoryName = 'All';
    }
  }
}
