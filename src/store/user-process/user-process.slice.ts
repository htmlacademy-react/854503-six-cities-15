import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData, UserProcess } from '../../types';
import { checkAuthAction, loginAction, logoutAction } from './user-process.thunks';

const initialState: UserProcess = {
  userData: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
