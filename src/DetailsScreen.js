import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.container}>
          <Text style={styles.header}>You are on Details Screen</Text>
        </View>
        <Text style={styles.footerHeading}>
          Bottom Navigation with Navigation Icon from Local Directory
        </Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },

  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },

  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
