import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text, Platform,
    StyleSheet,
    TextInput,
    Alert,
    Image
} from 'react-native'
import { white, purple, gray, green, black } from '../utils/colors'
import CustomDrawerNavigator from './CustomDrawerNavigator';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.left} onPress={this.toHome}>
                    {Platform.OS === 'ios'
                        ? <Ionicons name='ios-menu' size={50} color={black} />
                        : <MaterialIcons name='menu' size={50} color={black} />}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: green
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: green,
        paddingLeft: 20
    },
})
