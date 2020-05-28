import { makeStyles } from "@material-ui/styles";
import headerImage from '../../assets/about_us_header_image.svg'
import footerImage from "../../assets/about_us_footer_image.svg";

export const useStyles = makeStyles((theme) => ({
  mainImage: {
    backgroundImage: `url(${headerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  footerImage: {
    backgroundImage: `url(${footerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  imageCard: {
    position: "absolute",
    // boxShadow:
  },
  buttonStyle: {
    width: "200px",
    height: "45px",
    margin: " 1em auto 1em",
  },
  mainCardFont: {
    ...theme.typography.tab,
    marginTop: "1em",
    marginBottom: "1em",
  },
  cardStyle1: {
    width: "75%",
    height: "400px",
    position: "absolute",
    backgroundColor: "#FEBF12",
    color: "primary",
  },
  cardStyle2: {
    width: "75%",
    height: "400px",
    position: "absolute",
    backgroundColor: "#5CBB48",
    color: "primary",
  },
  main_content_styles: {
    width: "90%",
    margin: "auto",
  },
}));
