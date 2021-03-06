import { createMuiTheme } from '@material-ui/core/styles';

const pink = "#ED1A74"
const blue = "#33C6F4"

export default createMuiTheme({
    palette : {
        common: {
            black: "#000",
            white:"#fff"
        },
        primary: {
            main:`${pink}`,
        },
        secondary: {
            main:`${blue}`,
        }
        
    },
    typography : {
        tab: {
            fontFamily: "Ubuntu",
            fontSize:".85rem",
        } 
    },
})