import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const SocialAnxietySeminarPage = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={require('../assets/remaja.jpeg')}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          Seminar: Pengaruh Kecemasan Sosial terhadap Kesejahteraan Mental Remaja
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Tanggal: 10 Agustus 2024
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Lokasi: Aula Psikologi Modern
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 24 }}>
          Bergabunglah dalam seminar ini yang membahas temuan penelitian terkini tentang pengaruh kecemasan sosial terhadap kesejahteraan mental remaja. Tim peneliti akan memaparkan hasil analisis longitudinal terkait dengan dampak kecemasan sosial pada perkembangan kesejahteraan mental selama beberapa tahun. Seminar ini bertujuan memberikan pemahaman mendalam tentang faktor-faktor yang memengaruhi kesejahteraan remaja dan menciptakan kesadaran terhadap pentingnya intervensi yang mendukung kesehatan mental di kalangan remaja.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SocialAnxietySeminarPage;
