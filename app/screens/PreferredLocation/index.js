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

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function PreferredLocation({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState('');

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
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

          <View style={styles.tokensContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.cardRow}>
                <TouchableOpacity
                  style={[styles.cardMain, {
                    backgroundColor: selected === '7' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('7')}
                >
                  <Text style={[styles.everywhere, {
                    color: selected === '7' ? '#fff' : '#4D4D4D',
                  }]}>EVERYWHERE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardRow}>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === '1' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('1')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === '1' ? '#fff' : '#4D4D4D',
                  }]}>DUBAI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === '2' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('2')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === '2' ? '#fff' : '#4D4D4D',
                  }]}>ABU DHABI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === '3' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('3')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === '3' ? '#fff' : '#4D4D4D',
                  }]}>KUWAIT</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardRow}>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === '4' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('4')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === '4' ? '#fff' : '#4D4D4D',
                  }]}>ABU DHABI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === '5' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('5')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === '5' ? '#fff' : '#4D4D4D',
                  }]}>KUWAIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === '6' ? '#FEB130' : '#fff',
                  }]}
                  onPress={() => setSelected('6')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === '6' ? '#fff' : '#4D4D4D',
                  }]}>DUBAI</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Save & Continue"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('Step2')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PreferredLocation;

const styles = StyleSheet.create({

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

  tokensContainer: {
    marginTop: 20
  },

  cardContainer: {
    backgroundColor: "#D6D2D2",
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
  },

  cardRow: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },

  card: {
    borderRadius: 20,
    textAlign: "center",
    padding: 20,
    width: "30%",
    height: 77.76,
    alignItems: "center",
    justifyContent: "center"
  },

  cardMain: {
    borderRadius: 20,
    textAlign: "center",
    height: 77.76,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  tokenNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 8,
  },

  everywhere: {
    fontFamily: "QuicksandBold",
    fontSize: 17
  }
});