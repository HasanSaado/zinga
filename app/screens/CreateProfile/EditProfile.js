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
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

function EditProfile({ navigation }) {

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
          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Industry"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <Text style={styles.radioLabel}>Expected Compensation</Text>
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
                labelStyle={{ fontSize: 10, color: '#4D4D4D', fontFamily: 'QuicksandRegular' }}
              />
            </View>
            <CustomInput
              placeholder="Hard Skills"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Soft Skills"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Other"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
              numberOfLines={3}
              multiline={true}
            />
            <Text style={styles.radioLabel}>Driving License</Text>
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
                labelStyle={{ fontSize: 10, color: '#4D4D4D', fontFamily: 'QuicksandRegular' }}
              />
            </View>
            <Text style={styles.radioLabel}>Total Experience</Text>
            <View>
              <RadioForm
                radio_props={radio_props3}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#FEB130'}
                selectedButtonColor={'#FEB130'}
                animation={true}
                onPress={(value) => setSelected(value)}
                style={styles.radioButton}
                labelStyle={{ fontSize: 10, color: '#4D4D4D', fontFamily: 'QuicksandRegular' }}
              />
            </View>
            <Text style={styles.radioLabel}>Languages</Text>
            <CustomInput
              placeholder=""
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <Text style={styles.radioLabel}>Last two employment details</Text>
            <Text style={styles.radioLabel}>Job 1</Text>
            <CustomInput
              placeholder="Job Title"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Industry"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Employer"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              type="icon"
              placeholder="From"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
              icon={require('@assets/img/date-picker-icon.png')}
            />
            <CustomInput
              type="icon"
              placeholder="To"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
              icon={require('@assets/img/date-picker-icon.png')}
            />
            <CustomInput
              placeholder="Location"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <Text style={styles.radioLabel}>Job 2</Text>
            <CustomInput
              placeholder="Job Title"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Industry"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              placeholder="Employer"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <CustomInput
              type="icon"
              placeholder="From"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
              icon={require('@assets/img/date-picker-icon.png')}
            />
            <CustomInput
              type="icon"
              placeholder="To"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
              icon={require('@assets/img/date-picker-icon.png')}
            />
            <CustomInput
              placeholder="Location"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={17}
            />
            <TouchableOpacity onPress={() => navigation.navigate('UploadVideo')}>
              <View style={styles.uploadVideoContainer}>
                <Image
                  source={require('../../assets/img/video.png')}
                  style={styles.videoIcon}
                />
                <Text style={styles.videoText}>Record Video</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Save"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('PreferredLocation')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
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
    marginTop: 10
  },

  radioLabel: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D",
    marginTop: 10
  },

  radioButton: {
    justifyContent: 'space-between',
    marginTop: 5,
    flexBasis: "50%"
  },

  uploadVideoContainer: {
    height: 186,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FF527C",
    borderRadius: 20
  },

  videoIcon: {
    height: 21,
    width: 33
  },

  videoText: {
    fontFamily: "QuicksandRegular",
    fontSize: 17,
    color: "#fff",
    marginTop: 15
  }
});