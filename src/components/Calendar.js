import React, { useState } from 'react';

import "./Calendar.css";
import Header from "./Header.js"
import ConcertList from "./ConcertList.js"
import AddConcertForm from "./AddConcertForm.js"

const Calendar = () => {

  const [concerts, setConcerts] = useState( [] );

  //{id:'1', name:'Big Show', date:'01/01/2020'}, {id:'2', name:'Indie Show', date:'02/02/2020'}, {id:'3', name:'Dinner Show', date:'03/03/2020'}

  const addConcertHandler = (newConcert) => {
    setConcerts( (prevConcerts) => prevConcerts.concat(newConcert) );
  };

  const loadConcertData = () => {
    const concertData = getTestData();
    setConcerts( concertData );
  };

  const getTestData = () => {
    let output = [];
    for (let i=0; i<10; i++){
      output.push({
        key:i,
        artists:['ArtistA'+i, 'ArtistB'+i, 'ArtistC'+i],
        venue:{ name:'Venue'+i, id:''+i},
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

  return (
    <div id="calendar">
      <Header />
      <button onClick={loadConcertData}>Load</button>
      <ConcertList concerts={concerts} />
    </div>
  );

}
//<AddConcertForm onAddConcert={addConcertHandler}/>
export default Calendar;
