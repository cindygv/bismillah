import React from 'react';
import { Center, Heading, Image, Box, Text } from "@gluestack-ui/themed";
import { Header } from "../components";
import { View } from "react-native";
import { Link } from 'expo-router';

const lomba = () => {
    return (
        <>
            <Header title={"LOMBA"} />
            <Center flex={1}>
                {/* Baris 1 */}
                <Text sx={{ fontWeight: "bold" }}>LOMBA INTERNAL</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/ukki">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoinfest.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">INFEST</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/uk3">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logopim.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">PIM</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/kmk">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoiotts.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">IOTTS</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 2 */}
                <Text sx={{ fontWeight: "bold" }}>LOMBA EKSTERNAL</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/coder">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logopkm.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">PKM</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/robotika">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoinvl.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">Innovillage</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};


export default lomba;