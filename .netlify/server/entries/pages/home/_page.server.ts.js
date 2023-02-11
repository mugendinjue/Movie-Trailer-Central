import { e as moviesTypes, c as nonMovieURL, f as movieURL, d as defaultLang } from "../../../chunks/util.js";
import { M as MOVIE_API_KEY } from "../../../chunks/private.js";
const load = async ({ fetch }) => {
  let movie_data = {};
  for (const movie of moviesTypes) {
    let movie_url = `${movie == "trending" ? nonMovieURL : movieURL}${movie}${movie == "trending" ? "/movie/week" : ""}?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;
    const response = await fetch(movie_url);
    const data = await response.json();
    movie_data[movie] = data;
  }
  return movie_data;
};
export {
  load
};
