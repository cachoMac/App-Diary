import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Settings</Text>
          <Text style={styles.header1}></Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>About Us</Text>
            <Image style={styles.tinyLogo} source={require('./about.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.buttonText}>Contact Us</Text>
            <Image style={styles.tinyLogo} source={require('./contact.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 0,
    backgroundColor: '#fff100',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '40%',
    padding: 50,
  },

  header1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 0,
    backgroundColor: '#ddd',
    width: '100%',
    height: '10%',
    padding: 0,
  },

  buttonStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 20,
    width: '100%',
    marginTop: 0,
  },

  buttonText: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 30,
  },

  tinyLogo: {
    height: 20,
    width: 20,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 10,
  },
});
