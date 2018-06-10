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

export default class Drop extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dropped: false,
      };
    }
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          dropped: true,
        });

        clearInterval(this.interval)
      }, 2500);
    }
    render() {
      if (this.state.dropped) {
        return (
          <View style={styles.container}>
            <ImageBackground
              source={require('../assets/icons/dropped.png')}
              style={styles.backgroundImage}
            />
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            <ImageBackground
              source={require('../assets/icons/drop.gif')}
              style={styles.backgroundImage}
            />
          </View>
        )
      }

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
