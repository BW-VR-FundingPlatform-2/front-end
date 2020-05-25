import React, { useState, useEffect } from "react";
//connect from Redux
import { connect } from "react-redux";
//Actions for redux
import dashboardTitleAction from '../store/actions/dashboardTitleAction'
import { Grid, Button, Typography, TextField, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
//components
import DashboardForm from "./DashboardForm";
//Material UI styles
import { useStyles } from '../theme/componentStyles.js/dashboardStyles'

const Dashboard = (props) => {
  // a counter that will be updated every second
  const [counter, setCounter] = useState({
    count: 0,
  });
  //this will give us a random number, and it will be displayed as the amount of money raised for the project.
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100000) + 1
    setCounter({count:randomNumber})
  },[])

  // this will cause the image to "upload" when the add photo button is clicked
  const [imageLoader, setImageLoader] = useState(false);

  // this will update the title when the Submit Title button is click, after it it clicked the title will now render, and an edit button will render.  Clicking the edit button will let you edit the title.
  const [projectTitleForm, setProjectTitleForm] = useState({
    title: "",
    isSubmitted: false,
  });
  
  // this const is where are styles are set. 
  const classes = useStyles();

  // this hanldechange will update the form will update only the title input.
  const handleProjectTitleChange = (event) => {
    const { name, value } = event.target
    setProjectTitleForm(prevState => {
      return {
        ...prevState,
        [name] : value
      }
    })
  }

  // this handleTitleSubmit will pass the values to our dashboardTitleAction, which will update state through the redux store. 
  const dashboardTitleAction = (event) => {
    event.preventDefault()
    props.dashboardTitleAction(projectTitleForm)
  }

  return (
    <>
    {/* Here we are updating the top part of the component.  Raided: ProjectType: Funding Goal.  All this information is coming from the CampaignFormReducer.  There is also logic here that updates the Photo.  When Clicked a picture will update.  All the styles and photos are coming from theme/dashboard styles */}
      <Grid
        container
        style={{ width: "90%", padding: "1em", textAlign: "center" }}
      >
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Raised: <span style={{ color: "black" }}>${counter.count}</span>{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Project Type:{" "}
            <span style={{ color: "black" }}>
              {props.projectType}
            </span>{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="secondary">
            Funding Goal:{" "}
            <span style={{ color: "black" }}>${props.fundingGoal}</span>{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ margin: " 1em 0 2em 2em" }} direction="row">
        <Grid
          item
          xs={4}
          container
          alignitems="center"
          justify="center"
          style={{ height: "30em" }}
        >
          {imageLoader ? (
            <div className={classes.mainImage} />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.buttonStyle}
              alignitems="flex-end"
              style={{ marginTop: "1em", height: "35px", width: "150px" }}
              onClick={() => setImageLoader(true)}
            >
              Add Photo
            </Button>
          )}
          {/* End of Raised: ProjectType: FundingGoal portion of page */}

        {/* This logic updated the Project Title from Redux.  Submitting send the information to dashboardTitleActioin and will update the redux store */}
        </Grid>
        <Grid item xs={8}>
          {props.displayForm && (
            <>
              {/* When  we submit the title form, it will call dashboardTitleAction, and the redux store will update it's state */}
              <form onSubmit={dashboardTitleAction}>
                <Grid container alignitems="flex-start" spacing={2}>
                  <Grid item xs={5}>
                    <TextField
                      fullWidth
                      required
                      name="title"
                      type="text"
                      label="Project Title"
                      variant="outlined"
                      style={{ marginLeft: "1em" }}
                      onChange={handleProjectTitleChange}
                      value={projectTitleForm.title}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  className={classes.buttonStyle}
                  alignitems="flex-end"
                  style={{ marginTop: "1em", height: "35px", width: "150px" }}
                  // onClick={() => setImageLoader(true)}
                  >
                  Submit Title
                </Button>
                </form>
            </>
          )}
            {/* When you submit the form, the input will unmount and display the title */}
          {projectTitleForm.isSubmitted
            ? false
            : 
            <Typography
            style={{ marginLeft: ".5em", marginBottom:"1em" }}
            className={classes.headerContent}
            >
                {props.title}
              </Typography>
          }
          {/* End of Logic for Submitting our form.  Once Submitted the Title will now display */}
 
          {/* This will display funding goal, this comes from the create campaign form. */}
          <Typography
            style={{ marginLeft: "1em" }}
            className={classes.fundingGoal}
          >
            Funding Goal:{" "}
            <span style={{ color: "black" }}>${props.fundingGoal}</span>
          </Typography>
          {/* This will display project description, this comes from the create campaign form. */}
          <Typography className={classes.description}>
            Description is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. Description is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries. Description
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries. Description is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </Typography>


          {/* This logic, displays and edit button.  If clicked it will bing up the project title input, and let you update your title */}
          {props.isSubmitted &&
          (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.buttonStyle}
              alignitems="flex-end"
              style={{ marginTop: "1em", height: "35px", width: "120px"}}
              // onClick={() => setImageLoader(true)}
            >
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
      <DashboardForm />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    projectType: state.campaignFormReducer.projectType,
    fundingGoal: state.campaignFormReducer.fundingGoal,
    title: state.dashboardProjectTitleReducer.title,
    isSubmitted: state.dashboardProjectTitleReducer.isSubmitted,
    displayForm: state.dashboardProjectTitleReducer.displayForm
  };
};

export default connect(mapStateToProps, {dashboardTitleAction})(Dashboard);
// test file share system 