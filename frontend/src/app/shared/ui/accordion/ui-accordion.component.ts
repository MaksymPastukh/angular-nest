import { NgTemplateOutlet } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  OnInit,
  signal,
} from '@angular/core'
import { UiAccordionContentSlot, UiAccordionHeaderSlot } from './ui-accordion.slots'

let ACCORDION_ID = 0

@Component({
  selector: 'app-ui-accordion',
  standalone: true,
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-accordion.component.html',
})
export class UiAccordionComponent implements OnInit {
  defaultOpen = input<boolean>(false)

  headerClass = input<string>('text-2xl sm:text-3xl font-bold text-[#f6f6f6]')
  contentWrapClass = input<string>('mt-2')
  contentClass = input<string>('pt-4 text-[#bebcbd]')

  headerTpl = contentChild.required(UiAccordionHeaderSlot)
  contentTpl = contentChild.required(UiAccordionContentSlot)

  private readonly _id = `ui-accordion-${ACCORDION_ID++}`
  readonly contentId = `${this._id}-content`

  readonly isOpen = signal(false)

  ngOnInit() {
    this.isOpen.set(this.defaultOpen())
  }

  toggle() {
    this.isOpen.update((v) => !v)
  }

  onEscape(event: Event) {
    if (!this.isOpen() || !(event instanceof KeyboardEvent)) return

    event.preventDefault()
    event.stopPropagation()
    this.isOpen.set(false)
  }
}
