import React, { Component } from 'react'

import{Paper,TextField} from "@material-ui/core"
class searchbar extends Component {
    state ={
        searchstate:''
    }
    handelchange = (event)=>{
        this.setState({
            searchstate : event.target.value
        })
    }

    formsubmit = (event) =>{
        const{searchstate} = this.state
        const{onFormsubmit} = this.props
        onFormsubmit(searchstate);

        event.preventDefault();
    }
    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.formsubmit}>
                <TextField fullWidth label="Search..." onChange={this.handelchange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default searchbar
