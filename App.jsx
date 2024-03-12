import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './src/Splash';
import { GetStarted } from './src/GetStarted';
import { SignIn } from './src/SignIn';
import { MainNavigation } from './src/navigation';

const Stack = createNativeStackNavigator();

export default function App (){
  return(
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
  // <View>
  //   <Text>asdfghjk</Text>
  // </View>
  // <SignIn/>
  );
}

