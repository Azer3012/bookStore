import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notification, ShoppingCart} from '../screens';
import AnimatedTabButton from '../components/AnimatedTabButton';
import colors from '../values/colors';
import helpers from '../helpers/helpers';
import { isIphoneX } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      //    screenListeners={e => netInfoStore.setRouteState(e.route.name)}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarStyle: {
          ...styles.tabBarStyle,
          height: isIphoneX() ? helpers.px(85) : helpers.px(70),
          paddingTop: isIphoneX() ? helpers.px(14) : helpers.px(18),
        },
        tabBarShowLabel: false,
      }}
      backBehavior="initialRoute"
      initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarButton: props => {
           return ( <AnimatedTabButton
              label={'Home'}
              icon={require('../assets/images/home.png')}
              addStyle={styles.tabButton}
              {...props}
            />)
          },
          tabBarShowLabel: false,
        })}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={() => ({
          tabBarButton: props => {
            return (<AnimatedTabButton
              label={'Notification'}
              icon={require('../assets/images/notification.png')}
              addStyle={styles.tabButton}
              {...props}
            />)
          },
          tabBarShowLabel: false,
        })}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={() => ({
          tabBarButton: props => {
           return  (<AnimatedTabButton
              label={'Cart'}
              icon={require('../assets/images/shoppingCart.png')}
              addStyle={styles.tabButton}
              {...props}
            />)
          },
          tabBarShowLabel: false,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={() => ({
          tabBarButton: props => {
           return ( <AnimatedTabButton
              label={'Home'}
              icon={require('../assets/images/user.png')}
              addStyle={styles.tabButton}
              {...props}
            />)
          },
          tabBarShowLabel: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.white,
    elevation: 1,
    borderTopWidth: 0,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: helpers.px(0),
      height: helpers.px(-8),
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  icon: {},
  tabButton: {
    width: helpers.px(20),
    height: helpers.px(20),
  },
});
