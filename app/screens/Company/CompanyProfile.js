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

function CompanyProfile({ navigation }) {

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
          <View style={styles.top}>
            <Text style={styles.jobsPosts}>
              <Text style={styles.postsNumber}>85</Text> Job Posts
            </Text>
            <Text style={styles.jobsPosts}>
              <Text style={styles.postsNumber}>1,500</Text> Followers
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>COMPANY LOGO</Text>
            </View>
          </View>
          <Text style={styles.companyName}>Zinga</Text>
          <View style={styles.header}>
            <View>
              <Text style={styles.jobTitle}>HR Specialist</Text>
              <View style={styles.location}>
                <Image
                  style={styles.locationIcon}
                  source={require('../../assets/img/location-icon.png')}
                />
                <Text style={styles.locationText}> UAE | DUBAI</Text>
              </View>
              <Text style={styles.employees}>1,500 Employees</Text>
            </View>
          </View>
          <View style={styles.socialContainer}>
            <View style={styles.socialIcons}>
              <Image
                source={require('@assets/img/facebook.png')}
                style={styles.icon}
              />
              <Image
                source={require('@assets/img/linkedin.png')}
                style={styles.icon}
              />
              <Image
                source={require('@assets/img/twitter.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.website}>Website</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</Text>
            <Text style={styles.description2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</Text>
          </View>
          <Text style={styles.activeJobs}>Active Jobs</Text>
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
              <Text style={styles.title}>Accountant</Text>
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

export default CompanyProfile;

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

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  companyName: {
    fontFamily: "QuicksandBold",
    fontSize: 44,
    color: "#4D4D4D",
    marginTop: 20
  },

  jobTitle: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D"
  },

  locationIcon: {
    height: 22.7,
    width: 15.2
  },

  locationText: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#FEB130",
  },

  location: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },

  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  jobsPosts: {
    fontFamily: "QuicksandRegular",
    fontSize: 13,
    color: "#4D4D4D"
  },

  postsNumber: {
    fontFamily: "QuicksandMedium",
    color: "#FEB130"
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  logo: {
    height: 138.57,
    width: 138.57,
    borderRadius: 400 / 2,
    backgroundColor: "#FEB130",
    alignItems: "center",
    justifyContent: "center"
  },

  logoText: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center"
  },

  employees: {
    fontFamily: "QuicksandRegular",
    fontSize: 13,
    color: "#4D4D4D"
  },

  socialContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  socialIcons: {
    flex: 1,
    flexDirection: "row",
  },

  icon: {
    height: 42.41,
    width: 42.41,
    marginRight: 10
  },

  website: {
    fontFamily: "QuicksandMedium",
    fontSize: 13,
    color: "#FEB130",
    textDecorationLine: "underline",
    marginTop: 15
  },

  descriptionContainer: {
    marginTop: 20
  },

  description1: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#000000",
    marginBottom: 10
  },

  description2: {
    fontFamily: "QuicksandRegular",
    fontSize: 12,
    color: "#000000"
  },

  activeJobs: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#4D4D4D",
    marginTop: 20
  },

  banner: {
    width: "100%",
    height: 479,
    marginTop: 10
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

  title: {
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