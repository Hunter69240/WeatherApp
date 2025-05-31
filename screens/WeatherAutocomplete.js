import React, { useState } from "react";
import { 
    View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet 
} from "react-native";

import { WEATHER_API_KEY } from "./secrets";
const API_KEY = WEATHER_API_KEY;



export default function WeatherAutocomplete({ onSelectCity }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (text) => {
    setQuery(text);
    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Autocomplete error:', error);
    }
  };

  const handleSelect = (city) => {
    setQuery('');
    setSuggestions([]);
    onSelectCity(city); // Pass to parent
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={handleSearch}
        placeholder="Search location..."
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
            <Text style={styles.text}>{item.name}, {item.country}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  input: {
    height: 40,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  item: {
    padding: 10,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  text: { color: 'white' },
});

