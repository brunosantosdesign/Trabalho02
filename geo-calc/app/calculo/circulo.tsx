import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { router, useRouter } from 'expo-router';

export default function Circulo() {
  const router = useRouter();
  const [pi, setPi] = useState('');
  const [raioQuadrado, setRaioQuadrado] = useState('');
  const [area, setArea] = useState<number | null>(null);
  const [perimetro, setPerimetro] = useState<number | null>(null);

  const calcular = () => {
    const numPi = parseFloat(pi);
    const numRaioQuadrado = parseFloat(raioQuadrado);

    if (!isNaN(numPi) && !isNaN(numRaioQuadrado)) {
      const raio = Math.sqrt(numRaioQuadrado);
      const resultadoArea = numPi * numRaioQuadrado;
      const resultadoPerimetro = 2 * numPi * raio;

      setArea(resultadoArea);
      setPerimetro(resultadoPerimetro);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/formas')} style={styles.backButton}>
          <Image source={require('../../assets/icons/voltar-circle.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Circulo</Text>
      </View>

      <View style={styles.formulaBox}>
        <Image source={require('../../assets/shapes/circle.png')} style={styles.shapeImage} />
        <Text style={styles.formula}>A = π · r²</Text>
      </View>

      <Text style={styles.instruction}><Text style={styles.blueText}>Preencha</Text> as informações</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor de π"
        keyboardType="numeric"
        value={pi}
        onChangeText={setPi}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor de r²"
        keyboardType="numeric"
        value={raioQuadrado}
        onChangeText={setRaioQuadrado}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular 🧮</Text>
      </TouchableOpacity>

      <View style={styles.resultBox}>
        <Text style={styles.resultTitle}>Resultado:</Text>

        {area !== null && perimetro !== null && (
          <View style={styles.resultContent}>
            <Text style={styles.resultText}>Área: <Text style={styles.unit}>{area.toFixed(2)} Unid²</Text></Text>
            <Text style={styles.resultText}>Perímetro: <Text style={styles.unit}>{perimetro.toFixed(2)} Unid</Text></Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 8,
    marginBottom: 5,
    padding: 4,
    width: 32,
    backgroundColor: '#DBEAFE',
    borderRadius: 4,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2563eb', // azul
    textAlign: 'center',
    marginBottom: 10,
  },
  formulaBox: {
    backgroundColor: '#e0edff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  shapeImage: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
  formula: {
    fontSize: 32,
    color: '#60A5FA',
    fontWeight: '600',
  },
  instruction: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  blueText: {
    color: '#2563eb',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#F3F4F6',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultBox: {
    marginTop: 10,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 8,
  },
  resultContent: {
    backgroundColor: '#e0edff',
    borderRadius: 10,
    padding: 16,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#1e1e1e',
  },
  unit: {
    fontWeight: 'bold',
    color: '#2563eb',
  },
});
