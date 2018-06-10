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
import { login } from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { white, purple, gray, green, blue } from '../utils/colors'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import DrawerNavigator from './CustomDrawerNavigator'
import SideMenu from './SideMenu'
import CalendarView from './CalendarView'
import Landing from './Landing'

function SignInBtn({ onPress }) {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.signInBtn : styles.androidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.signInBtnText}>Sign In</Text>
        </TouchableOpacity>
    )
}

function ConnectWithFacebookBtn({ onPress }) {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.fbBtn : styles.androidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.fbBtnText}>Connect with Facebook</Text>
        </TouchableOpacity>
    )
}

class Login extends Component {
    state = {
        username: '',
        password: '',
        isLoggedIn: false
    }
    submit = () => {
        const {
            username,
            password
        } = this.state
        const {
            dispatch
        } = this.props

        if (username.length === 0 || !username.trim() || password.length === 0 || !password.trim()) {
            Alert.alert(
                'Error',
                'Please enter a valid login!', [{
                    text: 'OK',
                    onPress: () => {}
                }, ], {
                    cancelable: false
                }
            )
        } else {
            login(
                { username, password }
            )
            .then(() => this.props.login())
        }
    }
    render() {
        return (
            <View style={styles.container}>
                    <View>
                        <View style={styles.initialSpace} />
                        <View style={styles.dropImage}>
                            <Image
                                source={require('../assets/icons/logo_large.png')}
                            />
                        </View>
                        <View style={styles.space}>
                        </View>
                        <Text style={styles.titleText}>
                            Drop the Ball
                        </Text>
                        <View style={styles.space}>
                        </View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText = {
                                (text) => this.setState({
                                    username: text
                                })
                            }
                            value={this.state.username}
                            placeholder="Email"
                            placeholderTextColor="white"
                        />
                        <View style={styles.space}>
                        </View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText = {
                                (text) => this.setState({
                                    password: text
                                })
                            }
                            value={this.state.password}
                            placeholder="Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                        />
                        <View style={styles.space}>
                        </View>
                        <Text style={styles.regularText}>
                            Forgot password?
                        </Text>
                    </View>
                    <View style={styles.buttonSpace}>
                    </View>
                    <SignInBtn onPress={this.submit} />
                    <View style={styles.space} />
                    <ConnectWithFacebookBtn onPress={this.submit} />
                    <View style={styles.space}>
                    </View>
                    <Text style={styles.regularText}>
                        <Text>Don't have an account?</Text>
                        <Text style={{ fontWeight: "bold" }}> Sign up</Text>
                    </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: green
    },
    titleText: {
        fontSize: 30,
        color: white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Avenir'
    },
    regularText: {
        fontSize: 15,
        color: white,
        textAlign: 'center',
        fontFamily: 'Avenir'
    },
    textInput: {
        height: 40,
        borderBottomColor: white,
        borderBottomWidth: 1,
        fontFamily: 'Avenir'
    },
    dropImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    initialSpace: {
        height: 50
    },
    space: {
        height: 20
    },
    buttonSpace: {
        height: 60
    },
    signInBtn: {
        backgroundColor: white,
        borderRadius: 7,
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 5
    },
    fbBtn: {
        backgroundColor: blue,
        borderRadius: 7,
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 5
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        borderRadius: 7,
        height: 45,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 5
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Avenir'
    },
    signInBtnText: {
        color: green,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Avenir'
    },
    fbBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Avenir'
    }
})

function mapStateToProps(state, { navigation }) {
    return {
        navigation
    }
}

export default connect(mapStateToProps)(Login)
