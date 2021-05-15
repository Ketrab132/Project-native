import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image } from 'react-native'

export default function Zdjecia() {
    const[zdjecie,setZdjecie]=React.useState()
    const zmienDanie =()=>{
        if(zdjecie=='https://i.ytimg.com/vi/4UtmdQjhqpY/maxresdefault.jpg'){
            setZdjecie('https://cdn.galleries.smcloud.net/t/galleries/gf-asNo-dc8w-kK4k_sznycel-wiedenski-czyli-wiener-schnitzel-przepis-na-sznycel-cielecy-1920x1080-nocrop.jpg')
        }else{
            setZdjecie('https://i.ytimg.com/vi/4UtmdQjhqpY/maxresdefault.jpg')
        }
    }
    return (
        <View style={{flex:1}}>
            <TouchableOpacity style={{flex:1}} onPress={()=>zmienDanie()}>
            <Image source={{ uri:zdjecie}}  
            style={{flex:1}} />

            </TouchableOpacity>
            
        </View>
    )
}
