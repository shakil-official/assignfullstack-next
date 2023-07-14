import {Box, Stack} from "@mui/material";
import MenuCommon from "../../components/Helpers/Common/MenuCommon";

const SubMenuSection = () => {

    const menuItemsFirst: string[] = ["Add", "Edit", "Import"];
    const menuItemsSecond: string[] = ["Pump", "TDI", "Tile Maps", "Assment"];
    const menuItemsThird: string[] = ["Yield", "Soils", "Plant Dates"];

    return (
        <>
            <Box sx={{width: "100%", backgroundColor: "gray", height: "40px"}}>
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="center"
                    sx={{width: "100%"}}
                >
                    <MenuCommon
                        buttonText="Field"
                        menuItems={menuItemsFirst}
                    />

                    <MenuCommon
                        buttonText="Water Managment"
                        menuItems={menuItemsSecond}
                    />
                    <MenuCommon
                        buttonText="AnalyZe"
                        menuItems={menuItemsThird}
                    />
                </Stack>
            </Box>

        </>
    )

}

export default SubMenuSection;

