import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigtion } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigtion />
    </NavigationContainer>
  )
}

export default App
