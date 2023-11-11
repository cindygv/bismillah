import React from 'react';
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { Link } from 'expo-router';

const Kategori = () => {
    return (
        <>
            <Header title={"Kategori"} />
            <Center flex={1}>
                {/* Icon dan label untuk setiap kategori */}
                <TouchableOpacity onPress={() => navigateToCategory("ormawa")}>
                    <Link href="/ormawa">
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="school-outline" size={40} color="black" />
                            <Heading mb="$1">ORMAWA</Heading>
                        </View>
                    </Link>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("ukm")}>
                    <Link href="/ukm">
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="people-outline" size={40} color="black" />
                            <Heading mb="$1">UKM</Heading>
                        </View>
                    </Link>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("lomba")}>
                    <Link href="/lomba">
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="trophy-outline" size={40} color="black" />
                            <Heading mb="$1">Lomba</Heading>
                        </View>
                    </Link>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("kepanitiaan")}>
                    <Link href="/kepanitiaan">
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="briefcase-outline" size={40} color="black" />
                            <Heading mb="$1">Kepanitiaan</Heading>
                        </View>
                    </Link>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToCategory("seminar")}>
                    <Link href="/seminar">
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons name="megaphone-outline" size={40} color="black" />
                            <Heading mb="$1">Seminar</Heading>
                        </View>
                    </Link>
                </TouchableOpacity>
            </Center>
        </>
    );
};

export default Kategori;