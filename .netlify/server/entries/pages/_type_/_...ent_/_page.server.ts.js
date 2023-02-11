import { c as nonMovieURL, d as defaultLang } from "../../../../chunks/util.js";
import { M as MOVIE_API_KEY } from "../../../../chunks/private.js";
const load = async ({ fetch, params }) => {
  let id = params.ent.split("--")[1];
  let url = `${nonMovieURL}${params.type.toLocaleLowerCase()}/${id}?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;
  let video_url = `${nonMovieURL}${params.type.toLocaleLowerCase()}/${id}/videos?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;
  let review_url = `${nonMovieURL}${params.type.toLocaleLowerCase()}/${id}/reviews?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;
  let similar_url = `${nonMovieURL}${params.type.toLocaleLowerCase()}/${id}/similar?api_key=${MOVIE_API_KEY}&language=${defaultLang}`;
  let title = async () => {
    let res = await fetch(url);
    return await res.json();
  };
  let videoData = async () => {
    let res = await fetch(video_url);
    return await res.json();
  };
  let reviewData = async () => {
    let res = await fetch(review_url);
    return await res.json();
  };
  let similarData = async () => {
    let res = await fetch(similar_url);
    return await res.json();
  };
  return {
    title: title(),
    video_data: videoData(),
    reviews: reviewData(),
    similar: similarData()
  };
};
export {
  load
};
