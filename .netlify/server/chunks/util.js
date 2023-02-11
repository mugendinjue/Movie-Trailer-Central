const navTabs = [
  "Home",
  "Genre",
  "Country",
  "Movies",
  "TV Shows"
  // "Top IMDB",
];
const defaultLang = `en-US`;
const movieGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;
const movieCoubriesUrl = `https://api.themoviedb.org/3/configuration/countries?api_key=`;
const movieURL = `https://api.themoviedb.org/3/movie/`;
const nonMovieURL = `https://api.themoviedb.org/3/`;
const moviesTypes = ["trending", "now_playing", "popular", "top_rated", "upcoming"];
const tvShowsURL = `https://api.themoviedb.org/3/tv/`;
const keyFeatures = [
  // "Discover the latest movie trailers",
  // "Stay informed about upcoming releases",
  // "Watch trailers in high definition",
  // "Enjoy a sleek and intuitive user interface"
];
const appName = "Trailer Park";
const QuickLinks = [
  { label: "Home", path: "/home" },
  { label: "Movies", path: "/movies" },
  { label: "TV Shows", path: "/tv shows" },
  { label: "Top IMDB", path: "/movies" },
  { label: "Action Movies", path: "/movies" },
  { label: "Horror Movies", path: "/movies" },
  { label: "Sci-fi Movies", path: "/movies" },
  { label: "Thriller Movies", path: "/movies" },
  { label: "Privacy Policy", path: "/terms" },
  { label: "Terms & Conditions", path: "/terms" }
];
export {
  QuickLinks as Q,
  movieCoubriesUrl as a,
  appName as b,
  nonMovieURL as c,
  defaultLang as d,
  moviesTypes as e,
  movieURL as f,
  keyFeatures as k,
  movieGenreUrl as m,
  navTabs as n,
  tvShowsURL as t
};
