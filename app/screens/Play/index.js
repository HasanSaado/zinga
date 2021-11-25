// Libraries
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Play({ navigation }) {

  // Const
  const [userType, setUserType] = useState('');

  /**
   * 
   */
  useEffect(() => {
    (async function () {
      try {
        const value = await AsyncStorage.getItem('userType')
        if (value !== null) {
          setUserType(value);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  /**
   * 
   */
  const onPressPlay = () => {
    if ('seeker' === userType) {
      navigation.navigate('Step1');
    } else {
      navigation.navigate('UserProfile');
    }
  }

  /**
   * 
   */
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/bg-play.png')}
        resizeMode={'cover'}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          onPress={onPressPlay}
        >
          <Image
            source={require('../../assets/img/play-icon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Play;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 51,
    height: 65
  }
});