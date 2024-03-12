import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Pressable } from 'react-native';



export const Splash = ({ navigation }) => {

  const handleGetStarted = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#26282C', }}>
      <View style={{ height: '100%', }}>
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

      </View>

    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black', 
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   button: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   finderText: {
//     fontSize: 44,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });
