// Libraries
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Stacks
import Play from '@screens/Play';
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
import Jobs from '../screens/Jobs';
import SavedJobs from '../screens/SavedJobs';
import ArchivedJobs from '../screens/ArchivedJobs';
import CreateCompany from '../screens/CreateCompany';
import ChangePassword from '../screens/ChangePassword';
import TeamMembers from '../screens/TeamMembers';
import MemberProfile from '../screens/MemberProfile';
import JobPosting from '../screens/JobPosting';
import PostStyle from '../screens/PostStyle';
import Styles from '../screens/Styles';
import CompanyJobs from '../screens/CompanyJobs';
import Filter from '../screens/Filter';
import JobInfo from '../screens/JobInfo';
import EditJob from '../screens/EditJob';
import InterviewRequest from '../screens/InterviewRequest';
import Meetings from '../screens/Meetings';
import MeetingRequest from '../screens/MeetingRequest';
import LoginEmployee from '../screens/LoginEmployee';
import RegisterEmployee from '../screens/RegisterEmployee';
import VerificationEmployee from '../screens/VerificationEmployee';
import ConfirmationEmployee from '../screens/ConfirmationEmployee';
import LandingEmployee from '../screens/LandingEmployee';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            iconName = focused
              ? require('../assets/img/profile-icon-active.png')
              : require('../assets/img/profile-icon.png')
          }
          if (route.name === 'Jobs') {
            iconName = focused
              ? require('../assets/img/jobs-icon-active.png')
              : require('../assets/img/jobs-icon.png')
          }
          if (route.name === 'JobPosting') {
            iconName = focused
              ? require('../assets/img/zinga-tab-icon-active.png')
              : require('../assets/img/zinga-tab-icon.png')
          }
          if (route.name === 'CompanyJobs') {
            iconName = focused
              ? require('../assets/img/briefcase-icon-active.png')
              : require('../assets/img/briefcase-icon.png')
          }
          if (route.name === 'EditJob') {
            iconName = focused
              ? require('../assets/img/calendar-alt.png')
              : require('../assets/img/calendar-icon.png')
          }
          return <Image source={iconName} size={size} style={styles.image} />;
        },
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontFamily: 'QuicksandBold',
          fontSize: 30,
          color: '#4D4D4D'
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false
      })}
    >
      <Tab.Screen name="EditJob" component={EditJob} options={{ title: 'Accountant' }} />
      <Tab.Screen name="CompanyJobs" component={CompanyJobs} options={{ title: "Zinga's Jobs" }} />
      <Tab.Screen name="JobPosting" component={JobPosting} options={{ title: 'Job Posting' }} />
      <Tab.Screen name="Jobs" component={Jobs} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={UserProfile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function Navigator() {

  const [userType, setUserType] = useState('');

  /**
   * 
   */
  useEffect(() => {
    (async function () {
      try {
        const value = await AsyncStorage.getItem('userType')
        if (value !== null) {
          setUserType(value);
          console.log(userType);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [])

  /**
   * 
   */
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
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
        {userType === "admin" &&
          <>
            <Stack.Screen name="Play" component={Play} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications} />
          </>
        }
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
        <Stack.Screen
          name="SavedJobs"
          component={SavedJobs}
          options={{
            title: 'Saved Jobs',
            headerRight: () => (
              <Image
                onPress={() => alert('filter')}
                source={require('../assets/img/filter-list.png')}
                style={styles.filterIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ArchivedJobs"
          component={ArchivedJobs}
          options={{
            title: 'Archived Jobs',
            headerRight: () => (
              <Image
                onPress={() => alert('filter')}
                source={require('../assets/img/filter-list.png')}
                style={styles.filterIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CreateCompany"
          component={CreateCompany}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            title: 'Change Password',
          }}
        />
        <Stack.Screen
          name="TeamMembers"
          component={TeamMembers}
          options={{
            title: 'Team Members',
          }}
        />
        <Stack.Screen
          name="MemberProfile"
          component={MemberProfile}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="PostStyle"
          component={PostStyle}
          options={{
            title: 'Job Posting',
          }}
        />
        <Stack.Screen
          name="Styles"
          component={Styles}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            title: ''
          }}
        />
        <Stack.Screen
          name="JobInfo"
          component={JobInfo}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="EditJob"
          component={EditJob}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="InterviewRequest"
          component={InterviewRequest}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Meetings"
          component={Meetings}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="MeetingRequest"
          component={MeetingRequest}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="LoginEmployee"
          component={LoginEmployee}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="RegisterEmployee"
          component={RegisterEmployee}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="VerificationEmployee"
          component={VerificationEmployee}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ConfirmationEmployee"
          component={ConfirmationEmployee}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="LandingEmployee"
          component={LandingEmployee}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: "#EFEDED"
            }
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
  },

  filterIcon: {
    height: 19,
    width: 28.6
  }
});