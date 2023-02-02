
import type { objArr, stringArr } from "./types";

export const navTabs : stringArr =  [
    "Home",
    "Genre",
    "Movies",
    "TV Shows",
    "Top IMDB"
]

export const defaultLang : string = `en-US`;

export const movieDBUrl : string = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;

export const keyFeatures : stringArr = [
    "Discover the latest movie trailers",
    "Stay informed about upcoming releases",
    "Watch trailers in high definition",
    "Enjoy a sleek and intuitive user interface"
];

export const appName : string = "Trailer Park"

export const QuickLinks : objArr = [
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
