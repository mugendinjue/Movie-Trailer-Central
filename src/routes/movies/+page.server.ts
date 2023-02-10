import type { PageServerLoad } from '../home/$types'
import { defaultLang, movieURL } from '$lib//constants/util';
import { MOVIE_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {

    let url = `${movieURL}popular?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;

    let popular = async () => {
        let res = await fetch(url);
        return await res.json();
    }

    return {
        popular: popular()
    }
};