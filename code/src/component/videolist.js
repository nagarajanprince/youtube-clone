import React from 'react'
import Videoitem from "./videoitem"

import {Grid} from "@material-ui/core"

const videolist = ({videos,onvideoselect}) =>{
    const videoreturn = videos.map((data,id) => <Videoitem onvideoselect={onvideoselect} key={id} video={data}/>)
    return (
        <Grid style={{padding:"25px 0"}}>            
            {videoreturn}
        </Grid>
        )
}

export default videolist
