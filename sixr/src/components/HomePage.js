import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import landing_page_main_image from '../assets/landing_page_main_image.svg'
//Photo by fauxels from Pexels 
import landing_page_subcontent_image from '../assets/landing_page_subcontent_image.svg'
//Photo by Andrea Piacquadio from Pexels
import home_page_bottom_photo from '../assets/home_page_bottom_photo.svg'

//components
import Contact_Us from './Contact_Us'

const useStyles = makeStyles((theme) => ({
    mainImage: {
        backgroundImage: `url(${landing_page_main_image})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%",
    },
    subImage: {
        backgroundImage: `url(${landing_page_subcontent_image})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%",
    },
    footerImage: {
        backgroundImage: `url(${home_page_bottom_photo})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%",
    },
    imageCard : {
        position: 'absolute',
        // boxShadow: 
    },
    buttonStyle : {
        width:"200px",
        height: "45px",
        margin:" 1em auto 0",
    },
    mainCardFont: {
        ...theme.typography.tab,
        marginTop:"1em",
        marginBottom:"1em"
      },
      cardStyle : {
          width:"500px",
          position:"absolute",
      },
      main_content_styles : {
          width: "90%",
          margin: "auto"
      }
}))

//Make card Opaque

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
                        <Button variant="contained" color="secondary" className={homePage_styles.buttonStyle}                  component={Link}
                to="/createcampange">Create A Campaing</Button>
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
         <Contact_Us />
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
