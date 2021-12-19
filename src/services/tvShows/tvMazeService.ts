import { createIoInstance } from '../../providers/ioProvider';
import { ShowProps } from './tvMazeDTOs';

const tvMazeApi = createIoInstance('https://api.tvmaze.com/');

const getShow = async (id: number) => {
  return tvMazeApi.get<ShowProps>(`/shows/${id}`); 
}

const getShowEpisodes = async (id: number) => {
  return tvMazeApi.get<ShowProps>(`/shows/${id}/episodes`); 
}

export {
  getShow,
  getShowEpisodes,
}