import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AlertBox() {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle" size={24} color="black" />
      <Text>Hey!</Text>
      <Text>People are looking at your profile. Find out who.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
  }
});
