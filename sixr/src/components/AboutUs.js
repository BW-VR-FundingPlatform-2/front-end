import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import headerImage from "../assets/about_us_header_image.svg";
import footerImage from "../assets/about_us_footer_image.svg";

const useStyles = makeStyles((theme) => ({
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

const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em"}}
        >

              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3">Sixr</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    className={classes.mainCardFont}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the.
                  </Typography>
                </Grid>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.buttonStyle}
                  component={Link}
                  to="/createcampange"
                >
                  Create A Campaing
                </Button>
              </Grid>

          <div className={classes.mainImage} />
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em", marginLeft: "3em" }}
        >
          <Card className={classes.cardStyle1}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography
                    variant="h1"
                    style={{ fontWeight: "bolder", color: "#fff" }}
                  >
                    SIXR
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.mainCardFont}
                    style={{
                      fontSize: "2.5rem",
                      width: "650px",
                      margin: "1em auto",
                    }}
                  >
                    Our mission here at SIXR is to help bring creative projects
                    to life.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>







      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em"}}
        >

              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3">Sixr</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    className={classes.mainCardFont}
                    style={{margin:" auto", width:"70%", marginBottom:"3em"}}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the.
                  </Typography>
                </Grid>

              </Grid>

          <div className={classes.footerImage} />
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "30em", marginLeft: "3em" }}
        >
          <Card className={classes.cardStyle2}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography
                    variant="h1"
                    style={{ fontWeight: "bolder", color: "#fff" }}
                  >
                    SIXR
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.mainCardFont}
                    style={{
                      fontSize: "2.5rem",
                      width: "650px",
                      margin: "1em auto",
                    }}
                  >
                    Our mission here at SIXR is to help bring creative projects
                    to life.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
      
    </>
  );
};

export default AboutUs;
