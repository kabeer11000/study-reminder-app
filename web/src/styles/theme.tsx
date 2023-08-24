import {ThemeOptions} from '@mui/material/styles';
import {createTheme} from "@mui/material";

export const themeOptions: ThemeOptions = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: "linear-gradient(#2582CD 50%, #3CD3DD 175%)"
                }
            }
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#0066c3',
        },
        secondary: {
            main: '#ffb61d',
        },
    },
};
export const theme = createTheme(themeOptions);