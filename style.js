const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subTitleText: {
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 200,
    height: 54,
    padding: 8,
    borderWidth: 10,
    borderColor: '#fff100',
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    left: 0,
  },

  buttonText: {
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
    borderColor: 'white',
    marginVertical: 10,
  },
};
