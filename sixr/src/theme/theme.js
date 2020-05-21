import { createMuiTheme } from '@material-ui/core/styles';

const pink = "#3D405B"
const blue = "#31C7F6"

export default createMuiTheme({
    palette : {
        common: {
            pink : `${pink}`,
            blue:`${blue}`
        },
        primary: {
            main:`${pink}`,
        },
        secondaryL: {
            main:`${blue}`,
        }
        
    },
    overrides: {
       MuiInputLabel: {
           root: {
               color: pink,
               fontSize: "1rem"
           }
       },
       MuiInput: {
           
       }
    }
})