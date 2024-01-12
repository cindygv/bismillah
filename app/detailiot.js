import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const IoTSeminarPage = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={require('../assets/iot.jpeg')}
        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          Seminar IoT: Meningkatkan Efisiensi Energi melalui Keterhubungan Perangkat
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Tanggal: 15 Juli 2024
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Lokasi: Ruang Konferensi Teknologi Terkini
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 24 }}>
          Bergabunglah dalam seminar ini yang akan membahas hasil penelitian terkini tentang pengaruh Internet of Things (IoT) dalam meningkatkan efisiensi energi. Tim peneliti akan mempresentasikan temuan mereka terkait implementasi perangkat yang terhubung dan bagaimana hal ini dapat mengoptimalkan penggunaan energi di berbagai konteks, termasuk rumah tangga dan lingkungan perkantoran. Seminar ini bertujuan memberikan wawasan mendalam tentang potensi penghematan energi dan dampak positifnya terhadap keberlanjutan melalui keterhubungan perangkat.
        </Text>
      </View>
    </ScrollView>
  );
};

export default IoTSeminarPage;
