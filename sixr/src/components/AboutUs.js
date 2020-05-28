import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Button, Typography } from "@material-ui/core";
import { useStyles } from "../theme/componentStyles/aboutUsStyles"

const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Grid
          container
          alignitems="center"
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
                  style={{color:"#fff", width:"120px"}}
                  variant="contained"
                  color="secondary"
                  className={classes.buttonStyle}
                  component={Link}
                  to="/signup"
                >
                  Sign Up!
                </Button>
              </Grid>

          <div className={classes.mainImage} />
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          alignitems="center"
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
          alignitems="center"
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
          alignitems="center"
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
