import React, { useRef, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 38.4237,
    longitude: 27.1428,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const zoomInToLocation = () => {
    mapRef.current.animateToRegion(
      {
        latitude: 38.4237,
        longitude: 27.1428,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      1000
    );
  };

  const getirBranches = [
    { latitude: 38.4254, longitude: 27.1352 },
    { latitude: 38.4237, longitude: 27.1428 },
    { latitude: 38.4245, longitude: 27.1376 },
    { latitude: 38.4263, longitude: 27.1367 },
    { latitude: 38.4221, longitude: 27.1443 },
    { latitude: 38.4258, longitude: 27.1398 },
    { latitude: 38.4215, longitude: 27.1479 },
    { latitude: 38.4276, longitude: 27.1341 },
    { latitude: 38.4209, longitude: 27.1495 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
      >
        {getirBranches.map((branch, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: branch.latitude,
              longitude: branch.longitude,
            }}
            pinColor='purple'
          />
        ))}
      </MapView>
      <Button title='Adrese Yakınlaştır' onPress={zoomInToLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
