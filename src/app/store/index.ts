import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from "react-redux";

const appStore = configureStore({
  reducer: rootReducer,
});

// Dinamic types for appStore
export type RootState = ReturnType<typeof appStore.getState>;

//Dinamic types for dispatch
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default appStore;
