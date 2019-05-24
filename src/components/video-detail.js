import React from 'react';
import {
    Column,
    Container,
    Content,
    Title,
    Button
} from 'bloomer';

function VideoDetail(props){
    if (!props.video) {
        return (
            <Column isSize="2/3" hasTextAlign="centered">
                <Button isLoading />
            </Column>
        );
    }

    const ID = props.video.id;
    const URL = `https://www.youtube.com/embed/${ID}?autoplay=1`;

    return (
        <Column isSize="2/3">
            <Container className="youtube-player">
                <iframe title="Youtube Frame"src={URL} allowFullScreen/>
            </Container>
            <Content>
                <Title>{props.video.title}</Title>
                <p>{props.video.description}</p>
            </Content>
        </Column>
    );
}

export default VideoDetail;