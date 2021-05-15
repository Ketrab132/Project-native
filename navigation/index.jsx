import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  HomeScreen  from '../screens/HomeScreens.jsx'
import  PostScreen  from '../screens/PostScreens.jsx'
import List from '../screens/List.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';
import Testy from '../screens/Testy.jsx';
import Dania from '../screens/Dania.jsx';
import Funkcyjne from'../screens/Funkcyjne.jsx';
import Zdjecia from '../screens/Zdjecia.jsx';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Testy" component={Testy} />
        <Stack.Screen name="Dania" component={Dania} />
        <Stack.Screen name="Funkcyjne" component={Funkcyjne} />
        <Stack.Screen name="Zdjecia" component={Zdjecia} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;



























