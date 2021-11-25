// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

function Step2({ navigation }) {

  const radio_props = [
    { label: 'Type 1', value: 0 },
    { label: 'Type 2', value: 1 },
    { label: 'Type 3', value: 2 },
    { label: 'Type 4', value: 3 },
  ];

  const radio_props2 = [
    { label: 'Full Time', value: 0 },
    { label: 'Part Time', value: 1 },
  ];

  /**
   * 
   */
  const onPress = () => {
    alert('token');
  }

  /**
   * 
   */
  const handleNotificationsPress = () => {
    navigation.navigate('Notifications');
  }

  /**
   * 
   */
  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  }

  /**
   * 
   */
  const handleAddTokensPress = () => {
    navigation.navigate('TokensSpent');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.formContainer}>
            <Text style={styles.radioLabel}>Visa Type</Text>
            <View>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#FEB130'}
                selectedButtonColor={'#FEB130'}
                animation={true}
                onPress={(value) => setSelected(value)}
                style={styles.radioButton}
                labelStyle={{ fontSize: 11, color: '#4D4D4D', fontFamily: 'QuicksandRegular' }}
              />
            </View>
            <Text style={styles.radioLabel}>Employment Type</Text>
            <View>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#FEB130'}
                selectedButtonColor={'#FEB130'}
                animation={true}
                onPress={(value) => setSelected(value)}
                style={styles.radioButton}
                labelStyle={{ fontSize: 11, color: '#4D4D4D', fontFamily: 'QuicksandRegular' }}
              />
            </View>
            <CustomInput
              placeholder="Educational Qualification"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Educational Institution"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <Text style={styles.radioLabel}>Availability</Text>
            <View>
              <RadioForm
                radio_props={radio_props2}
                initial={0}
                formHorizontal={true}
                labelHorizontal={true}
                buttonColor={'#FEB130'}
                selectedButtonColor={'#FEB130'}
                animation={true}
                onPress={(value) => setSelected(value)}
                style={styles.radioButton}
                labelStyle={{ fontSize: 11, color: '#4D4D4D', fontFamily: 'QuicksandRegular' }}
              />
            </View>
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Continue"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('Step3')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Step2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingRight: 30,
    paddingLeft: 30,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 30,
    position: "relative"
  },

  image: {
    height: 183,
    width: 191,
    borderRadius: 400 / 2
  },

  addTokenButton: {
    width: "100%",
    marginTop: 30
  },

  changePassword: {
    textAlign: "right",
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#FF7542",
    textDecorationLine: "underline"
  },

  plusIcon: {
    height: 40,
    width: 40,
    position: "absolute",
    zIndex: 999,
    top: 10,
    right: 80
  },

  formContainer: {
    marginTop: 10
  },

  userName: {
    fontFamily: "QuicksandMedium",
    fontSize: 20,
    color: "#4D4D4D"
  },

  userEmail: {
    fontFamily: "QuicksandRegular",
    fontSize: 15,
    color: "#4D4D4D"
  },

  radioLabel: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D",
    marginTop: 10
  },

  radioButton: {
    justifyContent: 'space-between',
    marginTop: 5,
    flexBasis: "50%"
  },

  pathIcon: {
    height: 32.89,
    width: 22.05
  }
});