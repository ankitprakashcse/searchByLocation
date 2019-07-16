import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ActivityDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { items: {} }
    }

    componentDidMount() {
        this.fetchItem();
    }
    
    fetchItem = async () => {
        const activityId = this.props.match.params.id;
        const {sDate, eDate} = this.props.location.state;
        let response =  await fetch(`https://www.expedia.com/lx/api/activity?activityId=${activityId}&startDate=${sDate}&endDate=${eDate}`)
        const dataSet = await response.json();
        this.setState({
            items: dataSet
        })
    }

    render() {
        if(Object.keys(this.state.items).length === 0) {
            return(
                <div class="wrapper">Sit and Relax.. Fetching data...</div>
            )
        } else {
            return (
                <div className="card card-width wrapper">
                    <img src={this.state.items.images[0]['url']} className="card-img-top" alt="Item description"/>
                    <div className="card-body">
                      <p className="card-text">{this.state.items.fullName}</p>
                      <Link to={`/`}><button className="btn btn-primary">Back To Homepage</button></Link>
                    </div>
                </div>
            )
        }
    }
}

export default ActivityDetails
