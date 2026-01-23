import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core'
import { Router } from '@angular/router'
import { CommentInterface } from '../../types/comment.interface'

@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './comment-item.html',
  styleUrl: './comment-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentItem {
  comment = input.required<CommentInterface>()
  readonly router = inject(Router)

  // Данные о текущем пользователе
  currentUserId = input<string | null>(null)
  isUserAdmin = input<boolean>(false)

  like = output<string>()
  delete = output<string>()

  likesCount = computed(() => this.comment().likesCount ?? 0)
  isLiked = computed(() => this.comment().isLiked ?? false)

  // Проверка: может ли пользователь удалить комментарий
  canDelete = computed(() => {
    const userId = this.currentUserId()
    const isAdmin = this.isUserAdmin()
    const commentUserId = this.comment().userId

    // Админ может удалять любые комментарии
    // Пользователь может удалять только свои комментарии
    return isAdmin || (userId && userId === commentUserId)
  })

  onLikeClick(): void {
    const userId = this.currentUserId()

    // Если пользователь не авторизован, редиректим на логин
    if (!userId) {
      void this.router.navigate(['/login'])
      return
    }

    // Иначе отправляем событие лайка
    this.like.emit(this.comment()._id)
  }
}
