import React from 'react'

const ISSERVER = typeof window === 'undefined'
const appContextPersist = !ISSERVER ? localStorage.getItem('app-context-persist') : null
const appContextPersistJson: AppState | null = appContextPersist && JSON.parse(appContextPersist)
const initialState = appContextPersistJson || {
  darkMode: true,
  language: 'en',
  account: {
    loginStatus: false
  }
}

const AppStateContext = React.createContext<AppState | undefined>(undefined)
const AppDispatchContext = React.createContext<AppDispatch | undefined>(undefined)

function appReducer(prevState: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return { ...prevState, darkMode: !prevState.darkMode }
    }
    case 'CHANGE_LANGUAGE': {
      return { ...prevState, language: prevState.language === 'id' ? 'en' : 'id' }
    }
    case 'SET_ACCOUNT': {
      return { ...prevState, account: action.account }
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`)
    }
  }
}

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = React.useReducer(appReducer, initialState)

  React.useEffect(() => {
    localStorage.setItem('app-context-persist', JSON.stringify(state))
  }, [state])

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export { AppStateContext, AppDispatchContext, AppProvider, appReducer }
