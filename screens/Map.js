import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function Map(props) {
    const [marker, setMarker] = useState(null);

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate;
        setMarker(coords);
    }

    //         useEffect(() => {
    //             (async () => {
    //             getUserPosition();
    //             })();
    //         }, []); 

    return (
        <MapView
            style={styles.map}
            region={props.location}
            mapType={props.mapType}
            onLongPress={showMarker}
        >
            {marker &&
                <Marker
                    title='My Marker'
                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                />
            }
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },
});


