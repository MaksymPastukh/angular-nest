import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import { CommonModule } from '@angular/common'
import {RouterLink} from '@angular/router';
import {TableBestPriceInterface} from '../../../views/types/table-best-price.interface';

@Component({
  selector: 'table-best-price',
  imports: [CommonModule, RouterLink],
  templateUrl: './table-best-price.html',
  styleUrl: './table-best-price.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class TableBestPrice {
  itemsTableBestPrice = input<TableBestPriceInterface[]>([]);
}
