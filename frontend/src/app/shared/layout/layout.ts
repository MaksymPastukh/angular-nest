import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header'
import { FooterComponent } from './footer/footer'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { filter, Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router)
  private readonly route = inject(ActivatedRoute)
  isFooterVisible = true
  private readonly destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.checkFooterVisibility()

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$) // Отписка при уничтожении компонента
      )
      .subscribe(() => {
        this.checkFooterVisibility()
      })
  }

  private checkFooterVisibility(): void {
    const currentRoute = this.route.firstChild?.snapshot
    this.isFooterVisible = !currentRoute?.data?.['hideFooter']
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
