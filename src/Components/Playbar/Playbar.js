import React, {useState, useContext, useEffect, useReducer} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playbar.css'; 
//import { PodcastsUser } from "../PodcastsUser/PodcastsUser";
//import { PodcastCard } from "../PodcastCard/PodcastCard";
//import { PodcastContext } from '../../App';
//import { serverRequest } from "../../helpers/urlBack";
//import { Podcast, PodcastsDestacados, ListaPodcastFake } from "../PodcastsDestacados/PodcastsDestacados";
import { usePlaybarContext, PlaybarContext } from '../../contexts/playbar';
import { playerActions } from '../../reducer/playerReducer';

export const Playbar = () => {  
  const playbarContext = usePlaybarContext(); 
  const podcast = playbarContext.playbarPodcast[0];

  console.log(playbarContext.playbarPodcast);
  
  const { state, dispatch } = useContext(PlaybarContext);
   
  const handleClickNext = () => {
    dispatch ({ type: playerActions.NEXT_SONG });
  };
  
  const handleClickPrev = () => {
    console.log('Next');
    dispatch ({ type: playerActions.PREV_SONG });
  };

  useEffect(() => console.log(podcast), [podcast]);

  return podcast ? (
    <div className = "fix-playbar">
      <AudioPlayer
      onClickNext={handleClickNext} 
      onClickPrevious={handleClickPrev}
      showSkipControls={true} showJumpControls={false}
      customAdditionalControls={[]}
      autoPlay
      autoPlayAfterSrcChange
      src= {`http://localhost:3300/track/${podcast.audio}`}  ///http://localhost:3300/track/${podcast.audio}   //http://localhost:3300/track/5fd11cf81f36c03fc430d6fb
      onPlay={e => console.log ("onPlay")}
      onEnded={handleClickNext/*() => {song = listPodcast [1]}*/}
      />
    </div>   
  ) : null;
};

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
  
 
  //http://localhost:3300/data/podcast/${podcast.id}

 //---------------------------------------

 /*const Song = () => {
  const { state, dispatch } = useContext(PlayerContext);

  useEffect(() => {
    const url = 'http://localhost:3001/song/';

    const options = {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
      }),
      mode: 'cors',
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        // eslint-disable-next-line no-debugger
        debugger;
        dispatch({ type: playerActions.LOAD_SONGS, songs: payload });
      })
      .catch((error) => {
        // eslint-disable-next-line no-debugger
        debugger;
        console.log(error);
      });
  }, []);

  return (
    <div className={styles._songs}>
      <h1>Playlist</h1>
      {state.songToReproduce &&
        state.songToReproduce.map((song, index) => (
          <div className={styles._song_card}>
            <span>Name: {song.name}</span>{' '}
            <input
              type="button"
              value="Play"
              onClick={() => dispatch({ type: playerActions.REPRODUCE_IT_SONG, index })}
            />{' '}
            <input
              type="button"
              value="Add to player"
              onClick={() => dispatch({ type: playerActions.ADD_SONG, song })}
            />
          </div>
        ))}
    </div>
  );
};

export default Song;*/

