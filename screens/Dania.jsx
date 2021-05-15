import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Dania extends Component {
    state={
        Danie:"parówki"
    }
    zmienDanie = ()=>{
        if(this.state.Danie=='parówki'){
            this.setState({Danie:'kotlet'});
        
        }else{
            this.setState({Danie:'parówki'})
        }
        

    }
    render() {

        return (
            <View style={{ flex:1, alignItems:'center',}}>
                <TouchableOpacity  onPress={()=>this.zmienDanie()} style={{
                    width:200,
                    height:100,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'blue',
                    




                }}>
                    <Text style={{color:'white',fontSize:20}}> Danie </Text>
                </TouchableOpacity>
                <Text style={{fontSize:25}}>{this.state.Danie}</Text>
            </View>
        )
    }
}
