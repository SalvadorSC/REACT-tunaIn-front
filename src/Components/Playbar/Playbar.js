import React, {useState, useContext, useEffect, useReducer} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playbar.css'; 
import { PodcastsUser } from "../PodcastsUser/PodcastsUser";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import { PodcastContext } from '../../App';
import { serverRequest } from "../../helpers/urlBack";
import { Podcast, PodcastsDestacados, ListaPodcastFake } from "../PodcastsDestacados/PodcastsDestacados";
import { usePlaybarContext, PlaybarContext } from '../../contexts/playbar';
import { usePlaylistContext } from '../../contexts/playlist';
import { playerActions } from '../../reducer/playerReducer';

//import { PlaylistELIS } from '../../';


export const Playbar = () => {  

  const playbarContext = usePlaybarContext(); //había una x tras el ;
  const podcast = playbarContext.playbarPodcast;

   const { state, dispatch } = useContext(PlaybarContext);
  
    const handleClickNext = () => {
      dispatch({ type: playerActions.REPRODUCE_NEXT });
    };
    const handleClickPrev = () => {
      console.log('Next');
      dispatch({ type: playerActions.PREV_SONG });
    };
    
    return(

      <div>
  {podcast && (<div className = "fix-playbar">
      <div className = "Playbar-wrap">
      <div className="Playbar-img">{podcast && (podcast.img)}</div>
      {/*<img src= "https://images.unsplash.com/photo-1582246915745-10e34377da98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" />*/}
      
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
      autoPlay
      src={`http://localhost:3300/data/podcast/${podcast.id}`}  //http://localhost:3300/data/podcast/${podcast.id}    //http://localhost:3300/track/5fd11cf81f36c03fc430d6fb
      onPlay={e => console.log("onPlay")}
      /> 
      </div>
      </div>)}
      </div>
      
          
    );
    
    /*return (
      <div className="player-wrapper">
        <AudioPlayer
          header={`Playing: ${
            state.songToReproduce[state.currentPlay] && state.songToReproduce[state.currentPlay].name
          }`}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrev}
          showSkipControls
          showJumpControls={false}
          autoPlayAfterSrcChange
          onEnded={handleClickPrev}
          src={`http://localhost:3001/track/${
            state.songToReproduce[state.currentPlay] &&
            state.songToReproduce[state.currentPlay].trackId
          }`}
        />
      </div>
    );
  };*/
  

  /*const handleClickNext = () => {

      if(playbarPodcast < ListaPodcastFake.length -1) {  //podcastId antes que ListaPodc...
      setPlaybarPodcast(playbarPodcast +1);
    
  }

  const handleClickPrev = () => {

    if(playbarPodcast > 0) {
      setPlaybarPodcast(playbarPodcast -1);
    }
  }
  useEffect(() => {
    
    if (playbarContext.playbarPodcast) {
      serverRequest(`data/user/${ListaPodcastFake}`, "GET") //podcastId
        .then((response) => {
          //setPodcastId(response)
        })
      }
  }, [playbarContext.playbarPodcast]);

  /*const playlistContext = usePlaylistContext();x
  const podcast = playlistContext.playlistPodcast;
  const handleClickNext = () => {

      if(playlistPodcast < PlaylistELIS.length -1) {  //podcastId antes que ListaPod...
      setPlaylistPodcast(playlistPodcast +1);
    
  }

  const handleClickPrev = () => {

    if(playlistPodcast > 0) {
      setPlaylistPodcast(playlistPodcast -1);
    }
  }
  useEffect(() => {
    
    if (playlistContext.playlistPodcast) {
      serverRequest(`data/user/${PlaylistELIS}`, "GET") //podcastId
        .then((response) => {
          //setPodcastId(response)
        })
      }
  }, [playlistContext.playlistPodcast]);*/

  /*return(

    <div>
{podcast && (<div className = "fix-playbar">
    <div className = "Playbar-wrap">
    <div className="Playbar-img">{podcast && (podcast.img)}</div>
    {/*<img src= "https://images.unsplash.com/photo-1582246915745-10e34377da98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" />}
    
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
    src={`http://localhost:3300/track/5fd11cf81f36c03fc430d6fb`}  //podcastSource
    onPlay={e => console.log("onPlay")}
    /> 
    </div>
    </div>)}
    </div>
    
        
  );*/
  }


 
  //http://localhost:3300/data/podcast/${podcast.id}

  //https://libertaddigital-ondemand.flumotion.com/libertaddigital/ondemand/audio/mp3/high/espana/20/11/10/federico-a-las-8-las-mentiras-del-gobierno-sobre-los-contagios-156517.mp3?awCollectionId=es-la-manana-de-federico&awEpisodeId=6679324&aw_0_1st.subcat=31