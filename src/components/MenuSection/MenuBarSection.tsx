import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
// search
import {styled, Theme} from "@mui/system";
import {InputBase} from "@mui/material";
import Button from '@mui/material/Button';
import SearchBar from "../Helpers/Common/SearchBar";


const MenuBarSection = () => {

    const StyledInputBase = styled(InputBase)(({theme}: { theme: Theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const searchHandler = () => {}


    return (
        <>
            <Box sx={{flexGrow: 3}}>
                <AppBar position="static">
                    <Toolbar>
                        <AdbIcon></AdbIcon>

                        <Box sx={{flexGrow: 2}}/>

                        <SearchBar searchHandler={searchHandler}/>

                        <Box sx={{flexGrow: 1}}/>


                        <Box sx={{display: {xs: "none", md: "flex"}}}>
                            <Button size="medium" color="inherit">
                                <Typography
                                    noWrap
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        display: {
                                            sm: "block",
                                        },
                                    }}
                                >
                                    Notifications
                                </Typography>
                            </Button>

                            <Button size="medium" color="info" variant={"contained"} >
                                <Typography
                                    noWrap
                                    component="div"
                                    variant="h6"
                                    sx={{display: {xs: "none", sm: "block"}}}
                                >
                                    Profile
                                </Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default MenuBarSection;