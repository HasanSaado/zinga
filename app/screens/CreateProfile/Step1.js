// Libraries
import React from "react";
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
import RadioForm from 'react-native-simple-radio-button';

function Step1({ navigation }) {

  const radio_props = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
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
          <View style={styles.imageContainer}>
            <Image style={styles.plusIcon} source={require('../../assets/img/plus-icon.png')} />
            <Image style={styles.image} source={require('../../assets/img/jessica.png')} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.userName}>Jessica Smith</Text>
            <Text style={styles.userEmail}>JessicaSmith@mail.com</Text>
            <CustomInput
              type="icon"
              placeholder="Date of Birth"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
              icon={require('@assets/img/date-picker-icon.png')}
            />
            <Text style={styles.genderLabel}>Gender</Text>
            <View>
              <RadioForm
                radio_props={radio_props}
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
            <CustomInput
              placeholder="Nationality"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
            />
            <CustomInput
              placeholder="Country of Residence"
              border="#4D4D4D"
              borderWidth={1}
              color="#4D4D4D"
              fontSize={15}
            />
            <Image
              source={require('../../assets/img/path-icon.png')}
              style={styles.pathIcon}
            />
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Save & Continue"
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

export default Step1;

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

  genderLabel: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D"
  },

  radioButton: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 5
  },

  pathIcon: {
    height: 32.89,
    width: 22.05
  }
});