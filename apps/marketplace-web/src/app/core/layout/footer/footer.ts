import { UiAccordionComponent, UiAccordionContentSlot, UiAccordionHeaderSlot } from '@/shared/ui'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AccordionModule } from 'primeng/accordion'

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    AccordionModule,
    RouterLink,
    UiAccordionComponent,
    UiAccordionHeaderSlot,
    UiAccordionContentSlot,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
