// Import komponen yang diperlukan
import React from 'react';
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const Kategori = ({ navigation }) => {
    // Fungsi untuk menavigasi ke halaman kategori tertentu
    const navigateToCategory = (categoryName) => {
        // Gantilah "NamaKategoriScreen" dengan nama screen untuk setiap kategori
        navigation.navigate("NamaKategoriScreen", { category: categoryName });
    };

    return (
        <>
            <Header title={"Kategori"} />
            <Center flex={1}>
                {/* Icon dan label untuk setiap kategori */}
                <TouchableOpacity onPress={() => navigateToCategory("ormawa")}>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="school-outline" size={40} color="black" />
                        <Heading mb="$1">ORMAWA</Heading>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("ukm")}>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="people-outline" size={40} color="black" />
                        <Heading mb="$1">UKM</Heading>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("lomba")}>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="trophy-outline" size={40} color="black" />
                        <Heading mb="$1">Lomba</Heading>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("kepanitiaan")}>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="briefcase-outline" size={40} color="black" />
                        <Heading mb="$1">Kepanitiaan</Heading>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("seminar")}>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="megaphone-outline" size={40} color="black" />
                        <Heading mb="$1">Seminar</Heading>
                    </View>
                </TouchableOpacity>
            </Center>
        </>
    );
};

export default Kategori;
