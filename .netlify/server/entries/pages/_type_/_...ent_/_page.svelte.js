import { c as create_ssr_component, l as escape, k as compute_slots, g as add_attribute, b as compute_rest_props, d as spread, f as escape_attribute_value, e as escape_object, i as is_void, v as validate_component, o as getContext, p as each, s as setContext, r as is_promise, n as noop, q as subscribe } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import classNames from "classnames";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
/* empty css                                                          */import { w as writable } from "../../../../chunks/index.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { L as Layout, a as List, b as Li } from "../../../../chunks/List.js";
import { P } from "../../../../chunks/P.js";
import { M as MovieListComponent } from "../../../../chunks/MovieListComponent.js";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<svg class="${"text-gray-400 bg-gray-100 dark:bg-gray-600 " + escape(rounded ? "rounded" : "rounded-full", true)}" fill="${"currentColor"}" viewBox="${"0 0 16 16"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 left-0",
    center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 right-0",
    // bottom
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = classNames("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  dot && console.log(dot);
  avatarClass = classNames(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render($$result, { rounded }, {}, {})}`}`}
    ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "gradient", "size", "href", "btnClass", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { gradient = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { btnClass = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "blue" } = $$props;
  let { shadow = null } = $$props;
  const colorClasses = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    alternative: "text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  };
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
    cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
    teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ",
    lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
    red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ",
    pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
    purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
  };
  const outlineClasses = {
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  function rounded(gradientOutline = false) {
    if (group) {
      return pill ? "first:rounded-l-full last:rounded-r-full" : gradientOutline ? "first:rounded-l-md last:rounded-r-md" : "first:rounded-l-lg last:rounded-r-lg";
    }
    return pill ? "rounded-full" : gradientOutline ? "rounded-md" : "rounded-lg";
  }
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  let gradientOutlineClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = btnClass ? btnClass : classNames(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    outline && gradient ? "p-0.5" : "inline-flex items-center justify-center " + sizeClasses[size],
    gradient ? gradientClasses[color] : outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    hasBorder() && group && "border-l-0 first:border-l",
    rounded(false),
    shadow && coloredShadowClasses[shadow],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  gradientOutlineClass = classNames("inline-flex items-center justify-center", sizeClasses[size], rounded(true), "bg-white text-gray-900 dark:bg-gray-900 dark:text-white", "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit");
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${outline && gradient ? `
    <span${add_attribute("class", gradientOutlineClass, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${slots.default ? slots.default({}) : ``}`}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`;
});
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M11.4806 3.49883C11.6728 3.03685 12.3272 3.03685 12.5193 3.49883L14.6453 8.61028C14.7263 8.80504 14.9095 8.93811 15.1197 8.95497L20.638 9.39736C21.1367 9.43735 21.339 10.0598 20.959 10.3853L16.7546 13.9867C16.5945 14.1239 16.5245 14.3392 16.5734 14.5444L17.8579 19.9293C17.974 20.416 17.4446 20.8007 17.0176 20.5398L12.2932 17.6542C12.1132 17.5443 11.8868 17.5443 11.7068 17.6542L6.98238 20.5398C6.55539 20.8007 6.02594 20.416 6.14203 19.9293L7.42652 14.5444C7.47546 14.3392 7.4055 14.1239 7.24531 13.9867L3.04099 10.3853C2.661 10.0598 2.86323 9.43735 3.36197 9.39736L8.88022 8.95497C9.09048 8.93811 9.27363 8.80504 9.35464 8.61028L11.4806 3.49883Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z" fill="${color}"/> `;
  let { ariaLabel = "star" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { divClass = "flex items-center" } = $$props;
  let { size = "24" } = $$props;
  let { total = 5 } = $$props;
  let { rating = 4 } = $$props;
  let { ceil = false } = $$props;
  let { count = false } = $$props;
  let roundedRating = ceil ? Math.ceil(rating) : Math.floor(rating);
  let grayStars = total - roundedRating;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.ceil === void 0 && $$bindings.ceil && ceil !== void 0)
    $$bindings.ceil(ceil);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div${add_attribute("class", classNames(divClass, $$props.class), 0)}>${count ? `${validate_component(Star, "Star").$$render(
    $$result,
    {
      variation: "solid",
      size,
      class: "text-yellow-300 dark:text-yellow-200"
    },
    {},
    {}
  )}
    <p class="${"ml-2 text-sm font-bold text-gray-900 dark:text-white"}">${escape(rating)}</p>
    ${slots.default ? slots.default({}) : ``}` : `${each(Array(roundedRating), (_) => {
    return `${slots.ratingUp ? slots.ratingUp({}) : `
        ${validate_component(Star, "Star").$$render(
      $$result,
      {
        variation: "solid",
        size,
        class: "text-yellow-300 dark:text-yellow-200"
      },
      {},
      {}
    )}
      `}`;
  })}
    ${each(Array(grayStars), (_) => {
    return `${slots.ratingDown ? slots.ratingDown({}) : `
        ${validate_component(Star, "Star").$$render(
      $$result,
      {
        size,
        class: "text-gray-300 dark:text-gray-500"
      },
      {},
      {}
    )}
      `}`;
  })}
    ${$$slots.text ? `${slots.text ? slots.text({}) : ``}` : ``}`}</div>`;
});
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = classNames(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", classNames("group", $$props.class), 0)} role="${"presentation"}"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button>

  ${open ? `<div class="${"hidden tab_content_placeholder"}"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li>`;
});
const styledActiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white",
  pill: "py-3 px-4 text-white bg-blue-600 rounded-lg",
  underline: "p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500",
  none: ""
};
const styledInactiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
  pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
  underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
  none: ""
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = classNames(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul>
${divider ? `${slots.divider ? slots.divider({ style }) : `
    <div class="${"h-px bg-gray-200 dark:bg-gray-700"}"></div>
  `}` : ``}
<div${add_attribute("class", contentClass, 0)} role="${"tabpanel"}" aria-labelledby="${"id-tab"}"></div>`;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-blue-600 dark:text-blue-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"]);
  let { border = false } = $$props;
  let { italic = true } = $$props;
  let { borderClass = "border-l-4 border-gray-300 dark:border-gray-500" } = $$props;
  let { bgClass = "bg-gray-50 dark:bg-gray-800" } = $$props;
  let { bg = false } = $$props;
  let { baseClass = "font-semibold text-gray-900 dark:text-white" } = $$props;
  let { alignment = "left" } = $$props;
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  let { size = "lg" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0)
    $$bindings.bgClass(bgClass);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<blockquote${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const AboutMovieComponent_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "img.svelte-4h5iv6{width:90%;height:50vh;-o-object-fit:cover;object-fit:cover;border-radius:1rem;margin-bottom:1rem}.left.svelte-4h5iv6{padding:0.6rem}.title.svelte-4h5iv6,#commentor.svelte-4h5iv6{padding:0.4rem}",
  map: null
};
const AboutMovieComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details } = $$props;
  let { reviews } = $$props;
  let { similar } = $$props;
  let { type } = $$props;
  similar = similar ? similar.filter((i) => i.backdrop_path != null) : [];
  reviews = reviews ? reviews.slice(0, 3) : [];
  similar = similar.slice(0, 9);
  let titles = [
    {
      cat: "You May Also Like",
      movies: similar,
      type,
      is_similar_tab: true
    }
  ];
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  if ($$props.reviews === void 0 && $$bindings.reviews && reviews !== void 0)
    $$bindings.reviews(reviews);
  if ($$props.similar === void 0 && $$bindings.similar && similar !== void 0)
    $$bindings.similar(similar);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$4);
  return `${validate_component(Layout, "Layout").$$render($$result, { gap: 6 }, {}, {
    default: () => {
      return `<div class="${"left svelte-4h5iv6"}">${validate_component(Layout, "Layout").$$render(
        $$result,
        {
          gap: 6,
          cols: "grid-cols-3 sm:grid-cols-1"
        },
        {},
        {
          default: () => {
            return `<div class="${"mb-3"}"><div class="${"title svelte-4h5iv6"}">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2" }, {}, {
              default: () => {
                return `${escape(details.original_name ?? details.original_title)}`;
              }
            })}</div>
          <img${add_attribute("src", `https://image.tmdb.org/t/p/w500` + details.backdrop_path, 0)}${add_attribute("alt", details.original_name ?? details.original_title, 0)} class="${"svelte-4h5iv6"}"></div>
        <div class="${"col-span-2"}">${validate_component(Rating, "Rating").$$render(
              $$result,
              {
                count: true,
                rating: details.vote_average
              },
              {},
              {
                default: () => {
                  return `<span class="${"w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"}"></span>
            <a href="${"#review-tab"}" class="${"text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"}">${escape(details.vote_count)} reviews</a>`;
                }
              }
            )}
          ${validate_component(P, "P").$$render(
              $$result,
              {
                weight: "light",
                color: "text-gray-500 dark:text-gray-400"
              },
              {},
              {
                default: () => {
                  return `Status : ${escape(details.status)}`;
                }
              }
            )}
          ${validate_component(P, "P").$$render(
              $$result,
              {
                weight: "light",
                color: "text-gray-500 dark:text-gray-400"
              },
              {},
              {
                default: () => {
                  return `${escape(details.overview)}`;
                }
              }
            )}
          <div id="${"review-tab"}">${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
              default: () => {
                return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Reviews" }, {}, {
                  default: () => {
                    return `${reviews.length ? `${each(reviews, (review) => {
                      return `<div class="${"flex space-x-4 svelte-4h5iv6"}" id="${"commentor"}"><figure class="${"mx-auto max-w-screen-md text-center"}"><svg aria-hidden="${"true"}" class="${"mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"}" viewBox="${"0 0 24 27"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"}" fill="${"currentColor"}"></path></svg>
                      ${validate_component(Blockquote, "Blockquote").$$render($$result, { alignment: "center", size: "lg" }, {}, {
                        default: () => {
                          return `${escape(review.content.slice(0, 90) + "...")}
                      ${validate_component(A, "A").$$render(
                            $$result,
                            {
                              href: review.url,
                              target: "_blank",
                              textColor: "text-blue-600 dark:text-blue-500",
                              aClass: "inline-flex items-center font-small  hover:underline"
                            },
                            {},
                            {
                              default: () => {
                                return `more
                        <svg aria-hidden="${"true"}" class="${"ml-1 w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
                      `;
                              }
                            }
                          )}
                      `;
                        }
                      })}
                      <figcaption class="${"flex justify-center items-center mt-6 space-x-3"}">${validate_component(Avatar, "Avatar").$$render(
                        $$result,
                        {
                          src: review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w500` + review.author_details.avatar_path : ""
                        },
                        {},
                        {}
                      )}
                        <div class="${"flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"}"><cite class="${"pr-3 font-medium text-gray-900 dark:text-white"}">${escape(review.author_details.username)}</cite></div>
                      </figcaption></figure>
                  </div>`;
                    })}` : `${validate_component(P, "P").$$render(
                      $$result,
                      {
                        weight: "light",
                        color: "text-gray-500 dark:text-gray-400"
                      },
                      {},
                      {
                        default: () => {
                          return `No Comments
                  `;
                        }
                      }
                    )}`}`;
                  }
                })}
              ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Production" }, {}, {
                  default: () => {
                    return `${validate_component(List, "List").$$render($$result, { tag: "ol", list: "decimal" }, {}, {
                      default: () => {
                        return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                          default: () => {
                            return `Production Companies
                    ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "pl-5 mt-2 space-y-1" }, {}, {
                              default: () => {
                                return `${each(details.production_companies, (company) => {
                                  return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${escape(company.name)}`;
                                    }
                                  })}`;
                                })}`;
                              }
                            })}`;
                          }
                        })}
                  ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                          default: () => {
                            return `Production Countries
                    ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "pl-5 mt-2 space-y-1" }, {}, {
                              default: () => {
                                return `${each(details.production_countries, (country) => {
                                  return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${escape(country.name)}`;
                                    }
                                  })}`;
                                })}`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}
              ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Genres" }, {}, {
                  default: () => {
                    return `${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1" }, {}, {
                      default: () => {
                        return `${each(details.genres, (genre) => {
                          return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(genre.name)}`;
                            }
                          })}`;
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}</div></div>`;
          }
        }
      )}</div>
    <div class="${"mb-3"}">${validate_component(MovieListComponent, "MovieListComponent").$$render($$result, { titles }, {}, {})}</div>`;
    }
  })}`;
});
const ButtonComponent_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-14cp8on{all:unset}button.svelte-14cp8on,.play-button.svelte-14cp8on{display:grid;place-items:center;height:80px;width:80px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;cursor:pointer}",
  map: null
};
const ButtonComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isCustomPlayButton } = $$props;
  if ($$props.isCustomPlayButton === void 0 && $$bindings.isCustomPlayButton && isCustomPlayButton !== void 0)
    $$bindings.isCustomPlayButton(isCustomPlayButton);
  $$result.css.add(css$3);
  return `${isCustomPlayButton ? `<div class="${"play-button svelte-14cp8on"}">${slots.default ? slots.default({}) : ``}</div>` : `<button class="${"svelte-14cp8on"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" class="${"iconify iconify--mdi"}" viewBox="${"0 0 24 24"}"><path fill="${"#ff4e45"}" d="${"m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"}"></path></svg></button>`}`;
});
const Iframe_svelte_svelte_type_style_lang = "";
const Image_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-10ngg6p{height:auto;aspect-ratio:var(--aspect-ratio);width:100%}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { title = "" } = $$props;
  let { altThumb } = $$props;
  let { play = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.altThumb === void 0 && $$bindings.altThumb && altThumb !== void 0)
    $$bindings.altThumb(altThumb);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  $$result.css.add(css$2);
  return `<img src="${"https://i.ytimg.com/vi/" + escape(id, true) + "/" + escape(altThumb ? "hqdefault" : "maxresdefault", true) + ".jpg"}"${add_attribute("title", title, 0)} alt="${"Youtube video: " + escape(title, true)}" referrerpolicy="${"no-referrer"}" class="${"svelte-10ngg6p"}">`;
});
const Youtube_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.you__tube.svelte-1m1psld.svelte-1m1psld{position:relative}.v__title.svelte-1m1psld.svelte-1m1psld{position:absolute;top:0;width:100%;background:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);pointer-events:none}.v__title.svelte-1m1psld h3.svelte-1m1psld{font-family:var(\n        --title-font-family,\n        "Segoe UI",\n        Geneva,\n        Verdana,\n        sans-serif\n      );color:var(--title-color, #ffffff);padding:0 2ch;font-weight:400;text-shadow:0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2))}.b__overlay.svelte-1m1psld.svelte-1m1psld{position:absolute;top:0;left:0;width:100%;aspect-ratio:var(--aspect-ratio);cursor:pointer;transition:var(--overlay-transition, all 250ms ease-in-out)}.you__tube.svelte-1m1psld:hover .b__overlay.svelte-1m1psld{background:var(--overlay-bg-color, #00000030)}',
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = null } = $$props;
  let { altThumb = false } = $$props;
  let videoInfo = fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`).then((res) => res.json());
  let play = false;
  const isCustomPlayButton = $$slots.default;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.altThumb === void 0 && $$bindings.altThumb && altThumb !== void 0)
    $$bindings.altThumb(altThumb);
  $$result.css.add(css$1);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function({ title, width, height }) {
      return `
    <div class="${"you__tube svelte-1m1psld"}" style="${"--aspect-ratio:" + escape(width / height || "16/9", true)}"${add_attribute("title", title, 0)}>${`${validate_component(Image, "Image").$$render($$result, { id, title, altThumb, play }, {}, {})}
        <div class="${"b__overlay svelte-1m1psld"}"></div>
        <div class="${"v__title svelte-1m1psld"}"><h3 class="${"svelte-1m1psld"}">${escape(title)}</h3></div>`}
      ${`${validate_component(ButtonComponent, "ButtonComponent").$$render($$result, { isCustomPlayButton }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`}</div>
  `;
    }(__value);
  }(videoInfo)}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".top.svelte-jz2ia8{margin-top:90px;margin-bottom:10px}.movie-details.svelte-jz2ia8{margin:5px 80px 5px}.buttons.svelte-jz2ia8{padding:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let key;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let type = $page.params.type.toLocaleLowerCase();
  let { title, video_data: { results: videos }, reviews: { results: reviews }, similar: { results: similar } } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  key = videos && videos.length ? videos[0].key : "MWn0R5cb4h0";
  $$unsubscribe_page();
  return `<div class="${"movie-details svelte-jz2ia8"}"><div class="${"top svelte-jz2ia8"}">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      "aria-label": "Default breadcrumb example"
    },
    {},
    {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/home", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })}
            ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
          $$result,
          {
            href: type === "tv" ? "/tv shows" : "/movies"
          },
          {},
          {
            default: () => {
              return `${escape(type === "tv" ? "TV Shows" : "Movies")}`;
            }
          }
        )}
            ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(title.original_title ?? title.original_name)}`;
          }
        })}`;
      }
    }
  )}</div>
    
    <div class="${"i-frame"}">${validate_component(Youtube, "Youtube").$$render($$result, { id: key }, {}, {})}</div>

    ${videos ? `<div class="${"buttons svelte-jz2ia8"}">${each(videos, (video, index) => {
    return `${validate_component(Button, "Button").$$render($$result, { color: "alternative", pill: true }, {}, {
      default: () => {
        return `${escape(video.type)}`;
      }
    })}`;
  })}</div>` : ``}

    <div class="${"about-section"}">${validate_component(AboutMovieComponent, "AboutMovieComponent").$$render($$result, { details: title, reviews, similar, type }, {}, {})}</div>

</div>`;
});
export {
  Page as default
};
