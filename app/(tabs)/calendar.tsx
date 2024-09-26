import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  eventDetails: { date: string; event: { description: string } };
};

type CalendarScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'eventDetails'>;

const screenWidth = Dimensions.get('window').width;
const calendarWidth = screenWidth * 0.98; // 98% of screen width

// Mock data for events
export const mockEvents = {
  '2024-09-15': { marked: true, dotColor: 'orange', description: 'Event 1' },
  '2024-09-20': { marked: true, dotColor: 'orange', description: 'Event 2' },
  '2024-09-25': { marked: true, dotColor: 'orange', description: 'Event 3' },
  '2024-10-05': { marked: true, dotColor: 'orange', description: 'Event 4' },
  '2024-10-10': { marked: true, dotColor: 'orange', description: 'Event 5' },
  '2024-10-15': { marked: true, dotColor: 'orange', description: 'Event 6' },
};

export default function CalendarScreen() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigation = useNavigation<CalendarScreenNavigationProp>();

  const onMonthChange = (month: DateData) => {
    setCurrentMonth(new Date(month.timestamp));
  };

  const onDayPress = (day: DateData) => {
    const selectedDate = day.dateString;
    const event = mockEvents[selectedDate as keyof typeof mockEvents];
    if (event) {
      navigation.navigate('eventDetails', { date: selectedDate, event });
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={format(currentMonth, 'yyyy-MM-dd')}
        onMonthChange={onMonthChange}
        onDayPress={onDayPress}
        monthFormat={'MMMM yyyy'}
        enableSwipeMonths={true}
        hideExtraDays={false}
        firstDay={0}
        showFiveWeeks={true}
        style={styles.calendar}
        markedDates={mockEvents}
        theme={calendarTheme}
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

const calendarTheme = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: 'orange',
  selectedDotColor: '#ffffff',
  arrowColor: '#00adf5',
  monthTextColor: '#2d4150',
  indicatorColor: 'orange',
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
      borderWidth: 2,
      borderRadius: 0,
      borderColor: '#000000',
    },
  },
};
