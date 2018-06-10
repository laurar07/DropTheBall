import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native'
import { white, purple, gray, green, blue } from '../utils/colors'

export default class PastDrops extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/icons/Past_Drops.png')}
                    style={styles.backgroundImage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1
    }
})
