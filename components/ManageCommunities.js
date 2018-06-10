import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text, Platform,
    StyleSheet,
    TextInput,
    Alert,
    ImageBackground
} from 'react-native'
import { white, purple, gray, green, blue } from '../utils/colors'

export default class ManageCommunities extends Component {
    render() {
        return (
          <View style={styles.container}>
            <ImageBackground
              source={require('../assets/icons/manage_communities.png')}
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
      flex: 1,
    }
})
