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
  ScrollView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function Login({ navigation }) {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.welcomeText}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>
                Welcome Back
                {"\n"}
              </Text>
              <Text style={styles.textName}>Patricia</Text>
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/img/user-img.png')}
              style={styles.userImage}
            />
          </View>
          <View style={styles.loginForm}>
            <Text style={styles.loginTitle}>Log In</Text>
            <CustomInput
              placeholder="Email"
              border="#4D4D4D"
              borderWidth={2}
              onChangeText={setEmail}
            />
            <CustomInput
              placeholder="Password"
              border="#4D4D4D"
              borderWidth={2}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.loginButton}>
            <CustomButton
              text="Log In"
              height={48}
              onPress={onPress}
              color="#fff"
              fontWeight="bold"
              borderColor="#FEB130"
              onPress={onPress}
              type="gradient"
            />
            <Text style={styles.registerText}>
              <Text style={styles.accountText}>Don't have an account? </Text>
              <Text style={styles.joinNowText} onPress={handleJoinPress}>Join Now</Text>
            </Text>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Login;

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

  baseText: {
    fontFamily: "QuicksandBold",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },

  titleText: {
    color: "#4D4D4D",
    textAlign: "center"
  },

  textName: {
    color: "#7B7B7B"
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 20
  },

  userImage: {
    width: 136,
    height: 136,
    borderRadius: 400 / 2
  },

  loginForm: {
    marginTop: 20
  },

  loginTitle: {
    fontFamily: 'QuicksandBold',
    color: '#FEB130',
    fontSize: 43,
    fontWeight: 'bold',
    marginBottom: 20
  },

  loginButton: {
    marginTop: 20
  },

  registerText: {
    fontFamily: 'QuicksandBold',
    fontSize: 12,
    textAlign: 'center'
  },

  accountText: {
    color: "#7B7B7B"
  },

  joinNowText: {
    color: "#FF7542",
    fontWeight: "bold",
  },

  forgotPasswordText: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center"
  }
});