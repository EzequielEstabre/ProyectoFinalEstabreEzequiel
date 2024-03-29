import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import AddButon from "../Components/AddButon";
import { usePostUserLocationMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../Features/User/userSlice";
import MapPreview from "../Components/MapPreview";
import { google_maps_api_key } from "../Database/database";
import colors from "../Global/Colors";

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [error, setError] = useState("");

    const [address, setAddress] = useState("");

    const [triggerPostUserLocation, resultPostUserLocation] = usePostUserLocationMutation()
    const {localId} = useSelector(state => state.userReducer.value)
    const dispatch = useDispatch()


    const onConfirmAddress = () => {

        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address
        }

        dispatch(setUserLocation(
            locationFormatted
        ))

        triggerPostUserLocation({
            location: locationFormatted,
            localId
        })

        navigation.goBack()
    }
    
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setError("Permission to access location was denied");
                    return;
                }
    
                let location = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
                
            } catch (error) {
                setError(error.message)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${google_maps_api_key}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [location]);

    return (
        <View style={styles.container}>
            <Text
                style = {styles.text}
            >Mi Ubicacion</Text>
            {}
            {location ? (
                <>
                    <Text 
                        style = {styles.text}
                    >Lat: {location.latitude}, long: {location.longitude}.
                    </Text>
                    <MapPreview location={location} />
                    <Text style={styles.address}>
                        Formatted address: {address}
                    </Text>
                    <AddButon
                        onPress={onConfirmAddress}
                        title="Confirmar Ubicacion"
                    />
                </>
            ) : (
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>{error}</Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        paddingTop: 20,
        fontSize: 18
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.cyanBeltive,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        padding: 10,
        fontSize: 16,
    },
});
