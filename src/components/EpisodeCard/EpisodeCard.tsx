import React from 'react';
import { EpisodeProps } from '../../services/tvShows/tvMazeDTOs';
import {
  CardContainer,
  EpisodeInfo,
  ImageContainer,
} from './EpisodeCard.styles';

interface EpisodeCardProps {
  episode: EpisodeProps;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode: { name, summary, image, season, number },
}) => (
  <CardContainer>
    <ImageContainer>
      <img src={image?.original} alt={`${name}-S${season}E${number}`} />
      <span>
        S{season}E{number}
      </span>
    </ImageContainer>
    <EpisodeInfo>
      <h2>{name}</h2>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </EpisodeInfo>
  </CardContainer>
);
