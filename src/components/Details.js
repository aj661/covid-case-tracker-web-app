import React, { Component } from 'react';
import Summary from './Summary';
import axios from 'axios';

  class Details extends Component {
      
    state = {
        countries : [],
        global : [],
        currentDate : null,
        loading : true
     }

     async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary");
        console.log(res);
        this.setState({countries : res.data.Countries});
        this.setState({global : res.data.Global});
        this.setState({currentDate : res.data.Date});
        this.setState({loading : false});
    }

    render(){
        if (this.state.loading){
            return<h1>loading...</h1>
        }
        return(
            <div>
                <Summary summary = {this.state.global} currentDate = {this.state.currentDate}/>

            </div>
        )
    }

}
export default Details;
