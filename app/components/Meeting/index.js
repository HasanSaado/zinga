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

function Meeting({ navigation }) {

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
    <View style={styles.container}>
      <Text style={styles.title}>Meeting 1</Text>
      <View style={styles.dateContainer}>
        <Image
          source={require('../../assets/img/arw-left.png')}
          style={styles.arrow}
        />
        <Text>
          <Text style={styles.date}>March, 2</Text><Text style={styles.day}> Monday</Text>
        </Text>
        <Image
          source={require('../../assets/img/arw-right.png')}
          style={styles.arrow}
        />
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.time}>10:30</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.time}>10:30</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.time}>10:30</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.time}>10:30</Text>
        </View>
      </View>
      <Text style={styles.zoom}>Zoom link</Text>
    </View>
  );
}

export default Meeting;

const styles = StyleSheet.create({

  container: {
    marginTop: 20
  },

  title: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4946"
  },

  dateContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  arrow: {
    height: 16.38,
    width: 9.37,
    marginTop: 10
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
    borderColor: "#4D4D4D",
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 10
  },

  time: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#4D4946"
  },

  zoom: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#FF527C",
    textDecorationLine: "underline",
    marginTop: 15
  }
});