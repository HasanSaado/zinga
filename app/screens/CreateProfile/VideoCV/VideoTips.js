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

function VideoTips({ navigation }) {

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
          <Text style={styles.title}>Tips</Text>
          <View style={styles.list}>
            <Text style={styles.listHeader}>1. Write a script.</Text>
            <Text style={styles.text}>In this first step, make a plan for what you want to say.</Text>
            <Text style={styles.text}>A simple introduction, what you are currently doing, your top achievements and where you are headed in future.</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeader}>2. Prepare a filming space</Text>
            <Text style={styles.text}>Set up a silent quiet space with a neutral background and good lighting.</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeader}>3. Set up a recording device</Text>
            <Text style={styles.text}>Set the recording device high enough to capture your face and shoulders in the frame.</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeader}>4. Record several takes</Text>
            <Text style={styles.text}>Record your video several times using different expressions and vocal tones to ensure you appear comfortable, engaged and polished throughout.</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeader}>5. Collect additional visuals</Text>
            <Text style={styles.text}>Consider including infographics, photographs or clippings if relevant.</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeader}>6. Edit the video and get feedback</Text>
            <Text style={styles.text}>Review all of the footage you’ve captured, and select the best takes. To compile the video, you can use an editing software or an application.</Text>
          </View>
          <View style={styles.list}>
            <View style={styles.topTips}>
              <Image
                style={styles.starIcon}
                source={require('@assets/img/star-dark.png')}
              />
              <Text style={[styles.listHeader, {marginTop: 5}]}> Top Tips:</Text>
            </View>
            <Text style={styles.text}>1. Focus on a specific experience or skill.</Text>
            <Text style={styles.text}>2. Discuss an element that isn’t in your application – like a hobby or interest.</Text>
            <Text style={styles.text}>3. Dress professionally.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default VideoTips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30
  },

  title: {
    textAlign: "center",
    fontFamily: "QuicksandMedium",
    fontSize: 34,
    color: "#4D4D4D",
    marginTop: 20
  },

  list: {
    marginTop: 40
  },

  listHeader: {
    fontFamily: "QuicksandMedium",
    fontSize: 14,
    color: "#4D4D4D"
  },

  text: {
    marginTop: 10,
    fontFamily: "QuicksandRegular",
    color: "#4D4D4D",
    fontSize: 14
  },

  topTips: {
    flex: 1,
    flexDirection: "row"
  },

  starIcon: {
    height: 26.94,
    width: 28.15
  }
});