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
  Switch,
  ImageBackground
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function PostStyle({ navigation }) {

  /**
   * 
   */
  const onPress = () => {
    alert('token');
  }

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
          <Text style={styles.styleTitle}>STYLE 1</Text>
        </View>
        <TouchableOpacity
          style={styles.styleContainer}
          onPress={() => navigation.navigate('Styles', { name: 'Style 1' })}
        >
          <ImageBackground
            source={require('../../assets/img/placeholder-icon.png')}
            resizeMode={'cover'}
            style={styles.backgroundImage}
          >
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.addImage}>Add an image of your choice as a background</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.styleTitle}>STYLE 2</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Styles', { name: 'Style 2' })}
          style={styles.styleContainer}
        >
          {/**<View style={styles.styleTextContainer}>
            <Text style={styles.styleText}>Project Manager</Text>
            <Text style={styles.styleText}>Zinga</Text>
            <Text style={styles.styleText}>10/12</Text>
            <Text style={styles.styleText}>Full Time Position</Text>
  </View>*/}
          <ImageBackground
            source={require('../../assets/img/placeholder-icon.png')}
            style={styles.backgroundImage}
          >

          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.addImage}>IMAGE AND TEXT. Upload free image as background. Brief details of your Job Post will be added to it.</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.styleTitle}>STYLE 3</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Styles', { name: 'Style 3' })}
        >
          <ImageBackground
            style={styles.templateContainer}
            source={require('../../assets/img/template-bg.png')}
          >
            <View style={styles.styleTextTemplateContainer}>
              <Text style={styles.styleTextTemplate}>Project Manager</Text>
              <Text style={styles.styleTextTemplate}>Zinga</Text>
              <Text style={styles.styleTextTemplate}>10/12</Text>
              <Text style={styles.styleTextTemplate}>Full Time Position</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.addImage}>Select between 10 predefined templates (background images)
            Each template will display pre-defined info that we need to agree on. These fields cannot be changed or customized or positioned</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PostStyle;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30
  },

  styleTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 20,
    color: "#4D4D4D",
    marginTop: 10
  },

  styleContainer: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    height: 198,
    justifyContent: "center",
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 10
  },

  backgroundImage: {
    width: 122,
    height: 91.63,
  },

  addImage: {
    fontFamily: "QuicksandMedium",
    fontSize: 15,
    color: "#4D4D4D",
    marginTop: 10
  },

  styleTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  styleText: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D"
  },

  templateContainer: {
    height: 198,
    marginTop: 10,
    flex: 1,
    flexDirection: "row"
  },

  styleTextTemplateContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 30,
  },

  styleTextTemplate: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#fff"
  }
});