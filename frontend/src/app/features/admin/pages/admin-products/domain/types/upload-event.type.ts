export type UploadEventType =
  | { type: 'imagesUploaded'; count: number }
  | { type: 'imagesUploadError'; message: string }
