import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";
// styles for page
import { useStyles } from "../theme/componentStyles/browseProjectsStyles";
// header image
import browse_project_main_image from "../assets/browse_project_main_image.svg";
import Axios from "axios";
// import { Link } from "react-router-dom";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];


// this function returns a string of nubmers to currency
// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2
// })

const BrowseProjects = () => {
  const [projectData, setProjectData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get("https://vr-funding-platform.herokuapp.com/api/users/projects")
      .then((res) => {
        setProjectData(res.data);
        setLoading(true)
      })
      .catch((err) => console.log(err));
  }, []);

  const classes = useStyles();
  return (
    <>
      <Grid item style={{ margin: "0 auto 3em" }}>
        <Grid
          container
          alignitems="center"
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
        {loading && projectData.map((data) => {
              return (
                <>
                  <Grid item xs={3} style={{padding:"10px"}} key={Math.random()}>
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
                          {data.name}
                        </Typography>
                        <Typography style={{ color: "cornflowerblue" }}>
                          {`$${data.current_funding}`}
                        </Typography>
                        <Typography
                          className={"MuiTypography--subheading"}
                          variant={"caption"}
                        >
                          We are going to learn different kinds of species in
                          nature that live together to form amazing environment.
                        </Typography>
                        <Typography style={{ color: "red" }}>
                          {`$${data.target_funding}`}
                        </Typography>
                        <Divider className={classes.divider} light />
                        {faces.map((face) => (
                          <Avatar
                            className={classes.avatar}
                            key={face}
                            src={face}
                          />
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
      </Grid>
      <Grid item style={{ margin: "3em auto 0" }}>
        <Grid
          container
          alignitems="center"
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
