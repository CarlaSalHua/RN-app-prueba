import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUser} from 'src/types';

const initialState: IUser = {
  displayName: null,
  email: null,
  photoURL: null,
  uid: '',
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<IUser>) => {
      return {
        ...state,
        ...actions.payload,
      };
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const {setUser, resetUser} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
