import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FormValueControl } from '@angular/forms/signals'
import { Select } from 'primeng/select'

@Component({
  selector: 'app-ui-select',
  imports: [Select, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-select
    [options]="options()"
    [optionLabel]="optionLabel()"
    [optionValue]="optionValue()"
    [appendTo]="appendTo()"
    [class]="styleClass()"
    [panelStyleClass]="panelStyleClass()"
    [placeholder]="placeholder()"
    [ariaLabel]="ariaLabel()"
    [disabled]="disabled()"
    [ngModel]="value()"
    (ngModelChange)="value.set($event)"
  />`,
})
export class UISelect<T = string, TOption = unknown> implements FormValueControl<T | null> {
  readonly value = model<T | null>(null)
  options = input<TOption[]>([])

  optionLabel = input<string>('label')
  optionValue = input<string>('value')

  placeholder = input<string>('')
  ariaLabel = input<string>('')

  appendTo = input<'body' | 'self'>('body')
  styleClass = input<string>('!border-0 !shadow-none !outline-none focus:!ring-0 !bg-transparent')
  panelStyleClass = input<string>('')

  disabled = input<boolean>(false)
}
