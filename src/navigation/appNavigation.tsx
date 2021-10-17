import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { hideLoading, ProgressDialog, showLoading } from '../components';
import { useAppSelector } from '../store';
import { RootNavigation } from './root-navigator';

const navigationRef = createNavigationContainerRef();

export const AppNavigation = (props: any) => {
  const { showDialog, dialogMessage } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (showDialog) {
      showLoading(dialogMessage);
    } else {
      hideLoading();
    }
  }, [showDialog]);

  return (
    <NavigationContainer {...props} ref={navigationRef}>
      <>
        <RootNavigation />
        <ProgressDialog />
      </>
    </NavigationContainer>
  );
};
