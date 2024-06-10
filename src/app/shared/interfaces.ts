export interface User {
  email: string,
  password: string,
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string,
  expiresIn: string
}

export interface Quiz {
  name: string,
  description?: string,
  author?: string
  id?: string,
  questions: [Question]
}

export interface Question {
  description: string,
  answer: string
  clue?: string,
}

export type NotificationType = 'success' | 'warning' | 'error';
export interface Notification {
  type: NotificationType,
  text: string,
  delay?: number
}
