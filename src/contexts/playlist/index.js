
import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import {createContext, useContext, useState} from 'react';

export const PlaylistContext = createContext();

export const PlaylistContextProvider = (props) =>{
    const [playlistPodcast, setPlaylistPodcast] = useState(undefined);
    return (
        <PlaylistContext.Provider value={{playlistPodcast, setPlaylistPodcast}}>
                {props.children}
        </PlaylistContext.Provider>
    )
}

export const usePlaylistContext = () =>{
    const {playlistPodcast, setPlaylistPodcast} = useContext(PlaylistContext);

    return {
        playlistPodcast, setPlaylistPodcast
    }
}