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
  Switch,
  ImageBackground
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function JobInfo({ navigation, route }) {

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
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/job-post.png')}
            style={styles.jobPostImage}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('EditJob', { name: 'Accountant' })}
          >
            <Image
              source={require('../../assets/img/edit.png')}
              style={styles.editImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.infoContainer}>
            <View style={styles.location}>
              <Image
                source={require('../../assets/img/location-icon.png')}
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}> COUNTRY | CITY</Text>
            </View>
            <View style={styles.jobs}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderApplicants}>Total Applicants</Text>
                <Text style={styles.cardHeaderTotalApplicants}>25</Text>
              </View>
              <View style={styles.cardsContainer}>
                <View style={styles.card}>
                  <Text style={styles.appNumber}>7</Text>
                  <Text styles={styles.appInfo}>Interviews scheduled</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.appNumber}>30</Text>
                  <Text styles={styles.appInfo}>Total Applicants</Text>
                </View>
              </View>
              <View style={styles.cardsContainer}>
                <View style={styles.card}>
                  <Text style={styles.appNumber}>10</Text>
                  <Text styles={styles.appInfo}>Shortlisted Applicants</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.appNumber}>10</Text>
                  <Text styles={styles.appInfo}>Unlocked Applicants</Text>
                </View>
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Compensation</Text>
                <Text style={styles.infoText}>15000 AED</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Job Function</Text>
                <Text style={styles.infoText}>Auditing</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Experience Required</Text>
                <Text style={styles.infoText}>4 years +</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Language Requirments</Text>
                <Text style={styles.infoText}>English, Arabic</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Availability</Text>
                <Text style={styles.infoText}>Start Immediately</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Employment Type</Text>
                <Text style={styles.infoText}>Full time</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Duration</Text>
                <Text style={styles.infoText}>Yearly Contract</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Additional Benifits</Text>
                <Text style={styles.infoText}>Housing Provided</Text>
              </View>
            </View>
            <View style={styles.jobInformation}>
              <Text style={styles.jobInformationTitle}>Job Information</Text>
              <Text style={styles.jobInformationText}>Preparing accounts and tax returns. Administering payrolls and controlling income and expenditure. Auditing financial information. Compiling and presenting reports, budgets, business plans, commentaries and financial statements.</Text>
            </View>
            <View style={styles.jobInformation}>
              <Text style={styles.jobInformationTitle}>Hard Skills</Text>
              <Text style={styles.jobInformationText}>Auditor Skills, Administrative Skills, IT Skills</Text>
            </View>
            <View style={styles.jobInformation}>
              <Text style={styles.jobInformationTitle}>Soft Skills</Text>
              <Text style={styles.jobInformationText}>Creativity, Critical Thinking, Decision Making, leadership Skills</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobInfo;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingLeft: 30,
    paddingRight: 30
  },

  jobPostImage: {
    height: 299,
    width: "100%",
  },

  imageContainer: {
    marginTop: 30,
    position: "relative"
  },

  editImage: {
    height: 59,
    width: 59,
    position: "absolute",
    bottom: -25,
    right: 20,
    zIndex: 999
  },

  infoContainer: {
    marginTop: 50,
    marginBottom: 30
  },

  location: {
    flex: 1,
    flexDirection: "row",
  },

  locationIcon: {
    height: 22.76,
    width: 15.26
  },

  locationText: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#FEB130"
  },

  jobs: {
    marginTop: 5
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
    fontSize: 17,
    color: "#4D4D4D"
  },

  appInfo: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#4D4D4D"
  },

  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  cardHeaderApplicants: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#4D4D4D"
  },

  cardHeaderTotalApplicants: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#FF527C"
  },

  info: {
    marginTop: 40,
  },

  infoRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15
  },

  infoTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#4D4D4D",
    width: "60%"
  },

  infoText: {
    fontFamily: "QuicksandLight",
    fontSize: 13,
    color: "#4D4D4D",
    width: "40%"
  },

  jobInformationTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#4D4D4D",
    marginBottom: 10
  },

  jobInformation: {
    marginTop: 20
  },

  jobInformationText: {
    fontFamily: "QuicksandLight",
    fontSize: 14,
    color: "#4D4D4D"
  }
});