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

const HomeScreen = ({ navigation }) => {
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
  function sendFire(key, name, date, note) {
    navigation.navigate('Drive', {
      key: key,
      name: name,
      date: date,
      note: note,
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./Notes.png')} />
        <Text style={styles.heading}>Notes</Text>
        <View style={styles.buttonsMain}>
          <View style={styles.buttons}>
            <Button
              style={styles.buttons}
              onPress={() => navigation.navigate('Add')}
              color="#211e33"
              title=" Add "
              accessibilityLabel="red button"
            />
          </View>
        </View>
      </View>

      <View>
        <ScrollView>
          <FlatList
            style={styles.viewFlat}
            data={listFire}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View>
                <View style={styles.textMain}>
                  <Text style={styles.textParagraph}>{item.note}</Text>
                  <Text style={styles.textSmall}>
                    {item.name}, {item.date}{' '}
                  </Text>

                  <View style={styles.btnMain}>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        editFire(item.key, item.name, item.date, item.note);
                      }}>
                      <Text style={styles.textBtn}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        delFire(item.key);
                      }}>
                      <Text style={styles.textBtn}>Delete</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        sendFire(item.key, item.name, item.date, item.note);
                      }}>
                      <Text style={styles.textBtn}>Email</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff100',
    flexDirection: 'row',
    height: 150,
  },

  heading: {
    height: 55,
    margin: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
    marginLeft: 10,
    marginTop: 50,
  },

  buttonsMain: {
    flexDirection: 'row',
    marginLeft: 220,
    marginTop: 100,
  },

  buttons: {
    borderWidth: 0,
    borderColor: '#211e33',
    color: 'black',
  },

  textSmall: {
    color: '#000',
    textAlign: 'left',
    marginLeft: 5,
    fontSize: 10,
  },

  textParagraph: {
    color: '#000',
    textAlign: 'left',
    marginLeft: 5,
    fontSize: 14,
  },

  textBtn: {
    color: '#000',
    textAlign: 'left',
    fontSize: 12,
  },

  textMain: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 5,
  },

  btn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  btnMain: {
    flexDirection: 'row',
    margin: 5,
  },

  viewFlat: {
    maxHeight: 385,
    backgroundColor: '#fff',
    padding: 10,
  },

  image: {
    width: 230,
    height: 150,
    position: 'absolute',
    top: 0,
    left: 50,
  },
});
