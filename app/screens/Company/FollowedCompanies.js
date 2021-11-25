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
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';
import { SeekerJobHeader } from '@components/Header';

function FollowedCompanies({ navigation }) {

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
          <View style={styles.row}>
            <View style={styles.company}>
              <TouchableOpacity
                style={styles.logo}
                onPress={() => navigation.navigate('CompanyProfile')}
              >
                <Text style={styles.logoText}>Logo</Text>
              </TouchableOpacity>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
            <View style={styles.company}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>Logo</Text>
              </View>
              <Text style={styles.companyName}>Zinga</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FollowedCompanies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 30
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },

  logo: {
    height: 90,
    width: 90,
    borderRadius: 400 / 2,
    backgroundColor: "#4D4D4D",
    justifyContent: "center",
    alignItems: "center"
  },

  companyName: {
    fontFamily: "QuicksandBold",
    fontSize: 11,
    color: "#4D4D4D",
    textAlign: "center",
    marginTop: 5
  },

  logoText: {
    color: "#fff",
    fontFamily: "QuicksandBold",
    fontSize: 12
  }
});