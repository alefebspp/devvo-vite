import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    </QueryClientProvider>
  );
}

export default App;
