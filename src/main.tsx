import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Toaster } from "@/components/ui/sonner";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            success: "!bg-green-100 !text-green-600 !border-green-100",
            error: "!bg-red-100 !text-red-600 !border-red-100",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
