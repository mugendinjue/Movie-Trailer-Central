
import type { LayoutServerLoad } from './$types'

import { movieCoubriesUrl, movieGenreUrl } from '$lib/constants/util';

import { defaultLang } from '$lib/constants/util';

import { MOVIE_API_KEY } from '$env/static/private'

// Fetch all the available genre from IMDB
export const load: LayoutServerLoad = async ({fetch}) => {

    let genre_url = `${movieGenreUrl}${MOVIE_API_KEY}&language=${defaultLang}`;

    let country_url = `${movieCoubriesUrl}${MOVIE_API_KEY}`;

    let genres = async () => {
        let res = await fetch(genre_url);
        return await res.json();
    }

    let countries = async () => {
        let res = await fetch(country_url);
        return await res.json();
    }

    return {
        genres: genres(),
        countries: countries()
    };
}
