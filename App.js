import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';

import sec from './secondScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <Tab.Screen name="sec" component={sec} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
