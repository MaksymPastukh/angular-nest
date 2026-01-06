import {Component, inject, OnInit} from '@angular/core';
import {ProductCardComponent} from '../../shared/components/product-card/product-card';
import {ProductFilterComponent} from '../../shared/components/products-filter/products-filter';
import {ProductType} from '../../shared/product.type';
import {ProductService} from '../../shared/services/product.service';
import {FilterState} from '../../shared/types/products-filter.types';
import {TableBestPrice} from '../../shared/components/table-best-price/table-best-price';

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
export class Products implements OnInit {
  productService = inject(ProductService);

  products: ProductType[] = [];
  filteredProducts: ProductType[] = [];
  categoryName: string = 'All';

  ngOnInit() {
    this.products = this.productService.getProduct();
    this.filteredProducts = this.products;
  }

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
