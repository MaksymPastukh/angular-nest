import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { Breadcrumb } from 'primeng/breadcrumb'
import { toPrimeMenuItems } from './breadcrumb.adapter'
import { BreadcrumbItemInterface } from './breadcrumb.types'

@Component({
  selector: 'app-ui-breadcrumb',
  standalone: true,
  imports: [Breadcrumb],
  template: ` <div class="ui-breadcrumb">
    <p-breadcrumb [model]="primeItems()" styleClass="ui-breadcrumb__root" />
  </div>`,
  styles: `
    .ui-breadcrumb__root {
      background: transparent;
      border: 0;
      padding: 0;
      margin-bottom: 1.25rem;
    }

    .ui-breadcrumb .active-breadcrumb {
      font-weight: 600;
      color: #7c3aed;
    }

    .ui-breadcrumb .active-breadcrumb a {
      color: #7c3aed !important;
      pointer-events: none;
      cursor: default;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBreadcrumbComponent {
  items = input<BreadcrumbItemInterface[]>([])
  primeItems = computed(() => toPrimeMenuItems(this.items()))
}
