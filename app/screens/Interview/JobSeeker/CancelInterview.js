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
  TextInput
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '@components/Custom/CustomButton';
import CustomInput from '@components/Custom/CustomInput';
import Meeting from '@components/Meeting';


function CancelInterview({ navigation }) {

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
          <View style={styles.textContainer}>
            <Text style={styles.text}>Are you sure you want to cancel your interview with John Doe on?</Text>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.date}>March, 2 <Text style={styles.dateDay}>Monday</Text></Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.meetingTime}>12:30</Text>
            </View>
          </View>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Reasons</Text>
            <TextInput
              style={styles.input}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              text="Reject request"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('RejectInterview')}
            />
            <CustomButton
              text="No don't reject"
              backgroundColor="#4D4D4D"
              borderColor="#4D4D4D"
              color="#fff"
              height={52}
              onPress={() => navigation.navigate('RejectInterview')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CancelInterview;

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

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 10,
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D",
    textAlign: "center",
  },

  form: {
    marginTop: 20
  },

  formTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 19,
    color: "#4D4D4D"
  },

  input: {
    borderWidth: 1,
    borderColor: "#4D4D4D",
    borderRadius: 20,
    height: 160,
    marginTop: 10
  },

  button: {
    marginTop: 20
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  date: {
    fontFamily: "QuicksandBold",
    fontSize: 19,
    color: "#4D4946",
    marginTop: 30
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
    backgroundColor: "#FEB130"
  },

  meetingTime: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#fff"
  },
});