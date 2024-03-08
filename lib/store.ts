import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

export const makeStore = (): any => {
  const Store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  // use the same saga middleware that you have enhanced your store with
  sagaMiddleware.run(mySaga);
  return Store;
};

// render the application
export type AppStore = ReturnType<typeof makeStore>;
