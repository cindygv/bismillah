import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const UKKI = () => {
    return (
        <>
            <Header title={"UKKI"} />
            <Center flex={1}>
                <Heading>Halaman UKKI</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default UKKI;
