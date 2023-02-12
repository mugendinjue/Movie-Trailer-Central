
import type { objArr, stringArr } from "./types";

export const navTabs : objArr =  [
    {label:"Home", path: "/home"},
    {label:"Genre", path: "/"},
    {label:"Country", path: "/"},
    {label:"Movies", path: "/movies/1"},
    {label:"TV Shows", path: "/tv shows"},
]

export const defaultLang : string = `en-US`;

export const movieGenreUrl : string = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;

export const movieCoubriesUrl : string = `https://api.themoviedb.org/3/configuration/countries?api_key=`

export const movieURL : string = `https://api.themoviedb.org/3/movie/`;

export const nonMovieURL : string = `https://api.themoviedb.org/3/`;

export const moviesTypes : string[] = ['trending','now_playing','popular','top_rated','upcoming'];

export const tvShowsURL : string = `https://api.themoviedb.org/3/tv/`;

export const keyFeatures : stringArr = [
    // "Discover the latest movie trailers",
    // "Stay informed about upcoming releases",
    // "Watch trailers in high definition",
    // "Enjoy a sleek and intuitive user interface"
];

export const appName : string = "Trailer Park"

export const QuickLinks : objArr = [
    {label:"Home", path: "/home"},
    {label:"Movies", path: "/movies"},
    {label:"TV Shows", path: "/tv shows"},
    {label:"Top IMDB", path: "/movies"},
    {label:"Action Movies", path: "/movies"},
    {label:"Horror Movies", path: "/movies"},
    {label:"Sci-fi Movies", path: "/movies"},
    {label:"Thriller Movies", path: "/movies"},
    {label:"Privacy Policy", path: "/terms"},
    {label:"Terms & Conditions", path: "/terms"},
];
