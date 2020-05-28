import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { useHistory } from "react-router-dom"

export const LogIn_CampaignSuccess = () => {
    const history = useHistory()
    return (
        <Typography
        variant="h4"
        color="primary"
        style={{ textAlign: "center", margin: "4em auto" }}
      >
        Head Over to your
        <Typography>
        <Link
          color="secondary"
          component="button"
          variant="h4"
          onClick={() => {
            history.push("/dashboard")
          }}
        > DashBaord!</Link> 
        </Typography>
      </Typography>
    )
}
