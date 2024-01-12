import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const BusinessSeminarPage = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={require('../assets/bisnisdetail.jpeg')}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          Seminar Bisnis: Membangun Keberhasilan dalam Dunia Bisnis Modern
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Tanggal: 20 Mei 2024
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Lokasi: Ballroom Grand Business Center
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 24 }}>
          Saksikanlah seminar bisnis ini yang akan membahas strategi bisnis, inovasi manajemen, dan langkah-langkah praktis untuk mencapai keberhasilan dalam dunia bisnis yang terus berkembang. Para ahli bisnis terkemuka akan memberikan wawasan berharga dan solusi untuk menghadapi tantangan bisnis saat ini.
        </Text>
      </View>
    </ScrollView>
  );
};

export default BusinessSeminarPage;
