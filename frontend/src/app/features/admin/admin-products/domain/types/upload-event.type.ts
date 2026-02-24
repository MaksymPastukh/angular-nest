export type UploadEventType =
  | { type: 'imageUploaded' }
  | { type: 'imageUploadError'; message: string }
