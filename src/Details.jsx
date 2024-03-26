import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import MapView from 'react-native-maps'; 

const Details = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <MapView
        style={{ height: 200 }}
        initialRegion={{
          latitude: -1.9579,
          longitude: 30.1127,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Kigali, Rwanda</Text>
        <Text style={{ fontSize: 18, marginBottom: 5 }}>Capital City: Kigali</Text>
        <Text style={{ fontSize: 18, marginBottom: 5 }}>Currency: Rwandan Franc (RWF)</Text>
        <Text style={{ fontSize: 18, marginBottom: 5 }}>Region: Central Africa</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
