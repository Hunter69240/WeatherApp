import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Location from './Location'

export default function Main({navigation,Locationsset}) {
  return (
    <ScrollView contentContainerStyle={styles.scrolling}>
    <View style={styles.container}>
      <Text style={styles.name}>Weather</Text>
      <Text style={styles.more}>Click to view more</Text>

      <TouchableOpacity style={styles.signbox} onPress={()=>navigation.navigate('Moredetails')}>
        <Text style={styles.sign}>+</Text>
      </TouchableOpacity>

      {Locationsset.map((location,index)=>(
        <Location key={index} location={location} navigation={navigation}/>
      ))}
      
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
  name:{
    fontSize:30,
    color:'white',
    textAlign:'center',
    marginTop:40
  },
  more:{
    fontSize:30,
    color:'white',
    textAlign:'center',
    marginRight:120,
    marginTop:30
  },
  sign:{
    color:'black',
    fontSize:40,
    textAlign:'center',
    padding:10
  },
  signbox:{
    width:76,
    height:76,
    backgroundColor:'white',
    borderRadius:'50%',
    position:'absolute',
    top:'90%',
    left:'42%'
  },
  scrolling:{
    flexGrow:1
  }
});