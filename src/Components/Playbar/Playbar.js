import React, {useState, useContext, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playbar.css'; 
import { PodcastsUser } from "../PodcastsUser/PodcastsUser";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import { PodcastContext } from '../../App';
import { serverRequest } from "../../helpers/urlBack";
import { Podcast, PodcastsDestacados } from "../PodcastsDestacados/PodcastsDestacados";


export const Playbar = () => {

  const podcastId = ["juan", "maria", "jimi", "lola", "pepe"];
  const [currentPodcast, setCurrentPodcast] = useState(0);
  const podcastInfo= useContext(PodcastContext);
  console.log(podcastInfo.podcast);
  const handleClickNext = () => {

    if(currentPodcast < podcastId.length -1) {
      setCurrentPodcast(currentPodcast +1);
    }
  }

  const handleClickPrev = () => {

    if(currentPodcast > 0) {
      setCurrentPodcast(currentPodcast -1);
    }
  }
  useEffect(() => {
    if (podcastInfo.podcast) {
      serverRequest(`data/user/${podcastId}`, "GET")
        .then((response) => {
          //setPodcastId(response)
        })
        .catch(console.log);
      }
  }, [podcastInfo.podcast]);

  return(
        <div className = "fix-playbar">
        <div className = "Playbar-wrap">
        <div className="Playbar-img"><img src= "https://images.unsplash.com/photo-1582246915745-10e34377da98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" />
        </div>
        <div className="title">
                 
        <div className = "titulo-playbar">Título</div>
        
       <div className = "autor-playbar"> Autor </div>
       <div className = "categoria-playbar"> Categoría </div>
        </div>  
        <AudioPlayer
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        showSkipControls={true} showJumpControls={false}
        customAdditionalControls={[]}
        //autoPlay
        src={'http://localhost:3300/data/podcastId/${currentPodcast}'}  //podcastSource
        onPlay={e => console.log("onPlay")}
        /> 
        </div>
        </div>
  )
  }

  //https://libertaddigital-ondemand.flumotion.com/libertaddigital/ondemand/audio/mp3/high/espana/20/11/10/federico-a-las-8-las-mentiras-del-gobierno-sobre-los-contagios-156517.mp3?awCollectionId=es-la-manana-de-federico&awEpisodeId=6679324&aw_0_1st.subcat=31

  