import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text, Platform,
    StyleSheet,
    TextInput,
    Alert,
    ImageBackground,
    TouchableWithoutFeedback,
    Image
} from 'react-native'
import { white, purple, gray, green, blue } from '../utils/colors'
import Header from './Header'
import { connect } from 'react-redux'
import Drawer from 'react-native-drawer'
import SideMenu from './SideMenu'

class Landing extends Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Drop', {})}>
                <ImageBackground
                source={require('../assets/icons/Homepage.png')}
                style={styles.backgroundImage}
                />
            </TouchableWithoutFeedback>
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

function mapStateToProps(state, { navigation }) {
    return {
        navigation
    }
}

export default connect(mapStateToProps)(Landing)
