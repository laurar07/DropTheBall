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
                        ? <Ionicons name='ios-menu' size={40} color={white} />
                        : <MaterialIcons name='menu' size={40} color={white} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.center} onPress={this.toHome}>
                    <Image
                        style={{ width: 40, height: 40, resizeMode: 'contain'}}
                        source={require('../assets/icons/logo_small.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.right} onPress={this.toHome}>
                    {Platform.OS === 'ios'
                        ? <Ionicons name='ios-person' size={40} color={white} />
                        : <MaterialIcons name='person' size={40} color={white} />}
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
        paddingBottom: 10
    },
    right: {
        backgroundColor: green,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    center: {
        alignItems: 'flex-end',
        backgroundColor: green,
        paddingTop: 10,
        paddingBottom: 0
    }
})
