import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import FieldSectionLeft from "./FieldSectionLeft";
import FieldSectionCenter from "./FieldSectionCenter";
import FieldSectionRight from "./FieldSectionRight";


const FieldSection = () => {


    const style = {
        width: "100%",
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        height: "65px",
        marginTop: "20px",
        justifyContent: "space-between",

    };


    return (
        <>
            <Box sx={style}>
                <div style={{paddingLeft: "20px"}}>
                    <Typography variant="h6" color="white">
                        Selected Field Information
                    </Typography>
                </div>
                <div style={{paddingRight: "10px"}}>
                    <Button
                        variant="contained"
                        sx={{
                            color: "gray", backgroundColor: "White", borderRadius: "0", fontWeight: "bold",
                            '&:hover': {
                                backgroundColor: 'gray',
                                color: 'white',
                            },
                        }}
                    >
                        Request Service
                    </Button>
                </div>
            </Box>


            <Box sx={{width: "100%", height: "200px", marginTop: "10px", paddingLeft: "1px", paddingRight: "1px",}}>
                <Grid container spacing={4}>
                    <Grid xs={4} item> <FieldSectionLeft/> </Grid>

                    <Grid xs={2} item> <FieldSectionCenter/> </Grid>

                    <Grid xs={6} item> <FieldSectionRight/> </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default FieldSection;