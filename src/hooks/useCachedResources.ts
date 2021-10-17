import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
          'Nunito-LightItalic': require('../../assets/fonts/Nunito-LightItalic.ttf'),
          'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
          'Nunito-Italic': require('../../assets/fonts/Nunito-Italic.ttf'),
          'Nunito-SemiBold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
          'Nunito-SemiBoldItalic': require('../../assets/fonts/Nunito-SemiBoldItalic.ttf'),
          'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
          'Nunito-BoldItalic': require('../../assets/fonts/Nunito-BoldItalic.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
