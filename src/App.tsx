import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from '@tanstack/react-location';
import RouteProvider from '@/components/contexts/router-context';
import theme from '@/styles/vendor/mui.config';
import './styles/App.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouteProvider>
          <Outlet />
        </RouteProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
