import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core'
import { AuthStore } from '../../../../../core/auth/store/auth.store'
import { CommentStore } from '../../store/comment.store'
import { CommentItem } from '../comment-item/comment-item'
import { CommentCreateInterface } from '../../types/comments-create.interface'

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommentItem],
})
export class CommentsComponent {
  // Inject stores
  readonly commentStore = inject(CommentStore)
  readonly authStore = inject(AuthStore)

  // Input: ID продукта
  productId = input.required<string>()

  // Текущий пользователь
  currentUserId = computed(() => this.authStore.user()?.user?.id ?? null)

  // Локальное состояние формы
  newCommentText = signal('')
  newCommentRating = signal(5)

  constructor() {
    // Загружаем комментарии при изменении productId
    effect(() => {
      const id = this.productId()
      if (id) {
        this.commentStore.loadComments(id)
      }
    })
  }

  /**
   * Отправка нового комментария
   */
  handleSubmit(event?: Event) {
    event?.preventDefault()

    const text = this.newCommentText().trim()
    if (!text) return

    const comment: CommentCreateInterface = {
      text,
      rating: this.newCommentRating(),
    }

    this.commentStore.addComment({
      productId: this.productId(),
      comment,
    })

    // Очищаем форму
    this.newCommentText.set('')
    this.newCommentRating.set(5)
  }

  /**
   * Лайк комментария
   */
  handleLike(commentId: string) {
    this.commentStore.toggleLikeComment({
      productId: this.productId(),
      commentId,
    })
  }

  /**
   * Удаление комментария
   */
  handleDelete(commentId: string) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Вы уверены, что хотите удалить этот комментарий?')) {
      this.commentStore.deleteComment({
        productId: this.productId(),
        commentId,
      })
    }
  }
}
