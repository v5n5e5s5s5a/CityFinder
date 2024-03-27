import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, View, Text, Image, ImageBackground } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const Details = ({ navigation, route }) => {


    const height = Dimensions.get("screen");
    const width = Dimensions.get("screen");

    const { countryData } = route.params
    console.log('these are from details:', countryData)

    const firstCurrencyKey = Object.keys(countryData.currencies)[0];
    const firstCurrency = countryData.currencies[firstCurrencyKey];

    const [mapRegion, setMapRegion] = useState(null);
    useEffect(() => {
        const { latlng } = countryData;
        if (latlng && latlng.length === 2) {
            setMapRegion({
                latitude: latlng[0],
                longitude: latlng[1],
                latitudeDelta: 20,
                longitudeDelta: 20,
            });
        }
    }, [countryData]);

    return (

        <SafeAreaView style={{ height: height, width: width, backgroundColor: '#2A2C32', }}>
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
            <View style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingTop: 50, paddingBottom: 10, alignItems: 'center', }}>
                <Text style={{ color: 'white', fontSize: 30, }}>{countryData.name.common}</Text>
                <Image source={{ uri: countryData.flags.png }} style={{ height: 20, width: 100, resizeMode: 'contain', }} />
            </View>
            <View style={{ height: 50, }}></View>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', }}>
                <MapView
                    style={{ width: width, height: 300 }}
                    initialRegion={mapRegion}
                >
                    {mapRegion && (
                        <Marker
                            coordinate={{
                                latitude: mapRegion.latitude,
                                longitude: mapRegion.longitude,
                            }}
                            title={countryData.name.common}
                        />
                    )}
                </MapView>

                <View style={{ height: 50, }}></View>
                <View style={{ paddingHorizontal: 20, }}>
                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'left', paddingHorizontal: 60, }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Country:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{countryData.name.common}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Capital City:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{countryData.capital}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Population:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{countryData.population}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Car Side:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{countryData.car.side}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Plate Sign:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{countryData.car.signs[0]}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Continent:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{countryData.continents[0]}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Currency:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{firstCurrency.name}</Text>
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D8D8DD', textAlign: 'left', }}>Currency Symbol:
                            <Text style={{ fontSize: 15, fontWeight: '300', paddingLeft: 10, }}>{firstCurrency.symbol}</Text>
                        </Text>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}