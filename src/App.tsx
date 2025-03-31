import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/next";

import AppRoutes from "./routes";
import { AlertContextProvider } from "./context/alert-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        <AppRoutes />
      </AlertContextProvider>
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
