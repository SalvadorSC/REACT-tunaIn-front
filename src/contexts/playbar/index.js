
import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import {createContext, useContext, useState} from 'react';

export const PlaybarContext = createContext();

export const PlaybarContextProvider = (props) =>{
    const [playbarPodcast, setPlaybarPodcast] = useState(undefined);
    return (
        <PlaybarContext.Provider value={{playbarPodcast, setPlaybarPodcast}}>
                {props.children}
        </PlaybarContext.Provider>
    )
}

export const usePlaybarContext = () =>{
    const {playbarPodcast, setPlaybarPodcast} = useContext(PlaybarContext);

    return {
        playbarPodcast, setPlaybarPodcast
    }
}