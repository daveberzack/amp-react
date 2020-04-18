import React from 'react';

import { Button, Card } from 'react-bootstrap';
import IconPencil from './icons/IconPencil.js'
import "./ConcertListing.css";

const ConcertListing = ({
  concert: {
    date,
    time,
    venueName,
    minPrice,
    maxPrice,
    detailUrl,
    ticketUrl,
    headliners,
    openers
  },
  onPreview
}) => {

  return (
      <Card>
        {date} - {time} @ {venueName}<br/>
        {minPrice} - {maxPrice}<br/>
        <a href="">Tickets</a>
        { headliners.map( artist => {
          return <p><b>
            <a onClick={() => onPreview(artist)}>{artist}</a>
          </b></p>;
        } ) }

        { openers.map( artist => {
          return <p>
            <a onClick={() => onPreview(artist)}>{artist}</a>
          </p>;
        } ) }

      </Card>
  );

}

export default ConcertListing;
