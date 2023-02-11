import { m as movieGenreUrl, d as defaultLang, a as movieCoubriesUrl } from "../../chunks/util.js";
import { M as MOVIE_API_KEY } from "../../chunks/private.js";
const load = async ({ fetch }) => {
  let genre_url = `${movieGenreUrl}${MOVIE_API_KEY}&language=${defaultLang}`;
  let country_url = `${movieCoubriesUrl}${MOVIE_API_KEY}`;
  let genres = async () => {
    let res = await fetch(genre_url);
    return await res.json();
  };
  let countries = async () => {
    let res = await fetch(country_url);
    return await res.json();
  };
  return {
    genres: genres(),
    countries: countries()
  };
};
export {
  load
};
