import * as React from 'react';
import * as RN from 'react-native';
import { useState, useEffect } from 'react-native';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

export default class CalendarScreen extends React.Component {
  render() {
    return <MyCalendar />;
  }
}

class MyCalendar extends React.Component {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  state = {
    activeDate: new Date(),
  };
  changeMonth = (n) => {
    this.setState(() => {
      this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n);
      return this.state;
    });
  };
  generateMatrix() {
    var year = this.state.activeDate.getFullYear();
    var month = this.state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();
    var maxDays = this.nDays[month];
    var curday = this.state.activeDate.getDay(); //Current Month
    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
    var matrix = [];
    matrix[0] = this.weekDays;
    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }
    return matrix;
  }

  _onPress = (item) => {
    this.setState(() => {
      if (!item.match && item != -1) {
        this.state.activeDate.setDate(item);
        return this.state;
      }
    });
  };

  render() {
    var matrix = this.generateMatrix();

    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
          <RN.Text
            style={{
              flex: 1,
              height: 18,
              textAlign: 'center',
              // Highlight header
              backgroundColor: rowIndex == 0 ? '#fff100' : '#fff100',
              // Highlight Sundays
              color: colIndex == 0 ? '#a00' : '#000',
              // Highlight current date
              fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
            }}
            onPress={() => this._onPress(item)}>
            {item != -1 ? item : ''}
          </RN.Text>
        );
      });

      return (
        <RN.View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {rowItems}
        </RN.View>
      );
    });
    return (
      <RN.View
        style={{
          marginTop: 0,
          backgroundColor: '#fff100',
        }}>
        <RN.Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          {this.months[this.state.activeDate.getMonth(+1)]} &nbsp;
          {this.state.activeDate.getFullYear()}
        </RN.Text>
        {rows}

        <Button
          color="#191a18"
          style={styles.button1}
          title="< Previous"
          onPress={() => this.changeMonth(-1)}
        />
        <Button
          color="#191a18"
          style={styles.button1}
          title="Next >"
          onPress={() => this.changeMonth(+1)}
        />
        {this.months[this.state.activeDate.getMonth(+1)] == 'May' ? (
          <RN.Text
            style={{
              fontSize: 12,
              padding: 10,
              textAlign: 'left',
              marginLeft: 0,
              marginRight: 0,
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}>
            <Image style={styles.tinyLogo} source={require('./bar.png')} />
            <Text style={styles.listText}>Labor Day, May 1, 2021</Text>
            {'\n'}
            <Image style={styles.tinyLogo} source={require('./orange.png')} />
            <Text style={styles.listText}>Mother's Day, May 9, 2021</Text>
            {'\n'}
            <Image style={styles.tinyLogo} source={require('./bar.png')} />
            <Text style={styles.listText}>Eid Al Fitr, May 13, 2021</Text>
          </RN.Text>
        ) : null}
        {this.months[this.state.activeDate.getMonth(+1)] == 'June' ? (
          <RN.Text
            style={{
              fontSize: 12,
              padding: 10,
              textAlign: 'left',
              marginLeft: 0,
              marginRight: 0,
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}>
            <Image style={styles.tinyLogo} source={require('./bar.png')} />
            <Text style={styles.listText}>Independence Day, June 12, 2021</Text>
          </RN.Text>
        ) : null}
      </RN.View>
    );
  }
}

const styles = StyleSheet.create({
  listText: {
    fontFamily: 'Baskerville',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    marginLeft: 0,
  },

  tinyLogo: {
    height: 30,
    width: 30,
    position: 'absolute',
  },

  button1: {
    flexDirection: 'row',
  },
});
