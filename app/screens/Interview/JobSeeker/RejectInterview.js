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
  TextInput
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '@components/Custom/CustomButton';


function RejectInterview({ navigation }) {

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
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Are you sure you want to reject
              your interview request by
              John Doe?</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Reasons</Text>
            <TextInput
              style={styles.input}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              text="Reject request"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('RejectInterview')}
            />
            <CustomButton
              text="No don't reject"
              backgroundColor="#4D4D4D"
              borderColor="#4D4D4D"
              color="#fff"
              height={52}
              onPress={() => navigation.navigate('RejectInterview')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RejectInterview;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 10,
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D",
    textAlign: "center",
    width: 258
  },

  form: {
    marginTop: 20
  },

  formTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 19,
    color: "#4D4D4D"
  },

  input: {
    borderWidth: 1,
    borderColor: "#4D4D4D",
    borderRadius: 20,
    height: 160,
    marginTop: 10
  },

  button: {
    marginTop: 20
  }
});