import React from "react";

const videoPlaybackContext = React.createContext({
  playingVideoId: null,
  setPlayingVideoId: () => {},
});

export const VideoPlaybackProvider =({ children })=> {
  const [playingVideoId,setPlayingVideoId] =React.useState(null);
  return <videoPlaybackContext.Provider value={{playingVideoId,setPlayingVideoId}}>
    {children}
    </videoPlaybackContext.Provider>;
}
export const useGlobalContext = ()=>{
    return React.useContext(videoPlaybackContext);
}

