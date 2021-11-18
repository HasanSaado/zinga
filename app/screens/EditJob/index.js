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

function EditJob({ navigation }) {

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
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('InterviewRequest', { name: 'Accountant' })}>
              <Image
                style={styles.image}
                source={require('../../assets/img/user-img.png')}
              />
              <Image
                style={styles.play}
                source={require('../../assets/img/play-circle.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.positionRow}>
            <Text style={styles.position}>Marketing Manager </Text>
            <Image
              source={require('../../assets/img/lock-icon.png')}
              style={styles.lock}
            />
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.positionNumber}>27</Text>
            <View style={styles.row}>
              <Image
                style={styles.flagIcon}
                source={require('../../assets/img/flag-icon.png')}
              />
              <Text style={styles.country}> England</Text>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.pathIcon}
                source={require('../../assets/img/path-icon.png')}
              />
              <Text style={styles.country}> United Arab Emirates</Text>
            </View>
          </View>
          <View style={styles.iconRow}>
            <View style={styles.starContainer}>
              <Image
                source={require('../../assets/img/star.png')}
                style={styles.starIcon}
              />
              <Text style={styles.starText}>14</Text>
            </View>
            <Image
              source={require('../../assets/img/info-icon.png')}
              style={styles.infoIcon}
            />
            <Image
              source={require('../../assets/img/clock-icon.png')}
              style={styles.icon}
            />
            <View style={styles.starContainer}>
              <Image
                source={require('../../assets/img/circle.png')}
                style={styles.icon}
              />
              <Image
                source={require('../../assets/img/mail-icon.png')}
                style={styles.mailIcon}
              />
            </View>
            <Image
              source={require('../../assets/img/tel-icon.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.experience}>Experience Details</Text>
          <View>
            <Text style={styles.resumeTitle}>Marketing Manager</Text>
            <Text style={styles.resumeSubTitle}>Telecom, Fatal Group, 5years</Text>
          </View>
          <View>
            <Text style={styles.resumeTitle}>Junior Manager</Text>
            <Text style={styles.resumeSubTitle}>Telecom, Thumayr Contracting, 5 years</Text>
          </View>
          <View>
            <Text style={styles.resumeTitle}>Skills</Text>
            <Text style={styles.resumeSubTitle}>SEO/SEM, General Management, Accounting, Stem Skills.</Text>
          </View>
          <View>
            <Text style={styles.resumeTitle}>Skills</Text>
            <Text style={styles.resumeSubTitle}>SEO/SEM, General Management, Accounting, Stem Skills.</Text>
          </View>
          <View>
            <Text style={styles.resumeTitle}>Visa Type</Text>
            <Text style={styles.resumeSubTitle}>Type 1</Text>
          </View>
          <View>
            <Text style={styles.resumeTitle}>Expected Compensation</Text>
            <Text style={styles.resumeSubTitle}>AED 7,000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditJob;

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
    position: "relative"
  },

  image: {
    height: 140,
    width: 140,
    borderRadius: 400 / 2
  },

  play: {
    height: 35,
    width: 35,
    position: "absolute",
    right: 0
  },

  positionRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15
  },

  locationRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between"
  },

  position: {
    fontFamily: "QuicksandBold",
    fontSize: 23,
    color: "#4D4D4D"
  },

  lock: {
    height: 21.48,
    width: 18.8,
    marginTop: 7
  },

  positionNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 32,
    color: "#FEB130"
  },

  row: {
    flexDirection: "row",
    marginTop: 15
  },

  flagIcon: {
    height: 18.91,
    width: 18.62
  },

  country: {
    fontFamily: "QuicksandRegular",
    fontSize: 12,
    color: "#4D4D4D"
  },

  pathIcon: {
    height: 20.22,
    width: 13.55
  },

  iconRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between"
  },

  starIcon: {
    height: 46,
    width: 48,
  },

  starContainer: {
    position: "relative"
  },

  starText: {
    position: "absolute",
    top: 10,
    right: 16,
    fontSize: 19,
    fontFamily: "QuicksandBold",
    color: "#4D4D4D"
  },

  infoIcon: {
    height: 49.21,
    width: 53.31
  },

  icon: {
    height: 49.79,
    width: 49.79
  },

  mailIcon: {
    position: 'absolute',
    height: 20.5,
    width: 25.63,
    top: 15,
    right: 12
  },

  experience: {
    fontFamily: "QuicksandMedium",
    fontSize: 22,
    color: "#4D4D4D",
    marginTop: 15
  },

  resumeTitle: {
    marginTop: 15,
    fontFamily: "QuicksandMedium",
    fontSize: 14,
    color: "#4D4D4D"
  },

  resumeSubTitle: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#4D4D4D"
  }
});