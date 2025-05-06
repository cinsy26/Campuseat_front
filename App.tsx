// App.tsx
import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainNavBar from './src/components/share/MainNavBar';

import SignupScreen from './src/screen/SignupScreen';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import ReservationHome from './src/screen/ReservationHome';
import Reservation from './src/screen/Reservation';
import CreateQr from './src/screen/adminScreen/CreateQr';
import CreateSeat from './src/screen/adminScreen/CreateSeat';

const Stack = createNativeStackNavigator();

function AppNavigator(): React.JSX.Element {
  const [currentRouteName, setCurrentRouteName] = React.useState<
    string | undefined
  >();

  return (
    <NavigationContainer
      onStateChange={state => {
        const route = state?.routes[state.index];
        setCurrentRouteName(route.name);
      }}>
      <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="CreateSeat">
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ReservationHome" component={ReservationHome} />
          <Stack.Screen name="Reservation" component={Reservation} />
          <Stack.Screen name="CreateQr" component={CreateQr} />
          <Stack.Screen name="CreateSeat" component={CreateSeat} />
        </Stack.Navigator>

        {/* 로그인/회원가입 화면이 아닐 때만 하단바 렌더링 */}
        {!['Login', 'Signup'].includes(currentRouteName || '') && (
          <MainNavBar />
        )}
      </View>
    </NavigationContainer>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
