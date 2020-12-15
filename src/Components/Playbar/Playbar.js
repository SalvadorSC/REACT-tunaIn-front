import React, {useState, useContext, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playbar.css'; 
import { PodcastsUser } from "../PodcastsUser/PodcastsUser";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import { PodcastContext } from '../../App';
import { serverRequest } from "../../helpers/urlBack";
import { Podcast, PodcastsDestacados } from "../PodcastsDestacados/PodcastsDestacados";
import { usePlaybarContext } from '../../contexts/playbar';


export const Playbar = () => {

  const playbarContext = usePlaybarContext();
  const podcast = playbarContext.playbarPodcast;
  const handleClickNext = () => {

    /*
    if(currentPodcast < podcastId.length -1) {
      setCurrentPodcast(currentPodcast +1);
    }*/
  }

  const handleClickPrev = () => {
/*
    if(currentPodcast > 0) {
      setCurrentPodcast(currentPodcast -1);
    }*/
  }
  useEffect(() => {
    /*
    if (playbarContext.playbarPodcast) {
      serverRequest(`data/user/${podcastId}`, "GET")
        .then((response) => {
          //setPodcastId(response)
        })
      }*/
  }, [playbarContext.playbarPodcast]);

  return(
    <div>
{podcast && (<div className = "fix-playbar">
    <div className = "Playbar-wrap">
    <div className="Playbar-img">{podcast && (podcast.img)}</div>
    {/* <img src= "https://images.unsplash.com/photo-1582246915745-10e34377da98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" /> */}
    
    <div className="title">
             
<div className = "titulo-playbar">{podcast && (podcast.title)}</div>
    
   <div className = "autor-playbar">{podcast && (podcast.author)}</div>
   <div className = "categoria-playbar">{podcast && (podcast.categories)} </div>
    </div>  
    <AudioPlayer
    onClickNext={handleClickNext}
    onClickPrevious={handleClickPrev}
    showSkipControls={true} showJumpControls={false}
    customAdditionalControls={[]}
    //autoPlay
    src={`http://localhost:3300/data/podcastId/${podcast.id}`}  //podcastSource
    onPlay={e => console.log("onPlay")}
    /> 
    </div>
    </div>)}
    </div>
    
        
  )
  }

  //https://libertaddigital-ondemand.flumotion.com/libertaddigital/ondemand/audio/mp3/high/espana/20/11/10/federico-a-las-8-las-mentiras-del-gobierno-sobre-los-contagios-156517.mp3?awCollectionId=es-la-manana-de-federico&awEpisodeId=6679324&aw_0_1st.subcat=31

  