import { c as create_ssr_component, q as subscribe, v as validate_component, l as escape } from "../../../../../chunks/index2.js";
import "classnames";
/* empty css                                                             */import { H as Heading } from "../../../../../chunks/Heading.js";
import { H as Hr } from "../../../../../chunks/Hr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { P as PaginationComponent } from "../../../../../chunks/PaginationComponent.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".genre.svelte-1bvqhoo{margin-top:40px}.pagination.svelte-1bvqhoo{text-align:center;padding:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pages;
  let previous;
  let next;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  pages = [{ name: 1, href: `/movies` }];
  previous = () => {
    {
      [...Array(5)].map((item, i) => console.log(item, i));
    }
  };
  next = () => {
    {
      [...Array(5)].map((item, i) => console.log(item, i));
    }
  };
  $$unsubscribe_page();
  return `<div class="${"genre svelte-1bvqhoo"}">${validate_component(Heading, "Heading").$$render($$result, { tag: "h4" }, {}, {
    default: () => {
      return `${escape($page.params.genre)} Movies and TV Shows`;
    }
  })}
    ${validate_component(Hr, "Hr").$$render(
    $$result,
    {
      class: "my-4 mx-auto md:my-10",
      width: "w-48",
      height: "h-1"
    },
    {},
    {}
  )}</div>

<div class="${"pagination svelte-1bvqhoo"}">${validate_component(PaginationComponent, "PaginationComponent").$$render($$result, { previous, next, pages }, {}, {})}</div>

<h2>Genre movies go here</h2>

<div class="${"pagination svelte-1bvqhoo"}">${validate_component(PaginationComponent, "PaginationComponent").$$render($$result, { previous, next, pages }, {}, {})}
</div>`;
});
export {
  Page as default
};
