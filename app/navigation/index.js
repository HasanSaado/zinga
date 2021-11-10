// Libraries
import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Stacks
import Play from '../screens/Play';
import Notifications from '../screens/Notifications';
import UserProfile from '../screens/UserProfile';
import Home from '../screens/Home';
import Entry from '../screens/Entry';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import Confirmation from '../screens/Confirmation';
import Settings from '../screens/Settings';
import TokensSpent from '../screens/TokensSpent';
import EditProfile from '../screens/EditProfile';
import WalletSettings from '../screens/WalletSettings';
import SelectTokens from '../screens/SelectTokens';
import Checkout from '../screens/Checkout';
import CardConfirmation from '../screens/CardConfirmation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {

  /**
   * 
   */
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = require('../assets/img/profile-icon.png');
          }
          return <Image source={iconName} size={size} style={[styles.image, { tintColor: "gray" }]} />;
        },
        tabBarInactiveTintColor: 'tomato',
        tabBarActiveTintColor: '#4D4D4D',
      })}
    >
      <Tab.Screen name="Profile" component={UserProfile} options={{ headerShown: false }} />
      {/**<Tab.Screen
        name="TokensSpent"
        component={TokensSpent}
      options={{ headerShown: false, tabBarLabel: 'Tokens Spent' }}
      initialRouteName="Profile"
      />*/}
    </Tab.Navigator>
  );
}

function Navigator() {

  /**
   * 
   */
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'QuicksandBold',
            fontSize: 30,
            color: '#4D4D4D'
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Entry" component={Entry} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
        <Stack.Screen name="Play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="UserProfile" component={ProfileStack} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="TokensSpent"
          component={TokensSpent}
          options={{
            title: 'Tokens Spent',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Edit Profile',
          }}
        />
        <Stack.Screen
          name="WalletSettings"
          component={WalletSettings}
          options={{
            title: 'Settings',
          }}
        />
        <Stack.Screen
          name="SelectTokens"
          component={SelectTokens}
          options={{
            title: 'Select Tokens',
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            title: 'Checkout',
          }}
        />
        <Stack.Screen
          name="CardConfirmation"
          component={CardConfirmation}
          options={{
            title: 'Card Confirmation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25
  }
});