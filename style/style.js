const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#fff110',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    left: 13,
    top: 0,
  },
  titleWelcome: {
    fontFamily: 'Baskerville',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: 18,
    top: 30,
  },
  subTitleText: {
    fontFamily: 'Baskerville',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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

  buttonLogin: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 200,
    height: 54,
    padding: 5,
    borderWidth: 10,
    borderColor: '#fff100',
    borderRadius: 25,
  },
  buttonTextLogin: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    padding: '15%',
    justifyContent: 'center',
    backgroundColor: 'orange',
    color: 'red',
  },

  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
};
