import { makeStyles } from "@material-ui/styles";
import headerImage from "../../assets/campaint_main_image.svg";

export const useStyles = makeStyles((theme) => ({
    mainImage: {
      backgroundImage: `url(${headerImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
  }));
