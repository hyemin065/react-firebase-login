import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    displayName: '',
    localId: '',
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.localId = action.payload.localId;
      console.log(action.payload.email, action.payload.displayName, action.payload.localId);
    },
    logout: (state) => {
      state.user = null;
      console.log(state.user);
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
