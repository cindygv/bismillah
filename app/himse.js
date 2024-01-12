import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HIMSE = () => {
    return (
        <>
            <Header title={"HIMSE"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HIMSE</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HIMSE;
