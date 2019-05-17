import React from 'react';
import {
    Column
} from 'bloomer';
import VideoListItem from './video-list-item';

const VideoList = props => {
    const videoItens = props.videos.slice(1).map(video => {
        return <VideoListItem
        key={video.id}
        image={video.thumbnails.medium.url}
        title={video.title}
        channel={video.channelTitle}
        onSelect={props.onSelect}
        video={video}
        />
    });
    return (
        <Column>
            {videoItens}                       
        </Column>
    );
};

export default VideoList;