import React from "react";
import { View, Text, TouchableOpacity, Pressable, Dimensions, Image } from "react-native";

export const HomeCard = ({countryImage}) => {
    return (
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', width: '100%', height: 60, alignItems: 'center', gap: 15,}}>
            <Image source={{ uri: countryImage.flags.png }} style={{ width: 100, height: 50, }}/>
            <View style={{display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', width: '50%',}}>
                <Text style={{fontSize: 12, fontWeight: '400', color: '#D8D8DD',}}>Country: <Text style={{fontSize: 12, fontWeight: '300',}}>{countryImage.name.common}</Text></Text>
                <Text style={{fontSize: 12, fontWeight: '400', color: '#D8D8DD',}}>Capital City: <Text style={{fontSize: 12, fontWeight: '300',}}>{countryImage.capital}</Text></Text>
                <Text style={{fontSize: 12, fontWeight: '400', color: '#D8D8DD',}}>Population: <Text style={{fontSize: 12, fontWeight: '300',}}>{countryImage.population}</Text></Text>
            </View>
        </TouchableOpacity>
    )
}