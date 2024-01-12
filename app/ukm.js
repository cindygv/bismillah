import React from 'react';
import { Center, Heading, Image, Box, Text } from "@gluestack-ui/themed";
import { Header } from "../components";
import { View } from "react-native";
import { Link } from 'expo-router';

const Ukm = () => {
    return (
        <>
            <Header title={"UKM"} withBack="true"/>
            <Center flex={1}>
                {/* Baris 1 */}
                <Text sx={{ fontWeight: "bold" }}>UKM Kerohanian</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/ukki">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoukki.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">UKKI</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/uk3">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logouk3.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">UKKK</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/kmk">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logokmk.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">KMK</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 2 */}
                <Text sx={{ fontWeight: "bold" }}>UKM Keilmuan</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/coder">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logocoder.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">CODER</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/robotika">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logorobotika.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">ROBOTIKA</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/ecitts">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoecitts.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">ECITTS</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 3 */}
                <Text sx={{ fontWeight: "bold" }}>UKM Keolahragaan</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/esport">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoesport.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">ESPORT</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/mahitkom">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logomahitkom.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">Mahitkom</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/volley">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logovolley.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">VOLLEY</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
                {/* Baris 4 */}
                <Text sx={{ fontWeight: "bold" }}>UKM Kesenian</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/media">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logomedia.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">MEDIA</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/ittelkomart">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logoittelkomart.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">ART</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/padus">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logopadus.png')}   
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">PADUS</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};


export default Ukm;
