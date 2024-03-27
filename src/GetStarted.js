import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Dimensions, View } from 'react-native';

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const GetStarted = ({ navigation }) => {

  const handleOnPressExplore = () => {
    navigation.navigate('Home');
  };
  const handleOnPressSignIn = () => {
    navigation.navigate('SignIn');
  };


  return (
    <SafeAreaView style={{ backgroundColor: '#26282C', height: height, width: width }}>
      <StatusBar style="light" />
      <ImageBackground source={require('../assets/Images/image3.jpeg')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 800,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'relative',
        }}
        resizeMode="cover"
      >
      </ImageBackground>

      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingHorizontal: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 230, }}>
        <View style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', gap: 15,}}>

          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'left', }}>
            Welcome to the CityFinderApp, your ultimate companion for urban exploration!
          </Text>

          <Text style={{ fontSize: 16, color: '#FFFFFF', textAlign: 'left', }}>
            Whether you're a local resident or a traveler eager to uncover the secrets of a new city, our app is designed to guide you through the wonders of urban landscapes with ease.
          </Text>

          <View style={{height: 200,}}></View>

          <TouchableOpacity style={{ backgroundColor: '#ED5667', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5, alignSelf: 'stretch', marginTop: 'auto', }} onPress={handleOnPressExplore}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', }}>
              Explore
            </Text>
          </TouchableOpacity>
            <Text style={{color: '#FC2469', textAlign: 'center',}} onPress={handleOnPressSignIn}>SignIn</Text>
        </View>
      </View>
    </SafeAreaView>
    /* */
  );
};


