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
  Switch
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function JobPosting({ navigation }) {

  const [selected, setSelected] = useState('internship');

  const [selectedLanguage, setSelectedLanguage] = useState();

  const radio_props = [
    { label: 'Internship', value: 'internship' }
  ]

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
      <ScrollView style={styles.main}>
        <View style={styles.postInfo}>
          <Text style={styles.info}>
            Ref # 1028374
          </Text>
          <Text style={styles.info}>
            Created by John Doe
          </Text>
        </View>
        <View style={styles.postForm}>
          <CustomInput
            placeholder="Title"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
          />
          <CustomInput
            placeholder="Compensation"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={17}
            color="#4D4D4D"
          />
          <Text style={styles.formLabel}>Employment type</Text>
          <View style={styles.radioButtons}>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#FEB130'}
              selectedButtonColor={'#FEB130'}
              animation={true}
              onPress={(value) => setSelected(value)}
              style={styles.radioButton}
              labelStyle={{ fontSize: 12, color: '#4D4D4D', fontFamily: 'QuicksandBold' }}
            />
          </View>
          <Text style={styles.formLabel}>Availability</Text>
          <View style={styles.dateRow}>
            <View>
              <Text style={styles.startDate}>Start Date</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/img/date-picker-icon.png')}
                style={styles.pickerIcon}
              />
            </View>
          </View>
          <Text style={styles.formLabel}>Duration</Text>
          <View style={styles.radioButtons}>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#FEB130'}
              selectedButtonColor={'#FEB130'}
              animation={true}
              onPress={(value) => setSelected(value)}
              style={styles.radioButton}
              labelStyle={{ fontSize: 12, color: '#4D4D4D', fontFamily: 'QuicksandBold' }}
            />
          </View>
          <View style={styles.pickers}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                fontFamily="QuicksandRegular"
                label="Job Function"
                value=""
                color="#4d4d4d"
                style={{ fontSize: 17 }}
              />
            </Picker>
          </View>
          <View style={styles.pickers}>

            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                fontFamily="QuicksandRegular"
                label="Hard Skills"
                value=""
                color="#4d4d4d"
                style={{ fontSize: 17 }}
              />
            </Picker>
          </View>
          <View style={styles.pickers}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                fontFamily="QuicksandRegular"
                label="Soft Skills"
                value=""
                color="#4d4d4d"
                style={{ fontSize: 17 }}
              />
            </Picker>
          </View>
          <View style={styles.pickers}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item
              fontFamily="QuicksandRegular"
              label="Other"
              value=""
              color="#4d4d4d"
              style={{ fontSize: 17 }}
            />
          </Picker>
        </View>
          <View style={styles.requirments}>
            <CustomInput
              placeholder="Experience Required"
              border="#4D4D4D"
              borderWidth={1}
              fontSize={15}
              color="#4D4D4D"
              fontFamily="QuicksandBold"
            />
            <CustomInput
              placeholder="Language Requirements"
              border="#4D4D4D"
              borderWidth={1}
              fontSize={15}
              color="#4D4D4D"
              fontFamily="QuicksandBold"
            />
          </View>
          <Text style={styles.formLabel}>Additional Benefits</Text>
          <View style={styles.radioButtons}>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#FEB130'}
              selectedButtonColor={'#FEB130'}
              animation={true}
              onPress={(value) => setSelected(value)}
              style={styles.radioButton}
              labelStyle={{ fontSize: 12, color: '#4D4D4D', fontFamily: 'QuicksandBold' }}
            />
          </View>
          <CustomInput
            placeholder="Job Information"
            border="#4D4D4D"
            borderWidth={1}
            fontSize={15}
            color="#4D4D4D"
            fontFamily="QuicksandBold"
          />
          <View style={styles.addTokenButton}>
            <CustomButton
              text="Post Job"
              backgroundColor="#fff"
              borderColor="#4D4D4D"
              color="#000"
              height={52}
              onPress={() => navigation.navigate('PostStyle')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobPosting;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
  },

  postInfo: {
    marginTop: 10
  },

  info: {
    fontFamily: "QuicksandMedium",
    fontSize: 15,
    color: "#4D4D4D"
  },

  postForm: {
    marginTop: 20
  },

  formLabel: {
    fontFamily: "QuicksandBold",
    fontSize: 15,
    color: "#4D4D4D",
    marginTop: 15
  },

  radioButtons: {
    marginTop: 5
  },

  dateRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  startDate: {
    fontFamily: "QuicksandRegular",
    fontSize: 17,
    color: "#4D4D4D"
  },

  pickerIcon: {
    height: 23.5,
    width: 20.5
  },

  pickers: {
    width: "100%",
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#4D4D4D"
  },

  requirments: {
    marginTop: 15
  },
  
  addTokenButton: {
    width: "100%",
    marginTop: 30
  },
});