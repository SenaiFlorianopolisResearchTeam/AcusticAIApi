import React, { createContext, useContext, useState } from 'react';

type RegisterContextProvider = {
  children: React.ReactNode
}

type State = 'login' | 'signup' | 'signupForm' | 'forgotPassword' 

interface RegisterType {
  state: State;
  updateState: (newData: State) => void;
}

const RegisterContext = createContext<RegisterType | undefined>(undefined);

const RegisterContextProvider = ({ children }: RegisterContextProvider) => {
  const [state, setState] = useState<State>('login')
  
  const updateState = (newState: State) => {
    setState(newState);
  }
  
  return (
    <RegisterContext.Provider value={{ state, updateState }}>
      {children}
    </RegisterContext.Provider>
  )
}

const useRegisterContext = () => {
    const context = useContext(RegisterContext);
    if (!context) {
      throw new Error('useRegisterContext must be used within a RegisterContextProvider')
    }
    return context
}
  
export { RegisterContextProvider, useRegisterContext }