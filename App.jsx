import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateAccount } from './src/CreateAccount';
import { SignIn } from './src/SignIn';
import { MainNavigation } from './src/navigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer> 
    <MainNavigation/>
    </NavigationContainer>
  );
}

export default StackNavigation;
