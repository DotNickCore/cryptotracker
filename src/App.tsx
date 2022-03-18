import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Coins from "./components/Coins"

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Coins />
          <ReactQueryDevtools />
      </QueryClientProvider>
  );
}

export default App;
