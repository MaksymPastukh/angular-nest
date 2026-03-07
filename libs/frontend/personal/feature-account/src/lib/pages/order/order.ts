import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Order {}
