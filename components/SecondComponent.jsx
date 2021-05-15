import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FirstComponents extends Component {
    render() {
        return (
            <View>
                <View style={{width: 100, height: 100, borderRadius: 50}}>
                    <Text>{this.props.kolor}</Text>

                </View>
            </View>
        )
    }
}