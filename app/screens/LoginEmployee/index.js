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

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function LoginEmployee({ navigation }) {
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
                    Welcome Back
                    {"\n"}
                  </Text>
                  <Text style={styles.textName}>Patricia</Text>
                </Text>
              </View>
              <Text style={styles.loginText}>Log into your account</Text>
              <View style={styles.loginContainer}>
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
                    height={52}
                    onPress={onPress}
                    color="#fff"
                    borderColor="#FEB130"
                    onPress={onPress}
                    type="gradient"
                  />
                  <Text style={styles.registerText}>
                    <Text style={styles.accountText}>Don't have an account? </Text>
                    <Text style={styles.joinNowText} onPress={() => navigation.navigate('RegisterEmployee')}>Join Now</Text>
                  </Text>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginEmployee;

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
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 20,
    position: "absolute",
    right: 20,
    top: -60
  },

  loginForm: {
    marginTop: 20
  },

  loginTitle: {
    fontFamily: 'QuicksandBold',
    color: '#FEB130',
    fontSize: 43,
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
  },

  forgotPasswordText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center"
  },

  backgroundImage: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },

  loginContainer: {
    height: 420,
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
    marginTop: 40
  },

  loginText: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#7B7B7B"
  }
});