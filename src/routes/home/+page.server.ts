import type { PageServerLoad } from '../home/$types'
import { defaultLang, moviesTypes, movieURL, nonMovieURL } from '$lib//constants/util';
import { MOVIE_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
  let movie_data: { [key: string]: any } = {};

  for (const movie of moviesTypes) {
    let movie_url = `${movie == 'trending' ? nonMovieURL :movieURL}${movie}${movie == 'trending' ? '/all/day' : ''}?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;

    const response = await fetch(movie_url);
    const data = await response.json();

    movie_data[movie] = data;
  }

  return movie_data;
};