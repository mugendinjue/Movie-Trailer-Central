import { c as create_ssr_component, g as add_attribute, v as validate_component, l as escape, p as each } from "./index2.js";
import "classnames";
/* empty css                                         */import { H as Heading } from "./Heading.js";
import { P } from "./P.js";
const MovieCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-5ewc20{width:100%;height:50vh;-o-object-fit:cover;object-fit:cover;border-radius:1rem;margin-bottom:1rem}.tt.svelte-5ewc20{font-size:0.9rem}.description.svelte-5ewc20{height:5vh;font-size:0.7rem}.movie-card.svelte-5ewc20{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { movie } = $$props;
  let movie_name = (_a = movie.name) !== null && _a !== void 0 ? _a : movie.title;
  movie_name = movie_name.replace(/\s+/g, "-").toLowerCase();
  let { type } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<div class="${"movie-card svelte-5ewc20"}"><a${add_attribute("href", `/${type}/${movie_name}--${movie.id}`, 0)}><img${add_attribute("src", `https://image.tmdb.org/t/p/w500` + movie.backdrop_path, 0)}${add_attribute("alt", `${movie.name ?? movie.title}`, 0)} class="${"svelte-5ewc20"}"></a>
    <div class="${"description svelte-5ewc20"}"><div class="${"tt svelte-5ewc20"}">${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(movie.name ?? movie.title)}`;
    }
  })}</div>
        ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(movie.release_date ?? movie.first_air_date)}`;
    }
  })}</div>
</div>`;
});
const MovieListComponent_svelte_svelte_type_style_lang = "";
const css = {
  code: ".movies.svelte-19bcixo{display:grid;grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const MovieListComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titles } = $$props;
  let { is_similar_tab = false } = titles[0];
  if ($$props.titles === void 0 && $$bindings.titles && titles !== void 0)
    $$bindings.titles(titles);
  $$result.css.add(css);
  return `${each(titles, (title) => {
    return `<div class="${"home"}"${add_attribute(
      "style",
      !is_similar_tab ? "margin-top: 40px;" : "margin-top: 20px;",
      0
    )}>${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "tt" }, {}, {
      default: () => {
        return `${escape(title.cat)}`;
      }
    })}
      <div class="${"movies svelte-19bcixo"}"${add_attribute(
      "style",
      !is_similar_tab ? "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))" : "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))",
      0
    )}>${each(title.movies, (movie) => {
      return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie, type: title.type }, {}, {})}`;
    })}</div>
    </div>`;
  })}`;
});
export {
  MovieListComponent as M
};
