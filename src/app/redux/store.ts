import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { swapApi } from "@/05.features";
import { assetsApi } from "@/06.entities";

const combines = combineReducers({
  [assetsApi.reducerPath]: assetsApi.reducer,
  [swapApi.reducerPath]: swapApi.reducer,
});

const rootReducer = (
  state: ReturnType<typeof combines> | undefined,
  action: { type: string },
) => {
  if (action.type === "user/logout") {
    state = undefined;
  }
  return combines(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(assetsApi.middleware, swapApi.middleware),
});

setupListeners(store.dispatch);

export default store;
