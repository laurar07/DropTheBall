import React, { Component } from 'react'
import Header from './Header'
import {
    View,
    TouchableOpacity,
    Text, Platform,
    StyleSheet,
    TextInput,
    Alert,
    Image
} from 'react-native'
import { white, purple, gray, green, blue } from '../utils/colors'
import { connect } from 'react-redux'

class Landing extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    return {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: green
    },
})

export default connect(mapStateToProps)(Landing)

