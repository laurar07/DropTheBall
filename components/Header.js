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
                <TouchableOpacity onPress={this.toHome}>
                    <Image source={require('assets/icons/Nav.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: green,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        backgroundColor: green,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBotton: 10
    },
    right: {
        backgroundColor: green,
        paddingRight: 20,
        paddingTop: 10,
        paddingBotton: 10
    },
})
