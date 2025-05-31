import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const API_KEY = '48a17fb724b071ab5ef9fb455f980c1c'; // Your API key

export default function Location({ location,navigation }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
    
        if (data.cod !== 200) {
          console.warn(`City not found: ${location}`);
          return; // Don’t try to render it
        }
    
        setWeather(data);
      } catch (e) {
        console.error(e);
      }
    };
    

    fetchWeather();
  }, [location]);

  if (!weather) return null;

  return (
    <Pressable style={styles.container}
    onPress={()=>navigation.navigate("CityDetails", {location:weather})}>
      <View style={styles.column}>
        <Text style={styles.text}>{weather.name}</Text>
        <Text style={styles.text}>{weather.weather[0].description}</Text>
      </View>
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginLeft: '25%',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#514D4D',
    width: 317,
    height: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temperature: {
    color: 'white',
    fontSize: 19,
    textAlign: 'right',
    marginRight: '7%',
  },
  column: {
    flexDirection: 'column',
    marginLeft: 40,
  },
});
