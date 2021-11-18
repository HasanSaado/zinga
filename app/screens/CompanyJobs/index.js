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

function CompanyJobs({ navigation, route }) {

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
          <View style={styles.filter}>
            <View style={styles.filterDropdown}>
              <Text
                style={styles.filterText}
                onPress={() => navigation.navigate('Filter', { name: 'Job' })}
              >
                Jobs
              </Text>
              <Image
                source={require('../../assets/img/down-arw.png')}
                style={styles.arrow}
              />
            </View>
            <View style={styles.filterDropdown}>
              <Text
                style={styles.filterText}
                onPress={() => navigation.navigate('Filter', { name: 'Sort' })}
              >
                Sort By
              </Text>
              <Image
                source={require('../../assets/img/down-arw.png')}
                style={styles.arrow}
              />
            </View>
            <View style={styles.filterDropdown}>
              <Text
                style={styles.filterText}
                onPress={() => navigation.navigate('Filter', { name: 'Filter' })}
              >
                Filter By
              </Text>
              <Image
                source={require('../../assets/img/down-arw.png')}
                style={styles.arrow}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.jobPost}
          onPress={() => navigation.navigate('JobInfo', { name: 'Accountant' })}
        >
          <Image
            source={require('../../assets/img/job-post.png')}
            style={styles.jobPostImage}
          />
          <View style={styles.main}>
            <View style={styles.jobInfo}>
              <View>
                <Text style={styles.jobTitle}>Accountant</Text>
                <Text style={styles.jobRef}>Ref # 1028374</Text>
                <Text style={styles.jobType}>Full time</Text>
                <Text style={styles.jobSalary}>5000 AED</Text>
              </View>
              <View>
                <Text style={styles.jobApplicants}>25 Applicants</Text>
                <Text style={styles.jobDatePosted}>2 days ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.jobPost}>
          <Image
            source={require('../../assets/img/job-post.png')}
            style={styles.jobPostImage}
          />
          <View style={styles.main}>
            <View style={styles.jobInfo}>
              <View>
                <Text style={styles.jobTitle}>Accountant</Text>
                <Text style={styles.jobRef}>Ref # 1028374</Text>
                <Text style={styles.jobType}>Full time</Text>
                <Text style={styles.jobSalary}>5000 AED</Text>
              </View>
              <View>
                <Text style={styles.jobApplicants}>25 Applicants</Text>
                <Text style={styles.jobDatePosted}>2 days ago</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.jobPost}>
          <Image
            source={require('../../assets/img/job-post.png')}
            style={styles.jobPostImage}
          />
          <View style={styles.main}>
            <View style={styles.jobInfo}>
              <View>
                <Text style={styles.jobTitle}>Accountant</Text>
                <Text style={styles.jobRef}>Ref # 1028374</Text>
                <Text style={styles.jobType}>Full time</Text>
                <Text style={styles.jobSalary}>5000 AED</Text>
              </View>
              <View>
                <Text style={styles.jobApplicants}>25 Applicants</Text>
                <Text style={styles.jobDatePosted}>2 days ago</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.jobPost}>
          <Image
            source={require('../../assets/img/job-post.png')}
            style={styles.jobPostImage}
          />
          <View style={styles.main}>
            <View style={styles.jobInfo}>
              <View>
                <Text style={styles.jobTitle}>Accountant</Text>
                <Text style={styles.jobRef}>Ref # 1028374</Text>
                <Text style={styles.jobType}>Full time</Text>
                <Text style={styles.jobSalary}>5000 AED</Text>
              </View>
              <View>
                <Text style={styles.jobApplicants}>25 Applicants</Text>
                <Text style={styles.jobDatePosted}>2 days ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CompanyJobs;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingLeft: 50,
    paddingRight: 50
  },

  filter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10
  },

  filterDropdown: {
    flexDirection: "row"
  },

  arrow: {
    height: 9,
    width: 7,
    left: 10,
    top: 5
  },

  filterText: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#4D4D4D",
    textDecorationLine: "underline"
  },

  jobPostImage: {
    height: 220,
    width: "100%"
  },

  jobPost: {
    marginTop: 20,
    marginBottom: 20
  },

  jobInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  jobTitle: {
    fontFamily: "QuicksandBold",
    fontSize: 17,
    color: "#4D4D4D"
  },

  jobRef: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    color: "#7B7B7B"
  },

  jobType: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#959DAD"
  },

  jobSalary: {
    fontFamily: "QuicksandLight",
    fontSize: 14,
    color: "#4D4946"
  },

  jobApplicants: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#7B7B7B",
  },

  jobDatePosted: {
    fontFamily: "QuicksandRegular",
    fontSize: 14,
    color: "#959DAD"
  }
});