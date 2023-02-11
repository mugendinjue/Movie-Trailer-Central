import { c as create_ssr_component, o as getContext, g as add_attribute, i as is_void, t as createEventDispatcher, s as setContext, v as validate_component, p as each, l as escape, q as subscribe } from "./index2.js";
import { p as page } from "./stores.js";
import classNames from "classnames";
/* empty css                                         */import { a as ChevronRight, C as ChevronLeft } from "./ChevronRight.js";
const PaginationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = void 0 } = $$props;
  let { active = false } = $$props;
  let { activeClass = "" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  let defaultClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  defaultClass = classNames("block py-2", group ? "px-3" : "px-4", "text-sm font-medium", table || "border border-gray-300", group || (table ? "rounded" : "rounded-lg"), active ? activeClass : normalClass, $$props.class);
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${add_attribute("href", href, 0)}${add_attribute("class", defaultClass, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = [] } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { ulClass = "inline-flex -space-x-px items-center" } = $$props;
  let { table = false } = $$props;
  createEventDispatcher();
  setContext("group", true);
  setContext("table", table);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0)
    $$bindings.table(table);
  return `<nav aria-label="${"Page navigation"}"><ul${add_attribute("class", classNames(ulClass, table && "divide-x divide-gray-700", $$props.class), 0)}><li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      class: classNames(normalClass, table ? "rounded-l" : "rounded-l-lg")
    },
    {},
    {
      default: () => {
        return `${slots.prev ? slots.prev({}) : `Previous`}`;
      }
    }
  )}</li>
    ${each(pages, ({ name, href, active }) => {
    return `<li>${validate_component(PaginationItem, "PaginationItem").$$render($$result, { active, activeClass, normalClass, href }, {}, {
      default: () => {
        return `${escape(name)}`;
      }
    })}
      </li>`;
  })}
    <li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      class: classNames(normalClass, table ? "rounded-r" : "rounded-r-lg")
    },
    {},
    {
      default: () => {
        return `${slots.next ? slots.next({}) : `Next`}`;
      }
    }
  )}</li></ul></nav>`;
});
const PaginationComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { pages } = $$props;
  let { previous } = $$props;
  let { next } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.previous === void 0 && $$bindings.previous && previous !== void 0)
    $$bindings.previous(previous);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  activeUrl = $page.url.searchParams.get("page");
  {
    {
      pages.forEach((page2) => {
        let splitUrl = page2.href.split("?");
        let queryString = splitUrl.slice(1).join("?");
        const hrefParams = new URLSearchParams(queryString);
        let hrefValue = hrefParams.get("page");
        if (hrefValue === activeUrl) {
          page2.active = true;
        } else {
          page2.active = false;
        }
      });
      pages = pages;
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Pagination, "Pagination").$$render($$result, { pages, icon: true }, {}, {
    next: () => {
      return `<span class="${"sr-only"}">Next</span>
        ${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "w-5 h-5" }, {}, {})}
    `;
    },
    prev: () => {
      return `<span class="${"sr-only"}">Previous</span>
        ${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "w-5 h-5" }, {}, {})}`;
    }
  })}`;
});
export {
  PaginationComponent as P
};
