import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HIMASDATA = () => {
    return (
        <>
            <Header title={"HIMASDATA"} withBack="true"/>
            <Center flex={1}>
                <Heading>Halaman HIMASDATA</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HIMASDATA;
