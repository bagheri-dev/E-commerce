import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header";
import HomePage from "./pages/home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
