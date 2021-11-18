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
import RadioForm from 'react-native-simple-radio-button';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function CreateCompany({ navigation }) {
  const [selected, setSelected] = useState(false);
  const radio_props = [
    { label: 'Terms & Conditions', value: true },
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image
              style={styles.plusIcon}
              source={require('../../assets/img/plus-icon.png')}
            />
            <Text style={styles.logoText}>Company Logo</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <CustomInput
            placeholder="Company Name"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Industry"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Country"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="City"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Location"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Address"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Number of employees"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Website URL"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Facebook URL"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Twitter URL"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Description"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
            multiline={true}
            numberOfLines={3}
          />
          <CustomInput
            placeholder="Additional Info"
            border="#4D4D4D"
            borderWidth={1}
            color="#4D4D4D"
            multiline={true}
            numberOfLines={3}
          />
        </View>
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={-1}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#FEB130'}
            selectedButtonColor={'#FEB130'}
            animation={true}
            onPress={(value) => setSelected(value)}
            style={styles.radioButton}
            labelStyle={{ fontSize: 12, color: '#4D4D4D', fontFamily: 'QuicksandBold', textDecorationLine: 'underline' }}
          />
        </View>
        <View style={styles.addTokenButton}>
          <CustomButton
            text="Post Job"
            backgroundColor="#fff"
            borderColor="#4D4D4D"
            color="#000"
            height={50}
            onPress={onPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateCompany;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },

  formContainer: {
    marginTop: 30
  },

  addTokenButton: {
    width: "100%",
    marginTop: 30
  },

  logoContainer: {
    flex: 1,
    alignItems: "center",
  },

  logo: {
    borderRadius: 400 / 2,
    height: 174,
    width: 174,
    backgroundColor: "#FEB130",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  logoText: {
    fontFamily: "QuicksandBold",
    fontSize: 29,
    color: "#fff",
    textAlign: "center",
  },

  plusIcon: {
    height: 40,
    width: 40,
    position: "absolute",
    zIndex: 999,
    top: 10,
    right: 10
  }
});