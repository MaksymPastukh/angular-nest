import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core'
import { AuthStore } from '../../../auth/store/auth.store'
import { CommentEntity } from '../../domain/interface/comment.interface'
import { CommentStore } from '../../store/comment.store'
import { CommentItem } from '../comment-item/comment-item'

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
  readonly store = inject(CommentStore)
  readonly authStore = inject(AuthStore)

  // Input: ID продукта
  productId = input.required<string>()
  newCommentText = signal<string>('')
  editCommentText = signal<string>('')
  editingCommentId = signal<string | null>(null)
  isAuthenticated = signal<boolean>(false) // Получить из AuthStore

  constructor() {
    // Загружаем комментарии при изменении productId
    effect(() => {
      const id: string = this.productId()

      if (id) {
        this.store.loadComments({ productId: id })
      }
    })
  }

  onCreateComment(event: Event): void {
    event.preventDefault()

    const text = this.newCommentText().trim()
    if (text && this.productId()) {
      this.store.createComment({
        productId: this.productId(),
        comment: { text },
      })
      this.newCommentText.set('')
    }
  }

  onEditComment(comment: CommentEntity) {
    this.editingCommentId.set(comment.id)
    this.editCommentText.set(comment.text)
  }

  onCancelEdit() {
    this.editingCommentId.set(null)
    this.editCommentText.set('')
  }

  onDeleteComment(id: string) {
    if (!this.authStore.isAuthenticated()) {
      return
    }

    if (id) {
      this.store.deleteComment({ commentId: id })
    }
  }

  onToggleLike(commentId: string) {
    // Проверяем аутентификацию перед отправкой запроса
    if (!this.authStore.isAuthenticated()) {
      return
    }

    const userId: string | null = this.authStore.userId()

    if (!userId) {
      return
    }

    if (commentId) {
      this.store.toggleLike(commentId)
    }
  }
}
