import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core'
import { CommonModule } from '@angular/common'
import { Categories } from '../../types/categories'
import {RouterLink} from '@angular/router';

interface Item {
  title: string;
  price: number;
  link: string;
}

@Component({
  selector: 'table-best-price',
  imports: [CommonModule, RouterLink],
  templateUrl: './table-best-price.html',
  styleUrl: './table-best-price.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class TableBestPrice {
  readonly items = signal<Item[]>([
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
  ]);
}
