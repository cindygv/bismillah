import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import firebase from "../config/FIREBASE";

const FormPengisian = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [penelitian, setPenelitian] = useState("");

  const handleSave = () => {
    // Validasi
    if (!namaLengkap || !jurusan || !fakultas || !penelitian) {
      Alert.alert("Error", "Harap isi semua kolom formulir");
      return;
    }

    // Simpan data ke Firebase
    const databaseRef = firebase.database().ref("userpenelitian");
    const bookingData = {
      namaLengkap,
      jurusan,
      fakultas,
      penelitian,
    };

    databaseRef.push(bookingData)
      .then(() => {
        Alert.alert("Sukses", "Data berhasil disimpan!");
        // Bersihkan formulir setelah penyimpanan berhasil
        setNamaLengkap("");
        setJurusan("");
        setFakultas("");
        setPenelitian("");
      })
      .catch((error) => {
        console.error("Error adding data to Firebase: ", error);
        Alert.alert("Error", "Terjadi kesalahan. Mohon coba lagi.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap:</Text>
      <TextInput
        style={styles.input}
        value={namaLengkap}
        onChangeText={(text) => setNamaLengkap(text)}
      />

      <Text style={styles.label}>Jurusan:</Text>
      <TextInput
        style={styles.input}
        value={jurusan}
        onChangeText={(text) => setJurusan(text)}
      />

      <Text style={styles.label}>Fakultas:</Text>
      <TextInput
        style={styles.input}
        value={fakultas}
        onChangeText={(text) => setFakultas(text)}
      />

      <Text style={styles.label}>Penelitian yang diikuti:</Text>
      <TextInput
        style={styles.input}
        value={penelitian}
        onChangeText={(text) => setPenelitian(text)}
      />

      <Button title="Simpan" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default FormPengisian;
