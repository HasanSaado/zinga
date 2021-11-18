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
import Style1 from './Style1';
import Style2 from './Style2';
import Style3 from './Style3';

function Styles({ navigation, route }) {

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
  const renderStyle = () => {
    switch (route.params.name) {
      case 'Style 1':
        return (
          <Style1 />
        );
        break;

      case 'Style 2':
        return (
          <Style2 />
        );
        break;

      case 'Style 3':
        return (
          <Style3 />
        );

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
        {renderStyle()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Styles;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});