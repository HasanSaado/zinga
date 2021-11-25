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
import { SeekerJobHeader } from '@components/Header';

function JobConfirmation({ navigation }) {

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
        <View style={styles.main}>
          <View style={styles.confirmation}>
            <Text style={styles.confirmationText}>You have applied to {"\n"} the below job</Text>
            <Text style={styles.confirmationText}>AWAIT INTERVIEW REQUEST</Text>
          </View>
          <SeekerJobHeader />
        </View>
        <Image
          style={styles.banner}
          source={require('@assets/img/job-post.png')}
        />
        <View style={styles.main}>
          <View style={styles.row}>
            <View style={styles.applicantsRow}>
              <Image
                source={require('@assets/img/team2.png')}
                style={styles.teamIcon}
              />
              <Text style={styles.applicants}> 25 Applicants</Text>
            </View>
            <Image
              source={require('@assets/img/share.png')}
              style={styles.shareIcon}
            />
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.jobTitle}>Accountant</Text>
              <Text style={styles.jobLocation}>Dubai, UAE</Text>
              <Text style={styles.jobTime}>12 hours ago</Text>
            </TouchableOpacity>
            <View style={{ position: "relative" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Employer Tag</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.customButton}>
            <CustomButton
              text="Browse other vacancies"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('UserJobs')}
              fontSize={19}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobConfirmation;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 30
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30
  },

  jobTitle: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D"
  },

  banner: {
    width: "100%",
    height: 479,
    marginTop: 3
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  applicantsRow: {
    flex: 1,
    flexDirection: "row"
  },

  teamIcon: {
    height: 26.17,
    width: 26.17
  },

  applicants: {
    fontFamily: "QuicksandRegular",
    fontSize: 13,
    color: "#7B7B7B"
  },

  shareIcon: {
    height: 20.26,
    width: 18.24
  },

  jobTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 16,
    color: "#4D4D4D"
  },

  jobLocation: {
    fontFamily: "QuicksandRegular",
    fontSize: 13,
    color: "#959DAD"
  },

  jobTime: {
    fontFamily: "QuicksandRegular",
    fontSize: 13,
    color: "#FEB130"
  },

  button: {
    backgroundColor: "#BEBEBE",
    borderRadius: 5,
    width: 74,
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    marginTop: 7,
    right: 0,
    position: "absolute",
    bottom: 0
  },

  buttonText: {
    color: "#fff",
    fontFamily: "QuicksandRegular",
    fontSize: 10,
  },

  industryKey: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#4D4D4D"
  },

  jobCloses: {
    position: "absolute",
    bottom: 0,
    right: 0,
    fontFamily: "QuicksandRegular",
    fontSize: 12,
    color: "#4D4D4D"
  },

  days: {
    fontFamily: "QuicksandBold"
  },

  customButton: {
    marginTop: 20
  },

  info: {
    marginTop: 20,
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

  jobInformation: {
    marginTop: 20
  },

  jobInformationText: {
    fontFamily: "QuicksandLight",
    fontSize: 14,
    color: "#4D4D4D"
  },

  jobInformationTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#4D4D4D",
    marginBottom: 10
  },

  confirmation: {
    marginTop: 10,
    marginBottom: 10
  },

  confirmationText: {
    textAlign: "center",
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#4D4D4D",
    marginBottom: 5
  },
});