import React from "react";
import { Suspense } from "react";
const Lazy = React.lazy(() => import("./LazyLoading"));

function App() {
  return (
    <div className="app">
      <h1>Lazy Loading in React</h1>
      <Suspense fallback={<div>Loading data...</div>}>
        <Lazy />
      </Suspense>
    </div>
  );
}

export default App;
