import { c as create_ssr_component, b as compute_rest_props, g as add_attribute, d as spread, e as escape_object, f as escape_attribute_value, v as validate_component, l as escape, p as each } from "../../chunks/index2.js";
import classNames from "classnames";
/* empty css                                                    */import { H as Hr } from "../../chunks/Hr.js";
import { L as Layout, a as List, b as Li } from "../../chunks/List.js";
import { P } from "../../chunks/P.js";
import { l as logo } from "../../chunks/logo3.js";
import { k as keyFeatures, b as appName } from "../../chunks/util.js";
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "caption",
    "src",
    "srcset",
    "size",
    "alignment",
    "imgClass",
    "figClass",
    "alt",
    "effect",
    "captionClass"
  ]);
  let { caption = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { srcset = void 0 } = $$props;
  let { size = "max-w-full" } = $$props;
  let { alignment = "" } = $$props;
  let { imgClass = "h-auto" } = $$props;
  let { figClass = "max-w-lg" } = $$props;
  let { alt = "" } = $$props;
  let { effect = "" } = $$props;
  let { captionClass = "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.figClass === void 0 && $$bindings.figClass && figClass !== void 0)
    $$bindings.figClass(figClass);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.effect === void 0 && $$bindings.effect && effect !== void 0)
    $$bindings.effect(effect);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `${caption ? `<figure${add_attribute("class", figClass, 0)}><img${add_attribute("class", classNames(imgClass, size, alignment, effect, $$props.class), 0)}${add_attribute("src", src, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("alt", alt, 0)}>
    <figcaption${add_attribute("class", captionClass, 0)}><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></figcaption></figure>` : `<img${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(imgClass, size, alignment, effect, $$props.class))
      },
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`}`;
});
const Span = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "italic",
    "underline",
    "linethrough",
    "uppercase",
    "gradient",
    "highlight",
    "highlightClass",
    "decorationClass",
    "gradientClass"
  ]);
  let { italic = false } = $$props;
  let { underline = false } = $$props;
  let { linethrough = false } = $$props;
  let { uppercase = false } = $$props;
  let { gradient = false } = $$props;
  let { highlight = false } = $$props;
  let { highlightClass = "text-blue-600 dark:text-blue-500" } = $$props;
  let { decorationClass = "decoration-2 decoration-blue-400 dark:decoration-blue-600" } = $$props;
  let { gradientClass = "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" } = $$props;
  let underlineClass = classNames("underline", decorationClass);
  let classSpan = classNames(
    italic && "italic",
    underline && underlineClass,
    linethrough && "line-through",
    uppercase && "uppercase",
    gradient ? gradientClass : "font-semibold text-gray-900 dark:text-white",
    highlight && highlightClass,
    $$props.class
  );
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.linethrough === void 0 && $$bindings.linethrough && linethrough !== void 0)
    $$bindings.linethrough(linethrough);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  if ($$props.highlightClass === void 0 && $$bindings.highlightClass && highlightClass !== void 0)
    $$bindings.highlightClass(highlightClass);
  if ($$props.decorationClass === void 0 && $$bindings.decorationClass && decorationClass !== void 0)
    $$bindings.decorationClass(decorationClass);
  if ($$props.gradientClass === void 0 && $$bindings.gradientClass && gradientClass !== void 0)
    $$bindings.gradientClass(gradientClass);
  return `<span${spread([escape_object($$restProps), { class: escape_attribute_value(classSpan) }], {})}>${slots.default ? slots.default({}) : ``}</span>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".top-img.svelte-1edskix{margin-top:90px}.center-text.svelte-1edskix{margin-top:90px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let app_name = appName;
  $$result.css.add(css);
  return `<div class="${"top-img svelte-1edskix"}">${validate_component(Img, "Img").$$render(
    $$result,
    {
      alignment: "mx-auto",
      src: logo,
      alt: "sample 1",
      size: "max-w-xs",
      class: "rounded-lg",
      href: "/home"
    },
    {},
    {}
  )}</div>


<div class="${"center-text svelte-1edskix"}">${validate_component(Layout, "Layout").$$render(
    $$result,
    {
      gap: 6,
      cols: "grid-cols-1 sm:grid-cols-3"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render(
          $$result,
          {
            class: "mb-3",
            weight: "light",
            color: "text-gray-500 dark:text-gray-400"
          },
          {},
          {}
        )}
        <div class="${"mb-3"}">${validate_component(P, "P").$$render(
          $$result,
          {
            weight: "light",
            align: "left",
            size: "5xl",
            color: "text-gray-500 dark:text-gray-400"
          },
          {},
          {
            default: () => {
              return `Welcome to ${validate_component(Span, "Span").$$render($$result, { gradient: true }, {}, {
                default: () => {
                  return `${escape(app_name)}`;
                }
              })} - Your One-Stop Destination for Movie Trailers.
            `;
            }
          }
        )}
            ${validate_component(Hr, "Hr").$$render(
          $$result,
          {
            class: "my-4 mx-auto md:my-10",
            width: "w-48",
            height: "h-1"
          },
          {},
          {}
        )}
            ${validate_component(P, "P").$$render(
          $$result,
          {
            weight: "light",
            align: "center",
            size: "3xl",
            color: "text-gray-500 dark:text-gray-400"
          },
          {},
          {
            default: () => {
              return `${escape(app_name)} is the ultimate platform for movie enthusiasts who want to stay up-to-date with the latest trailers and releases. Watch trailers for upcoming blockbusters, indie gems, and everything in between, all in one place.
            `;
            }
          }
        )}
            ${validate_component(Hr, "Hr").$$render(
          $$result,
          {
            class: "my-4 mx-auto md:my-10",
            width: "w-48",
            height: "h-1"
          },
          {},
          {}
        )}
            ${validate_component(List, "List").$$render(
          $$result,
          {
            tag: "ul",
            class: "space-y-2",
            list: "none"
          },
          {},
          {
            default: () => {
              return `${each(keyFeatures, (feature) => {
                return `${validate_component(Li, "Li").$$render($$result, { icon: true }, {}, {
                  default: () => {
                    return `<svg class="${"w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"}" clip-rule="${"evenodd"}"></path></svg>
                            ${escape(feature)}
                        `;
                  }
                })}`;
              })}`;
            }
          }
        )}</div>

        ${validate_component(P, "P").$$render(
          $$result,
          {
            class: "mb-3",
            weight: "light",
            color: "text-gray-500 dark:text-gray-400"
          },
          {},
          {}
        )}`;
      }
    }
  )}
</div>`;
});
export {
  Page as default
};
