import { Box, Image, HStack, Heading, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, Link } from "expo-router";

import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const Header = ({ title, withBack = false, withClose = false }) => {
    const trueGray900 = "#800000";
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={trueGray900} />
            <Box bg="$#800000" p="$2">
                <HStack justifyContent="space-between" alignItems="center">
                    <HStack>
                        {!withBack ? (
                            <>
                                <Image
                                    source={require("../assets/talent.png")}
                                    w="$10"
                                    h="$10"
                                    alt="Telpro Logo"
                                    mr={"$2"}
                                    role="img"
                                />
                            </>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.goBack()}
                            >
                                <Box mr={"$3"}>
                                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                                </Box>
                            </TouchableOpacity>
                        )}
                        <Heading color={"$white"}>{title}</Heading>
                    </HStack>
                    <HStack space={"2xl"} alignItems="center">
                        <Text color="#faf0e6" bold>Talent Portal</Text>
                        <TouchableOpacity>
                        <Link href="/login">
                        <Box style={{ alignItems: 'center' }}>
                            <Text size={20} color="white">Login</Text>
                        </Box>
                        </Link>
                        </TouchableOpacity>
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default Header;