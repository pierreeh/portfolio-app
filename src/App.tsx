import { Suspense } from "react";

import Router from "./router";

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router />
    </Suspense>
  );
}
