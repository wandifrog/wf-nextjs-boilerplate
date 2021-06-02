type AppAction =
  | { type: 'CHANGE_THEME' }
  | { type: 'CHANGE_LANGUAGE' }
  | { type: 'SET_ACCOUNT', account: RFBAccount }

type AppDispatch = (action: AppAction) => void

type RFBAccount = {
  loginStatus: boolean
}

type AppState = {
  darkMode: boolean
  language: 'id' | 'en'
  account: RFBAccount
}
