import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './Splash';
import { GetStarted } from './GetStarted';
import { SignIn } from './SignIn';
const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return(

  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
    <Stack.Screen name="GetStarted" component={GetStarted}  options={{headerShown: false}}/>
    <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
    </Stack.Navigator>
 )
}

