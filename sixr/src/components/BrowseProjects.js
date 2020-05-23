import React from "react";
import {
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Lauren_Chil_work from "../assets/Lauen_Chil_work.svg";
import browse_project_main_image from "../assets/browse_project_main_image.svg";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

const useStyles = makeStyles((theme) => ({
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
    //   padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    //   margin: `${muiBaseTheme.spacing.unit * 3}px 0`
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
    // border: "2px solid white",
    // "&:not(:first-of-type)": {
    //   marginLeft: -muiBaseTheme.spacing.unit
    // }
  },
  main_content_styles: {
    width: "75%",
    margin: "0 auto 3em ",
  },
}));

const BrowseProjects = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item style={{ margin: "0 auto 3em" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          <div className={classes.mainImage} />
        </Grid>
      </Grid>

      <Grid item>
        <Grid item>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              margin: "1em auto",
              color: "#33C6F4",
            }}
          >
            Browse Sixr Project!
          </Typography>
        </Grid>
        <Grid item className={classes.main_content_styles}>
          <Typography varient="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the.
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{ maxWidth: "80%", margin: "auto" }}>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${browse_project_main_image}`}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Sixr Project Example
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider className={classes.divider} light />
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item style={{ margin: "3em auto 0" }}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          <div className={classes.footerImage} />
        </Grid>
      </Grid>
    </>
  );
};

export default BrowseProjects;
