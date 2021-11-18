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
              <View style={styles.welcomeText}>
                <Text style={styles.baseText}>
                  <Text style={styles.titleText}>
                    Verification
                  </Text>
                </Text>
              </View>
              <View style={styles.loginContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require('../../assets/img/verify-img.png')}
                    style={styles.image}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    We will send you a <Text style={styles.textVerify}>Verification Code</Text> to your phone number
                  </Text>
                </View>
                <View style={styles.verifyButton}>
                  <CustomButton
                    text="Verify"
                    height={52}
                    onPress={() => navigation.navigate('ConfirmationEmployee')}
                    color="#4D4D4D"
                    borderColor="#4D4D4D"
                    backgroundColor="#fff"
                  />
                  <Text
                    style={styles.resendCodeText}
                    onPress={onPress}
                  >
                    Resend Code
                  </Text>
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
  },

  welcomeText: {
    marginTop: 40,
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
    height: 540,
    backgroundColor: "#fff",
    position: "relative",
    borderWidth: 2,
    borderColor: "#FF527C",
    paddingRight: 20,
    paddingLeft: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    marginTop: 20
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
  }
});