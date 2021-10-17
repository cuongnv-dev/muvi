import { axiosClient, setupAxios } from '@api';
import I18n from '@utils/i18next/i18n';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SplashScreen, toastConfig } from './src/components';
import useCachedResources from './src/hooks/useCachedResources';
import { AppNavigation } from './src/navigation/appNavigation';
import { persistor, store } from './src/store';

setupAxios(axiosClient, store);
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
              <I18nextProvider i18n={I18n}>
                <Suspense fallback={<SplashScreen />}>
                  {/* <AuthInit> */}
                  <StatusBar />
                  <AppNavigation />
                  <Toast
                    config={toastConfig}
                    ref={(ref) => Toast.setRef(ref)}
                  />
                  {/* </AuthInit> */}
                </Suspense>
              </I18nextProvider>
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </SafeAreaProvider>
    );
  }
}
