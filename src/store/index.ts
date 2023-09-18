import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { configuredApi } from '@config/createApi-common';

export const store = configureStore({
  reducer: {
    [configuredApi.reducerPath]: configuredApi.reducer,
  },
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare().concat([configuredApi.middleware]),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
