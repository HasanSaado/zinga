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
  TextInput
} from "react-native";

function TokensSpent({ navigation }) {
  // Const
  const [focused, setFocused] = useState(false);

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.searchMember}>
            <Text style={styles.searchLabel}>Search Member</Text>
            <TextInput
              style={[styles.searchInput, {}]}
              onFocus={() => setFocused(!focused)}
              onBlur={() => setFocused(!focused)}
            />
          </View>
          <View style={styles.membersContainer}>
            <View style={styles.membersTitle}>
              <Text style={styles.title}>All Members</Text>
              <Text style={styles.title}>Token Spent</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <View>
                  <Text style={styles.memberName}>Frank Susana</Text>
                  <Text style={styles.memberEmail}>Frank@companyname.com</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
              <View style={styles.card}>
                <View>
                  <Text style={styles.memberName}>Frank Susana</Text>
                  <Text style={styles.memberEmail}>Frank@companyname.com</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
              <View style={styles.card}>
                <View>
                  <Text style={styles.memberName}>Frank Susana</Text>
                  <Text style={styles.memberEmail}>Frank@companyname.com</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
              <View style={styles.card}>
                <View>
                  <Text style={styles.memberName}>Frank Susana</Text>
                  <Text style={styles.memberEmail}>Frank@companyname.com</Text>
                </View>
                <Text style={styles.tokenNumber}>50</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TokensSpent;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    marginTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },

  searchLabel: {
    fontFamily: "QuicksandBold",
    fontSize: 20,
    color: "#4D4946"
  },

  searchInput: {
    borderColor: "#4D4D4D",
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
    textAlign: "center",
    color: "#7B7B7B"
  },

  membersContainer: {
    marginTop: 40
  },

  membersTitle: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row"
  },

  title: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4946"
  },

  cardContainer: {
    marginTop: 15
  },

  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#4D4D4D",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    height: 70,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10
  },

  memberName: {
    fontFamily: "QuicksandBold",
    fontSize: 13,
    color: "#7B7B7B"
  },

  memberEmail: {
    fontFamily: "QuicksandBold",
    fontSize: 9,
    color: "#7B7B7B"
  },

  tokenNumber: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#FF527C"
  }
});