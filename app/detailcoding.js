import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const SeminarPage = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={{ uri: 'URL_GAMBAR_SEMINAR' }}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          Seminar Coding: Menjelajahi Dunia Pengembangan Perangkat Lunak
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Tanggal: 12 Februari 2024
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Lokasi: Auditorium Teknologi Informasi
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 24 }}>
          Bergabunglah dengan kami dalam seminar coding ini yang akan membahas berbagai tren terkini dalam dunia pengembangan perangkat lunak. Para pembicara ahli akan membagikan pengetahuan dan pengalaman mereka dalam memecahkan tantangan teknis dan inovasi di industri.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SeminarPage;
