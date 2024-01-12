import { Box, ClockIcon, GlobeIcon, GripVerticalIcon, HStack, Image, Icon, ScrollView, Heading, LinkIcon, PhoneIcon, Text, VStack, Link, LinkText, } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';

const Kegiatan = () => {
    const route = useRoute();
    const { Kegiatan } = route.params;
    return (
        <>
            <Header title={"DETAIL KEGIATAN"} withBack />
            <ScrollView>
                <Box padding={10} borderBottomWidth={0.5}>
                    <Image height={500} width={500}
                        size="md" borderRadius="$none"
                        source={{ uri: Kegiatan.imageUrl }}
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
        </>
    )
}

export default Kegiatan