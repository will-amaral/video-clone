import React from 'react';
import {
    Column
} from 'bloomer';
// Importamos o componente VideoListItem
import VideoListItem from './video-list-item';

// Definimos o nosso componente, e resgatamos os dois props
// que foram passados pelo componente pai (App). 
function VideoList({ videos, onSelect }) {
    // A primeira coisa que definimos no componente é a variável
    // videoItens, que recebe o props video(que é um array), e mapea o seu resultado, returnando
    // um componente para cada item do array. Como o primeiro item da lista é 
    // utilizado como detalhe de video, pulamos esse item, e mapeamos apenas os restantes. 
    // Os props passados servirão para a construção do componente. 
    const videoItens = videos.slice(1).map(video => {
        return <VideoListItem
                    key={video.id}
                    image={video.thumbnails.medium.url}
                    title={video.title}
                    channel={video.channelTitle}
                    onSelect={onSelect}
                    video={video}
                />
    });
    // Renderizamos a constante em nossa coluna. O React automaticamente
    // identifica arrays e listas e renderiza cada um como um componente separado, a partir
    // de uma key de identificação única. 
    return (
        <Column>
            {videoItens}                       
        </Column>
    );
};

export default VideoList;