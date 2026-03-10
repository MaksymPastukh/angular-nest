export type LoginSubmitResult =
  | { ok: true }
  | { ok: false; kind: 'field'; field: 'email' | 'password'; message: string }
  | { ok: false; kind: 'form'; message: string }
