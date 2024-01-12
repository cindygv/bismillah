import React from 'react';
import { Center, Heading, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { View } from "react-native";
import { Link } from 'expo-router';

const Ormawa = () => {
    return (
        <>
            <Header title={"ORMAWA"} withBack="true"/>
            <Center flex={1}>
                {/* Baris 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10, }}>
                        <Link href="/dpm">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logodpm.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">DPM</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/bem">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logobem.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">BEM</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmsi">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmsi.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMSI</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 2 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/himatisi">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohimatisi.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HIMATISI</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmif">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmif.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMIF</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/himasdata">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohimasdata.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HimasData</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 3 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/himse">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohimse.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HIMSE</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmbd">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmbd.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMBD</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmt">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmt.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMT</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>

                {/* Baris 4 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmtk">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmtk.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMTK</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hme">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohme.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HME</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmti">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmti.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMTI</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
                {/* Baris 5 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: 100, height: 100, aspectRatio: 1, backgroundColor: '#dcdcdc', padding: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', margin: 5, borderRadius: 10, borderColor: '#dcdcdc', borderWidth: 2, elevation: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5, }, shadowOpacity: 0.5, shadowRadius: 10}}>
                        <Link href="/hmtl">
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                source={require('../assets/logohmtl.png')}  
                                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />
                                <Heading mb="$1">HMTL</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};


export default Ormawa;