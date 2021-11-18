// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Switch
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function TeamMembers({ navigation }) {

  /**
   * 
   */
  const onPress = () => {
    alert('token');
  }

  /**
   * 
   */
  const handleSavePress = () => {
    navigation.navigate('SelectTokens');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.addMemberContainer}>
          <Text style={styles.addMember}>Add New Member</Text>
          <TextInput
            style={[styles.searchInput, {}]}
            onFocus={() => setFocused(!focused)}
            onBlur={() => setFocused(!focused)}
          />
        </View>
        <Text style={styles.members}>All Members</Text>
        <View style={styles.jobsContainer}>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.memberName}>Frank Susana</Text>
              <Text style={styles.email}>Frank@companyname.com</Text>
            </View>
            <Text
              style={styles.view}
              onPress={() => navigation.navigate('MemberProfile', { name: 'Jessica S.' })} >
              View
            </Text>
            <Text style={styles.delete}>Delete</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.memberName}>Frank Susana</Text>
              <Text style={styles.email}>Frank@companyname.com</Text>
            </View>
            <Text style={styles.view}>View</Text>
            <Text style={styles.delete}>Delete</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.memberName}>Frank Susana</Text>
              <Text style={styles.email}>Frank@companyname.com</Text>
            </View>
            <Text style={styles.view}>View</Text>
            <Text style={styles.delete}>Delete</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.memberName}>Frank Susana</Text>
              <Text style={styles.email}>Frank@companyname.com</Text>
            </View>
            <Text style={styles.view}>View</Text>
            <Text style={styles.delete}>Delete</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.memberName}>Frank Susana</Text>
              <Text style={styles.email}>Frank@companyname.com</Text>
            </View>
            <Text style={styles.view}>View</Text>
            <Text style={styles.delete}>Delete</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.memberName}>Frank Susana</Text>
              <Text style={styles.email}>Frank@companyname.com</Text>
            </View>
            <Text style={styles.view}>View</Text>
            <Text style={styles.delete}>Delete</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TeamMembers;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },

  addMemberContainer: {
    marginTop: 30
  },

  searchInput: {
    borderColor: "#4D4D4D",
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
    textAlign: "center",
    color: "#7B7B7B"
  },

  addMember: {
    fontFamily: "QuicksandBold",
    fontSize: 20,
    color: "#4D4946"
  },

  members: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4946",
    marginTop: 20
  },

  jobsContainer: {
    marginTop: 15
  },

  jobCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#4D4D4D",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    height: 70,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10
  },

  memberName: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#4D4D4D"
  },

  email: {
    fontFamily: "QuicksandRegular",
    fontSize: 9,
    color: "#4D4D4D"
  },

  view: {
    fontFamily: "QuicksandRegular",
    fontSize: 12,
    color: "#4D4D4D",
    textDecorationLine: "underline"
  },

  delete: {
    fontFamily: "QuicksandMedium",
    fontSize: 12,
    color: "#FF527C",
    textDecorationLine: "underline"
  }
});