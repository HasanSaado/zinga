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
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function Checkout({ navigation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  /**
   * 
   */
  const onPress = () => {
    alert('token');
  }

  /**
   * 
   */
  const handleConfirmPress = () => {
    navigation.navigate('CardConfirmation');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            onPress={onPress}
            colors={['#FEB130', '#FF7542', '#FF527C']}
            style={styles.visaCard}
          >
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.visaBottom}>
              <View>
                <Text style={styles.visaValid}>Valid</Text>
                <Text style={styles.visaDate}>{date}</Text>
              </View>
              <Image
                source={require('../../assets/img/visa-icon.png')}
                style={styles.visaIcon}
              />
            </View>
          </LinearGradient>
          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Card holder"
              border="#7B7B7B"
              borderWidth={1}
              color="#7B7B7B"
              onChangeText={(e) => setName(e)}
            />
            <CustomInput
              placeholder="Card Number"
              border="#7B7B7B"
              borderWidth={1}
              color="#7B7B7B"
              keyboardType="number-pad"
            />
            <CustomInput
              placeholder="Expiry Date"
              border="#7B7B7B"
              borderWidth={1}
              color="#7B7B7B"
              keyboardType="number-pad"
              onChangeText={(e) => setDate(e)}
            />
            <CustomInput
              placeholder="Security Code"
              border="#7B7B7B"
              borderWidth={1}
              color="#7B7B7B"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Confirm Payment"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              fontWeight="bold"
              height={50}
              onPress={handleConfirmPress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Checkout;

const styles = StyleSheet.create({

  visaCard: {
    height: 182,
    borderRadius: 20,
    padding: 30,
    marginTop: 30
  },

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
    marginTop: 30
  },

  cardName: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff"
  },

  visaBottom: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 60
  },

  visaIcon: {
    height: 25.2,
    width: 82.2
  },

  visaValid: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#fff"
  },

  visaDate: {
    fontFamily: "QuicksandLight",
    fontSize: 12,
    color: "#fff"
  }
});