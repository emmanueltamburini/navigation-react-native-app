import React, {createContext} from 'react';

export interface AuthState {
  isLogging: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLogging: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

const providerValue = {authState: authInitialState, signIn: () => {}};

export const AuthContext = createContext<AuthContextProps>({...providerValue});

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
