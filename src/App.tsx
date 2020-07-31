import 'react-native-gesture-handler';
import React from 'react';
import codePush from 'react-native-code-push';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

import AppProvider from './context';

const App: React.FC = () => (
  <NavigationContainer>
    <AppProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        translucent
      />
      <View
        style={{
          backgroundColor: '#312e38',
          flex: 1,
        }}
      >
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);
export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
