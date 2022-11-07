import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/Navigation";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </PaperProvider>
  );
}
