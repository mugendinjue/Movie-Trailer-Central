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
      cat: "Popular Movies",
      movies: results,
      type: "movie"
    }
  ];
  let generatePages = (action) => {
    let last = action == "next" ? pages[pages.length - 1].name : pages[0].name;
    if (action == "next" ? last + 5 < total_pages : last - 5 > 1) {
      let _arr = [];
      if (last == 1)
        _arr.push({ name: last, href: `/movies?page=${last}` });
      [...Array(5)].map((item, i) => {
        _arr.push({
          name: action == "next" ? last + 1 : last - 1,
          href: `/movies?page=${action == "next" ? last + 1 : last - 1}`
        });
        action == "next" ? last++ : last--;
      });
      if (last == 2)
        _arr.push({ name: 1, href: `/movies?page=1` });
      pages = action == "next" ? _arr : _arr.reverse();
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  pages = [
    {
      name: current_page,
      href: `/movies?page=${current_page}`
    }
  ];
  previous = () => {
    generatePages("previous");
  };
  next = () => {
    generatePages("next");
  };
  return `<div class="${"pagination svelte-5pjen6"}">${validate_component(PaginationComponent, "PaginationComponent").$$render($$result, { previous, next, pages }, {}, {})}</div>

${validate_component(MovieListComponent, "MovieListComponent").$$render($$result, { titles }, {}, {})}

<div class="${"pagination svelte-5pjen6"}">${validate_component(PaginationComponent, "PaginationComponent").$$render($$result, { previous, next, pages }, {}, {})}
</div>`;
});
export {
  Page as default
};
