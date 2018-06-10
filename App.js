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
  Home: {
    screen: Login,
    navigationOptions: {
      headerTintColor: green,
      headerStyle: {
        backgroundColor: green
      }
    }
  },
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
  componentDidMount(){
    // Do anything we need here
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={[{ flex: 1 }]}>
          <MainNavigator />
        </View>
      </Provider>
    );
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
