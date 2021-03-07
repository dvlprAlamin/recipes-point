import React from 'react';

const VideoTutorial = ({youtubeEmbed}) => {
    return (
        <div className="video text-center my-4">
        <iframe title="Youtube"  width="560" height="315" src={youtubeEmbed} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        </div>
    );
};

export default VideoTutorial;