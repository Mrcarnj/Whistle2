import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [name] = useState('Mike Doe');
  const [currentSeasonGames, setCurrentSeasonGames] = useState('10');
  const [allTimeGames, setAllTimeGames] = useState('50');
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');
  const [address, setAddress] = useState('123 Main St, City, State, 12345');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Current Season Game Count:</Text>
        <Text style={styles.staticText}>{currentSeasonGames}</Text>
        <Text style={styles.label}>All Time Game Count:</Text>
        <Text style={styles.staticText}>{allTimeGames}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoSection}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={address}
          onChangeText={setAddress}
          multiline
          placeholderTextColor="#888"
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#ff6600',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff6600',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#1a1a1a',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  staticText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#fff',
  },
  separator: {
    height: 2,
    backgroundColor: '#ff6600',
    width: '100%',
    marginVertical: 20,
  },
});
