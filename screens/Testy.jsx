import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { pozyskajDane } from '../actions/dane'
export default class Testy extends Component {
    render() {
        return (
            <View style={{
                    flex:1, 
                    justifyContent:'center', 
                    alignItems:'center'}}>
                <TouchableOpacity style={{
                    padding:27,
                    backgroundColor:'blue',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:25}}
                    onPress={()=>pozyskajDane()}
                    >
                    <Text style={{color:'white',fontSize:13}}>Zapytaj o dane</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


