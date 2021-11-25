// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import { Button } from 'react-native-paper';

function SeekerJobHeader({ navigation, item, index }) {

  /**
   * 
   */
  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <Image
          style={styles.jobLogo}
          source={require('@assets/img/job-logo.png')}
        />
        <Text style={styles.companyName}> Zinga</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SeekerJobHeader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  row: {
    flex: 1,
    flexDirection: "row"
  },

  jobLogo: {
    height: 45,
    width: 45
  },

  companyName: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D",
    marginTop: 7
  },

  button: {
    borderColor: "#FEB130",
    borderWidth: 1,
    borderRadius: 5,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    marginTop: 7
  },

  buttonText: {
    color: "#FEB130",
    fontFamily: "QuicksandRegular",
    fontSize: 15,
  }
});