import React from 'react';
import './VideoTutorial.css'
const VideoTutorial = ({youtubeEmbed}) => {
    return (
        <div className="video text-center my-4">
            <iframe title="Youtube" src={youtubeEmbed}/>
        </div>
    );
};

export default VideoTutorial;