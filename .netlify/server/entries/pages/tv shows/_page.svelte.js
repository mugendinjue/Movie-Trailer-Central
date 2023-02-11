import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { M as MovieListComponent } from "../../../chunks/MovieListComponent.js";
import { P as PaginationComponent } from "../../../chunks/PaginationComponent.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pagination.svelte-5pjen6{text-align:center;padding:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pages;
  let previous;
  let next;
  let { data } = $$props;
  let { popular } = data;
  let { results, page: current_page, total_pages } = popular;
  let titles = [
    {
      cat: "Popular Tv Shows",
      movies: results,
      type: "TV"
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  pages = [{ name: 1, href: `/movies` }];
  previous = () => {
    if (current_page + 5 < total_pages) {
      [...Array(5)].map((item, i) => console.log(item, i));
    }
  };
  next = () => {
    if (current_page + 5 < total_pages) {
      [...Array(5)].map((item, i) => console.log(item, i));
    }
  };
  return `<div class="${"pagination svelte-5pjen6"}">${validate_component(PaginationComponent, "PaginationComponent").$$render($$result, { previous, next, pages }, {}, {})}</div>

${validate_component(MovieListComponent, "MovieListComponent").$$render($$result, { titles }, {}, {})}

<div class="${"pagination svelte-5pjen6"}">${validate_component(PaginationComponent, "PaginationComponent").$$render($$result, { previous, next, pages }, {}, {})}
</div>`;
});
export {
  Page as default
};
