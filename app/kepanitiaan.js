import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";
import { Link } from "expo-router";

const Kepanitiaan = () => {
    return (
        <>
            <Header title={"Kepanitiaan"} />
            <Center flex={1}>
                <Heading>Kepanitiaan</Heading>
            </Center>
        </>
    );
};

export default Kepanitiaan;