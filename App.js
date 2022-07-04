// Tarea
// [28/6 8:34] ARCOS OBANDO CLAUDIA ELIZABETH
// Realizar las operaciones matemáticas
// Suma, Resta, Multiplicación, Residuo
// El resultado que lo muestre en la pantalla del celular

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const operations = [
  { label: "Suma", value: "sum" },
  { label: "Resta", value: "subtraction" },
  { label: "Multiplicación", value: "multiplication" },
  { label: "División", value: "division" },
];

export default function App() {
  // Definición de HOOK DE ESTADO
  // Permitir cambiar los valores
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operation, setOperation] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    // Validaciones
    if (!numero1 || !numero2) {
      Alert.alert("Ingrese los números");
    } else if (isNaN(numero1)) {
      Alert.alert("Número 1 inválido");
    } else if (isNaN(numero2)) {
      Alert.alert("Número 2 inválido");
    } else {
      // Operación Suma
      let num1 = parseFloat(numero1);
      let num2 = parseFloat(numero2);
      let result = "";

      switch (operation) {
        case "sum":
          result = `${num1 + num2}`;
          break;
        case "subtraction":
          result = `${num1 - num2}`;
          break;
        case "multiplication":
          result = `${num1 * num2}`;
          break;
        case "division":
          if (num2 === 0) Alert.alert("No existe división para 0");
          else result = `${num1 / num2}`;
          break;

        default:
          Alert.alert("Elija una operación");
          break;
      }

      // Alert.alert(`La suma de ${numero1} + ${numero2} es igual a ${resul}`);
      setResultado(result);
      result && limpiarCampos();
    }
  };

  const limpiarCampos = () => {
    setNumero1("");
    setNumero2("");
    setOperation("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Operaciones Matemáticas</Text>

      <Dropdown
        data={operations}
        style={styles.dropdown}
        labelField="label"
        valueField="value"
        placeholder="Elija la operación"
        onChange={({ value }) => setOperation(value)}
        value={operation}
        containerStyle={styles.dropdownContainer}
      />

      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        style={styles.input}
        value={numero1}
        onChangeText={(value) => setNumero1(value)}
      />

      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        style={styles.input}
        value={numero2}
        onChangeText={(value) => setNumero2(value)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calcular" onPress={sumar} />
      </View>
      {resultado ? (
        <View style={styles.resultContainer}>
          <Text style={styles.subTexto}>Resultado: {resultado}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTexto: {
    fontSize: 18,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  resultContainer: {
    padding: 10,
  },
  dropdown: {
    width: 200,
    borderWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    top: -60,
    elevation: 10,
  },
});
