import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';

const screenWidth = Dimensions.get('window').width;
const calendarWidth = screenWidth * 0.98; // 98% of screen width

export default function CalendarScreen() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const onMonthChange = (month: { timestamp: number }) => {
    setCurrentMonth(new Date(month.timestamp));
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={format(currentMonth, 'yyyy-MM-dd')}
        onMonthChange={onMonthChange}
        monthFormat={'MMMM yyyy'}
        enableSwipeMonths={true}
        hideExtraDays={false}
        firstDay={0}
        showFiveWeeks={true}
        style={styles.calendar}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#00adf5',
          monthTextColor: '#2d4150',
          indicatorColor: '#00adf5',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 14,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 12,
          'stylesheet.calendar.main': {
            week: {
              marginTop: 0,
              marginBottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
          'stylesheet.calendar.header': {
            header: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 6,
              alignItems: 'center',
            },
          },
          'stylesheet.day.basic': {
            base: {
              width: calendarWidth / 7,
              height: (calendarWidth * 1.4) / 6, // Adjusted for taller days
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              borderWidth: 0.5,
              borderColor: '#e0e0e0',
              paddingTop: 5,
              paddingLeft: 5,
            },
            text: {
              fontSize: 16,
              fontWeight: '300',
              color: '#2d4150',
              backgroundColor: 'rgba(255, 255, 255, 0)',
            },
            today: {
                borderWidth: 3,
                borderRadius: 0,
              },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    calendar: {
      width: screenWidth,
      borderWidth: 0,
    },
  });