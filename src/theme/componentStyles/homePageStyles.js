import { makeStyles } from "@material-ui/styles";
import landing_page_main_image from '../../assets/landing_page_main_image.svg'
//Photo by fauxels from Pexels 
import landing_page_subcontent_image from '../../assets/landing_page_subcontent_image.svg'
//Photo by Andrea Piacquadio from Pexels
import home_page_bottom_photo from '../../assets/home_page_bottom_photo.svg'

export const useStyles = makeStyles((theme) => ({
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