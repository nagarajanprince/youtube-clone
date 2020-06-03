import React, { Component } from 'react'
import {Grid,Container} from "@material-ui/core"

import{Searchbar,Videolist,Videodetail} from "./component"
import API from "./api/youtube"


class app extends Component {
    state ={      
        videos:[],
        selectVideo:null
    }
    handelsubmit = async(searchtearm) => {
        const response = await API.get('search', {
        params:{
            part: "snippet",
            maxResult: 10,
            key:'AIzaSyB0Zl6a3zsTP8JEtPk-bKILgPHciO9Tquo',
            q:searchtearm
        }
        });
        this.setState({
            videos:response.data.items,
            selectVideo:response.data.items[0]
        })
    }

    onvideoselect = (video) => {
this.setState({
    selectVideo:video
})
    }
    componentDidMount(){
        this.handelsubmit("react framwork")
    }
    render() {
        const {selectVideo,videos} = this.state
        return (
            
        <Grid>
               <Container maxWidth="lg">
               <Grid item xs={12}>
                   <Grid container>
                       <Grid item xs={12}>
                            <Searchbar onFormsubmit ={this.handelsubmit}/>
                       </Grid>
                       <Grid item xs={8}>
                            <Videodetail video={selectVideo}/>
                       </Grid>
                       <Grid item xs={4} style={{padding:"0 20px"}}>
                            <Videolist videos={videos} onvideoselect={this.onvideoselect}/>
                       </Grid>
                   </Grid>
               </Grid>           
           </Container>
           </Grid>
        )
    }
}
export default app
