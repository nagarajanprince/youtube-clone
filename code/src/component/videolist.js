import React from 'react'
import Videoitem from "./videoitem"

import {Grid,Paper} from "@material-ui/core"

const videolist = ({videos,onvideoselect}) =>{
    const videoreturn = videos.map((data,id) => <Videoitem onvideoselect={onvideoselect} key={id} video={data}/>)
    return (
        <Grid style={{padding:"25px 0"}}>
            <Paper style={{marginBottom:"20px"}}>
            {videoreturn}
            </Paper>
        </Grid>
        )
}

export default videolist
