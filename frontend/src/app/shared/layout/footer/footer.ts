import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccordionModule } from 'primeng/accordion'
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, AccordionModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
