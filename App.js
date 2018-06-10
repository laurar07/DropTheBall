import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux'
import reducer from './reducers'
import {
  createStackNavigator
} from 'react-navigation';
import Login from './components/Login'
import Landing from './components/Landing'
import { green } from './utils/colors'

const MainNavigator = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      headerTintColor: green,
      headerStyle: {
        backgroundColor: green
      }
    }
  },
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      store: createStore(reducer)
    };
  }
  triggerLogin() {
    this.setState({
      loggedIn: true
    });
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <Provider store={this.state.store}>
          <View style={[{ flex: 1 }]}>
            <MainNavigator />
          </View>
        </Provider>
      )
    }

    return (
      <Provider store={this.state.store}>
        <View style={[{ flex: 1 }]}>
          <Login login={this.triggerLogin.bind(this)}/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
