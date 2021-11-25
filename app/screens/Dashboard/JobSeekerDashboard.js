// Libraries
import React, { useState } from "react";
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
import LinearGradient from 'react-native-linear-gradient';
import { Shortlisted, Requested, Recommendations } from './components';

function JobSeekerDashboard({ navigation }) {

  const [selected, setSelected] = useState(1);

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
  const renderInterviews = () => {
    switch(selected) {
      case 1:
        return (
          <Shortlisted />
        );
        break;
      case 2:
        return (
          <Requested />
        );
        break;
      case 3:
        return (
          <Recommendations />
        );
        break;
      default:
        return (null);
    }
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
              <Text style={styles.userDashboard}>John's {'\n'} Dashboard</Text>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={handleImagePress}>
                  <Image style={styles.image} source={require('@assets/img/user-img.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Image style={styles.notificationsIcon} source={require('../../assets/img/notifications-icon.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <View style={styles.iconContainer}>
              {selected === 1
                ? <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  onPress={onPress}
                  colors={['#FEB130', '#FF7542', '#FF527C']}
                  style={[
                    styles.icon,
                  ]}
                >
                  <Image
                    source={require('@assets/img/heart.png')}
                    style={[styles.heart, { tintColor: "#fff" }]}
                  />
                </LinearGradient>
                : <TouchableOpacity
                  style={[styles.icon, { borderWidth: 1 }]}
                  onPress={() => setSelected(1)}
                >
                  <Image
                    source={require('@assets/img/heart.png')}
                    style={styles.heart}
                  />
                </TouchableOpacity>
              }
              {selected === 2
                ? <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  onPress={onPress}
                  colors={['#FEB130', '#FF7542', '#FF527C']}
                  style={[
                    styles.icon,
                  ]}
                >
                  <Image
                    source={require('@assets/img/calendar-alt.png')}
                    style={[styles.calendar, { tintColor: "#fff" }]}
                  />
                </LinearGradient>
                : <TouchableOpacity
                  style={[styles.icon, { borderWidth: 1 }]}
                  onPress={() => setSelected(2)}
                >
                  <Image
                    source={require('@assets/img/calendar-alt.png')}
                    style={styles.calendar}
                  />
                </TouchableOpacity>}
              {selected === 3
                ? <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  onPress={onPress}
                  colors={['#FEB130', '#FF7542', '#FF527C']}
                  style={[
                    styles.icon,
                  ]}
                >
                  <Image
                    source={require('@assets/img/star-dark.png')}
                    style={[styles.star, { tintColor: "#fff" }]}
                  />
                </LinearGradient>
                : <TouchableOpacity
                  style={[styles.icon, { borderWidth: 1 }]}
                  onPress={() => setSelected(3)}
                >
                  <Image
                    source={require('@assets/img/star-dark.png')}
                    style={styles.star}
                  />
                </TouchableOpacity>}
            </View>
          </View>
          <View style={styles.interviewContainer}>
            {renderInterviews()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobSeekerDashboard;

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
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 140,
    width: 140,
    borderRadius: 400 / 2
  },

  userDashboard: {
    textAlign: "center",
    fontFamily: "QuicksandBold",
    color: "#4D4D4D",
    fontSize: 25
  },

  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    width: "50%"
  },

  icon: {
    height: 49.79,
    width: 49.79,
    borderRadius: 400 / 2,
    justifyContent: "center",
    alignItems: "center",
  },

  heart: {
    height: 26.78,
    width: 30.61,
  },

  calendar: {
    height: 24.74,
    width: 21.65,
    tintColor: "#444444"
  },

  star: {
    height: 26.94,
    width: 28.15
  },

  center: {
    alignItems: "center",
  },

  interviewContainer: {
    marginTop: 20
  }
});