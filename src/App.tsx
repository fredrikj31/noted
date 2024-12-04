import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { HomePage } from "./pages/Home";
import { EditorPage } from "./pages/Editor";

const rootRoute = createRootRoute({
  component: () => (
    <main className="min-h-screen w-full">
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const editorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/editor",
  component: () => <EditorPage />,
});

const routeTree = rootRoute.addChildren([homeRoute, editorRoute]);

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
