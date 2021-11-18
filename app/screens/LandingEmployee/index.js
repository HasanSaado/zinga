// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from "react-native";
import RadioForm from 'react-native-simple-radio-button';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function VerificationEmployee({ navigation }) {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const radio_props = [
    { label: 'Employer', value: 'employer' },
    { label: 'Recruitment Agency', value: 'agency' }
  ];


  /**
   * 
   */
  const onPress = () => {
    console.log(email);
  }

  /**
   * 
   */
  const handleJoinPress = () => {
    navigation.navigate('Register');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <ImageBackground
              source={require('../../assets/img/bg-bw.png')}
              resizeMode={'cover'}
              style={styles.backgroundImage}
            >
              <View style={styles.topIcons}>
                <Image
                  source={require('../../assets/img/notifications-icon.png')}
                  style={styles.notificationsIcon}
                />
                <Image
                  source={require('../../assets/img/settings-icon.png')}
                  style={styles.settingsIcon}
                />
              </View>
              <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                  <Image
                    source={require('../../assets/img/logo-blue.png')}
                    style={styles.logo}
                  />
                </View>
                <View style={styles.headerContainer}>
                  <Text style={styles.name}>Zinga</Text>
                  <Text style={styles.position}>HR Specialist</Text>
                  <Text style={styles.role}>87 Employees</Text>
                  <View style={styles.location}>
                    <Image
                      source={require('../../assets/img/location-icon.png')}
                      style={styles.locationIcon}
                    />
                    <Text style={styles.locationText}> UAE | DUBAI</Text>
                  </View>
                </View>
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.icon}
                    source={require('../../assets/img/facebook.png')}
                  />
                  <Image
                    style={styles.icon}
                    source={require('../../assets/img/linkedin.png')}
                  />
                  <Image
                    style={styles.icon}
                    source={require('../../assets/img/twitter.png')}
                  />
                  <Image
                    style={styles.icon}
                    source={require('../../assets/img/edit.png')}
                  />
                </View>
                <View style={styles.cardContainer}>
                  <View style={styles.card}>
                    <Image
                      style={styles.dashboardIcon}
                      source={require('../../assets/img/dashboard.png')}
                    />
                    <Text style={styles.dashboardText}>Dashboard</Text>
                  </View>
                  <View style={styles.card}>
                    <Image
                      style={styles.teamsIcon}
                      source={require('../../assets/img/teams.png')}
                    />
                    <Text style={styles.teamsText}>View Team</Text>
                  </View>
                </View>
                <View style={styles.availableTokens}>
                  <Text>100</Text>
                  <Text>Available Tokens</Text>
                </View>
                <View style={styles.addTokenButton}>
                  <CustomButton
                    text="Add Tokens"
                    height={70}
                    onPress={onPress}
                    color="#fff"
                    backgroundColor="#FEB130"
                    borderColor="#FEB130"
                    type="image"
                    image={require('../../assets/img/wallet-icon.png')}
                  />
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default VerificationEmployee;

/**
 * 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEDED"
  },

  welcomeText: {
    alignItems: "center",
  },

  baseText: {
    fontFamily: "QuicksandBold",
    fontSize: 35,
  },

  titleText: {
    color: "#4D4D4D",
    textAlign: "center"
  },

  backgroundImage: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },

  loginContainer: {
    height: 550,
    backgroundColor: "#fff",
    position: "relative",
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 90,
    marginTop: 40
  },

  loginText: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#7B7B7B"
  },

  registerForm: {
    marginTop: 30
  },

  radioButton: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  registerButton: {
    marginTop: 10,
  },

  forgotPasswordText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 5,
    color: "#FF7542",
    textAlign: "center",
  },

  image: {
    width: 146,
    height: 293
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 30
  },

  textContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
  },

  text: {
    fontFamily: "QuicksandLight",
    fontSize: 15,
    color: "#4D4D4D"
  },

  verifyButton: {
    marginTop: 20,
  },

  resendCodeText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center",
  },

  topIcons: {
    flex: 1,
    flexDirection: "row-reverse",
  },

  settingsIcon: {
    height: 27.15,
    width: 27.15,
  },

  notificationsIcon: {
    height: 24.14,
    width: 20.05,
    marginLeft: 60
  },

  logo: {
    height: 77.87,
    width: 77.87
  },

  logoContainer: {
    position: 'absolute',
    right: 0,
    top: -30,
    borderWidth: 1,
    borderColor: '#FF7542',
    backgroundColor: '#fff',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 10,
    height: 146,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontFamily: "QuicksandBold",
    fontSize: 44,
    color: "#4D4D4D"
  },

  headerContainer: {
    marginTop: 20
  },

  position: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D"
  },

  role: {
    fontFamily: "QuicksandMedium",
    fontSize: 13,
    color: "#FF7542"
  },

  location: {
    flexDirection: "row",
    marginTop: 3
  },

  locationIcon: {
    height: 22.76,
    width: 15.26
  },

  locationText: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#FEB130"
  },

  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  icon: {
    height: 59,
    width: 59
  },

  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0
  },

  card: {
    height: 87,
    width: 126,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },

  dashboardIcon: {
    height: 19,
    width: 19.19
  },

  teamsIcon: {
    height: 19.95,
    width: 36.87
  },

  dashboardText: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#FF7542"
  },

  teamsText: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#FF527C"
  },

  addTokenButton: {
    width: "100%",
    marginTop: 30
  },

  availableTokens: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#FF527C",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 60
  }
});