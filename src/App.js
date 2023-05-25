import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackScreen from "./Components/FallbackScreen/FallbackScreen";
import app from './app.module.css'
const LazyDashboard = React.lazy(() =>
  import("./Features/Dashboard/Dashboard")
);
const LazySignIn = React.lazy(() =>
  import("./Features/SignInScreen/SignInScreen")
);
const LazySecureRouting = React.lazy(() =>
  import("./Components/SecureRouting/SecureRouting")
);

const App = () => {
  return (
    <div className={app.container}>
      <ErrorBoundary FallbackComponent={FallbackScreen}>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <LazySignIn />
              </React.Suspense>
            }
          />
          {/* ----Protect Routing---   */}
          <Route
            element={
              <React.Suspense fallback="Loading...">
                <LazySecureRouting />
              </React.Suspense>
            }
          >
            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyDashboard />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
