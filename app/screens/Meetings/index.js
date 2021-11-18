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
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';
import Meeting from '../../components/Meeting';


function Meetings({ navigation }) {

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
          <View style={styles.meetingTitle}>
            <Text style={styles.title}>Meeting 1 </Text>
            <Image
              source={require('../../assets/img/calendar-alt.png')}
              style={styles.calendar}
            />
          </View>
          <Text>
            <Text style={styles.date}>March, 2</Text><Text style={styles.day}> Monday</Text>
          </Text>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Text style={styles.time}>10:30</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.main}>
          <View style={styles.meetingTitle}>
            <Text style={styles.title}>Meeting 1 </Text>
            <Image
              source={require('../../assets/img/calendar-alt.png')}
              style={styles.calendar}
            />
          </View>
          <Text>
            <Text style={styles.date}>March, 2</Text><Text style={styles.day}> Monday</Text>
          </Text>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Text style={styles.time}>10:30</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.viewInterviewsButton}>
            <CustomButton
              text="View Interviews"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('MeetingRequest', { name: 'Accountant' })}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Meetings;

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

  title: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4946"
  },

  date: {
    fontFamily: "QuicksandBold",
    fontSize: 21,
    color: "#4D4946"
  },

  day: {
    fontFamily: "QuicksandRegular",
    fontSize: 21,
    color: "#7B7B7B"
  },

  cardRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20
  },

  card: {
    height: 77,
    width: 59,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF527C",
    borderRadius: 20,
    marginRight: 10
  },

  time: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#fff"
  },

  meetingTitle: {
    flex: 1,
    flexDirection: "row",
  },

  calendar: {
    height: 12.42,
    width: 10.86,
    marginTop: 5
  },

  divider: {
    height: 1,
    borderColor: "#4D4D4D",
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },

  viewInterviewsButton: {
    marginTop: 20
  }
});