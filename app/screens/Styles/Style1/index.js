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
  ImageBackground
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '../../../components/Custom/CustomButton';
import CustomInput from '../../../components/Custom/CustomInput';

function Style1({ navigation, route }) {

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
    <View>
      <View>
        <View style={styles.main}>
          <View style={styles.addImageContainer}>
            <Text style={styles.addImageText}>Add an image of your choice as a background</Text>
            <Image
              source={require('../../../assets/img/plus-icon.png')}
              style={styles.plusIcon}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.styleContainer}
          onPress={onPress}
        >
          <ImageBackground
            source={require('../../../assets/img/placeholder-icon.png')}
            resizeMode={'cover'}
            style={styles.backgroundImage}
          >
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.publishButton}>
            <CustomButton
              text="Publish"
              height={52}
              onPress={onPress}
              color="#4D4D4D"
              borderColor="#4D4D4D"
              backgroundColor="#fff"
            />
            <Text
              style={styles.resendText}
              onPress={onPress}
            >
              Save For Later
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Style1;

const styles = StyleSheet.create({

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30
  },

  addImageText: {
    fontFamily: "QuicksandMedium",
    fontSize: 16,
    color: "#4D4D4D",
    width: "60%",
    marginTop: 5
  },

  styleContainer: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    height: 372,
    justifyContent: "center",
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 10
  },

  backgroundImage: {
    width: 122,
    height: 91.63,
  },

  addImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  plusIcon: {
    height: 59,
    width: 59
  },

  publishButton: {
    marginTop: 20,
  },

  resendText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center",
  },

  placeholderIcon: {
    height: 54,
    width: 72,
  },

  imageContainer: {
    flex: 1,
    alignItems: "flex-end"
  }
});