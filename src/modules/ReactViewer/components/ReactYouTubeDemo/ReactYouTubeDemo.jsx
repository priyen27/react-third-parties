/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import YouTube from 'react-youtube';

const ReactYouTubeDemo = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const onVideoReady = (event) => {
        // access to player in all event handlers via event.target
        //event.target.playVideoAt(50);
        // setState({
        //     playerObj: player
        // })
        const player = event.target;
        player.seekTo(50); //Move to 50 Seconds In the Video
      }

      const onVideoPlay = (event) => {
          const player = event.target;
          //console.log(player.getCurrentTime());
      }

      const onStateChange = (event) => {
        const player = event.target;
        console.log(player.getCurrentTime());
      }

    //   React.useEffect(() => {
    //     const [state, setState] = React.useState({});
    //   }, [state])

      return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onVideoReady}
        onPlay={onVideoPlay}
        onStateChange={onStateChange}
        />
      
)}

export default ReactYouTubeDemo;
