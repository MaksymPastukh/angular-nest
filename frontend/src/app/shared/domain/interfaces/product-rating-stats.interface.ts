export interface RatingStatsInterface {
  avg: number
  count: number
  distribution: {
    '1': number
    '2': number
    '3': number
    '4': number
    '5': number
  }
  updatedAt: string | null
}
