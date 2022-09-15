import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "../pages/counter/reducer";
// import rootReducer from "./reducers";

export const store = configureStore({
  reducer: { counterReducer },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: myCustomApiService
  //     }
  //   })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch