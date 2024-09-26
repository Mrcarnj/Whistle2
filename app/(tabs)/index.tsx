import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { mockEvents } from './calendar';

const getTodayEvent = () => {
  const today = new Date().toISOString().split('T')[0];
  return mockEvents[today as keyof typeof mockEvents] || null;
};

const getUpcomingEvents = () => {
  const today = new Date();
  const upcomingEvents = Object.entries(mockEvents)
    .filter(([date]) => new Date(date) > today)
    .sort(([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime())
    .slice(0, 3);
  return upcomingEvents;
};

const externalLinks = [
  { title: 'Rulebook', url: 'https://theahl.com/rules' },
  { title: 'Expo Docs', url: 'https://docs.expo.dev/' },
];

export default function HomeScreen() {
  const todayEvent = getTodayEvent();
  const upcomingEvents = getUpcomingEvents();

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Today</Text>
      {todayEvent ? (
        <View style={styles.eventItem}>
          <Text style={styles.eventDate}>{new Date().toISOString().split('T')[0]}</Text>
          <Text style={styles.eventDescription}>{todayEvent.description}</Text>
        </View>
      ) : (
        <Text style={styles.noEventText}>No Game Today</Text>
      )}
      <View style={styles.separator} />
      <Text style={styles.title}>Upcoming Games</Text>
      {upcomingEvents.map(([date, event]) => (
        <View key={date} style={styles.eventItem}>
          <Text style={styles.eventDate}>{date}</Text>
          <Text style={styles.eventDescription}>{event.description}</Text>
        </View>
      ))}
      <View style={styles.separator} />
      <Text style={styles.title}>External Links</Text>
      {externalLinks.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => openLink(link.url)}>
          <Text style={styles.link}>{link.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  eventItem: {
    width: '100%',
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  link: {
    fontSize: 18,
    color: '#2e78b7',
    marginBottom: 10,
  },
  noEventText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
  },
});
