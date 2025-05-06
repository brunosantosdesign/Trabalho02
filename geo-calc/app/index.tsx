import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import React from 'react';

export default function index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')}></Image>

      <TouchableOpacity style={styles.button}
        onPress={() => router.push('./formas')}><Text style={styles.texto}>Começar a calcular</Text><Image source={require('../assets/icons/seta-button-icon.png')}></Image></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  button: {
    marginTop: 240,
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  texto: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#EFF6FF',

  },
})



