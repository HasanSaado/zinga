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
  Switch
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '@components/Custom/CustomButton';

function JobSeekerInterviews({ navigation }) {

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
          <View style={styles.filter}>
            <Text style={styles.highlighted}>REQUESTS</Text>
            <Text
              style={styles.filterText}
              onPress={() => navigation.navigate('UpcomingInterviews')}
            >
              UPCOMING INTERVIEWS
            </Text>
            <Text
              style={styles.filterText}
              onPress={() => navigation.navigate('InterviewHistory')}
            >
              HISTORY
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                style={styles.image}
                source={require('@assets/img/user-img.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.interviewInfo}>
            <Text style={styles.infoText}>Interview with John Doe</Text>
            <Text style={styles.infoText}>HR Manager at <Text style={styles.companyName}>Zinga</Text></Text>
            <Text style={styles.position}>Position: Accountant</Text>
          </View>
          <Text style={styles.link}>Zoom link</Text>
          <Text style={styles.date}>March, 2 <Text style={styles.dateDay}>Monday</Text></Text>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.meetingTime}>12:30</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.meetingTime}>12:30</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.meetingTime}>12:30</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={{ width: "48%" }}>
              <CustomButton
                text="Accept"
                backgroundColor="#fff"
                borderColor="#4D4D4D"
                color="#000"
                height={52}
                onPress={() => navigation.navigate('Meetings', { name: 'Accountant' })}
              />
            </View>
            <View style={{ width: "48%" }}>
              <CustomButton
                text="Reject"
                backgroundColor="#fff"
                borderColor="#4D4D4D"
                color="#000"
                height={52}
                onPress={() => navigation.navigate('RejectInterview')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobSeekerInterviews;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30
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

  play: {
    height: 35,
    width: 35,
    position: "absolute",
    right: 0
  },

  divider: {
    height: 2,
    borderColor: "#4D4D4D",
    borderBottomWidth: 1,
  },

  filter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  highlighted: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#4D4D4D",
    textDecorationLine: "underline"
  },

  filterText: {
    fontFamily: "QuicksandRegular",
    fontSize: 12,
    color: "#4D4D4D"
  },

  interviewInfo: {
    marginTop: 10
  },

  infoText: {
    fontFamily: "QuicksandBold",
    fontSize: 21,
    color: "#4D4D4D"
  },

  companyName: {
    textDecorationLine: "underline"
  },

  position: {
    fontFamily: "QuicksandBold",
    fontSize: 19,
    color: "#4D4D4D"
  },

  link: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#FF527C",
    textDecorationLine: "underline",
    marginTop: 5
  },

  date: {
    fontFamily: "QuicksandBold",
    fontSize: 19,
    color: "#4D4946",
    marginTop: 5
  },

  dateDay: {
    fontFamily: "QuicksandRegular"
  },

  cardContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  card: {
    height: 89,
    width: 68,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  meetingTime: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4D4D"
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  }
});