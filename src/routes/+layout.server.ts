
import type { LayoutServerLoad } from './$types'

import { movieDBUrl } from '$lib//constants/util';

import { defaultLang } from '$lib/constants/util';

import { MOVIE_API_KEY } from '$env/static/private'

// Fetch all the available genre from IMDB
export const load: LayoutServerLoad = async ({fetch}) => {

    let url = `${movieDBUrl}${MOVIE_API_KEY}&language=${defaultLang}`

    let genres = await fetch(url);

    genres = await genres.json();

    return genres;
}
