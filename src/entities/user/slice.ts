import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type UserSliceState = {
  id: string;
  isFetched: boolean;
  nickname: string;
};

const initialState: UserSliceState = {
  id: "",
  isFetched: false,
  nickname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    //   builder.addCase(fetchUser.fulfilled, (_, action) => {
    //     return {
    //       ...action.payload,
    //       isFetched: true,
    //       permissions:
    //         action.payload?.role === 'admin'
    //           ? permissions
    //           : action.payload.permissions,
    //     }
    //   })
  },
});

export const selectUser = (state: RootState) => state[userSlice.name];

export const { clearUser } = userSlice.actions;
