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
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function ChangePassword({ navigation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  /**
   * 
   */
  const onPress = () => {
    alert('token');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Old Password"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
              secureTextEntry={true}
            />
            <CustomInput
              placeholder="New Password"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
              secureTextEntry={true}
            />
            <CustomInput
              placeholder="Confirm Password"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Save Changes"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={onPress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({

  visaCard: {
    height: 182,
    borderRadius: 20,
    padding: 30,
    marginTop: 30
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingRight: 30,
    paddingLeft: 30,
  },

  addTokenButton: {
    width: "100%",
    marginTop: 30
  },

  formContainer: {
    marginTop: 30
  },

  cardName: {
    fontFamily: "QuicksandBold",
    fontSize: 25,
    color: "#fff"
  },

  visaBottom: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 60
  },

  visaIcon: {
    height: 25.2,
    width: 82.2
  },

  visaValid: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#fff"
  },

  visaDate: {
    fontFamily: "QuicksandLight",
    fontSize: 12,
    color: "#fff"
  }
});