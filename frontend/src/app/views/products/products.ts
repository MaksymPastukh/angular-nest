import {Component, inject} from '@angular/core';
import {ProductCardComponent} from '../../shared/components/product-card/product-card';
import {ProductFilterComponent} from '../../shared/components/products-filter/products-filter';
import {ProductType} from '../../shared/product.type';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    ProductFilterComponent
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productService = inject(ProductService);

  products: ProductType[] = [];

  ngOnInit() {
    this.products =
      this.productService.getProduct();
  }

}
