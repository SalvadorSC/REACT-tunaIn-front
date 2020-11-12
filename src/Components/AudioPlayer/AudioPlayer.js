import ReactAudioPlayer from 'react-audio-player';
import React from "react";

export const AudioPlayer = () => {

    return (
    <ReactAudioPlayer className="player"
        src="https://libertaddigital-ondemand.flumotion.com/libertaddigital/ondemand/audio/mp3/high/espana/20/11/10/federico-a-las-8-las-mentiras-del-gobierno-sobre-los-contagios-156517.mp3?awCollectionId=es-la-manana-de-federico&awEpisodeId=6679324&aw_0_1st.subcat=31"
        autoPlay
        controls
    />)
}