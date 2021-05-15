import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, Image, TouchableOpacity, } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import { getUsers, addUserToDB } from '../actions/dane'


const {width, height} = Dimensions.get("window")

export default class List extends Component {

  componentDidMount = async () => {
     
    const users = await getUsers()
    

    this.setState({arrayUz:users})
    
}
  state={
    addUser: false,
    image:undefined,
     arrayUz:[]
    //   {
    //     imie:"Squidward",
    //     wiek: 12,
    //     profilePic:"https://i.pinimg.com/originals/fa/19/16/fa19164c4566f42fb989a00f6141e7d8.jpg"
    
    //   },
    //   {
    //     imie:"Waltar",
    //     wiek: 30,
    //     profilePic:"https://i.insider.com/5dade9bc045a3139e8686c33?width=1136&format=jpeg"
    
    
    //   },
    //   {
    //       imie:"Obi Kenobi",
    //       wiek: 0,
    //       profilePic:"https://i.pinimg.com/originals/8c/3d/f6/8c3df61daf48b8cec16c0d549f668b0d.jpg"
    
      
    //     },
    //     {
    //       imie:"Jeremy",
    //       wiek: 40,
    //       profilePic:"https://i.imgur.com/WHoRbLe.jpg"
    
      
    //     },
    //     {
    //       imie:"Jeremy 420",
    //       wiek: 40,
    //       profilePic:"https://i.imgur.com/hKdqOQ2.jpg"
    
      
    //     },
    //     {
    //       imie:"Me when",
    //       wiek: 398560,
    //       profilePic:"https://i.ytimg.com/vi/6nkxWQKH4L8/maxresdefault.jpg"
    
      
    //     },
    // ]

  }
  
  otworzBiblioteke = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }else{
          this.pickImage()
        }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

      console.log(result);

      if (!result.cancelled) {
        this.setState({image: result.uri});
      }
    };
  
    dodajNowegoUz = () => {
      let array = {
        imie:this.state.noweImie,
        wiek:parseInt(this.state.nowyWiek),
        profilePic:this.state.image,

      }
      let nowyArray = this.state.arrayUz.concat(array)
      this.setState({arrayUz:nowyArray})
      this.setState({addUser:false})

      addUserToDB(array)
    }


    usunUz = (uzytkownikDousuniecia) => {
      let newArray = []
      this.state.arrayUz.forEach(element =>{
        newArray.push(element)
      });
      newArray.splice(uzytkownikDousuniecia,1)
      this.setState({arrayUz:newArray})

    }








      render() {
        if(this.state.addUser == false){
          return (
            <View style={{flex:1, alignItems:'center'}}>
              <ScrollView>
                  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      
                      {
                          this.state.arrayUz?.map((_,i) => {
                              return(
                                  <TouchableOpacity style={{
                                      height:80,
                                      borderRadius:20,
                                      backgroundColor:'white',
                                      justifyContent:'center',
                                      alignItems:'center',
                                      width:width*.8,
                                      margin:10,
                                      
                                      shadowColor: "#000",
                                      shadowOffset: {
                                        width: 0,
                                        height: 7,
                                      },
                                      shadowOpacity: 0.41,
                                      shadowRadius: 9.11,

                                          elevation: 6,
                                  }}
                                  onPress={()=> this.props.navigation.navigate("ProfileScreen",this.state.arrayUz[i])}
                                  onLongPress={()=>this.usunUz(i)}
                                  >
                                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Image source={{uri: this.state.arrayUz[i].profilePic}} 
                                        style={{
                                            width:50,
                                            height:50,
                                            marginHorizontal:10,
                                            borderRadius:25,
                                            
                                        }}
                                        />
                                          <Text style={{color:'#1b75bc',fontSize:18,fontWeight:'bold',margin:10, flex:1}}>{this.state.arrayUz[i].imie}</Text>
                                          
                                          <Text style={{color:'#1b75bc',fontSize:18,fontWeight:'bold',margin:10}}>age: {this.state.arrayUz[i].wiek}</Text>
                                      </View>
                                  </TouchableOpacity>
                              )

                          })
                      }
                  </View>

              </ScrollView>
              <TouchableOpacity style={{
                position:'absolute', 
                bottom:25, zIndex: 100, 
                width: width*0.7, height:60, 
                backgroundColor:'blue', 
                justifyContent:'center', 
                alignItems:'center', 
                borderRadius: 20,
                }} 
                onPress={()=>this.setState({addUser:true})}
                
                
                
                >
                <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>Add user</Text>
              </TouchableOpacity>
            </View>
          )
        }
        else{
          return(
            <View style={{flex:1, alignItems:'center'}}>
              {
                (this.state.image == undefined) ?
                <TouchableOpacity style={{
                    width:150,
                    height:150,
                    borderRadius:75,
                    backgroundColor:'rgba(0,20,200,0.5)'}}
                onPress={()=>this.otworzBiblioteke()}
                
                >
                  <Image
                    style={{width:150,height:150,borderRadius:75}}
                    source={require('../assets/1png.png')}/>
                  
                </TouchableOpacity>
                :
                <TouchableOpacity 
                onPress={()=>this.otworzBiblioteke()}
                >
                  <Image 
                  source={{uri: this.state.image}}
                  style={{width:150,height:150, borderRadius:75}}/>
                  </TouchableOpacity>
              } 

              <TextInput style={{
                width:width*0.9, 
                height:100, 
                marginVertical:15,
                borderRadius:20, 
                backgroundColor:'white',
                borderWidth:2,
                fontSize:22,
                borderColor:'blue'}}
              onChangeText={(Text)=>this.setState({noweImie:Text})}
              placeholder="Imie"
              textAlign="center"

              /> 
              <TextInput style={{
                width:width*0.9, 
                height:100, 
                borderRadius:20, 
                fontSize:22,
                backgroundColor:'white',
                borderWidth:2,
                borderColor:'blue'}}
              onChangeText={(Text)=>this.setState({nowyWiek:Text})}
              keyboardType='numeric'
              placeholder="Wiek"
              textAlign="center"

              /> 


              <TouchableOpacity style={{
                position:'absolute', 
                bottom:25, zIndex: 100, 
                width: width*0.7, height:60, 
                backgroundColor:'blue', 
                justifyContent:'center', 
                alignItems:'center', 
                borderRadius: 20,
                }} 
                onPress={()=>this.dodajNowegoUz()}>
                
                <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>Add user</Text>
              </TouchableOpacity>

            </View>
          )
        }
    }
}
