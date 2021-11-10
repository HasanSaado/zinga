// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import RadioForm from 'react-native-simple-radio-button';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function Register({ navigation }) {

  // State
  const [selected, setSelected] = useState('employer');

  const radio_props = [
    { label: 'Employer', value: 'employer' },
    { label: 'Recruitment Agency', value: 'agency' }
  ];



  /**
   * 
   */
  const handleSignUpPress = () => {
    navigation.navigate('Verification');
  }

  /**
   * 
   */
  const handleLoginPress = () => {
    navigation.navigate('Login');
  }

  /**
   * 
   */
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.titleText}>
          Create Account
        </Text>
      </View>
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
          height={48}
          onPress={handleSignUpPress}
          color="#fff"
          fontWeight="bold"
          borderColor="#FEB130"
          type="gradient"
        />
        <Text
          style={styles.forgotPasswordText}
          onPress={handleLoginPress}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}

export default Register;

/**
 * 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 50,
    paddingRight: 50
  },

  welcomeText: {
    alignItems: "center",
    marginTop: 40
  },

  titleText: {
    color: "#4D4D4D",
    textAlign: "center",
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 30
  },

  registerForm: {
    marginTop: 30
  },

  registerButton: {
    marginTop: 20,
  },

  forgotPasswordText: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center",
  },

  radioButton: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});