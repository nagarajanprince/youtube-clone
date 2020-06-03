import React from 'react'
import {Grid,Paper,Typography} from "@material-ui/core"

const videoitem = ({video,onvideoselect}) => {
    console.log(video)
    return (
        <Grid item xs={12}>
            <Paper style={{cursor:"pointer",marginBottom:"20px"}} onClick={() => onvideoselect(video)}>
                <img style={{marginRight:"15px;",width:"100%"}} src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <Typography style={{padding:"10px"}}>
                    {video.snippet.title}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default videoitem
