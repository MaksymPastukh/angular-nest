export interface AdminQuestionsFilterInterface {
  status: 'PENDING' | 'ANSWERED' | 'HIDDEN' | 'DELETED'
  productId: string | null
}
