import React from 'react';
import {
    Column,
    Container,
    Content,
    Title,
    Button
} from 'bloomer';

// Recebemos o prop video que foi passado como prop diretamente. 
function VideoDetail({video}){
    // Como a construção do componente é mais rápida que a chamda da API
    // Colocamos um loader para ser renderizado, que será exibido enquanto
    // o vídeo estiver vazio.
    if (!video) {
        return (
            <Column isSize="2/3" hasTextAlign="centered">
                <Button isLoading />
            </Column>
        );
    }
    // Após a chamada da API ter finalizado, podemos construir a url 
    // utilizando o identificador único do vídeo que foi passado como prop.
    // Para melhorar a experiência, passamos o autoplay como parâmetro
    const url = `https://www.youtube.com/embed/${video.id}?autoplay=1`;

    return (
        <Column isSize="2/3">
            <Container className="youtube-player">
                <iframe title="Youtube Frame"src={url} allow='autoplay' allowFullScreen/>
            </Container>
            <Content>
                <Title>{video.title}</Title>
                <p>{video.description}</p>
            </Content>
        </Column>
    );
}

export default VideoDetail;