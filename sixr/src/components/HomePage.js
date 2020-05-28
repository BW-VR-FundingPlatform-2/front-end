import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Button, Typography } from '@material-ui/core'

import { useStyles } from '../theme/componentStyles/homePageStyles'

//components
import ContactUs from './ContactUs'

const HomePage = () => {
    const homePage_styles = useStyles()
    return (
        <>
         <Grid item >
             <Grid container alignItems="center" justify="center" style={{height:"30em"}}>
             <Card className={homePage_styles.cardStyle}>
                 <CardContent>
                     <Grid container direction="column" style={{textAlign:"center"}}>
                        <Grid item>
                            <Typography variant="h3">Sixr</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" className={homePage_styles.mainCardFont}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</Typography>
                        </Grid>
                        <Button variant="contained" color="primary" className={homePage_styles.buttonStyle}                  component={Link}
                to="/signup">Sign Up!</Button>
                     </Grid>
                 </CardContent>
             </Card>
             <div className={homePage_styles.mainImage}/>
             </Grid>
         </Grid>
         <Grid item>
             <Grid item>
                 <Typography variant="h3" style={{textAlign:"center", margin:"1em auto"}}> Sixr </Typography>
             </Grid>
             <Grid item className={homePage_styles.main_content_styles}>
                 <Typography varient="body1">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. 
                 </Typography>
                 <Typography variant="h5" style={{margin:"1em auto"}}> Our Mission </Typography>
                 <Typography varient="body1">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. 
                 </Typography>
                 <Typography variant="h5" style={{margin:"1em auto"}}> About us </Typography>
                 <Typography varient="body1">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. 
                 </Typography>
             </Grid>
         </Grid>
         <Grid item style={{margin:"3em auto 0"}} >
             <Grid container alignItems="center" justify="center" style={{height:"30em"}}>
             <div className={homePage_styles.subImage}/>
             </Grid>
         </Grid>
         <ContactUs />
         <Grid item>
             <Grid item>
                 <Typography variant="h3" style={{textAlign:"center", margin:"1em auto"}}> Sixr </Typography>
             </Grid>
             <Grid item className={homePage_styles.main_content_styles}>
                 <Typography varient="body1">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. 
                 </Typography>
                 <Typography variant="h5" style={{margin:"1em auto"}}> Our Mission </Typography>
                 <Typography varient="body1">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. 
                 </Typography>
                 <Typography variant="h5" style={{margin:"1em auto"}}> About us </Typography>
                 <Typography varient="body1">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. 
                 </Typography>
             </Grid>
         </Grid>
         <Grid item style={{margin:"3em auto 0"}} >
             <Grid container alignItems="center" justify="center" style={{height:"30em"}}>
             <div className={homePage_styles.footerImage}/>
             </Grid>
         </Grid>
        </>
    )
}

export default HomePage
