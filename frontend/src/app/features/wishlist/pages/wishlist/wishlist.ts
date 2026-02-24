import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wishlist {
  constructor() {}
}
