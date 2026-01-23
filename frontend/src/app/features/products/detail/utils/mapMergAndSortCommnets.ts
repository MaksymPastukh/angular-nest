import { CommentEntity, CommentInterface } from '../types/comment.interface'

export const mapAndSortComments = (comments: CommentInterface[]): CommentEntity[] =>
  comments.map(mapCommentToEntity).sort((a, b) => b.createdAtTs - a.createdAtTs)

export const mergeComments = (
  current: CommentEntity[],
  incoming: CommentInterface[]
): CommentEntity[] => {
  const map = new Map<string, CommentEntity>()

  for (const comment of current) {
    map.set(comment.id, comment)
  }

  for (const comment of incoming.map(mapCommentToEntity)) {
    map.set(comment.id, comment)
  }

  return Array.from(map.values()).sort((a, b) => b.createdAtTs - a.createdAtTs)
}

export const mapCommentToEntity = (c: CommentInterface): CommentEntity => ({
  ...c,
  createdAtTs: Date.parse(c.createdAt),
})
