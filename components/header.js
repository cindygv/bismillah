import { Box, Image, HStack, Heading, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
<<<<<<< HEAD
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
=======
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, Link } from "expo-router";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
>>>>>>> e8f9b1ce8ef080ccd6b3442a3b0fb99611f5fae2

const Header = ({ title, withBack = false, withClose = false }) => {
    const trueGray900 = "#800000";
    const navigation = useNavigation();
<<<<<<< HEAD
=======
    const Notifications = () => {
        navigation.navigate("notifikasi");
    };
    const Login = () => {
        navigation.navigate("login");
    };


>>>>>>> e8f9b1ce8ef080ccd6b3442a3b0fb99611f5fae2
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
<<<<<<< HEAD

                    <HStack space={"2xl"} marginEnd={5} mr={4}>
                        {/* <Image
                            source={require("../assets/portal.png")}
                            w="$20"
                            h="$3"
                            alt="Search Icon"
                            role="img"
                        /> */}
                        <Text color="#faf0e6" bold>Talent Portal</Text>
=======
                    <HStack space={"2xl"} alignItems="center">
                        <TouchableOpacity>
                            <HStack>
                                <TouchableOpacity onPress={Notifications}>
                                    <Ionicons name="notifications" size={32} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={Login}>
                                    <Ionicons name="person" size={32} color="white" />
                                </TouchableOpacity>
                            </HStack>
                        </TouchableOpacity>
>>>>>>> e8f9b1ce8ef080ccd6b3442a3b0fb99611f5fae2
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default Header;