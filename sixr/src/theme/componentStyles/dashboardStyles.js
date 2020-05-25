import { makeStyles } from "@material-ui/styles";
import laurenChil from "../../assets/Lauren_chil.svg";

export const useStyles = makeStyles((theme) => ({
    mainImage: {
      backgroundImage: `url(${laurenChil})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
    headerContent: {
      color: "black",
      fontSize: "2em",
      fontWeight: "bold",
    },
    fundingGoal: {
      color: "#FEBF12",
      fontSize: "1em",
      fontWeight: "bold",
    },
    description: {
      width: "90%",
      margin: "1em auto 3em 1em",
    },
    buttonStyle: {
      marginLeft: "1em",
      width: "100px",
      color: "white",
    },
  }));

