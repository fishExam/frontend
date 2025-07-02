import { BrowserRouter } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/shared';

import './App.css';
import { AppRouter } from './routers/router';

function App() {
  return (
    <GoogleOAuthProvider clientId="1">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
