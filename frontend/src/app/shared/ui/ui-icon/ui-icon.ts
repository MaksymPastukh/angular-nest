import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { UiPrimeIconName } from './prime-icon-name.type'

@Component({
  selector: 'app-ui-icon',
  standalone: true,
  template: `<i [class]="cls()"></i>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconComponent {
  name = input.required<UiPrimeIconName>()
  size = input<'sm' | 'md' | 'lg'>('md')
  tone = input<'muted' | 'default' | 'danger'>('default')

  readonly cls = computed(() => {
    const base = `pi pi-${this.name()}`
    const size = this.size() === 'sm' ? 'text-sm' : this.size() === 'lg' ? 'text-lg' : 'text-base'
    const tone =
      this.tone() === 'muted'
        ? 'text-gray-500'
        : this.tone() === 'danger'
          ? 'text-red-600'
          : 'text-gray-800'

    return `${base} ${size} ${tone}`
  })
}
