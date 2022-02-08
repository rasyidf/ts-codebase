import { QueryClient, QueryClientProvider } from 'react-query';
import { MantineProvider as ThemeProvider } from '@mantine/core';
import { Outlet } from '@tanstack/react-location';
import RouteProvider from '@/components/contexts/router-context';
import '@/styles/index.scss';
import theme from '@/styles/vendor/mantine.config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ThemeProvider
    theme={theme}
    withNormalizeCSS
    withGlobalStyles
    emotionOptions={{
      key: 'biru', prepend: false,
    }}
  >

    <QueryClientProvider client={queryClient}>
      <RouteProvider>
        <Outlet />
      </RouteProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
