import * as React from 'react';
import MenuBar from "../src/components/MenuSection/MenuBarSection";
import SubMenuSection from "../src/components/MenuSection/SubMenuSection";
import FieldSection from "../src/components/Fields/FieldSection";
import MpaViewSection from "../src/components/MapSection/MpaViewSection";


export default function Home() {

    return (
        <>
            <MenuBar></MenuBar>
            <SubMenuSection></SubMenuSection>
            <MpaViewSection></MpaViewSection>
            <FieldSection></FieldSection>
        </>
    );
}
