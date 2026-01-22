import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core'
import { CommentInterface } from '../../types/comment.interface'
import { Router } from '@angular/router'

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
  currentUserId = input<string | null>(null)

  like = output<string>()
  delete = output<string>()

  likesCount = computed(() => this.comment().likedBy?.length ?? 0)
  isLiked = computed(() => {
    const userId = this.currentUserId()
    const likedBy = this.comment().likedBy ?? []

    if (!userId) {
      void this.router.navigate(['/login'])
      return
    }

    // Сравниваем и как строки, и через toString() на случай если это ObjectId
    return likedBy.some((id) => id === userId || id.toString() === userId)
  })
}
