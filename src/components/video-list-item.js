import React from 'react';
import {
    Media,
    MediaContent,
    MediaLeft,
    Content,
    Image
} from 'bloomer';

const VideoListItem = props => {
    return (
        <Media className="video-list-item" onClick={() => props.onSelect(props.video)}>
            <MediaLeft>
                <Image src={props.image} isSize="128x128"/>
            </MediaLeft>
            <MediaContent>
                <Content>
                    <p><strong>{props.title}</strong>
                    <br />
                    <small>{props.channel}</small></p>
                </Content>
            </MediaContent>
        </Media>
    );
}

export default VideoListItem;