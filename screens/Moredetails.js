import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import WeatherAutocomplete from './WeatherAutocomplete';

export default function Moredetails({ navigation, addlocation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")} activeOpacity={0.6} style={styles.backButton}>
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>

        <View style={styles.autocompleteWrapper}>
          <WeatherAutocomplete
            onSelectCity={(city) => {
              const name = city.name;
              addlocation(name);
              navigation.navigate("Main");
            }}
          />
        </View>
      </View>

      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242323",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row", 
    alignItems: "center",
  },
  backButton: {
    padding: 10, 
  },
  arrow: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    opacity: 0.4,
    marginTop: 10,
  },
  autocompleteWrapper: {
    flex: 1,
    marginLeft: 5,
  },
});
