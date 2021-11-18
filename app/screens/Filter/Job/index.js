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
  Switch,
  ImageBackground,
  TextInput
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';

// Components
import CustomButton from '../../../components/Custom/CustomButton';
import CustomInput from '../../../components/Custom/CustomInput';

function Job({ navigation, route }) {

  const [focused, setFocused] = useState(false);

  const radio_props = [
    { label: 'Job Function', value: 'function' },
    { label: 'Compensation', value: 'compensation' },
    { label: 'Employment Type', value: 'type' },
    { label: 'Availability', value: 'availability' },
    { label: 'Start Date', value: 'date' },
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
  const handleSavePress = () => {
    navigation.navigate('SelectTokens');
  }


  /**
   * 
   */
  return (

    <View style={styles.main}>
      <View style={styles.addMemberContainer}>
        <TextInput
          style={[styles.searchInput, {
            borderColor: focused === false ? '#FEB130' : '#4D4D4D'
          }]}
          onFocus={() => setFocused(!focused)}
          onBlur={() => setFocused(!focused)}
        />
      </View>
      <View style={styles.radioForm}>
        <RadioForm
          radio_props={radio_props}
          initial={-1}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#FEB130'}
          selectedButtonColor={'#FEB130'}
          animation={true}
          onPress={(value) => setSelected(value)}
          style={styles.radioButton}
          labelStyle={{ fontSize: 14, color: '#4D4946', fontFamily: 'QuicksandLight' }}
        />
      </View>
      <View style={styles.applyButton}>
        <CustomButton
          text="Apply Filter"
          backgroundColor="#fff"
          borderColor="#4D4D4D"
          color="#000"
          height={52}
          onPress={onPress}
        />
      </View>
    </View>

  );
}

export default Job;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingLeft: 30,
    paddingRight: 30,
  },

  addMemberContainer: {
    marginTop: 30
  },

  addMember: {
    fontFamily: "QuicksandBold",
    fontSize: 20,
    color: "#4D4946"
  },

  searchInput: {
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
    color: "#7B7B7B",
    paddingLeft: 20,
    paddingRight: 20
  },

  radioForm: {
    marginTop: 40
  },

  applyButton: {
    marginTop: 40
  }
});