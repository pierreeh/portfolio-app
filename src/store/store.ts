import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { baseApi } from "@/api";

const store = configureStore({
  reducer: combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
