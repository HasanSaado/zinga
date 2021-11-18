// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";

function Notifications({ navigation, item, index }) {

  /**
   * 
   */
  return (

    <View style={styles.notificationItem}>
      <Image
        key={index}
        style={styles.image}
        source={item.image}
      />
      <Text style={styles.notification}>
        <Text style={styles.notificationName}> {item.name}</Text> {item.notification}
      </Text>
    </View>

  );
}

export default Notifications;

const styles = StyleSheet.create({

  image: {
    height: 44,
    width: 44
  },

  notificationItem: {
    borderBottomColor: "#707070",
    borderBottomWidth: .5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },

  notification: {
    fontSize: 12,
    color: "#4D4946",
    fontFamily: "QuicksandLight"
  },

  notificationName: {
    fontFamily: "QuicksandBold",
  }
});