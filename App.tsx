/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/features/Main';
import Start from './src/features/Start';
import ShopPage from './src/features/ShopPage';

export type RootStackParamList = {
  Main: undefined
  ShopPage: undefined
}

function App(): React.JSX.Element {
  const [showStart, setShowStart] = useState(true)
  const Stack = createNativeStackNavigator<RootStackParamList>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStart(false);
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    {
    showStart ?
    <Start />
    :
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName='Main'
        // screenOptions={{
        //   headerBackTitle: "",
        //   headerShown: true
        // }}
      >
        <Stack.Screen component={Main} name='Main' options={{ headerShown: false }} />
        <Stack.Screen 
          component={ShopPage} 
          name='ShopPage' 
          options={{ 
            headerShown: true,
            headerTitle: 'ShopPage'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    }
    </>
  );
}

export default App;
