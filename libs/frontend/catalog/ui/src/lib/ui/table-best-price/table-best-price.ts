import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TableBestPriceInterface } from '@marketplace/frontend-catalog-util'

@Component({
  selector: 'app-table-best-price',
  imports: [CommonModule, RouterLink],
  templateUrl: './table-best-price.html',
  styleUrl: './table-best-price.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBestPrice {
  itemsTableBestPrice = input<TableBestPriceInterface[]>([])
}
