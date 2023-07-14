import {Box, Stack, Typography} from "@mui/material";
import FieldList from "../Helpers/Common/FieldList";

const FieldSectionCenter = () => {

    const itemOne: string[] = ["Soil", "Tile", "Yield", "Wetlands"];
    const itemTwo: string[] = ["Weather", "Crop history", "Hail history", "NDVI"];


    return (
        <>
            <Box sx={{
                backgroundColor: "#BBC6C8",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
                <Typography
                    variant="h6"
                    sx={{fontWeight: "bold", color: "#535354"}}
                >
                    Field Data
                </Typography>
            </Box>

            <Stack direction={"row"} sx={{
                marginTop: "20px",
                background: "#F7FCFF",
                height: "220px",
                padding: "10px 10px",
                paddingTop: "15px",
            }}
            >

                <Box sx={{borderRight: "1px solid gray", flex: 1}}>
                    <Typography sx={{fontWeight: "bold"}}> Drainage Classification</Typography>
                    <FieldList items={itemOne}/>
                </Box>
                <Box sx={{flex: 1, display: "flex", justifyContent: "center"}}>
                    <FieldList items={itemTwo}/>
                </Box>
            </Stack>


        </>
    )

}

export default FieldSectionCenter;


