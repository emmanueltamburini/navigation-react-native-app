import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLogging: true, username: 'no-username'};

    default:
      return state;
  }
};
