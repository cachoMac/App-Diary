import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import welcome from './welcome.png';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={welcome} style={styles.image}>
        <Text style={styles.titleWelcome}>Come and write your </Text>
        <Text style={styles.titleWelcome1}>diary with us! </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}> GET STARTED</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  titleWelcome: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    position: 'absolute',
    left: 16,
    top: 5,
  },

  titleWelcome1: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    position: 'absolute',
    left: 16,
    top: 20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 200,
    height: 54,
    padding: 5,
    borderWidth: 10,
    borderColor: '#fff100',
    borderRadius: 25,
    position: 'absolute',
    bottom: 70,
    left: 0,
  },

  buttonText: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});
