import React from 'react';
import {  Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


export const GetStarted = ({ navigation }) => {
    const handleSignInScreen = () => {
      navigation.navigate('Welcome'); 
    };


  return (
    <ImageBackground
    source={require('../assets/Images/image3.jpeg')}
    style={styles.container}
  >
    
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
  </ImageBackground>
);
};

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        resizeMode:'cover',
      },
     
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF', 
        textAlign: 'center',
        marginTop:180,
        textAlign:'left',
        
      },
      subtitle: {
        fontSize: 16,
        color: '#FFFFFF', 
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop:10,
        textAlign:'left',
        
      },
      button: {
        backgroundColor: 'gold', 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderRadius: 5, 
        alignSelf: 'stretch',
        marginTop:'auto',
      },
      buttonText: {
        fontSize: 20,
        color: '#000000', 
        textAlign: 'center', 
        fontWeight:'bold',
      },
      backButton: {
        postion:'absolute' ,
        alignSelf: 'flex-start',
        marginTop: 20, 
       
      },
      backButtonText: {
        fontSize: 24, 
        color: '#FFFFFF', 
      },
});

