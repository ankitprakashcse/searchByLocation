import React, { Component } from 'react';
import Activity from "../Activity/Activity";

class HomePage extends Component {
    constructor(props) {
        super(props)

        var startDate = new Date();
        startDate.setDate(startDate.getDate());
        var sDate = startDate.toISOString().substr(0,10);

        var endDate = new Date();
        endDate.setDate(endDate.getDate() + 2);
        var eDate = endDate.toISOString().substr(0,10);
    
        this.state = {
             location: 'Seattle',
             startDate: sDate,
             endDate: eDate,
             items: {}
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.fetchItems(this.state.location, this.state.startDate, this.state.endDate);
    }

    componentDidMount() {
        this.fetchItems(this.state.location, this.state.startDate, this.state.endDate);
    }


  fetchItems = async (location,startDate,endDate) => {
    let response = await fetch(`https://www.expedia.com/lx/api/search?location=${location}&startDate=${startDate}&endDate=${endDate}`);
    const dataSet = await response.json();
    this.setState({
        items: dataSet
    })
  }
    
    render() {
        const {location, startDate, endDate, items} = this.state;
        return (
            <div className="d-flex flex-column">
                <div className="search-wrapper">
                    <label className="space-align">Location:</label>
                    <input 
                        className="space-align" 
                        type="text" 
                        defaultValue={location}
                        onChange={event => this.setState({location: event.target.value})}/>
                    <label className="space-align">Start Date:</label>
                    <input 
                        className="space-align" 
                        type="date"
                        defaultValue={startDate}
                        onChange={event => this.setState({startDate: event.target.value})}/>
                    <label className="space-align">End date:</label>
                    <input 
                        className="space-align" 
                        type="date"
                        defaultValue={endDate}
                        onChange={event => this.setState({endDate: event.target.value})}/>

                    <button className="space-align" onClick={this.clickHandler}>Search</button>
                </div>
                <div className="d-flex flex-wrap">
                    <Activity activites={items} startDate={startDate} endDate={endDate} />
                </div>
            </div>
        )
    }
}

export default HomePage;
