// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

// Components
import LinearGradient from 'react-native-linear-gradient';

function Shortlisted({ navigation }) {


  /**
   * 
   */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shortlisted <Text style={styles.number}>10</Text></Text>
      <View>
        <View style={styles.row}>
          <Text style={styles.jobsTitle}>Job Title</Text>
          <Text style={styles.jobsTitle}>No. of Applications</Text>
        </View>
        <View style={styles.jobsContainer}>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
            </View>
            <Text style={styles.tokenNumber}>Company Name</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
            </View>
            <Text style={styles.tokenNumber}>Company Name</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
            </View>
            <Text style={styles.tokenNumber}>Company Name</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
            </View>
            <Text style={styles.tokenNumber}>Company Name</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Shortlisted;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D"
  },

  number: {
    color: "#FF527C"
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  jobsTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4946"
  },

  jobsContainer: {
    marginTop: 20
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
    fontSize: 12,
    color: "#4D4D4D"
  },

  tokenNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#FF527C"
  }
});