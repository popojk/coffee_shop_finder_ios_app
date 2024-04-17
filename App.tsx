/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Main from './src/features/Main';
import Start from './src/features/Start';

function App(): React.JSX.Element {
  const [showStart, setShowStart] = useState(true)

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
    <Main />
    }
    </>
  );
}

export default App;
