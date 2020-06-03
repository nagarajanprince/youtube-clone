import React from 'react'

import {Paper,Typography} from "@material-ui/core"

const videodetail = ({video}) => {
    if(!video) return <h1>Loading...</h1>

    const videourl = `https://www.youtube.com/embed/${video.id.videoId}`

    console.log(video)
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height:"70%",margin:"20px 0"}}>
                <iframe title="video detail" width="100%" height="500px" src={videourl} />
            </Paper>
            
    <Typography variant="h4">{video.snippet.title}-{video.snippet.channelTitle}</Typography>
    <p>{video.snippet.description}</p>
        </React.Fragment>
    )
}

export default videodetail

