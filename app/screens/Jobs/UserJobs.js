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

function UserJobs({ navigation }) {

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
            <TouchableOpacity onPress={() => navigation.navigate('JobApply')}>
              <Text style={styles.jobTitle}>Accountant</Text>
              <Text style={styles.jobLocation}>Dubai, UAE</Text>
              <Text style={styles.jobTime}>12 hours ago</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Employer Tag</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserJobs;

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
    marginTop: 7
  },

  buttonText: {
    color: "#fff",
    fontFamily: "QuicksandRegular",
    fontSize: 10,
  }
});