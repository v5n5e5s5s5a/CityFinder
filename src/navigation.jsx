import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './Splash';
import { GetStarted } from './GetStarted';
import { SignIn } from './SignIn';
import { CreateAccount } from './CreateAccount';
import { Home } from './Home';
import { Search } from './Search';


const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return(

  <Stack.Navigator initialRouteName="Signup">
    <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
    <Stack.Screen name="GetStarted" component={GetStarted}  options={{headerShown: false}}/>
    <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
    <Stack.Screen name="SignUp" component={CreateAccount}  options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
    <Stack.Screen name="Search" component={Search}  options={{headerShown: false}}/>
    </Stack.Navigator>
 )
}

