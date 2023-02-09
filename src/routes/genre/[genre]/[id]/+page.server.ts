import type { PageServerLoad } from './$types';
import { MOVIE_API_KEY } from '$env/static/private';
import { defaultLang, moviesTypes, movieURL, nonMovieURL  } from '$lib/constants/util';


export const load: PageServerLoad = async ({ fetch, params }) => {

    console.log(params);

};