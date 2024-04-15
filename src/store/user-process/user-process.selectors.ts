import { AuthorizationStatus, NameSpace } from '../../const';
import { State, UserData } from '../../types';

export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;

export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
