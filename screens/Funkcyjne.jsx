import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default function Funkcyjne() {
    const[danie='jajecznica',setDanie]=React.useState()
    const zmienDanie =()=>{
        if(danie=='jajecznica'){
            setDanie('parówki')
        }else{
            setDanie('jajecznica')
        }
    }

    return (
        <View style={{ flex:1, alignItems:'center',}}>
                <TouchableOpacity  onPress={()=>zmienDanie()} style={{
                    width:200,
                    height:100,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'blue',
                    




                }}>
                    <Text style={{color:'white',fontSize:20}}> zmień Danie </Text>
                </TouchableOpacity>
                <Text style={{fontSize:25}}>{danie}</Text>
            </View>
    )
}
