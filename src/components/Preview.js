import React, { useState } from 'react';

const Preview = ({previewQuery}) => {

  return (
    <div id="preview">
      PREVIEW:{previewQuery}
      <div id="player"></div>
    </div>
  );

}

export default Preview;

/*
<div id="preview"><div class="inner" id="preview-inner">
		<div id="player"></div>
    <div id="player-overlay">
      <p>Click on an artist's name to<br/>play a preview video</p>
      <p>Click again to skip to the next<br/>video result for that artist</p>
      <p>Click the <a class="infoLink"></a> and <a class="ticketLink"></a> buttons to<br/>view details or buy tickets</p>
    </div>
</div></div>


// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var startDateSelected;
var endDateSelected;

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '100%',
        showinfo:"1"
    });
}




function playVideo(id){
  player.loadVideoById(id);
  player.playVideo();
}


  var currentArtist="";
  function onArtistClick(){
    $("#player-overlay").hide();

    var artist = $(this).text();
    truncatePos = -1;
    if (artist.indexOf("(")>0) truncatePos = artist.indexOf("(");
    if (artist.indexOf("[")>0) truncatePos = artist.indexOf("[");
    if (artist.indexOf("|")>0) truncatePos = artist.indexOf("|");
    if (artist.indexOf(":")>0) truncatePos = artist.indexOf(":");
    if (artist.indexOf(" - ")>0) truncatePos = artist.indexOf(" - ");
    if (artist.indexOf(" w/ ")>0) truncatePos = artist.indexOf(" w/ ");
    if (artist.indexOf(" with ")>0) truncatePos = artist.indexOf(" with ");
    if (truncatePos>0) artist = artist.substring(0,truncatePos);
    console.log("A:"+artist+" ... "+truncatePos);
    if (artist==currentArtist){
      playNextVideo();
    }
    else {
      var query = "'"+artist+"' live music";
      loadResultsForSearch(query);
      currentArtist=artist;
    }
  }

  function loadResultsForSearch(q) {
      player.loadPlaylist({list:q, listType:"search", index:0, startSeconds:30});
  }
  function playNextVideo() {
      player.nextVideo();
      player.seekTo(30, true);
  }



*/
