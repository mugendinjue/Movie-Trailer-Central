
import type { PageServerLoad } from './$types'

import { trendingMovies } from '$lib//constants/util';

import { MOVIE_API_KEY } from '$env/static/private'

// Fetch all the available genre from IMDB
export const load: PageServerLoad = async ({fetch}) => {

    // let url = `${trendingMovies}${MOVIE_API_KEY}`

    // let trending = await fetch(url);

    // trending = await trending.json();

    // return trending;
}
