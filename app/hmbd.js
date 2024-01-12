import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMBD = () => {
    return (
        <>
            <Header title={"HMBD"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HMBD</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HMBD;
