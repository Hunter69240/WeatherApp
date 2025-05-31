import React from "react";
import { 
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
 } from "react-native";

 
export default function CityDetails( {route,navigation}) {
    const {location}=route.params;
    const iconUrl = `https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`;

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Main")} activeOpacity={0.6} style={styles.backButton}>
                    <Text style={styles.arrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.location}>{location.name}</Text>
            </View>

            <View style={styles.weatherinfo}>
            <Text style={styles.weather}>{location.weather[0].main}</Text>
            <Image
            source={{ uri: iconUrl }}
            style={{ width: 80, height: 80 }}
            />
            </View>

            <Text style={styles.temp}>{location.main.temp}*</Text>

            <Text style={styles.desc}>{location.weather[0].description}</Text>

            <View style={styles.box1}>
                <Text style={styles.box1t}>{location.main.temp_max}</Text>
                <Text style={styles.box1t}>{location.main.temp_min}</Text>
            </View>

            <Text style={styles.text}>{location.clouds.all}</Text>

            <Text style={styles.prob}>Probability of rain {location.pop}</Text>

            <View style={styles.box2}>
                <Text style={styles.box2t}>Wind Speed {"\n"} {location.wind.speed}</Text>
                <Text style={styles.box2t}>Humidity {"\n"} {location.main.humidity}</Text>
            </View>
        </View>
        
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#242323',
        alignItems:'center',
        paddingTop:40,
        
    },
    backButton:{padding:5
    },
    arrow: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
    },
    header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        alignSelf:'flex-start'
    },  
    location:{
        paddingTop:25,
        paddingLeft:10,
        color:'white',
        fontSize:23
    },
    weather:{
        padding:35,
        color:'white',
        fontSize:40
    },
    temp:{
        color:'white',
        fontSize:40
    },
    desc:{
        color:'white',
        fontSize:30,
        padding:30
    },
    box1:{
        paddingTop:20,
        flexDirection:'row',
        gap:30,
        
    },
    box1t:{
        color:'white',
        fontSize:20
    },
    text:{
        padding:40,
        color:'white',
        fontSize:20
    },
    prob:{
        
        color:'white',
        fontSize:20
    },
    box2:{
        paddingTop:20,
        flexDirection:'row',
        gap:30,
        
    },
    box2t:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        gap:20,
        paddingTop:20,
        lineHeight:50
    },
    weatherinfo:{
        flexDirection:'row',
        alignItems:'center',
                
    }
})