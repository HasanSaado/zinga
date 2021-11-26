// Libraries
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
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
import {
  AdminJobs,
  UserJobs,
  JobApply,
  JobConfirmation
} from '../screens/Jobs';
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
import Meetings from '../screens/Meetings';
import LoginEmployee from '../screens/LoginEmployee';
import RegisterEmployee from '../screens/RegisterEmployee';
import VerificationEmployee from '../screens/VerificationEmployee';
import ConfirmationEmployee from '../screens/ConfirmationEmployee';
import LandingEmployee from '../screens/LandingEmployee';

import {
  Step1,
  Step2,
  Step3,
  EditEmployeeProfile,
  UploadVideo,
  VideoConfirmation,
  VideoTips
} from '../screens/CreateProfile';

import {
  FollowedCompanies,
  CompanyProfile
} from '@screens/Company';

import {
  JobSeekerInterviews,
  RejectInterview,
  UpcomingInterviews,
  CancelInterview,
  InterviewHistory,
  InterviewRequest,
  MeetingRequest,
  ScheduledInterviews
} from '@screens/Interview';

import {
  JobSeekerDashboard
} from '@screens/Dashboard';

import {
  JobSeekerProfile
} from '@screens/Profile';

import PreferredLocation from '@screens/PreferredLocation';

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
      <Tab.Screen name="Jobs" component={AdminJobs} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={UserProfile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function JobSeekerProfileStack() {

  /**
   * 
   */
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === 'SeekerProfile') {
            iconName = focused
              ? require('../assets/img/profile-icon-active.png')
              : require('../assets/img/profile-icon.png')
          }
          if (route.name === 'FollowedCompanies') {
            iconName = focused
              ? require('../assets/img/jobs-icon-active.png')
              : require('../assets/img/jobs-icon.png')
          }
          if (route.name === 'JobSeekerDashboard') {
            iconName = focused
              ? require('../assets/img/dashboard-alt.png')
              : require('../assets/img/dashboard2.png')
          }
          if (route.name === 'UserJobs') {
            iconName = focused
              ? require('../assets/img/briefcase-icon-active.png')
              : require('../assets/img/briefcase-icon.png')
          }
          if (route.name === 'JobSeekerInterviews') {
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
      <Tab.Screen name="JobSeekerInterviews" component={JobSeekerInterviews} options={{
        title: 'Interviews'
      }} />
      <Tab.Screen name="FollowedCompanies" component={FollowedCompanies} options={{
        title: 'Followed Companies'
      }} />
      <Tab.Screen name="UserJobs" component={UserJobs} options={{
        title: 'Jobs',
        headerRight: () => (
          <Image
            onPress={() => alert('filter')}
            source={require('../assets/img/filter.png')}
            style={styles.filter}
          />
        ),
      }} />
      <Tab.Screen name="JobSeekerDashboard" component={JobSeekerDashboard} options={{ headerShown: false }} />
      <Tab.Screen name="SeekerProfile" component={JobSeekerProfile} options={{ headerShown: false }} />
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
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

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
        <Stack.Screen name="Play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="UserProfile" component={ProfileStack} options={{ headerShown: false }} />
        <Stack.Screen name="JobSeekerProfile" component={JobSeekerProfileStack} options={{ headerShown: false }} />
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
        <Stack.Screen
          name="Step1"
          component={Step1}
          options={{
            title: 'Create Profile'
          }}
        />
        <Stack.Screen
          name="Step2"
          component={Step2}
          options={{
            title: 'Create Profile'
          }}
        />
        <Stack.Screen
          name="Step3"
          component={Step3}
          options={{
            title: 'Job Functions'
          }}
        />
        <Stack.Screen
          name="EditEmployeeProfile"
          component={EditEmployeeProfile}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="UploadVideo"
          component={UploadVideo}
          options={{
            title: 'Video CV'
          }}
        />
        <Stack.Screen
          name="VideoConfirmation"
          component={VideoConfirmation}
          options={{
            title: 'Video CV'
          }}
        />
        <Stack.Screen
          name="VideoTips"
          component={VideoTips}
          options={{
            title: 'Video CV'
          }}
        />
        <Stack.Screen
          name="PreferredLocation"
          component={PreferredLocation}
          options={{
            title: 'Preferred Location'
          }}
        />
        <Stack.Screen
          name="JobApply"
          component={JobApply}
          options={{
            title: ''
          }}
        />
        <Stack.Screen
          name="JobConfirmation"
          component={JobConfirmation}
          options={{
            title: 'Confirmation'
          }}
        />
        <Stack.Screen
          name="RejectInterview"
          component={RejectInterview}
          options={{
            title: 'Reject Request'
          }}
        />
        <Stack.Screen
          name="UpcomingInterviews"
          component={UpcomingInterviews}
          options={{
            title: 'Interviews'
          }}
        />
        <Stack.Screen
          name="CancelInterview"
          component={CancelInterview}
          options={{
            title: 'Cancel Interviews'
          }}
        />
        <Stack.Screen
          name="InterviewHistory"
          component={InterviewHistory}
          options={{
            title: 'Interviews'
          }}
        />
        <Stack.Screen
          name="ScheduledInterviews"
          component={ScheduledInterviews}
          options={{
            title: 'Accountant',
            headerRight: () => (
              <Image
                onPress={() => alert('filter')}
                source={require('../assets/img/filter.png')}
                style={styles.filterIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CompanyProfile"
          component={CompanyProfile}
          options={{
            title: '',
            headerRight: () => (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Unfollow</Text>
              </TouchableOpacity>
            ),
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
  },

  filter: {
    height: 23.32,
    width: 23.32,
    marginRight: 30
  },

  button: {
    borderColor: "#FF527C",
    borderWidth: 1,
    borderRadius: 5,
    width: 76,
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    marginTop: 7,
    marginRight: 13
  },

  buttonText: {
    color: "#FF527C",
    fontFamily: "QuicksandRegular",
    fontSize: 15,
  }
});