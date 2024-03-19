import React, { useContext } from 'react';
import { View, Text, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChangeIntoDarkModa } from '../src/Theme/ThemeContext';
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'expo-status-bar';
import { firebaseAuth } from "../FirebaseConfig";

export const Profile = ({navigation}) => {
  const { dark, changeIntoDark } = useContext(ChangeIntoDarkModa);

  
  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: dark ? 'black' : 'white' }}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <FlashMessage position="top" />
      <Button title="Change into Dark" onPress={changeIntoDark} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50, borderWidth: 3, borderColor: '#fff' }}
          source={{ uri: 'https://i.pinimg.com/736x/1a/4d/30/1a4d30664eff4bcacdaab4f906b57210.jpg' }}
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, color: dark ? 'white' : 'black' }}>Becca Wilson</Text>
        <Text style={{ fontSize: 18, color: dark ? 'grey' : 'black' }}>becca@example.com</Text>
        <View style={{ width: '90%', marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Icon name="envelope" size={20} color="gray" />
          <Text style={{ marginLeft: 10, fontSize: 16, color:'gray'}}>becca@example.com</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Icon name="birthday-cake" size={20} color={'gray'}/>
          <Text style={{ marginLeft: 10, fontSize: 16,  color:'gray' }}>January 1, 1990</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Icon name="transgender" size={20} color="gray" />
          <Text style={{ marginLeft: 10, fontSize: 16,  color:'gray' }}>Female</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Icon name="phone" size={20} color="gray" />
          <Text style={{ marginLeft: 10, fontSize: 16,  color:'gray' }}>+1234567890</Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#EAEAEA', padding: 10, borderRadius: 5 }} onPress={handleLogout}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Out</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
