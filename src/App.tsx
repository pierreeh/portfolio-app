import { Suspense } from "react";
import { Provider } from "react-redux";

import Router from "./router";
import store from "./store/store";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <Router />
      </Provider>
    </Suspense>
  );
}
