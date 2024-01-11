import React from "react";
import { Box, ClockIcon, GlobeIcon, GripVerticalIcon, HStack, Image, LinkIcon, PhoneIcon, Text, VStack, Link, LinkText, } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { Header } from "../components";
import { Heading } from "@gluestack-ui/config/build/theme";

const INFO = () => {
    return (
        <>
<<<<<<< HEAD
            <Header title={"INFO POSTER"} withBack="true" />
            <Box padding={10} borderBottomWidth={0.5}>
                <Image height={500} width={500}
                    size="md" borderRadius="$none"
                    source={{
                        uri: 'https://pbs.twimg.com/media/EeyfwHDX0AArN5t.jpg',
                    }}
                />
            </Box>
            <Box padding={10} borderBottomWidth={0.5}>
                <HStack>
                    <Icon as={GripVerticalIcon} m="$2" w="$4" h="$4" />
                    <Text padding={5}>Kepanitiaan</Text>
                </HStack>
            </Box>
            <Box padding={10} borderBottomWidth={0.5}>
                <HStack>
                    <Icon as={ClockIcon} m="$2" w="$4" h="$4" />
                    <Text padding={5}>1 - 7 Februari 2024</Text>
                </HStack>
            </Box>
            <Box padding={10} borderBottomWidth={0.5}>
                <HStack>
                    <Icon as={PhoneIcon} m="$2" w="$4" h="$4" />
                    <Link href="whatsapp://send?text=Hallo saya mau mendaftar!&phone=+6282233894722">
                    <LinkText padding ={5}>082233894722 (Ardatika)</LinkText>
                    </Link>
                </HStack>
            </Box>
            <Box padding={10} borderBottomWidth={0.5}>
                <HStack>
                    <Icon as={LinkIcon} m="$2" w="$4" h="$4" />
                    <Link href="bit.ly/PKKMB2024">
                    <LinkText padding ={5}>KLIK LINK DISINI</LinkText>
                    </Link>
                </HStack>
            </Box>
            <Box padding={10} borderBottomWidth={0.5}>
                <HStack>
                    <Icon as={GlobeIcon} m="$2" w="$4" h="$4"></Icon>
                    <Link href="https://www.instagram.com/dewangkara.maetala/">
                    <LinkText padding ={5}>Kunjungi Instagram</LinkText>
                    </Link>
                </HStack>
            </Box>
=======
            <Header title={"DETAIL POSTER"} withBack />
            <ScrollView>
                <Box padding={10} borderBottomWidth={0.5}>
                    <Image height={500} width={500}
                        size="md" borderRadius="$none"
                        source={{ uri: poster.imageUrl }}
                        alt="image"
                    />
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={GripVerticalIcon} m="$2" w="$4" h="$4" />
                        <Text padding={5}> {poster.category}</Text>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={ClockIcon} m="$2" w="$4" h="$4" />
                        <Text padding={5}>{poster.deadline}</Text>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={PhoneIcon} m="$2" w="$4" h="$4" />
                        <Link href={`whatsapp://send?text=Hallo%20saya%20mau%20mendaftar!&phone=${encodeURIComponent(poster.contact)}`}>
                            <LinkText padding={5}>{poster.contact}</LinkText>
                        </Link>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={LinkIcon} m="$2" w="$4" h="$4"></Icon>
                        <Link href={poster.link}>
                            <LinkText padding={5} onPress={() => Linking.openURL(poster.link)}>
                                {poster.link}
                            </LinkText>
                        </Link>
                    </HStack>
                </Box>

                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={GlobeIcon} m="$2" w="$4" h="$4"></Icon>
                        <Link href={`https://www.instagram.com/${poster.socialmedia}`}>
                            <LinkText padding={5} onPress={() => Linking.openURL(`https://www.instagram.com/${poster.socialmedia}`)}>
                                {poster.socialmedia}
                            </LinkText>
                        </Link>
                    </HStack>
                </Box>
 

            </ScrollView>
>>>>>>> 56b8af1fe3fe412687be5acf441480956ba4f573
        </>
    );
};

export default INFO;
