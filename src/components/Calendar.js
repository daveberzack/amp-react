import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import "./Calendar.css";
import Preview from "./Preview.js"
import ConcertList from "./ConcertList.js"
import AddConcertForm from "./AddConcertForm.js"

const Calendar = () => {

  const [concerts, setConcerts] = useState( [] );
  const [previewQuery, setPreviewQuery] = useState( "" );
  const [isLoaded, setIsLoaded] = useState( false );

  useEffect(() => {
    loadConcertData();
  }, [isLoaded]);

  const addConcertHandler = (newConcert) => {
    setConcerts( (prevConcerts) => prevConcerts.concat(newConcert) );
  };

  const loadConcertData = async () => {
    const url = "http://localhost:3000/atlanta.json";
    const response = await fetch(url);
    const json = await response.json();
    setIsLoaded(true);
    setConcerts(json.concerts);
  }

  return (
    <div>
      <div>
        <h1 id="logo">AMP</h1>
        <Preview previewQuery={previewQuery}/>
      </div>
      <ConcertList concerts={concerts} onPreview={setPreviewQuery} />
    </div>
  );

}
export default Calendar;

/*
  const getTestData = () => {
    let output = [];
    for (let i=0; i<10; i++){
      output.push({
        id:i+"",
        artists:[{name:'ArtistA'+i, id:110+i}, {name:'ArtistB'+i, id:120+i}, {name:'ArtistC'+i, id:130+i}],
        venueName:'venue'+i,
        venueId:20+i,
        date:"0"+i+"/0"+i+"/2020",
        time:"8:0"+i+"PM",
        priceMin:i*10,
        priceMax:i*20,
        detailurl:"http://www.detail.com/"+i,
        ticketurl:"http://www.tickets.com/"+i,
        age:10+i
      });
    }
    return output;
  }
  //<AddConcertForm onAddConcert={addConcertHandler}/>
  */
