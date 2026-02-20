import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  const login = async (email, password) => {
    const foundUser = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: 'Incorrect credentials' };
    }

    setUser(foundUser);
    await AsyncStorage.setItem('user', JSON.stringify(foundUser));
    return { success: true };
  };

  const signup = async (name, email, password) => {
    const emailExists = registeredUsers.find((u) => u.email === email);

    if (emailExists) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = { name, email, password };
    setRegisteredUsers([...registeredUsers, newUser]);

    setUser(newUser);
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
