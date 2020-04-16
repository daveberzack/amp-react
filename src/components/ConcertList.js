import React from 'react';

import "./ConcertList.css";
import ConcertListing from "./ConcertListing.js"

const ConcertList = ({concerts}) => {

  if (concerts==null || concerts.length<1) return (
    <div id="message">No Concerts</div>
  )
  else return (
    <ul id="concert-list">{
        concerts.map( concert =>{
          return <ConcertListing
            key={concert.id}
            artists={concert.artists}
            venue={concert.venue}
            date={concert.date}
            time={concert.time}
            showtime={concert.showTime}
            doortime={concert.doorTime}
            priceMin={concert.priceMin}
            priceMax={concert.priceMax}
            detailurl={concert.detailUrl}
            ticketurl={concert.ticketUrl}
            age={concert.age}
          />
          //return <li key={concert.id}>{concert.name}</li>
        })
    }</ul>
  );

}

export default ConcertList;
