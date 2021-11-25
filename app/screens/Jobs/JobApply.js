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

function JobApply({ navigation }) {

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
          <SeekerJobHeader />
        </View>
        <Image
          style={styles.banner}
          source={require('@assets/img/banner2.png')}
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
              <Text style={styles.industryKey}>Industry</Text>
            </TouchableOpacity>
            <View style={{ position: "relative" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Employer Tag</Text>
              </TouchableOpacity>
              <Text style={styles.jobCloses}>
                Job closes in <Text style={styles.days}>5 days</Text>
              </Text>
            </View>
          </View>
          <View style={styles.customButton}>
            <CustomButton
              text="Apply"
              height={52}
              onPress={() => navigation.navigate('JobConfirmation')}
              color="#fff"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              type="textImage"
              image={require('@assets/img/like.png')}
              fontSize={19}
              color="#000"
              imageWidth={21.62}
              imageHeight={21.62}
            />
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobApply;

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
    height: 441,
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
    position: "absolute"
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
});