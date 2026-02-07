import { Directive, inject, TemplateRef } from '@angular/core'

@Directive({
  selector: '[appUiAccordionHeader]',
  standalone: true,
})
export class UiAccordionHeaderSlot {
  readonly tpl = inject(TemplateRef<unknown>)
}

@Directive({
  selector: '[appUiAccordionContent]',
  standalone: true,
})
export class UiAccordionContentSlot {
  readonly tpl = inject(TemplateRef<unknown>)
}
