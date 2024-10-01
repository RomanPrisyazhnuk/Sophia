import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../../entities/user/slice";

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
});
