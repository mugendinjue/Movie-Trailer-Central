import { S as SvelteComponent, i as init, s as safe_not_equal, I as create_slot, F as assign, k as element, l as claim_element, m as children, h as detach, K as set_attributes, b as insert_hydration, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update, f as transition_in, t as transition_out, D as compute_rest_props, G as exclude_internal_props } from "./index-68b73dd3.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
function create_fragment(ctx) {
  let p;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[15].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[14],
    null
  );
  let p_levels = [
    /*$$restProps*/
    ctx[1],
    { class: (
      /*classP*/
      ctx[0]
    ) }
  ];
  let p_data = {};
  for (let i = 0; i < p_levels.length; i += 1) {
    p_data = assign(p_data, p_levels[i]);
  }
  return {
    c() {
      p = element("p");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      if (default_slot)
        default_slot.l(p_nodes);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(p, p_data);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      if (default_slot) {
        default_slot.m(p, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16384)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[14],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[14]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[14],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(p, p_data = get_spread_update(p_levels, [
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        { class: (
          /*classP*/
          ctx2[0]
        ) }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
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
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  let colorAndopacity = color.split(" ").map((element2) => element2.trim()).map((element2) => element2 + "/" + String(opacity)).join(" ");
  let classP = classNames(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  $$self.$$set = ($$new_props) => {
    $$invalidate(23, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(2, color = $$new_props.color);
    if ("height" in $$new_props)
      $$invalidate(3, height = $$new_props.height);
    if ("align" in $$new_props)
      $$invalidate(4, align = $$new_props.align);
    if ("justify" in $$new_props)
      $$invalidate(5, justify = $$new_props.justify);
    if ("italic" in $$new_props)
      $$invalidate(6, italic = $$new_props.italic);
    if ("firstupper" in $$new_props)
      $$invalidate(7, firstupper = $$new_props.firstupper);
    if ("upperClass" in $$new_props)
      $$invalidate(8, upperClass = $$new_props.upperClass);
    if ("opacity" in $$new_props)
      $$invalidate(9, opacity = $$new_props.opacity);
    if ("whitespace" in $$new_props)
      $$invalidate(10, whitespace = $$new_props.whitespace);
    if ("size" in $$new_props)
      $$invalidate(11, size = $$new_props.size);
    if ("space" in $$new_props)
      $$invalidate(12, space = $$new_props.space);
    if ("weight" in $$new_props)
      $$invalidate(13, weight = $$new_props.weight);
    if ("$$scope" in $$new_props)
      $$invalidate(14, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    classP,
    $$restProps,
    color,
    height,
    align,
    justify,
    italic,
    firstupper,
    upperClass,
    opacity,
    whitespace,
    size,
    space,
    weight,
    $$scope,
    slots
  ];
}
class P extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      color: 2,
      height: 3,
      align: 4,
      justify: 5,
      italic: 6,
      firstupper: 7,
      upperClass: 8,
      opacity: 9,
      whitespace: 10,
      size: 11,
      space: 12,
      weight: 13
    });
  }
}
export {
  P
};
