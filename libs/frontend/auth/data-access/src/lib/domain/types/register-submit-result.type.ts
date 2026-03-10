export type RegisterSubmitResult =
  | { ok: true }
  | { ok: false; kind: 'field'; field: 'email' | 'password'; message: string }
  | { ok: false; kind: 'form'; message: string }
