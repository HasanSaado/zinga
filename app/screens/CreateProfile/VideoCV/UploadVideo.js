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

function UploadVideo({ navigation }) {

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
          <Text style={styles.title}>Upload a Video</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('@assets/img/upload-gradient.png')}
              style={styles.uploadIcon}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              text="Upload"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('VideoConfirmation')}
            />
          </View>
          <Text style={styles.getNoticed}>Let your personality shine through in your video</Text>
          <Text style={styles.getNoticed}>Get noticed by potential Employers!</Text>
          <View style={styles.column}>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{'\u2022' + " "}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>Upload a 30 second preview video of yourself</Text>
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{'\u2022' + " "}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>Record the video in landscape view</Text>
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{'\u2022' + " "}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>Talk about your skills, achievements, experience</Text>
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={styles.needHelp}
            onPress={() => navigation.navigate('VideoTips')}
          >
            Need more help with video CV?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UploadVideo;

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

  uploadIcon: {
    height: 112.95,
    width: 93.02
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

  getNoticed: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#4D4D4D",
    textAlign: "center"
  },

  needHelp: {
    fontFamily: "QuicksandBold",
    color: "#FEB130",
    fontSize: 12,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20
  }
});