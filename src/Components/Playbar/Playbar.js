import React, {useState} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playbar.css'; 
import { PodcastsUser } from "../PodcastsUser/PodcastsUser";
import { PodcastCard } from "../PodcastCard/PodcastCard";


export const Playbar = () => {

  const tracksIds = ["1", "2"];
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleClickNext = () => {

    if(currentTrack < tracksIds.length -1) {
      setCurrentTrack(currentTrack +1);
    }
  }

  const handleClickPrev = () => {

    if(currentTrack > 0) {
      setCurrentTrack(currentTrack -1);
    }
  }

  return(
        <div className = "fix-playbar">
        <div className = "Playbar-wrap">
        <div className="Playbar-img"><img src= "https://images.unsplash.com/photo-1582246915745-10e34377da98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" />
        </div>
        <div>
        {/* <div className = "titulo-playbar">{podcast.title}</div>
        autor-playbar={currentPodcast.author}
        categoria-playbar={currentPodcast.categories}  */}
        </div> 
        <AudioPlayer
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        showSkipControls={true} showJumpControls={false}
        customAdditionalControls={[]}
        //autoPlay
        src="https://libertaddigital-ondemand.flumotion.com/libertaddigital/ondemand/audio/mp3/high/espana/20/11/10/federico-a-las-8-las-mentiras-del-gobierno-sobre-los-contagios-156517.mp3?awCollectionId=es-la-manana-de-federico&awEpisodeId=6679324&aw_0_1st.subcat=31"
        onPlay={e => console.log("onPlay")}
        /> 
        </div>
        </div>
  )
  }

  