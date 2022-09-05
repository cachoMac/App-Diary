import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Button,
  Image,
} from 'react-native';
import { createSwitchNavigator } from '@react-navigation/native';
import firebase from '../firebase';
import welcome from './welcome.png';

const AddScreen = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [note, setNote] = useState(null);
  const [listFire, setListFire] = useState(null);
  const [shouldShow, setShouldShow] = useState(null);

  useEffect(() => {
    try {
      firebase
        .database()
        .ref('/crud')
        .on('value', (snapshot) => {
          const list = [];
          snapshot.forEach((childItem) => {
            list.push({
              key: childItem.key,
              date: childItem.val().date,
              name: childItem.val().name,
              note: childItem.val().note,
            });
          });
          setListFire(list);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  function delFire(key) {
    firebase
      .database()
      .ref('/crud/' + key)
      .remove();
  }

  function editFire(key, name, date, note) {
    navigation.navigate('Edit', {
      key: key,
      name: name,
      date: date,
      note: note,
    });
  }

  function createFire() {
    try {
      firebase.database().ref('/crud').push({
        name: name,
        date: date,
        note: note,
      });
    } catch (error) {
      alert(error);
    } finally {
      setDate('');
      setName('');
      setNote('');
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(name) => setName(name)}
          value={name}
          placeholder="Name [Firstname Middlename Surname]"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={(date) => setDate(date)}
          value={date}
          placeholder="Date [Ex. May 15, 2021]"
        />
        <TextInput
          style={styles.textInputNote}
          multiline={true}
          onChangeText={(note) => setNote(note)}
          value={note}
          placeholder="Note"
        />
        <View style={styles.Mainbtn}>
          <TouchableOpacity
            style={styles.btnsave}
            onPress={createFire}
            title="Save">
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff100',
  },

  text: {
    textAlign: 'left',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },

  btnsave: {
    borderWidth: 1,
    borderColor: '#211e33',
    color: 'black',
    width: 100,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 10,
    marginLeft: 125,
  },

  textInput: {
    width: '90%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 15,
  },

  textInputNote: {
    textAlignVertical: 'top',
    flexShrink: 1,
    width: '90%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 30,
    padding: 15,
  },
});
