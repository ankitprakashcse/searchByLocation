import React from 'react';
import { Link } from 'react-router-dom';

function Activity(props) {
    const {activites: dataObj, startDate, endDate} = props;

    if(Object.keys(dataObj).length === 0) {
       return(
           <div>Sit and Relax...Fetching data....</div>
       )
    } else {
        return(
            dataObj["activities"].map((item) => {
                return(
                    <div className="card card-width" key={item.id} >
                        <img src={item.imageUrl} className="card-img-top" alt="..."/>
                         <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.formattedTitle}</p>
                          <p className="card-text">Start Date : {startDate}</p>
                          <p className="card-text">End Date : {endDate}</p>
                          <Link to={{
                              pathname: `${item.id}`,
                              state : {
                                 sDate: startDate,
                                 eDate: endDate
                              }
                          }}><button className="btn btn-primary">More Info</button></Link>
                        </div>
                     </div>
                )
                })
            )
    }
}

export default Activity
