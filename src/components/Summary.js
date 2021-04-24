import React, { Component } from 'react'

class Summary extends Component{
    render(){
        const {summary, currentDate} = this.props;
        return(
            <div className = "row">
                <div className = "NewConfirmed">
                    <h3 style={{marginLeft:"70px"}}>New Confirmed</h3>
                    <h1 style={{marginLeft:"70px"}}>{summary.NewConfirmed}</h1>
                    <h4 style={{marginLeft:"70px"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className = "TotalConfirmed">
                    <h3 style={{marginLeft:"50px"}}>Total Confirmed</h3>
                    <h1 style={{marginLeft:"50px"}}>{summary.TotalConfirmed}</h1>
                    <h4 style={{marginLeft:"50px"}} >{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px"}}>New Deaths</h3>
                    <h1 style={{marginLeft:"50px"}}>{summary.NewDeaths}</h1>
                    <h4 style={{marginLeft:"50px"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px"}}>Total Deaths</h3>
                    <h1 style={{marginLeft:"50px"}}>{summary.TotalDeaths}</h1>
                    <h4 style={{marginLeft:"50px"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px"}}>New Recovered</h3>
                    <h1 style={{marginLeft:"50px"}}>{summary.NewRecovered}</h1>
                    <h4 style={{marginLeft:"50px"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px"}}>Total Recovered</h3>
                    <h1 style={{marginLeft:"50px"}}>{summary.TotalRecovered}</h1>
                    <h4 style={{marginLeft:"50px"}}>{new Date(currentDate).toDateString()}</h4>
                </div>



            </div>

        )
    }
};
export default Summary;