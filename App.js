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

const MainNavigator = createStackNavigator({
  Home: {
    screen: Login,
  }
})

export default class App extends React.Component {
  componentDidMount(){
    // Do anything we need here
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Login />
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
