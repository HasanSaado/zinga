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

function RegsiterEmployee({ navigation }) {
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
                    Create Account
                  </Text>
                </Text>
              </View>
              <View style={styles.loginContainer}>

                <View style={styles.registerForm}>
                  <CustomInput
                    placeholder="First Name"
                    border="#4D4D4D"
                    borderWidth={1}
                  />
                  <CustomInput
                    placeholder="Last Name"
                    border="#4D4D4D"
                    borderWidth={1}
                  />
                  <CustomInput
                    placeholder="Email"
                    border="#4D4D4D"
                    borderWidth={1}
                  />
                  <CustomInput
                    placeholder="Phone Number"
                    border="#4D4D4D"
                    borderWidth={1}
                    keyboardType="numeric"
                  />
                  <CustomInput
                    placeholder="Password"
                    border="#4D4D4D"
                    borderWidth={1}
                    secureTextEntry={true}
                  />
                  <CustomInput
                    placeholder="Confirm Password"
                    border="#4D4D4D"
                    borderWidth={1}
                    secureTextEntry={true}
                  />
                </View>
                <View>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#FF7542'}
                    selectedButtonColor={'#FF7542'}
                    animation={true}
                    onPress={(value) => setSelected(value)}
                    style={styles.radioButton}
                    labelStyle={{ fontSize: 12, color: '#4D4D4D', fontFamily: 'QuicksandBold' }}
                  />
                </View>
                <View style={styles.registerButton}>
                  <CustomButton
                    text="Sign Up"
                    height={52}
                    onPress={() => navigation.navigate('VerificationEmployee')}
                    color="#fff"
                    borderColor="#FEB130"
                    type="gradient"
                  />
                  <Text
                    style={styles.forgotPasswordText}
                    onPress={onPress}
                  >
                    Sign In
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

export default RegsiterEmployee;

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
});