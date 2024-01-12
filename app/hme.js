import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HME = () => {
    return (
        <>
            <Header title={"HME"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HME</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HME;
