import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/root";
import { MainPage } from "./view/main/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
