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

function Requested({ navigation }) {


  /**
   * 
   */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interviews Requested <Text style={styles.number}>7</Text></Text>
      <View>

        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('@assets/img/user-img.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.interviewInfo}>
          <Text style={styles.infoText}>Interview with John Doe</Text>
          <Text style={styles.infoText}>HR Manager at <Text style={styles.companyName}>Zinga</Text></Text>
          <Text style={styles.infoText}>Accountant</Text>
          <Text style={styles.link}>Zoom link</Text>
          <Text style={styles.date}>March, 2 <Text style={styles.dateDay}>Monday</Text></Text>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.meetingTime}>12:30</Text>
          </View>
          <View>
            <Text style={styles.link}>Cancel Interview</Text>
          </View>

        </View>

      </View>
    </View>
  );
}

export default Requested;

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
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  image: {
    height: 117.2,
    width: 117.2,
    borderRadius: 400 / 2
  },

  interviewInfo: {
    marginTop: 10
  },

  infoText: {
    fontFamily: "QuicksandBold",
    fontSize: 21,
    color: "#4D4D4D"
  },

  date: {
    fontFamily: "QuicksandBold",
    fontSize: 19,
    color: "#4D4946",
  },

  dateDay: {
    fontFamily: "QuicksandRegular"
  },

  card: {
    height: 89,
    width: 68,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF527C"
  },

  meetingTime: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#fff"
  },

  companyName: {
    textDecorationLine: "underline"
  },

  link: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#FF527C",
    textDecorationLine: "underline"
  }
});