import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView, ScrollView, ImageBackground, Button, Image } from 'react-native';

import firebase from '../firebase';

import { Linking } from 'react-native';


const DriveScreen = ({ route, navigation }) => {

const { key, name, date, note } = route.params;
  const [mynote, setMynote] = useState({
    name: name,
    date: date,
    note: note,
  });
 //alert(mynote.name);
Linking.openURL("mailto:cacholuismuckey@gmail.com?subject=" + mynote.name + "("+ mynote.date +")" + "&body="+ mynote.note);
navigation.navigate("Home");
return (
 
    <SafeAreaView style={{ flex: 1 }}>

      
     
    </SafeAreaView>
  );
};
export default DriveScreen;
