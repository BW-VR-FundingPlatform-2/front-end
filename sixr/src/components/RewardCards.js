import React from "react";
import { connect } from "react-redux";
import { useStyles } from "../theme/componentStyles/rewardCardStyles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const RewardCards = (props) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grid container style={{ margin: "2em 2em" }}>
      <Grid item xs={2}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Pledge - Tier {props.length + 1}
            </Typography>
            <Typography variant="caption">
              {`Pledge $${props.pledgeAmount} or more Super Early Bird for ${props.discount}% OFF`}
            </Typography>
            <Typography variant="h6" component="h2">
              Reward
            </Typography>
            <Typography variant="caption">
              {`${props.projectDescription}`}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`${props.deliveryDate}`}
            </Typography>
            <Typography variant="body2" component="p">
              Limited (168 left of 400) 232 backers
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    length: state.dashboardFormReducer.length,
    pledgeAmount: state.dashboardFormReducer.pledgeAmount,
    discount: state.dashboardFormReducer.discount,
    deliveryDate: state.dashboardFormReducer.deliveryDate,
    projectDescription: state.dashboardFormReducer.projectDescription,
  };
};

export default connect(mapStateToProps)(RewardCards);
