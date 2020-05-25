import { makeStyles } from "@material-ui/styles";
import Lauren_Chil_work from "../../assets/Lauen_Chil_work.svg";
import browse_project_main_image from "../../assets/browse_project_main_image.svg";

export const useStyles = makeStyles((theme) => ({
    mainImage: {
      backgroundImage: `url(${Lauren_Chil_work})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
    footerImage: {
      backgroundImage: `url(${browse_project_main_image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
    card: {
      maxWidth: 300,
      margin: "0 auto 3em",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
    },
    media: {
      paddingTop: "56.25%",
    },
    content: {
      textAlign: "left",
    },
    divider: {
    },
    heading: {
      fontWeight: "bold",
    },
    subheading: {
      lineHeight: 1.8,
    },
    avatar: {
      display: "inline-block",
      marginTop: "1em",
    },
    main_content_styles: {
      width: "75%",
      margin: "0 auto 3em ",
    },
  }));
  