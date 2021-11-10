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

function WalletSettings({ navigation }) {
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
          <View>
            <Image source={require('../../assets/img/wallet.png')} style={styles.walletImage} />
          </View>
          <View style={styles.setLimit}>
            <Text style={styles.setLimitText}>Set your token reserve limit</Text>
          </View>
          <View style={styles.formContainer}>
            <CustomInput
              placeholder="Set limit here"
              border="#7B7B7B"
              borderWidth={1}
              color="#7B7B7B"
            />
          </View>
          <Text style={styles.notifiedText}>*You will be notified when your balance drops below The reserve limit</Text>
          <View style={styles.autoRecharge}>
            <Text style={styles.autoRechargeText}>Enable Automatic Recharge</Text>
            <Switch
              trackColor={{ false: "#4D4D4D", true: "#4D4D4D" }}
              thumbColor={isEnabled ? "#FF527C" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={styles.rechargeText}>*You can recharge you wallet automatically when
            Tokens drop below reserve limit</Text>
          <View style={styles.tokensContainer}>
            <Text style={styles.selectText}>Select Token Package</Text>
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
              text="Save & Checkout"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              fontWeight="bold"
              height={50}
              onPress={handleSavePress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default WalletSettings;

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
    marginTop: 20
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