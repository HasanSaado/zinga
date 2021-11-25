// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

// Components
import CustomButton from '@components/Custom/CustomButton';
import CustomInput from '@components/Custom/CustomInput';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

function VideoConfirmation({ navigation }) {

  const radio_props = [
    { label: 'Below 3000', value: 0 },
    { label: 'Between 3000-5000', value: 1 },
    { label: 'Between 5000-7000', value: 2 },
    { label: 'Between 7500-10000', value: 3 },
  ];

  const radio_props2 = [
    { label: 'Yes', value: 0 },
    { label: 'No', value: 1 },
  ];

  const radio_props3 = [
    { label: 'Less than one year', value: 0 },
    { label: '1-2 years', value: 1 },
    { label: '3-5 years', value: 2 },
    { label: 'Above 6 years', value: 3 },
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Confirmation</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('@assets/img/check-gradient.png')}
              style={styles.checkedIcon}
            />
          </View>
          <Text style={styles.uploaded}>Uploaded</Text>
          <Text style={styles.info}>Thanks, we got your video!</Text>
          <Text style={styles.info}>We know you so much better now!</Text>
          <Text style={styles.info}>Your video will be uploaded within 24-48 hours</Text>
          <View style={styles.button}>
            <CustomButton
              text="View Profile"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('JobSeekerProfile')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default VideoConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingRight: 30,
    paddingLeft: 30,
  },

  button: {
    width: "100%",
    marginTop: 30
  },

  title: {
    textAlign: "center",
    fontFamily: "QuicksandMedium",
    fontSize: 34,
    color: "#4D4D4D",
    marginTop: 20
  },

  imageContainer: {
    marginTop: 80,
    alignItems: "center"
  },

  checkedIcon: {
    height: 110.62,
    width: 148.35
  },

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 20
  },

  bullet: {
    width: 20
  },

  bulletText: {
    flex: 1
  },

  normalText: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#4D4D4D"
  },

  info: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#4D4D4D",
    textAlign: "center",
    marginTop: 20
  },

  needHelp: {
    fontFamily: "QuicksandBold",
    color: "#FEB130",
    fontSize: 12,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20
  },

  uploaded: {
    textAlign: "center",
    fontFamily: "QuicksandMedium",
    fontSize: 40,
    color: "#4D4D4D",
    marginTop: 15
  }
});