import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, SafeAreaView, ActivityIndicator, Dimensions } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import { HomeCard } from "./Components/HomeCard";
import { StatusBar } from "expo-status-bar";
import Fontisto from "react-native-vector-icons/Fontisto";
import MapView, { Marker } from "react-native-maps";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [initialSearchStatus, setInitialSearchStatus] = useState(false);
    const [searchedResult, setSearchedResult] = useState([]);
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mapRegion, setMapRegion] = useState(null);

    const fetchCountry = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCountry(response)

                let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;
                response.forEach(countryData => {
                    const lat = countryData.latlng[0];
                    const lng = countryData.latlng[1];
                    minLat = Math.min(minLat, lat);
                    maxLat = Math.max(maxLat, lat);
                    minLng = Math.min(minLng, lng);
                    maxLng = Math.max(maxLng, lng);
                });

                const latDelta = Math.abs(maxLat - minLat);
                const lngDelta = Math.abs(maxLng - minLng);
                const maxDelta = Math.max(latDelta, lngDelta);
                const dynamicDelta = maxDelta * 1.5;

                setMapRegion({
                    latitude: (minLat + maxLat) / 2,
                    longitude: (minLng + maxLng) / 2,
                    longitude: (minLng + maxLng) / 2,
                    latitudeDelta: dynamicDelta,
                    longitudeDelta: dynamicDelta,
                })
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    const fetchSearchResults = () => {
        setLoading(true)
        if (searchText.trim() === "") {
            setInitialSearchStatus(false);
            setLoading(false)
            return;
        }

        fetch(`https://restcountries.com/v3.1/name/${searchText}`)
            .then(response => response.json())
            .then(response => {
                setSearchedResult(response)
                setInitialSearchStatus(true)
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    };

    useEffect(() => {
        fetchSearchResults()
    }, [searchText])

    const handleSearchInputChange = (text) => {
        setSearchText(text);
        setInitialSearchStatus(false);
    };

    return (
        <SafeAreaView>
            <StatusBar style="light" />
            <View style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', paddingHorizontal: 25, paddingTop: 50, paddingBottom: 20, alignItems: 'flex-start', gap: 20, }}>
                <Text style={{ color: 'white', fontSize: 20, }}>Select or Search Country</Text>
                <TextInput
                    theme={{
                        colors: {
                            primary: "#FCD130",
                        },
                        roundness: 8,
                    }}
                    textColor="gray"
                    style={{ width: "100%", backgroundColor: "#303234", height: 40, borderRadius: 8, }}
                    height
                    underlineColor="#1F2123"
                    placeholder="Search"
                    placeholderTextColor={"#A2A4A5"}
                    right={<TextInput.Icon icon={"magnify"} color={"#A2A4A5"} onPress={() => setSearchText("")} />}
                    onChangeText={handleSearchInputChange}
                    value={searchText}
                />
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A2C32', }}>
                    <ActivityIndicator size="large" color="#FCD130" />
                </View>
            ) : (
                <View style={{ backgroundColor: '#2A2C32', width: '100%', height: 800, }}>
                    <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column', gap: 15, paddingHorizontal: 25, backgroundColor: '#2A2C32', paddingTop: 20, paddingBottom: 300, }}>
                        {!initialSearchStatus ? (
                            <View>
                                {country.map((countryData, index) => (
                                    <HomeCard
                                        key={index}
                                        countryImage={countryData}

                                    />
                                ))}
                            </View>
                        ) : (
                            <>
                                <View>
                                    {searchedResult.map((searchedCountry, index) => (
                                        <HomeCard key={index} countryImage={searchedCountry} />
                                    ))}
                                </View>
                                {searchedResult.length > 0 && (
                                    <MapView
                                        style={{ width: width, height: 800 }}
                                        initialRegion={{
                                            ...mapRegion,
                                            latitude: searchedResult[0].latlng[0],
                                            longitude: searchedResult[0].latlng[1],

                                        }}>
                                        <Marker
                                            coordinate={{
                                                latitude: searchedResult[0].latlng[0],
                                                longitude: searchedResult[0].latlng[1],
                                            }}
                                            title={searchedResult[0].name.common}
                                        />
                                    </MapView>
                                )}
                            </>
                        )}
                    </ScrollView>
                </View>
            )}
        </SafeAreaView>
    )
}