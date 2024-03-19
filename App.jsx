import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateAccount } from './src/CreateAccount';
import { SignIn } from './src/SignIn';
import { ThemeProviderIntoDarkModa } from '../CityFinder/src/Theme/ThemeContext';
import { MainNavigation } from './src/navigation';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <ThemeProviderIntoDarkModa>
    <NavigationContainer> 
    <MainNavigation/>
    </NavigationContainer>
    </ThemeProviderIntoDarkModa>
  );
}

export default StackNavigation;
