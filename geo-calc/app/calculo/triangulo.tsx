import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { router, useRouter } from 'expo-router';

export default function Triangulo() {
  const router = useRouter();
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [lado1, setLado1] = useState('');
  const [lado2, setLado2] = useState('');
  const [lado3, setLado3] = useState('');
  const [area, setArea] = useState<number | null>(null);
  const [perimetro, setPerimetro] = useState<number | null>(null);

  const calcular = () => {
    const numBase = parseFloat(base);
    const numAltura = parseFloat(altura);
    const numLado1 = parseFloat(lado1);
    const numLado2 = parseFloat(lado2);
    const numLado3 = parseFloat(lado3);

    if (!isNaN(numBase) && !isNaN(numAltura) && !isNaN(numLado1) && !isNaN(numLado2) && !isNaN(numLado3)) {
      const resultadoArea = (numBase * numAltura) / 2;
      const resultadoPerimetro = numLado1 + numLado2 + numLado3;

      setArea(resultadoArea);
      setPerimetro(resultadoPerimetro);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/formas')} style={styles.backButton}>
          <Image source={require('../../assets/icons/voltar-triangle.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Triângulo</Text>
      </View>

      <View style={styles.formulaBox}>
        <Image source={require('../../assets/shapes/triangle.png')} style={styles.shapeImage} />
        <Text style={styles.formula}>A = (b · h) ÷ 2</Text>
      </View>

      <Text style={styles.instruction}>
        <Text style={styles.blueText}>Preencha</Text> as informações
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Valor da base"
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor da altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput
        style={styles.input}
        placeholder="Lado 1"
        keyboardType="numeric"
        value={lado1}
        onChangeText={setLado1}
      />
      <TextInput
        style={styles.input}
        placeholder="Lado 2"
        keyboardType="numeric"
        value={lado2}
        onChangeText={setLado2}
      />
      <TextInput
        style={styles.input}
        placeholder="Lado 3"
        keyboardType="numeric"
        value={lado3}
        onChangeText={setLado3}
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
    backgroundColor: '#FEF3C7',
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
    color: '#D97706', // roxo
    textAlign: 'center',
    marginBottom: 10,
  },
  formulaBox: {
    backgroundColor: '#FEF3C7',
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
    fontSize: 28,
    color: '#FBBF24',
    fontWeight: '600',
  },
  instruction: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  blueText: {
    color: '#D97706',
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
    backgroundColor: '#D97706',
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
    color: '#D97706',
    marginBottom: 8,
  },
  resultContent: {
    backgroundColor: '#FEF3C7',
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
    color: '#D97706',
  },
});
