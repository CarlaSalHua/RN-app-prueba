import { IUser } from "@customTypes/index";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  displayName: null,
  email: null,
  photoURL: null,
  uid: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<IUser>) => {
      return {
        ...state,
        ...actions.payload
      };
    },
    resetUser:(state)=>{
      return initialState
    }
  },
});

export const { setUser, resetUser } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
