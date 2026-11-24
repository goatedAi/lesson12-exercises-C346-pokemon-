import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import Add from './Add.js';
import Edit from './Edit.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#E3350D' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Pokemon Cards' }} />
        <Stack.Screen name="Add" component={Add} options={{ title: 'Add Pokemon' }} />
        <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Pokemon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
