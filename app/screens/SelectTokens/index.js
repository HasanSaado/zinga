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

function SelectTokens({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState('token1');

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
  const handleCheckoutPress = () => {
    navigation.navigate('Checkout');
  }

  /**
   * 
   */
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                  style={[styles.card, {
                    backgroundColor: selected === 'token1' ? '#FF527C' : '#fff',
                  }]}
                  onPress={() => setSelected('token1')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === 'token1' ? '#fff' : '#4D4D4D',
                  }]}>15 tokens</Text>
                  <Text style={[styles.price, {
                    color: selected === 'token1' ? '#fff' : '#4D4D4D',
                  }]}>10$</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === 'token2' ? '#FF527C' : '#fff',
                  }]}
                  onPress={() => setSelected('token2')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === 'token2' ? '#fff' : '#4D4D4D',
                  }]}>15 tokens</Text>
                  <Text style={[styles.price, {
                    color: selected === 'token2' ? '#fff' : '#4D4D4D',
                  }]}>10$</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardRow}>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === 'token3' ? '#FF527C' : '#fff',
                  }]}
                  onPress={() => setSelected('token3')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === 'token3' ? '#fff' : '#4D4D4D',
                  }]}>15 tokens</Text>
                  <Text style={[styles.price, {
                    color: selected === 'token3' ? '#fff' : '#4D4D4D',
                  }]}>10$</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card, {
                    backgroundColor: selected === 'token4' ? '#FF527C' : '#fff',
                  }]}
                  onPress={() => setSelected('token4')}
                >
                  <Text style={[styles.tokenNumber, {
                    color: selected === 'token4' ? '#fff' : '#4D4D4D',
                  }]}>15 tokens</Text>
                  <Text style={[styles.price, {
                    color: selected === 'token4' ? '#fff' : '#4D4D4D',
                  }]}>10$</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Continue to Checkout"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              fontWeight="bold"
              height={52}
              onPress={handleCheckoutPress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SelectTokens;

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

  formContainer: {
    marginTop: 10
  },

  walletImage: {
    height: 184,
    width: 224,
    marginTop: 20
  },

  setLimit: {
    marginTop: 20
  },

  setLimitText: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 17,
    color: "#4D4946"
  },

  notifiedText: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#7B7B7B"
  },

  autoRecharge: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  autoRechargeText: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 17,
    color: "#4D4946"
  },

  rechargeText: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#7B7B7B",
    marginTop: 10
  },

  tokensContainer: {
    marginTop: 50
  },

  selectText: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 29,
    color: "#4D4D4D"
  },

  cardContainer: {
    backgroundColor: "#D6D2D2",
    borderRadius: 20,
    marginTop: 15,
    padding: 15,

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
    width: "48%",
    height: 120,
    alignItems: "center",
  },

  tokenNumber: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 18,
  },

  price: {
    fontFamily: "QuicksandBold",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 10
  }
});