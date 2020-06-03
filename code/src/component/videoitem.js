import React from 'react'
import {Grid,Paper,Typography} from "@material-ui/core"

const videoitem = ({video,onvideoselect}) => {
    console.log(video)
    return (
        <Grid item xs={12}>
            <Paper style={{display:"flex",alignItems:'center',cursor:"pointer"}} onClick={() => onvideoselect(video)}>
                <img style={{marginRight:"15px;"}} src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <Typography>
                    {video.snippet.title}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default videoitem
