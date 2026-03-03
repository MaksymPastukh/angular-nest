export type CreateEventType =
  | { type: 'productCreated'; productTitle: string }
  | { type: 'productCreateError'; message: string }
