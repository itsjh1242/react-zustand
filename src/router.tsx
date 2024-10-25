import { createBrowserRouter } from "react-router-dom";
import { Counter, Modal, Root, Theme } from "./index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "theme",
        element: <Theme />,
      },
      {
        path: "modal",
        element: <Modal />,
      },
    ],
  },
]);

export default router;
