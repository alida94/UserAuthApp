import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from "@react-native-vector-icons/ionicons";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const validateEmail = (email) =>
    /\S+@\S+\.\S+/.test(email);

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      return setError('Invalid email format');
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    const result = await login(email, password);

    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageView}>
          <Image source={require('../image/logo.png')} style={styles.image} resizeMode='contain' />
        </View>
        
        <Text style={styles.title}>Login</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputPassword}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!show}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.iconPassword}>
            <Ionicons name={show ? 'eye' : 'eye-off'} size={28} onPress={() => setShow(!show)} />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Signup')}
        >
          Go to Signup
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25 },
  title: { fontSize: 28, textAlign: 'center', marginBottom: 20 },
  imageView: { alignItems: 'center', marginBottom: 45 },
  image: { height: 50 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  inputPassword: { flex: .8 },
  iconPassword: { flex: .15, alignItems: 'flex-end' },
  button: {
    backgroundColor: '#2984df',
    padding: 15,
    borderRadius: 8,
    marginTop: 25
  },
  buttonText: { color: 'white', textAlign: 'center', fontSize: 16 },
  error: { color: 'red', marginBottom: 10, textAlign: 'center' },
  link: { marginTop: 15, textAlign: 'center', color: 'grey', textDecorationLine: 'underline' },
});

export default LoginScreen;
