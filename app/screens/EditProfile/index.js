// Libraries
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function EditProfile({ navigation }) {

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
          <View>
            <Text style={styles.changePassword}>Change Password</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.plusIcon} source={require('../../assets/img/plus-icon.png')} />
            <Image style={styles.image} source={require('../../assets/img/jessica.png')} />
          </View>
          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Job Title"
              border="#4D4D4D"
              borderWidth={1}
            />
            <CustomInput
              placeholder="Phone Number"
              border="#4D4D4D"
              borderWidth={1}
            />
            <CustomInput
              placeholder="Meeting URL"
              border="#4D4D4D"
              borderWidth={1}
            />
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Save"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              fontWeight="bold"
              height={50}
              onPress={onPress}
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
    fontWeight: "bold",
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
  }
});