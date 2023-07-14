import {Box, Button, Stack, Typography} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const FieldSectionRight = () => {

    const buttonStyle = {
        textTransform: "capitalize",
        height: "30px",
        color: "#36363a",
        background: "rgba(188,188,194,0.85)",
        borderRadius: "0",
        fontWeight: "bold",
        flex: 1,
    };

    const ButtonItems: string[] = ['Field Monitor', 'Field Insight', 'Field Notes', 'Share Status'];


    return (
        <>
            <Box sx={{height: "40px", display: "flex", alignItems: "center", gap: "40px"}}>
                {
                    ButtonItems.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                accessKey=""
                                aria-haspopup="true"
                                sx={buttonStyle}
                                variant="contained"
                            >
                                {item}
                            </Button>
                        )
                    })
                }
            </Box>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{backgroundColor: "#6a6e86", height: "230px", marginTop: "20px", position: "relative",}}
            >
                <Typography variant="h6" color={"white"} sx={{textAlign: "center", fontWeight: "bold"}}>
                    DATA, Graph & Table
                </Typography>

                <OpenInFullIcon
                    style={{
                        color: "#f5f3f3",
                        position: "absolute",
                        bottom: "25px",
                        right: "30px",
                    }}
                />
                <Box
                    sx={{
                        borderRight: "3px solid #f5f3f3",
                        position: "absolute",
                        height: "200px",
                        borderRadius: "2px",
                        right: "10px",
                    }}
                ></Box>
            </Stack>

        </>
    )

}

export default FieldSectionRight;


