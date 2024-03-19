import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { Splash } from './Splash';
import { GetStarted } from './GetStarted';
import { SignIn } from './SignIn';
import { CreateAccount } from './CreateAccount';
import { Home } from './Home';
import { Search } from './Search';
import { Profile } from './Profile';


const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return(

  <Stack.Navigator initialRouteName="Signup">
    <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
    <Stack.Screen name="GetStarted" component={GetStarted}  options={{headerShown: false}}/>
    <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
    <Stack.Screen name="SignUp" component={CreateAccount}  options={{headerShown: false}}/>
    
    {/* <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
     */}
    <Stack.Screen name="Search" component={TabNavigator}  options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={TabNavigator}  options={{headerShown: false}}/>
    <Stack.Screen name="Profile" component={TabNavigator} options={{ headerShown: false }} />
  
    
    </Stack.Navigator>
 )
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home1') {
            iconName = 'home';
          } else if (route.name === 'Search1') {
            iconName = 'search';
          } else if (route.name === 'Profile1') {
            iconName = 'user';
          }

          
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D9BE52',
        tabBarInactiveTintColor: '#CACCCE',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FC2469',
        },
       headerShown: false,
      })}
  >
    <Tab.Screen name="Home1" component={Home}  options={{tabBarShowLabel:false}}/>
    <Tab.Screen name="Search1" component={Search}  options={{tabBarShowLabel:false}} />
    <Tab.Screen name="Profile1" component={Profile}  options={{tabBarShowLabel:false}} />
  </Tab.Navigator>
  );
}

export default TabNavigator;