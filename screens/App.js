import '../gesture-handler';
import 'react-native-gesture-handler';
import { useState } from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Main from './Main';
import Moredetails from './Moredetails'; 
import CityDetails from './CityDetails';
const Stack=createStackNavigator()
export default function App() {
  
  const [Locationsset,SetLocationsset]=useState([])
  
  const addlocation =(loc)=>{
    SetLocationsset(prevlocations=>[...prevlocations,loc])  //prevlocations temp variable to hold the variable want to add
  }
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
            name='Main'
            options={{headerShown:false}}
            >
              {(props) => <Main {...props} Locationsset={Locationsset} />}
            </Stack.Screen>
            <Stack.Screen
            name='Moredetails'
            options={{headerShown:false}}
            >
              {(props) => <Moredetails {...props} addlocation={addlocation} />}
            </Stack.Screen>

            <Stack.Screen
            name='CityDetails'
            component={CityDetails}
            options={{headerShown:false}}
            >
             
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
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
    color:'white',
    fontSize:40,
    textAlign:'center',
    padding:10
  },
  signbox:{
    width:76,
    height:76,
    backgroundColor:'#767474',
    borderRadius:'50%',
    position:'absolute',
    top:'90%',
    left:'42%'
    
  }
});
