import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import AlertProvider from './components/Alert';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768f',
  
  $white: '#fff',
  $border: '#e2e2e2',
  $textInput: '#797979',
  $whitegray: '#797979',
  $darkText: '#343434',
});

export default () => (
  <Provider store = {store}> 
  <AlertProvider> 
  <Navigator  onNavigationStateChange = {null}/> 
  </AlertProvider>
  </Provider>
);