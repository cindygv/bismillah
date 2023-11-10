import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";

const Home = () => {
    return (
        <>
            <Header title={"Home"} />
            <Center flex={1}>
                <Heading>home</Heading>
            </Center>
        </>
    );
};

export default Home;