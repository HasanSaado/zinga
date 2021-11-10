// Libraries
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

function Play({ navigation }) {

  /**
   * 
   */
  const onPressPlay = () => {
    navigation.navigate('UserProfile');
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