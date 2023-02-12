import type { PageServerLoad } from '../../home/$types'
import { defaultLang, movieURL } from '$lib//constants/util';
import { MOVIE_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch, url:URL }) => {

    let page = +URL.pathname.split('/')[2];

    console.log(page);
    

    let url = `${movieURL}popular?api_key=${MOVIE_API_KEY}&language=${defaultLang}&page=${+page}`;

    let popular = async () => {
        let res = await fetch(url);
        return await res.json();
    }

    return {
        popular: popular()
    }
};