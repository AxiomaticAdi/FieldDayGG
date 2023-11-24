import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Theme appearance="dark">
            <RouterProvider router={router} />
        </Theme>
    </React.StrictMode>,
);
