import 'react-native-gesture-handler';

import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import SettingsScreen from './src/SettingsScreen';
import CalendarScreen from './src/CalendarScreen';
import AboutScreen from './src/AboutScreen';
import ContactScreen from './src/ContactScreen';
import EditScreen from './src/EditScreen';
import AddScreen from './src/AddScreen';
import DriveScreen from './src/DriveScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function WelcomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Welcome!' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{ title: 'Edit' }}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{ title: 'Add' }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contact' }}
      />
       <Stack.Screen
        name="Drive"
        component={DriveScreen}
        options={{ title: 'Send Email' }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Notes' }}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{ title: 'Edit' }}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{ title: 'Add' }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contact' }}
      />
       <Stack.Screen
        name="Drive"
        component={DriveScreen}
        options={{ title: 'Send Email' }}
      />
    </Stack.Navigator>
  );
}
function CalendarStack() {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={CalendarScreen}
        options={{ title: 'Calendar' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
      />
    </Stack.Navigator>
  );
}
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contact' }}
      />
    </Stack.Navigator>
  );
}
function EditStack() {
  return (
    <Stack.Navigator
      initialRouteName="Edit"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{ title: 'Edit' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'black',
        }}>
        <Tab.Screen
          name="WelcomeStack"
          component={WelcomeStack}
          options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('./assets/page.png')
                    : require('./assets/page.png')
                }
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: size,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('./assets/home.png')
                    : require('./assets/home.png')
                }
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: size,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CalendarStack"
          component={CalendarStack}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('./assets/calendar.png')
                    : require('./assets/calendar.png')
                }
                style={{
                  width: 15,
                  height: 20,
                  borderRadius: 0,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require('./assets/settings.png')
                    : require('./assets/settings.png')
                }
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: size,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
