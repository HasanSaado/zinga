// Libraries
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList
} from "react-native";

// Components
import NotificationListItem from '../../components/Custom/NotificationListItem';

function Notifications({ navigation }) {

  const data = [
    {
      id: '1',
      name: 'Alexander',
      image: require('../../assets/img/user-1.png'),
      notification: 'has accepted your interview request',
    },
    {
      id: '2',
      name: 'Joseph',
      image: require('../../assets/img/user-2.png'),
      notification: 'has accepted your interview request'
    },
    {
      id: '3',
      name: 'Nour',
      image: require('../../assets/img/user-3.png'),
      notification: 'has applied to your job posting "Accountant"'
    },
    {
      id: '4',
      name: 'Ahmad',
      image: require('../../assets/img/user-4.png'),
      notification: 'has declined your interview request'
    },
    {
      id: '5',
      name: 'Layla',
      image: require('../../assets/img/user-5.png'),
      notification: 'has accepted your interview request'
    },
    {
      id: '6',
      name: 'Amir',
      image: require('../../assets/img/user-6.png'),
      notification: 'has declined your interview request'
    },
    {
      id: '7',
      name: 'Amir',
      image: require('../../assets/img/user-6.png'),
      notification: 'has declined your interview request'
    },
    {
      id: '8',
      name: 'Amir',
      image: require('../../assets/img/user-6.png'),
      notification: 'has declined your interview request'
    }
  ];

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item, index }) => (
          <NotificationListItem
            item={item}
            index={index}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Notifications;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  flatList: {
    borderTopColor:"#707070",
    borderTopWidth: .5
  }
});