import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Dimensions, SafeAreaView, Image, ScrollView, } from "react-native";
import { HomeCard } from "./Components/HomeCard";
import { StatusBar } from "expo-status-bar";
import Fontisto from "react-native-vector-icons/Fontisto";

export const Home = () => {

    const [country, setCountry] = useState([]);

    // const requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };

    const fetchCountry = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCountry(response)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    useEffect(() => {
        console.log('These are the countries', country[0]);
    }, [country]);

    return (
        <SafeAreaView style={{ backgroundColor: '#2A2C32',}}>
            <StatusBar style="light"/>
            <View style={{backgroundColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingTop: 50, paddingBottom: 20, alignItems: 'center',}}>
                <Text style={{color: 'white', fontSize: 30,}}>FindMyCity</Text>
                <Fontisto name="bell" style={{ color: 'gray', fontSize: 30 }} />
            </View>

            <ScrollView contentContainerStyle={{display: 'flex', flexDirection: 'column', gap: 15, paddingHorizontal: 25, backgroundColor: '#2A2C32', paddingTop: 20,}}>
                
            {country.map((countryData, index) => (
                <HomeCard
                    key={index}
                    countryImage={countryData}

                />
            ))}
          
            </ScrollView>
        </SafeAreaView>
    )
}