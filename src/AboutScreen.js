import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

const AboutScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>About Us</Text>
          <Text style={styles.header1}></Text>
          <Text style={styles.contentsTextSubTitle}>
            Details and other information regarding this Diary Application.
          </Text>
          <Text style={styles.contentsText}>
            In compliance of the applications development and emerging
            technologies requirement, we created an application dedicated to
            write down your thoughts and feelings on how your day was going.
          </Text>
          <Text style={styles.contentsText}>
            This application also serves the purpose of sending contact tracing
            information of the La Verdad Students of the LVCC Organization to
            ensure their health and welfare amidst the rampage of the pandemic.
          </Text>

          <Text style={styles.contentsText}>
            We are hoping that this application will serve its purpose and be
            contributory in expression and voicing out your thoughts.
          </Text>

          <Text style={styles.contentsText}>Thanks be to God.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

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
    marginTop: 10,
    marginRight: 15,
  },

  contentsTextSubTitle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 110,
  },
});
