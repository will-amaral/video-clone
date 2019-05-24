import React from 'react';
import {
    Media,
    MediaContent,
    MediaLeft,
    Content,
    Image
} from 'bloomer';

// Como foram passados vários props para o componente, pegamos o objeto props inteiro. 
function VideoListItem(props){
    // Criamos a função que será executada ao clicar no elemento.
    function select() {
        props.onSelect(props.video);
    }

    return (
        <Media className="video-list-item" onClick={select}>
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