// App.tsx
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SignupScreen from './src/screen/signup/SignupScreen';
import Home from './src/screen/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
