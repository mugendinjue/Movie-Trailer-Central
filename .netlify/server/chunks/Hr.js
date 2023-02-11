import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, g as add_attribute, k as compute_slots } from "./index2.js";
import classNames from "classnames";
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "icon",
    "width",
    "height",
    "divClass",
    "hrClass",
    "iconDivClass",
    "textSpanClass",
    "middleBgColor"
  ]);
  let $$slots = compute_slots(slots);
  let { icon = false } = $$props;
  let { width = "w-full" } = $$props;
  let { height = "h-px" } = $$props;
  let { divClass = "inline-flex justify-center items-center w-full" } = $$props;
  let { hrClass = "bg-gray-200 rounded border-0 dark:bg-gray-700" } = $$props;
  let { iconDivClass = "absolute left-1/2 px-4 bg-white -translate-x-1/2 " } = $$props;
  let { textSpanClass = "absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white " } = $$props;
  let { middleBgColor = "dark:bg-gray-900" } = $$props;
  let horizontalClass = classNames(hrClass, width, height, $$props.class);
  let classDiv = classNames(divClass, $$slots && "relative", $$props.classDiv);
  let middleClass = classNames(middleBgColor, icon ? iconDivClass : textSpanClass);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.hrClass === void 0 && $$bindings.hrClass && hrClass !== void 0)
    $$bindings.hrClass(hrClass);
  if ($$props.iconDivClass === void 0 && $$bindings.iconDivClass && iconDivClass !== void 0)
    $$bindings.iconDivClass(iconDivClass);
  if ($$props.textSpanClass === void 0 && $$bindings.textSpanClass && textSpanClass !== void 0)
    $$bindings.textSpanClass(textSpanClass);
  if ($$props.middleBgColor === void 0 && $$bindings.middleBgColor && middleBgColor !== void 0)
    $$bindings.middleBgColor(middleBgColor);
  return `${$$slots ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classDiv) }], {})}><hr${add_attribute("class", horizontalClass, 0)}>
    <div${add_attribute("class", middleClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<hr${add_attribute("class", horizontalClass, 0)}>`}`;
});
export {
  Hr as H
};
