// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';

function Jobs({ navigation }) {

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
        <Text style={styles.companyName}>Zinga</Text>
        <View style={styles.header}>
          <View>
            <Text style={styles.jobTitle}>HR Specialist</Text>
            <View style={styles.location}>
              <Image
                style={styles.locationIcon}
                source={require('../../assets/img/location-icon.png')}
              />
              <Text style={styles.locationText}> UAE | Dubai</Text>
            </View>
            <Text style={styles.viewTeam} onPress={() => navigation.navigate('TeamMembers')}>View Team</Text>
          </View>
          <TouchableOpacity
            style={styles.companyLogo}
            onPress={() => navigation.navigate('CreateCompany')}
          >
            <Image
              style={styles.plusIcon}
              source={require('../../assets/img/plus-icon.png')}
            />
            <Image
              style={styles.logo}
              source={require('../../assets/img/logo-blue.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.activeJobsContainer}>
          <Text style={styles.activeJobsText}>
            Active Jobs <Text style={styles.activeJobsNumber}>25</Text>
          </Text>
          <View style={styles.cardsContainer}>
            <View style={styles.card}>
              <Text style={styles.appNumber}>56</Text>
              <Text styles={styles.appInfo}>Total Applicants</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.appNumber}>45</Text>
              <Text styles={styles.appInfo}>Shortlisted Applicants</Text>
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <View style={styles.card}>
              <Text style={styles.appNumber}>56</Text>
              <Text styles={styles.appInfo}>Unlocked Applicants</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.appNumber}>45</Text>
              <Text styles={styles.appInfo}>Interviews Scheduled</Text>
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SavedJobs')}
              style={styles.card}
            >
              <Text style={styles.savedNumber}>232</Text>
              <Text style={styles.saved}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ArchivedJobs')}
              style={styles.card}
            >
              <Text style={styles.savedNumber}>232</Text>
              <Text style={styles.saved}>Archived Job Posts</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tokens}>
          <Text style={styles.tokensText}>Remaining Tokens
            <Text style={styles.tokensRemaining}> 25</Text>
          </Text>
        </View>
        <View style={styles.addTokenButton}>
          <CustomButton
            text="Add Tokens"
            height={70}
            onPress={onPress}
            color="#fff"
            backgroundColor="#FEB130"
            borderColor="#FEB130"
            type="image"
            image={require('../../assets/img/wallet-icon.png')}
          />
        </View>

        <View style={styles.availableJobs}>
          <Text style={styles.availableJobsTitle}>Available Jobs</Text>
          <View>
            <View style={styles.membersTitle}>
              <Text style={styles.title}>Job Title</Text>
              <Text style={styles.title}>No. of Applications</Text>
            </View>
            <View style={styles.jobsContainer}>
              <View style={styles.jobCard}>
                <View>
                  <Text style={styles.jobName}>Accountant</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
              <View style={styles.jobCard}>
                <View>
                  <Text style={styles.jobName}>Accountant</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
              <View style={styles.jobCard}>
                <View>
                  <Text style={styles.jobName}>Accountant</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
              <View style={styles.jobCard}>
                <View>
                  <Text style={styles.jobName}>Accountant</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Jobs;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30
  },

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  companyName: {
    fontFamily: "QuicksandBold",
    fontSize: 44,
    color: "#4D4D4D",
    marginTop: 20
  },

  jobTitle: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D"
  },

  locationIcon: {
    height: 22.7,
    width: 15.2
  },

  locationText: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#FEB130",
  },

  location: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },

  viewTeam: {
    fontFamily: "QuicksandMedium",
    fontSize: 13,
    color: "#FF7542",
    textDecorationLine: "underline",
  },

  companyLogo: {
    borderRadius: 400 / 2,
    borderWidth: 2,
    borderColor: "#FF7542",
    height: 92,
    width: 92,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },

  plusIcon: {
    height: 26.4,
    width: 26.4,
    position: "absolute",
    zIndex: 999,
    top: 10,
    right: 70
  },

  logo: {
    height: 51.5,
    width: 51.5
  },

  activeJobsContainer: {
    marginTop: 40
  },

  activeJobsText: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#4D4D4D"
  },

  activeJobsNumber: {
    color: "#FF527C"
  },

  cardsContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },

  card: {
    borderRadius: 20,
    borderWidth: 2,
    width: "48%",
    height: 60,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#4D4D4D"
  },

  appNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#4D4D4D"
  },

  appInfo: {
    fontFamily: "QuicksandRegular",
    fontSize: 10,
    color: "#4D4D4D"
  },

  savedNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#FF527C"
  },

  saved: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#FF527C"
  },

  tokens: {
    marginTop: 15
  },

  tokensText: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#4D4D4D"
  },

  tokensRemaining: {
    color: "#FF527C"
  },

  addTokenButton: {
    width: "100%",
    marginTop: 10
  },

  availableJobs: {
    marginTop: 10
  },

  availableJobsTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#4D4D4D"
  },

  membersTitle: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row"
  },

  title: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4946"
  },

  jobsContainer: {
    marginTop: 10
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

  jobName: {
    fontFamily: "QuicksandRegular",
    fontSize: 15,
    color: "#4D4946"
  },

  tokenNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#FF527C"
  }
});