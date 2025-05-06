import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useRouter } from 'expo-router';

export default function Retangulo() {
  const router = useRouter();
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState<number | null>(null);
  const [perimetro, setPerimetro] = useState<number | null>(null);

  const calcular = () => {
    const numBase = parseFloat(base);
    const numAltura = parseFloat(altura);

    if (!isNaN(numBase) && !isNaN(numAltura)) {
      const resultadoArea = numBase * numAltura;
      const resultadoPerimetro = 2 * (numBase + numAltura);

      setArea(resultadoArea);
      setPerimetro(resultadoPerimetro);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/formas')} style={styles.backButton}>
          <Image source={require('../../assets/icons/voltar-rectangle.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Retangulo</Text>
      </View>

      <View style={styles.formulaBox}>
        <Image source={require('../../assets/shapes/rectangle.png')} style={styles.shapeImage} />
        <Text style={styles.formula}>A = b · h</Text>
      </View>

      <Text style={styles.instruction}>
        <Text style={styles.greenText}>Preencha</Text> as informações
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
    backgroundColor: '#FFE4E6',
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
    color: '#E11D48', // azul escuro
    textAlign: 'center',
    marginBottom: 10,
  },
  formulaBox: {
    backgroundColor: '#FFE4E6',
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
    color: '#FB7185',
    fontWeight: '600',
  },
  instruction: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  greenText: {
    color: '#E11D48',
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
    backgroundColor: '#E11D48',
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
    color: '#E11D48',
    marginBottom: 8,
  },
  resultContent: {
    backgroundColor: '#FFE4E6',
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
    color: '#E11D48',
  },
});

