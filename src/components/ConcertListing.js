import React from 'react';

import "./ConcertListing.css";

const ConcertListing = ({artists, venue, date, time, showTime, doorTime, priceMin, priceMax, detailUrl, ticketUrl, age}) => {

  return (
      <li>
        {date}<br/>
        { artists.map( artist => <p>{artist}</p> ) }
      </li>
  );

}

export default ConcertListing;
