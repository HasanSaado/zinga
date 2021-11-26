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
  Button,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';
import Card from './components/card';

function ScheduledInterviews({ navigation }) {

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
    <SafeAreaView>
      <View style={styles.container}>
        <Swiper
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Card />
              </View>
            )
          }}
          onSwiped={(cardIndex) => { console.log(cardIndex) }}
          onSwipedAll={() => { console.log('onSwipedAll') }}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          infinite={true}
          cardVerticalMargin={150}
          childrenOnTop={true}
          stackSize={3}>
          <Button
            onPress={() => { console.log('oulala') }}
            title="Press me">
            You can press me
          </Button>
        </Swiper>
      </View>
    </SafeAreaView>
  );
}

export default ScheduledInterviews;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30
  },

  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "#fff"
  }
});