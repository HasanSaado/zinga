// Libraries
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';

function Home({ navigation }) {

  /**
   * 
   */
  const onPress = () => {
    navigation.navigate('Entry');
  }

  /**
   * 
   */
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../assets/img/bg-gradient.png')}
        resizeMode={'cover'}
        style={styles.backgroundImage}
      >
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/img/logo-white.png')} style={styles.image} />

          <Image source={require('../../assets/img/zinga-text.png')} style={styles.textImage} />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            text="Looking to hire ?"
            backgroundColor="#fff"
            borderColor="#fff"
            color="#FF527C"
            fontWeight="bold"
            height={53}
            onPress={onPress}
          />

          <CustomButton
            text="Looking for a job ?"
            backgroundColor="#fff"
            borderColor="#fff"
            color="#FF527C"
            fontWeight="bold"
            height={53}
            onPress={onPress}
          />
        </View>
      </ImageBackground>

    </View>
  );
}

export default Home;

/**
 * 
 */
const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  backgroundImage: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },

  image: {
    top: 100,
    width: 96,
    height: 96,
  },

  imageContainer: {
    alignItems: "center",
  }, 

  textImage: {
    top: 150,
    width: 201,
    height: 35,
    marginBottom: 320
  }
});