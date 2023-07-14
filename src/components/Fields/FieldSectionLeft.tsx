import {Box, Stack, Typography} from "@mui/material";

const FieldSectionLeft = () => {

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#C3C4C8",
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
                    My Fields
                </Typography>
            </Box>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}
                   sx={{backgroundColor: "#D9D9D9", height: "235px", marginTop: "20px"}}>
                <Typography
                    variant="h6"
                    sx={{textAlign: "center", fontWeight: "bold"}}
                >
                    Field List Dropdown View
                </Typography>
            </Stack>

        </>
    )

}

export default FieldSectionLeft;


