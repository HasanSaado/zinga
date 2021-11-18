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
import CustomButton from '../../../components/Custom/CustomButton';
import CustomInput from '../../../components/Custom/CustomInput';

function Style3({ navigation, route }) {

  const [isEnabled, setIsEnabled] = useState(false);

  /**
   * 
   */
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    <View>
      <View>
        <View style={styles.main}>
          <View style={styles.addImageContainer}>
            <Text style={styles.addImageText}>Select an Image from the
              available background images</Text>
          </View>
        </View>
        <View
          style={styles.styleContainer2}
          onPress={onPress}
        >
          <CustomInput
            placeholder="Title"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
            fontFamily="QuicksandMedium"
            width="50%"
          />
          <CustomInput
            placeholder="Compensation"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
            fontFamily="QuicksandMedium"
            width="50%"
          />
          <CustomInput
            placeholder="Start Date"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
            fontFamily="QuicksandMedium"
            width="50%"
          />
          <CustomInput
            placeholder="Employment Type"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
            fontFamily="QuicksandMedium"
            width="50%"
          />
          <CustomInput
            placeholder="Availability"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
            fontFamily="QuicksandMedium"
            width="50%"
          />
        </View>
        <View style={styles.main}>
          <View style={styles.textColor}>
            <Text style={styles.textColorText}>Text Color</Text>
            <View style={styles.switch}>
              <Text style={styles.light}>Light</Text>
              <Switch
                trackColor={{ false: "#4D4D4D", true: "#4D4D4D" }}
                thumbColor={isEnabled ? "#FEB130" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.dark}>Dark</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.selectImagesText}>Select between 10 background images. Each template will display pre-defined info that we need to agree on. These fields cannot be changed or customized or positioned</Text>
          <View style={styles.templateContainer}>
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
          </View>
          <View style={styles.templateContainer}>
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
            <Image
              source={require('../../../assets/img/template-placeholder.png')}
              style={styles.templatePlaceholder}
            />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.publishButton}>
            <CustomButton
              text="Publish"
              height={52}
              onPress={onPress}
              color="#4D4D4D"
              borderColor="#4D4D4D"
              backgroundColor="#fff"
            />
            <Text
              style={styles.resendText}
              onPress={onPress}
            >
              Save For Later
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Style3;

const styles = StyleSheet.create({

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30
  },

  addImageText: {
    fontFamily: "QuicksandMedium",
    fontSize: 16,
    color: "#4D4D4D",
    width: "70%",
    marginTop: 5
  },

  styleContainer2: {
    backgroundColor: "#E5E5E5",
    height: 372,
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 10,
    paddingTop: 30,
  },

  addImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  plusIcon: {
    height: 59,
    width: 59
  },

  publishButton: {
    marginTop: 20,
  },

  resendText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center",
  },

  placeholderIcon: {
    height: 54,
    width: 75,
  },

  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
    top: -25
  },

  textColor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  textColorText: {
    fontFamily: "QuicksandBold",
    fontSize: 16,
    fontColor: "#4D4D4D",
  },

  switch: {
    flexDirection: "row",
  },

  light: {
    fontFamily: "QuicksandRegular",
    fontSize: 11,
    color: "#7A7A7A",
    marginTop: 3
  },

  dark: {
    fontFamily: "QuicksandBold",
    fontSize: 11,
    color: "#4D4D4D",
    marginTop: 3
  },

  selectImagesText: {
    fontFamily: "QuicksandRegular",
    fontSize: 16,
    color: "#4D4D4D",
    marginTop: 15
  },

  templateContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },

  templatePlaceholder: {
    height: 54,
    width: 75
  }
});