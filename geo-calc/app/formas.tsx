import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function Formas() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'formas',
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />

      <View style={styles.container}>
        <Text style={styles.titulo1}>Escolha</Text>
        <Text style={styles.titulo2}>uma forma</Text>

        <View style={styles.grid}>
          {/* Círculo */}
          <Link href="./calculo/circulo">
            <TouchableOpacity style={[styles.card, { backgroundColor: '#DBEAFE', borderColor: '#60A5FA' }]}>
              <Image source={require('../assets/shapes/circle.png')} style={styles.icon} />
              <Text style={[styles.label, { color: '#2563EB' }]}>Círculo</Text>
            </TouchableOpacity>
          </Link>

          {/* Quadrado */}
          <Link href="./calculo/quadrado">
            <TouchableOpacity style={[styles.card, { backgroundColor: '#D1FAE5', borderColor: '#6EE7B7' }]}>
              <Image source={require('../assets/shapes/square.png')} style={styles.icon} />
              <Text style={[styles.label, { color: '#059669' }]}>Quadrado</Text>
            </TouchableOpacity>
          </Link>

          {/* Triangulo */}
          <Link href="./calculo/triangulo">
            <TouchableOpacity style={[styles.card, { backgroundColor: '#FEF3C7', borderColor: '#FCD34D' }]}>
              <Image source={require('../assets/shapes/triangle.png')} style={styles.icon} />
              <Text style={[styles.label, { color: '#D97706' }]}>Quadrado</Text>
            </TouchableOpacity>
          </Link>

          {/* Retangulo */}
          <Link href="./calculo/retangulo">
            <TouchableOpacity style={[styles.card, { backgroundColor: '#FFE4E6', borderColor: '#FDA4AF' }]}>
              <Image source={require('../assets/shapes/rectangle.png')} style={styles.icon} />
              <Text style={[styles.label, { color: '#E11D48' }]}>Quadrado</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  titulo1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    width: 152,
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
});
