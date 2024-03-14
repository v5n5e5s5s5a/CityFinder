import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Pressable, Dimensions } from 'react-native';

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Splash = ({ navigation }) => {

  const handleGetStarted = () => {
    navigation.navigate('GetStarted');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <SafeAreaView style={{ backgroundColor: '#26282C', height:height,  width: width,}}>
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

          {/*  */}
        </ImageBackground>
        {/* <LinearGradient
                colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']}> */}
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingHorizontal: 20, width: '100%', height: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
          <View style={{ width: '100%', height: '39%', }}></View>


          <View style={{ width: '100%', height: '30%', }}></View>

        </View>
        {/* </LinearGradient> */}

    </SafeAreaView>
  );
};
