import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";
import { Link } from "expo-router";

const Lomba = () => {
    return (
        <>
            <Header title={"Lomba"} />
            <Center flex={1}>
                <Heading>Lomba</Heading>
            </Center>
        </>
    );
};

export default Lomba;