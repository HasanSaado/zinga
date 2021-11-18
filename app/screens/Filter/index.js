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
import Job from './Job';
import Sort from './Sort';
import FilterBy from './FilterBy';

function Filter({ navigation, route }) {

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
  const renderFilter = () => {
    switch (route.params.name) {
      case 'Job':
        return (
          <Job />
        );
        break;
      
      case 'Sort':
        return (
          <Sort />
        );
        break;

      case 'Filter':
        return (
          <FilterBy />
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
        {renderFilter()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Filter;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});