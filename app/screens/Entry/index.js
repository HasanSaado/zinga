// Libraries
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';

function Entry({ navigation, route }) {

  /**
   * 
   */
  const onPressRegister = () => {
    navigation.navigate('Register');
  }

  /**
   * 
   */
  const onPressLogin = () => {
    navigation.navigate('Login');
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/img/bg-bw.png')}
          resizeMode={'cover'}
          style={styles.backgroundImage}
        >

          <View style={styles.imageContainer}>
            <Image source={require('../../assets/img/logo-full-color.png')} style={styles.image} />

            <Image source={require('../../assets/img/zinga-text-black.png')} style={styles.textImage} />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              text="Sign Up"
              backgroundColor="#fff"
              borderColor="#FF527C"
              color="#FF527C"
              height={53}
              onPress={onPressRegister}
            />

            <CustomButton
              text="Login"
              backgroundColor="#fff"
              borderColor="#FF527C"
              color="#FF527C"
              height={53}
              onPress={onPressLogin}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Entry;

const styles = StyleSheet.create({

  container: {
    flex: 1,
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