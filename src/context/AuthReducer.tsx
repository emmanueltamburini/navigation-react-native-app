import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'} | {type: 'changeFavIcon'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLogging: true, username: 'no-username'};

    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};

    default:
      return state;
  }
};
