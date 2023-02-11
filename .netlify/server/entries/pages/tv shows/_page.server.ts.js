import { t as tvShowsURL, d as defaultLang } from "../../../chunks/util.js";
import { M as MOVIE_API_KEY } from "../../../chunks/private.js";
const load = async ({ fetch }) => {
  let url = `${tvShowsURL}popular?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;
  let popular = async () => {
    let res = await fetch(url);
    return await res.json();
  };
  return {
    popular: popular()
  };
};
export {
  load
};
