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

function JobSeekerProfile({ navigation }) {

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
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={handleImagePress}>
                <Image style={styles.editIcon} source={require('@assets/img/edit.png')} />
                <Image style={styles.image} source={require('@assets/img/user-img.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Image style={styles.notificationsIcon} source={require('../../assets/img/notifications-icon.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.userName}>Francis Ateni</Text>
            <Text style={styles.userEmail}>francisateni@gmail.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Personal Details</Text>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Full name</Text>
              <Text styles={styles.value}>Francis Ateni</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Email</Text>
              <Text styles={styles.value}>Francisateni@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Date of birth</Text>
              <Text styles={styles.value}>5/2/1995</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Gender</Text>
              <Text styles={styles.value}>Male</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Country</Text>
              <Text styles={styles.value}>UAE</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>City</Text>
              <Text styles={styles.value}>Dubai</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Visa</Text>
              <Text styles={styles.value}>Resident</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Education</Text>
              <Text styles={styles.value}>Undergrad</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Employment Type</Text>
              <Text styles={styles.value}>Graduate</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.key}>Availability</Text>
              <Text styles={styles.value}>Full Time</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('UploadVideo')}>
            <View style={styles.uploadVideoContainer}>
              <Image
                source={require('../../assets/img/video.png')}
                style={styles.videoIcon}
              />
              <Text style={styles.videoText}>Record Video</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobSeekerProfile;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30
  },

  user: {
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
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

  imageContainer: {
    marginTop: 30,
    position: "relative"
  },

  image: {
    height: 140,
    width: 140,
    borderRadius: 400 / 2
  },

  editIcon: {
    position: "absolute",
    height: 34.88,
    width: 34.88,
    zIndex: 999,
    right: 0
  },

  title: {
    marginTop: 30
  },

  userName: {
    fontFamily: "QuicksandBold",
    fontSize: 37,
    color: "#4D4D4D"
  },

  userEmail: {
    fontFamily: "QuicksandMedium",
    fontSize: 17,
    color: "#4D4D4D"
  },

  infoContainer: {
    marginTop: 30,
    marginBottom: 30
  },

  infoTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: "#4D4D4D",
    marginBottom: 15
  },

  infoRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  key: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4D4D"
  },

  value: {
    fontFamily: "QuicksandRegular",
    fontSize: 15,
    color: "#4D4D4D"
  },
  
  uploadVideoContainer: {
    height: 186,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FF527C",
    borderRadius: 20
  },

  videoIcon: {
    height: 21,
    width: 33
  },

  videoText: {
    fontFamily: "QuicksandRegular",
    fontSize: 17,
    color: "#fff",
    marginTop: 15
  }
});