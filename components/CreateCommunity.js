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
import { white, purple, gray, green, blue } from '../utils/colors'

function Btn({ onPress, style, txtStyle, txt }) {
    return (
        <TouchableOpacity
            style={style}
            onPress={onPress}>
            <Text style={txtStyle}>{txt}</Text>
        </TouchableOpacity>
    )
}

export default class CreateCommunity extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.dropImage}>
              <Image source={require('../assets/icons/camera.png')} />
            </View>


              <TextInput
                  style={styles.textInput}
                  onChangeText = {
                      (text) => this.setState({
                          name: text
                      })
                  }
                  value={this.state.username}
                  placeholder="Community Name"
                  placeholderTextColor={green}
              />
              <View style={styles.space}>
              </View>
              <TextInput
                  style={styles.textInput}
                  onChangeText = {
                      (text) => this.setState({
                          location: text
                      })
                  }
                  value={this.state.password}
                  placeholder="Community Location"
                  placeholderTextColor={green}
              />

              <Btn
                style={Platform.OS === 'ios' ? styles.addBtn : styles.androidSubmitBtn}
                txtStyle={styles.addBtnText}
                txt='Add Members'
              />

              <Btn
                style={Platform.OS === 'ios' ? styles.createBtn : styles.androidSubmitBtn}
                txtStyle={styles.createBtnTxt}
                txt='Create Community'
                onPress={() => {
                  this.props.navigation.navigate('ManageCommunities')
                }}
              />

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 40,
  },
  textInput: {
      height: 40,
      padding: 5,
      marginTop: 25,
      borderBottomColor: green,
      borderBottomWidth: 1,
      fontFamily: 'Avenir',
      fontSize: 24,
      color: green,
  },
  dropImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createBtn: {
      marginTop: 10,
      backgroundColor: green,
      borderRadius: 7,
      height: 50,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 10,
      paddingBottom: 5
  },
  addBtn: {
      marginTop: 35,
      borderRadius: 7,
      height: 50,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 10,
      paddingBottom: 5
  },
  createBtnTxt: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
      fontFamily: 'Avenir'
  },
  addBtnText: {
      color: green,
      fontSize: 22,
      textAlign: 'center',
      fontFamily: 'Avenir'
  },
})
