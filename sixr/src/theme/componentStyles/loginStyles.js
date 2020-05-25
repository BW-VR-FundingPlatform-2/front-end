import { makeStyles } from "@material-ui/styles";
import mainImage from "../../assets/login_main_image.svg";

//styling for Image with Material UI
export const useStyles = makeStyles((theme) => ({
    mainImage: {
      backgroundImage: `url(${mainImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
  }));