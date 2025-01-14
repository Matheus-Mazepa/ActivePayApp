import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Home} from './src/screens/Home'

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ActivePay">
        <Stack.Screen name="ActivePay" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;