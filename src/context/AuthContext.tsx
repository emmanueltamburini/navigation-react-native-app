import React, {createContext, useMemo, useReducer} from 'react';
import {authReducer} from './AuthReducer';

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

const providerValueDummy = {authState: authInitialState, signIn: () => {}};

export const AuthContext = createContext<AuthContextProps>({
  ...providerValueDummy,
});

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({type: 'signIn'});

  const providerValue = useMemo(() => ({authState, signIn}), [authState]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
