<<<<<<< HEAD
import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import { WebView } from "react-native-webview";
import { Spinner } from "@gluestack-ui/themed";

const Web = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <Header title={"Read"} withBack={true} />
            <WebView
                source={{ uri: params.link }}
                startInLoadingState={true}
                renderLoading={() => <Spinner size={"large"} color={"$black"} />}
            />
        </>
    );
};

=======
import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import { WebView } from "react-native-webview";
import { Spinner } from "@gluestack-ui/themed";

const Web = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <Header title={"Read"} withBack={true} />
            <WebView
                source={{ uri: params.link }}
                startInLoadingState={true}
                renderLoading={() => <Spinner size={"large"} color={"$black"} />}
            />
        </>
    );
};

>>>>>>> e8f9b1ce8ef080ccd6b3442a3b0fb99611f5fae2
export default Web;