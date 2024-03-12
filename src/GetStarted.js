import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Dimensions, View } from 'react-native';

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const GetStarted = ({ navigation }) => {

  const handleSignInScreen = () => {
    navigation.navigate('Welcome');
  };


  return (
    <SafeAreaView style={{ backgroundColor: '#26282C', height: height, width: width, }}>
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

      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingHorizontal: 20, width: '100%', height: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Welcome to the CityFinderApp, your ultimate companion for urban exploration! </Text>
        <Text style={styles.subtitle}>
          Whether you're a local resident or a traveler eager to uncover the secrets of a new city, our app is designed to guide you through the wonders of urban landscapes with ease.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignInScreen}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
    /* */
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    resizeMode: 'cover',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 180,
    textAlign: 'left',

  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    textAlign: 'left',

  },
  button: {
    backgroundColor: 'gold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginTop: 'auto',
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButton: {
    postion: 'absolute',
    alignSelf: 'flex-start',
    marginTop: 20,

  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

