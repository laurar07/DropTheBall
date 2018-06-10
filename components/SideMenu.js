
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Text, Platform,
    StyleSheet,
    TextInput,
    Alert,
    Image,
    ScrollView
} from 'react-native'
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { white, purple, gray, green, blue } from '../utils/colors'

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navItemContainer}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('CreateCommunity')}>
              Create Community
              </Text>
            </View>
            <View style={styles.navItemContainer}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ManageCommunities')}>
                Manage Communities
              </Text>
            </View>
            <View style={styles.navItemContainer}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('PastDrops')}>
                Past Drops
              </Text>
            </View>
            <View style={styles.navItemContainer}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('CalendarView')}>
                Calendar
              </Text>
            </View>
            <View style={styles.navItemContainer}>
              <Text style={styles.navItemStyle}>
                Send a Thank You
              </Text>
            </View>
            <View style={styles.navItemContainer}>
              <Text style={styles.navItemStyle}>
                Settings
              </Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: green
    },
    sectionHeadingStyle: {
      fontSize: 36,
      color: white,
    },
    navItemStyle: {
      color: white,
      fontSize: 22,
    },

    navSectionStyle: {
      marginBottom: 20,
    },

    navItemContainer: {
      padding: 7,
      marginTop: 40,
      borderBottomColor: white,
      borderBottomWidth: 1,
    }
})

export default SideMenu;
