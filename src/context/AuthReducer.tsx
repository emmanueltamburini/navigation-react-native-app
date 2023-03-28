import {AuthState, authInitialState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLogging: true, username: 'no-username'};

    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};

    case 'changeUsername':
      return {...state, username: action.payload};

    case 'logout':
      return {...authInitialState};

    default:
      return state;
  }
};
