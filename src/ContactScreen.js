import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

const ContactScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Contact Us</Text>
          <Text style={styles.header1}></Text>
          <Text style={styles.contentsTextSubTitle}>
            Contact details and other information of the Diary Application
            creators.
          </Text>
          <Text></Text>
          <Text style={styles.contentsText}>Muckey Luis Cacho</Text>
          <Text style={styles.contentsText}>BSIS - 3</Text>
          <Text style={styles.contentsText}>
            muckeyluiscacho@laverdad.edu.ph
          </Text>
          <Text style={styles.contentsText}>09323415641</Text>

          <Text></Text>

          <Text style={styles.contentsText}>Jon Micael Domingo</Text>
          <Text style={styles.contentsText}>BSIS - 3</Text>
          <Text style={styles.contentsText}>
            Jonmicaeldomingo@laverdad.edu.ph
          </Text>
          <Text style={styles.contentsText}>09174524016</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: '20%',
    padding: 30,
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
    position: 'absolute',
    top: 75,
  },

  contentsText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 5,
  },

  contentsTextSubTitle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 80,
  },
});
