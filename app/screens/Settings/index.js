// Libraries
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';

function Settings({ navigation }) {

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text onPress={onPress} style={styles.textLink}>
            Change Password
          </Text>
          <Text onPress={() => navigation.navigate('WalletSettings')} style={styles.textLink}>
            Wallet Settings
          </Text>
          <Text onPress={onPress} style={styles.textLink}>
            Contact Us
          </Text>
          <Text onPress={onPress} style={styles.textLink}>
            Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    marginTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },

  textLink: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#FF7542",
    marginTop: 30
  }
});