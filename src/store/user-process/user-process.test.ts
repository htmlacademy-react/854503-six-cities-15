import { makeFakeProUserData } from '../../common/test-utils';
import { AuthorizationStatus } from '../../const';
import { userProcess } from './user-process.slice';
import { checkAuthAction, loginAction } from './user-process.thunks';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      userData: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      userData: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AUTH", fill "userData" with "checkAuthAction.fulfilled"', () => {
    const mockProUserData = makeFakeProUserData();
    const expectedState = {
      userData: mockProUserData,
      authorizationStatus: AuthorizationStatus.Auth,
    };

    const result = userProcess.reducer(undefined, checkAuthAction.fulfilled(mockProUserData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "NO_AUTH" with "checkAuthAction.rejected"', () => {
    const expectedState = {
      userData: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcess.reducer(undefined, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AUTH", fill "UserData" with "loginAction.fulfilled"', () => {
    const mockProUserData = makeFakeProUserData();
    const expectedState = {
      userData: mockProUserData,
      authorizationStatus: AuthorizationStatus.Auth,
    };

    const result = userProcess.reducer(undefined, loginAction.fulfilled(mockProUserData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "NO_AUTH" with "loginAction.rejected"', () => {
    const expectedState = {
      userData: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcess.reducer(undefined, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "NO_AUTH", "userData" to "null" with "logoutAction.fulfilled"', () => {
    const expectedState = {
      userData: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcess.reducer(undefined, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
