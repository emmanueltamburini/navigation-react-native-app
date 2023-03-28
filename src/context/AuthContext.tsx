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
  changeFavoriteIcon: (icon: string) => void;
  logout: () => void;
}

const providerValueDummy = {
  authState: authInitialState,
  signIn: () => {},
  changeFavoriteIcon: () => {},
  logout: () => {},
};

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

  const changeFavoriteIcon = (icon: string) => {
    dispatch({type: 'changeFavIcon', payload: icon});
  };

  const logout = () => dispatch({type: 'logout'});

  const providerValue = useMemo(
    () => ({authState, signIn, changeFavoriteIcon, logout}),
    [authState],
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
