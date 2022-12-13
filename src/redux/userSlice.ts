import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
  user: any;
  isLoggedIn: boolean;
  isSubscribed: boolean;
}

const initialState: UserSlice = {
  user: null,
  isLoggedIn: false,
  isSubscribed: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isSubscribed = true;
      state.isLoggedIn = true;
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUser, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
