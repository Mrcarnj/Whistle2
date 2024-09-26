import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default function ProfileScreen() {
    const [name] = useState('Mike Doe');
  const [currentSeasonGames, setCurrentSeasonGames] = useState('10');
  const [allTimeGames, setAllTimeGames] = useState('50');
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');
  const [address, setAddress] = useState('123 Main St, City, State, 12345');

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          multiline
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  staticText: {
    fontSize: 16,
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});
