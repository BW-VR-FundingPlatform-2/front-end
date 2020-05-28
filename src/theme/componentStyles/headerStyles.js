import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    sixr_logo: {
      padding: "30px",
      width: "10%",
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "20px",
    },
  }));

