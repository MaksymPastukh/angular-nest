export interface ReviewsSummaryInterface {
  avg: number
  count: number
  distribution: Record<'1' | '2' | '3' | '4' | '5', number>
  updatedAt: string | null
}
