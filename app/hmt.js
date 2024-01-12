import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMT = () => {
    return (
        <>
            <Header title={"HMT"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HMT</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HMT;
