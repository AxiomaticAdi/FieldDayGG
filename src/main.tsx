import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    </React.StrictMode>,
);
