import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const arrayUz = [
  {
    imie:"Maro",
    wiek: 12

  },
  {
    imie:"Czaro",
    wiek: 30

  },
]
export default class PostScreen extends React.Component {

  state={
    liczba:1,
    tloZmiana:'',
    aktualneTlo:'white',

    array:["Mleko", "Mieso", "kur"]
  }

  dodawanie () {
    let nowaLiczba = this.state.liczba +1
    this.setState({liczba:nowaLiczba})
  }
  odejmowanie () {
    let nowaLiczba = this.state.liczba -1
    this.setState({liczba:nowaLiczba})
  }

  zmianaTla() {
    const noweTlo = this.state.tloZmiana
    this.setState({aktualneTlo:noweTlo})
  }

  render() {
    return (
      <View style={{ backgroundColor:this.state.aktualneTlo, flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>ery noice</Text>
        <StatusBar style="auto" />

        <TouchableOpacity 
        onPress={  ()=>this.dodawanie()}
        style={{backgroundColor:'blue', width:60, height: 60, borderRadius: 150, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'white'}}>up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>this.odejmowanie()}
        style={{backgroundColor:'red', width:60, height: 60, borderRadius: 150, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'white'}}>down</Text>
        </TouchableOpacity>
        

          <Text style={
            (this.state.liczba % 2 ==0)?
            {
            fontSize:'40', fontWeight:'bold', color:'red'
            }
            :
            {
              fontSize:'40', fontWeight:'bold', color:'blue'
            }
        }>
            {this.state.liczba}
          
          </Text>
          
          <TextInput 
          onChangeText={input => this.setState({tloZmiana:input})}
          style={{width:350, height:50, borderRadius:10, backgroundColor: 'rgba(0,0,0,0.1)'  }}
          />
          <TouchableOpacity style={{width:screenWidth*.3,height:60, backgroundColor: 'green', borderRadius:25, justifyContent:'center', alignItems:'center'}}
            onPress={()=>this.zmianaTla()}> 
            <Text style={{color:'white'}}>Zmien tlo</Text>
          </TouchableOpacity>



          <View>
            <Text>{this.state.array[0]}</Text>
            <Text>{ arrayUz[0].imie +arrayUz[0].wiek} </Text>
          </View>





      </View>
    );

}
}
