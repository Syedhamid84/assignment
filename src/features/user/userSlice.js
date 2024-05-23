import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Initially set to null or an empty object, depending on your preference
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      console.log("state user", state.user);
      console.log("action is ", action.payload);
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
