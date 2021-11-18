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

function UserProfile({ navigation }) {

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
  const handleImagePress = () => {
    navigation.navigate('EditProfile');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.user}>
            <TouchableOpacity onPress={handleSettingsPress}>
              <Image style={styles.settingsIcon} source={require('../../assets/img/settings-icon.png')} />
            </TouchableOpacity>
            <View>
              <Text style={styles.userName}>Jessica S.</Text>
              <Text style={styles.userRole}>HR Specialist</Text>
            </View>
            <TouchableOpacity onPress={handleNotificationsPress}>
              <Image style={styles.notificationsIcon} source={require('../../assets/img/notifications-icon.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleImagePress}>
              <Image style={styles.image} source={require('../../assets/img/jessica.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.tokens}>
            <Text style={styles.tokensText}>Remaining Tokens
              <Text style={styles.tokensRemaining}> 25</Text>
            </Text>
          </View>
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Add Tokens"
              height={70}
              onPress={handleAddTokensPress}
              color="#fff"
              backgroundColor="#FEB130"
              borderColor="#FEB130"
              type="image"
              image={require('../../assets/img/wallet-icon.png')}
            />
          </View>
          <View style={styles.jobs}>
            <Text style={styles.tokensText}>Active Jobs
              <Text style={styles.tokensRemaining}> 25</Text>
            </Text>
            <View style={styles.cardsContainer}>
              <View style={styles.card}>
                <Text style={styles.appNumber}>30</Text>
                <Text styles={styles.appInfo}>Total Applicants</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.appNumber}>30</Text>
                <Text styles={styles.appInfo}>Total Applicants</Text>
              </View>
            </View>
            <View style={styles.cardsContainer}>
              <View style={styles.card}>
                <Text style={styles.appNumber}>30</Text>
                <Text styles={styles.appInfo}>Total Applicants</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.appNumber}>30</Text>
                <Text styles={styles.appInfo}>Total Applicants</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserProfile;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingRight: 30,
    paddingLeft: 30,
  },

  user: {
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  userName: {
    fontFamily: "QuicksandBold",
    fontSize: 30,
    color: "#4D4D4D"
  },

  settingsIcon: {
    height: 27,
    width: 27,
    marginTop: 30
  },

  notificationsIcon: {
    height: 28,
    width: 22,
    marginTop: 30
  },

  userRole: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#4D4D4D",
    textAlign: "center"
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 30
  },

  image: {
    height: 183,
    width: 191,
    borderRadius: 400 / 2
  },

  tokens: {
    marginTop: 25
  },

  tokensText: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D"
  },

  tokensRemaining: {
    color: "#FF527C"
  },

  addTokenButton: {
    width: "100%",
    marginTop: 30
  },

  cardsContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },

  card: {
    borderRadius: 20,
    borderWidth: 2,
    width: "48%",
    height: 60,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#4D4D4D"
  },

  appNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D"
  },

  appInfo: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    color: "#4D4D4D"
  }
});