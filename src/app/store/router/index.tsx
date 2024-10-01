import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Main from "../../../pages/Main";
import ROUTES from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary
        fallback={<div className="boundary">Something were wrong</div>}
      >
        <Main />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: <Navigate to={`${ROUTES.MAIN}`} />,
  },
]);
