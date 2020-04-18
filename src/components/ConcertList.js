import React from 'react';
import { Container } from 'react-bootstrap';

import "./ConcertList.css";
import ConcertListing from "./ConcertListing.js"

const ConcertList = ({concerts, onPreview}) => {

  if (concerts==null || concerts.length<1) return (
    <div id="message">No Concerts</div>
  )
  else return (
    <Container className="themed-container" fluid="xl">
    <ul id="concert-list">{
        concerts.map( concert =>{
          return <ConcertListing concert={concert} onPreview={onPreview} />
        })
    }</ul>
    </Container>
  );

}

export default ConcertList;
