import React, { useEffect } from 'react';
import RoutesCollection from './routes/router';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { antTheme } from './theme/antTheme';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from './style/globalStyle';
import { customTheme } from './theme/customTheme';
import './language/i18n';
import DevDrawer from './features/test/devDrawer';
import { languageStore } from './store/language';
import { getStorage } from './store/storage/storage';

function App() {
  const { setLanguage } = languageStore(state => state.setLanguage);
  const storedLanguage = getStorage('lang');

  useEffect(() => {
    if (!storedLanguage) {
      setLanguage('sv');
    }
  }, []);

  const devEnv = import.meta.env.VITE_APP_ENVIRONMENT === 'development';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        cacheTime: 0,
      },
    },
    // queryCache: new QueryCache({
    //   onError: error => {
    //     console.log(error);
    //     errorHandler(error?.response);
    //   },
    // }),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider componentSize={'large'} theme={antTheme}>
        <ThemeProvider theme={customTheme}>
          <div className="App">
            <Toaster position="top-center" reverseOrder={false} />
            <GlobalStyle />
            <RoutesCollection />
          </div>
          {devEnv && <DevDrawer />}
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
