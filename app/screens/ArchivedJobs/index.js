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

function ArchivedJobs({ navigation }) {

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
        <View style={styles.jobsContainer}>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
              <Text style={styles.location}>Location</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
            <Text style={styles.publish}>Publish</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
              <Text style={styles.location}>Location</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
            <Text style={styles.publish}>Publish</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
              <Text style={styles.location}>Location</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
            <Text style={styles.publish}>Publish</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
              <Text style={styles.location}>Location</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
            <Text style={styles.publish}>Publish</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
              <Text style={styles.location}>Location</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
            <Text style={styles.publish}>Publish</Text>
          </View>
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobName}>Accountant</Text>
              <Text style={styles.location}>Location</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
            <Text style={styles.publish}>Publish</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ArchivedJobs;

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
    fontSize: 14,
    color: "#4D4946"
  },

  location: {
    fontFamily: "QuicksandRegular",
    fontSize: 11,
    color: "#7B7B7B"
  },

  edit: {
    fontFamily: "QuicksandRegular",
    fontSize: 12,
    color: "#7B7B7B",
    textDecorationLine: "underline"
  },

  publish: {
    fontFamily: "QuicksandMedium",
    fontSize: 11,
    color: "#FF527C",
    textDecorationLine: "underline"
  }
});