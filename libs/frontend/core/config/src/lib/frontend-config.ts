export interface FrontendConfigInterface {
  api: string
  staticUrl: string
}

export const FRONTEND_CONFIG: FrontendConfigInterface = {
  api: 'http://localhost:3000/api/',
  staticUrl: 'http://localhost:3000',
}
