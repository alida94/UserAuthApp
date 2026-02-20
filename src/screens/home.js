import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageView}>
          <Image source={require('../image/logo.png')} style={styles.image} resizeMode='contain' />
        </View>

        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.info}>
          <Text style={styles.infoText}>Name: </Text>
          <Text>{user?.name}</Text>
        </Text>
        <Text style={styles.info}>
          <Text style={styles.infoText}>Email: </Text>
          <Text style={styles.infoEmail}>{user?.email}</Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25 },
  title: { fontSize: 26, textAlign: 'center', marginBottom: 30 },
  info: { fontSize: 18, marginBottom: 10 },
  infoText: { fontWeight: 'bold' },
  infoEmail: { color: '#007BFF', textDecorationLine: 'underline' },
  imageView: { alignItems: 'center', marginBottom: 45 },
  image: { height: 50 },
  button: {
    backgroundColor: '#d82a2a',
    padding: 12,
    marginTop: 30,
    borderRadius: 8,
  },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 16 },
});

export default HomeScreen;
