
import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import {createContext, useContext, useState, useEffect, ServerRequest} from 'react';

export const PlaybarContext = createContext();

export const PlaybarContextProvider = (props) =>{
    const [playbarPodcast, setPlaybarPodcast] = useState([]);  
    const [listPodcast, setListPodcast] = useState([]);  
    
   /*
    //playbarpodcast
    useEffect(() => {
        ServerRequest(`track`, "GET")
        .then((response) => {
            setPlaybarPodcast(response)
            console.log(playbarPodcast);
        })
        .catch((response) => {
            console.log(response);
        });
    
    }, [])
            

    //listpodcast
    useEffect(() => {
        ServerRequest(`playlist`, "GET")
    }, [listPodcast])
    */

    return (
        <PlaybarContext.Provider value={{playbarPodcast, setPlaybarPodcast, listPodcast, setListPodcast}}>
                {props.children}
        </PlaybarContext.Provider>
    )

}

export const usePlaybarContext = () => {
    const {playbarPodcast, setPlaybarPodcast, listPodcast, setListPodcast} = useContext(PlaybarContext);
    
    return {playbarPodcast, setPlaybarPodcast, listPodcast, setListPodcast}
    
}


//---------------------------------------

/*export const PlaybarContext = createContext();

export const PlaybarContextProvider = (props) =>{
    const [state, dispatch] = usePlayerReducer();  

        <PlaybarContext.Provider value={{state, dispatch}}> 
                {props.children}
        </PlaybarContext.Provider>

}

export const usePlaybarContext = () =>{
    const {playbarPodcast, setPlaybarPodcast} = useContext(PlaybarContext);

    return {
        playbarPodcast, setPlaybarPodcast
    }
} */
 
//-------------------------------------

/*export const PlaybarContextProvider = ({children}) =>{
    const [playbarPodcast, setPlaybarPodcast] = useState(undefined);  
    const [listPodcast, setListPodcast] = useState([]);  

return (
    <PlaybarContext.Provider value={{playbarPodcast, setPlaybarPodcast, listPodcast, setListPodcast}}>
            {children}
    </PlaybarContext.Provider>
)
}

export const usePlaybarContext = () =>{
const {playbarPodcast, setPlaybarPodcast, listPodcast, setListPodcast} = useContext(PlaybarContext); 
}*/