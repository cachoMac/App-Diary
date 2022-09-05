import React, { useState, useEffect, Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase';

const EditScreen = ({ route, navigation }) => {
  const { key, name, date, note } = route.params;
  const [mynote, setMynote] = useState({
    name: name,
    date: date,
    note: note,
  });

  const onChangeName = (value) => {
    setMynote({ ...mynote, name: value });
  };

  const onChangeDate = (value) => {
    setMynote({ ...mynote, date: value });
  };

  const onChangeNote = (value) => {
    setMynote({ ...mynote, note: value });
  };

  function upDateFire() {
    try {
      firebase
        .database()
        .ref('/crud/' + key)
        .update({
          name: mynote.name,
          date: mynote.date,
          note: mynote.note,
        });
    } catch (error) {
      alert(error);
    } finally {
      //setName('');
      //setDate('');
      //setNote('');
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => onChangeName(value)}
          value={mynote.name}
        />

        <Text style={styles.text}>Date</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => onChangeDate(value)}
          value={mynote.date}
        />
        <Text style={styles.text}>Note</Text>
        <TextInput
          style={styles.textInputNote}
          multiline={true}
          onChangeText={(value) => onChangeNote(value)}
          value={mynote.note}
        />
        <View style={styles.btnMain}>
          <TouchableOpacity
            style={styles.btnupdate}
            onPress={() => {
              upDateFire();
            }}>
            <Text style={styles.textbtnupdate}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnupdate}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textbtnupdate}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default EditScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff100',
  },

  btnMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#211e33',
    marginLeft: 15,
    marginTop: 10,
  },

  textbtnupdate: {
    color: '#211e33',
  },

  btnupdate: {
    borderWidth: 1,
    borderColor: '#211e33',
    width: 100,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },

  textInput: {
    width: 330,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 15,
  },

  textInputNote: {
    width: 330,
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'left',
    marginLeft: 15,
    textAlignVertical: 'top',
    padding: 10,
  },
});
