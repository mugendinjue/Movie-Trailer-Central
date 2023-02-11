import { S as SvelteComponent, i as init, s as safe_not_equal, W as svg_element, X as claim_svg_element, m as children, h as detach, n as attr, b as insert_hydration, _ as append_hydration, C as noop, I as create_slot, k as element, l as claim_element, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out, a3 as compute_slots, F as assign, G as exclude_internal_props, e as empty, g as group_outros, d as check_outros, D as compute_rest_props, K as set_attributes, Q as get_spread_update, a4 as src_url_equal, a as space, c as claim_space, J as set_custom_element_data_map, x as create_component, y as claim_component, z as mount_component, a0 as get_spread_object, A as destroy_component, a5 as getContext, M as listen, T as run_all, H as bubble, Y as set_svg_attributes, a6 as destroy_each, q as text, r as claim_text, u as set_data, L as action_destroyer, E as setContext, U as add_render_callback, a8 as create_in_transition, a9 as handle_promise, aa as update_await_block_branch, p as set_style, a7 as component_subscribe } from "../../../../chunks/index-68b73dd3.js";
import { p as page } from "../../../../chunks/stores-089d934a.js";
import { c as classNames } from "../../../../chunks/Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem-3c4674a0.js";
import { w as writable } from "../../../../chunks/singletons-f19a58e8.js";
import { H as Heading } from "../../../../chunks/Heading-fc05dc71.js";
import { L as Layout, a as List, b as Li } from "../../../../chunks/List-ba359f4e.js";
import { P } from "../../../../chunks/P-82e30234.js";
import { M as MovieListComponent } from "../../../../chunks/MovieListComponent-3283e146.js";
import { a as scale } from "../../../../chunks/index-dd9601ee.js";
function create_fragment$f(ctx) {
  let svg;
  let path;
  let svg_class_value;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        fill: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "fill-rule": true,
        d: true,
        "clip-rule": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", svg_class_value = "text-gray-400 bg-gray-100 dark:bg-gray-600 " + /*rounded*/
      (ctx[0] ? "rounded" : "rounded-full"));
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 16 16");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*rounded*/
      1 && svg_class_value !== (svg_class_value = "text-gray-400 bg-gray-100 dark:bg-gray-600 " + /*rounded*/
      (ctx2[0] ? "rounded" : "rounded-full"))) {
        attr(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  let { rounded = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("rounded" in $$props2)
      $$invalidate(0, rounded = $$props2.rounded);
  };
  return [rounded];
}
class Placeholder extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { rounded: 0 });
  }
}
function create_fragment$e(ctx) {
  let div;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        div,
        "class",
        /*dotClass*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*dotClass*/
      1) {
        attr(
          div,
          "class",
          /*dotClass*/
          ctx2[0]
        );
      }
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("rounded" in $$new_props)
      $$invalidate(2, rounded = $$new_props.rounded);
    if ("size" in $$new_props)
      $$invalidate(3, size = $$new_props.size);
    if ("border" in $$new_props)
      $$invalidate(4, border = $$new_props.border);
    if ("placement" in $$new_props)
      $$invalidate(5, placement = $$new_props.placement);
    if ("offset" in $$new_props)
      $$invalidate(6, offset = $$new_props.offset);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(0, dotClass = classNames("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [dotClass, color, rounded, size, border, placement, offset, $$scope, slots];
}
class Indicator extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function create_else_block_1(ctx) {
  let img;
  let img_src_value;
  let img_levels = [
    { alt: (
      /*alt*/
      ctx[4]
    ) },
    { src: img_src_value = /*src*/
    ctx[1] },
    /*$$restProps*/
    ctx[7],
    { class: (
      /*avatarClass*/
      ctx[5]
    ) }
  ];
  let img_data = {};
  for (let i = 0; i < img_levels.length; i += 1) {
    img_data = assign(img_data, img_levels[i]);
  }
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
      this.h();
    },
    h() {
      set_attributes(img, img_data);
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      set_attributes(img, img_data = get_spread_update(img_levels, [
        dirty & /*alt*/
        16 && { alt: (
          /*alt*/
          ctx2[4]
        ) },
        dirty & /*src*/
        2 && !src_url_equal(img.src, img_src_value = /*src*/
        ctx2[1]) && { src: img_src_value },
        dirty & /*$$restProps*/
        128 && /*$$restProps*/
        ctx2[7],
        dirty & /*avatarClass*/
        32 && { class: (
          /*avatarClass*/
          ctx2[5]
        ) }
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block$8(ctx) {
  let previous_tag = (
    /*href*/
    ctx[2] ? "a" : "div"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[2] ? "a" : "div") && create_dynamic_element$1(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*href*/
        ctx2[2] ? "a" : "div"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$1(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[2] ? "a" : "div"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$1(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*href*/
      ctx2[2] ? "a" : "div";
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function create_else_block$5(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[12].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[11],
    null
  );
  const default_slot_or_fallback = default_slot || fallback_block$3(ctx);
  return {
    c() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2048)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[11],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[11]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[11],
              dirty,
              null
            ),
            null
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*rounded*/
        8)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let img;
  let img_src_value;
  let img_class_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
      this.h();
    },
    h() {
      attr(
        img,
        "alt",
        /*alt*/
        ctx[4]
      );
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[1]))
        attr(img, "src", img_src_value);
      attr(img, "class", img_class_value = /*rounded*/
      ctx[3] ? "rounded" : "rounded-full");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*alt*/
      16) {
        attr(
          img,
          "alt",
          /*alt*/
          ctx2[4]
        );
      }
      if (dirty & /*src*/
      2 && !src_url_equal(img.src, img_src_value = /*src*/
      ctx2[1])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*rounded*/
      8 && img_class_value !== (img_class_value = /*rounded*/
      ctx2[3] ? "rounded" : "rounded-full")) {
        attr(img, "class", img_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function fallback_block$3(ctx) {
  let avatarplaceholder;
  let current;
  avatarplaceholder = new Placeholder({ props: { rounded: (
    /*rounded*/
    ctx[3]
  ) } });
  return {
    c() {
      create_component(avatarplaceholder.$$.fragment);
    },
    l(nodes) {
      claim_component(avatarplaceholder.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(avatarplaceholder, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const avatarplaceholder_changes = {};
      if (dirty & /*rounded*/
      8)
        avatarplaceholder_changes.rounded = /*rounded*/
        ctx2[3];
      avatarplaceholder.$set(avatarplaceholder_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(avatarplaceholder.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(avatarplaceholder.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(avatarplaceholder, detaching);
    }
  };
}
function create_if_block_1$2(ctx) {
  let indicator;
  let current;
  const indicator_spread_levels = [
    { border: true },
    { offset: (
      /*rounded*/
      ctx[3]
    ) },
    /*dot*/
    ctx[0]
  ];
  let indicator_props = {};
  for (let i = 0; i < indicator_spread_levels.length; i += 1) {
    indicator_props = assign(indicator_props, indicator_spread_levels[i]);
  }
  indicator = new Indicator({ props: indicator_props });
  return {
    c() {
      create_component(indicator.$$.fragment);
    },
    l(nodes) {
      claim_component(indicator.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(indicator, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const indicator_changes = dirty & /*rounded, dot*/
      9 ? get_spread_update(indicator_spread_levels, [
        indicator_spread_levels[0],
        dirty & /*rounded*/
        8 && { offset: (
          /*rounded*/
          ctx2[3]
        ) },
        dirty & /*dot*/
        1 && get_spread_object(
          /*dot*/
          ctx2[0]
        )
      ]) : {};
      indicator.$set(indicator_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(indicator.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(indicator.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(indicator, detaching);
    }
  };
}
function create_dynamic_element$1(ctx) {
  let svelte_element;
  let current_block_type_index;
  let if_block0;
  let t;
  let svelte_element_class_value;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block$5];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*src*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*dot*/
    ctx[0] && create_if_block_1$2(ctx)
  );
  let svelte_element_levels = [
    { href: (
      /*href*/
      ctx[2]
    ) },
    /*$$restProps*/
    ctx[7],
    {
      class: svelte_element_class_value = "relative flex justify-center items-center " + /*avatarClass*/
      ctx[5]
    }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[2] ? "a" : "div"
      );
      if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[2] ? "a" : "div") || "null").toUpperCase(),
        { href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if_block0.l(svelte_element_nodes);
      t = claim_space(svelte_element_nodes);
      if (if_block1)
        if_block1.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*href*/
        ctx[2] ? "a" : "div"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if_blocks[current_block_type_index].m(svelte_element, null);
      append_hydration(svelte_element, t);
      if (if_block1)
        if_block1.m(svelte_element, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(svelte_element, t);
      }
      if (
        /*dot*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*dot*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(svelte_element, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        4) && { href: (
          /*href*/
          ctx2[2]
        ) },
        dirty & /*$$restProps*/
        128 && /*$$restProps*/
        ctx2[7],
        (!current || dirty & /*avatarClass*/
        32 && svelte_element_class_value !== (svelte_element_class_value = "relative flex justify-center items-center " + /*avatarClass*/
        ctx2[5])) && { class: svelte_element_class_value }
      ]);
      if (/-/.test(
        /*href*/
        ctx2[2] ? "a" : "div"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if_blocks[current_block_type_index].d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_fragment$d(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$8, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*src*/
    ctx2[1] || !!/*href*/
    ctx2[2] || /*$$slots*/
    ctx2[6].default || /*dot*/
    ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  const omit_props_names = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("src" in $$new_props)
      $$invalidate(1, src = $$new_props.src);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("rounded" in $$new_props)
      $$invalidate(3, rounded = $$new_props.rounded);
    if ("border" in $$new_props)
      $$invalidate(8, border = $$new_props.border);
    if ("stacked" in $$new_props)
      $$invalidate(9, stacked = $$new_props.stacked);
    if ("dot" in $$new_props)
      $$invalidate(0, dot = $$new_props.dot);
    if ("alt" in $$new_props)
      $$invalidate(4, alt = $$new_props.alt);
    if ("size" in $$new_props)
      $$invalidate(10, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(11, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*dot*/
    1) {
      $$invalidate(0, dot = dot && {
        placement: "top-right",
        color: "gray",
        size: "lg",
        ...dot
      });
    }
    if ($$self.$$.dirty & /*dot*/
    1) {
      dot && console.log(dot);
    }
    $$invalidate(5, avatarClass = classNames(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    dot,
    src,
    href,
    rounded,
    alt,
    avatarClass,
    $$slots,
    $$restProps,
    border,
    stacked,
    size,
    $$scope,
    slots
  ];
}
class Avatar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      src: 1,
      href: 2,
      rounded: 3,
      border: 8,
      stacked: 9,
      dot: 0,
      alt: 4,
      size: 10
    });
  }
}
function create_else_block$4(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$7(ctx) {
  let span;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  return {
    c() {
      span = element("span");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      if (default_slot)
        default_slot.l(span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        span,
        "class",
        /*gradientOutlineClass*/
        ctx[5]
      );
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*gradientOutlineClass*/
      32) {
        attr(
          span,
          "class",
          /*gradientOutlineClass*/
          ctx2[5]
        );
      }
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
        detach(span);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let current_block_type_index;
  let if_block;
  let svelte_element_type_value;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$7, create_else_block$4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*outline*/
      ctx2[0] && /*gradient*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let svelte_element_levels = [
    {
      type: svelte_element_type_value = /*href*/
      ctx[2] ? void 0 : (
        /*type*/
        ctx[3]
      )
    },
    { href: (
      /*href*/
      ctx[2]
    ) },
    /*$$restProps*/
    ctx[6],
    { class: (
      /*buttonClass*/
      ctx[4]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[2] ? "a" : "button"
      );
      if_block.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[2] ? "a" : "button") || "null").toUpperCase(),
        { type: true, href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if_block.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*href*/
        ctx[2] ? "a" : "button"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if_blocks[current_block_type_index].m(svelte_element, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[17]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[18]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[19]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(svelte_element, null);
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href, type*/
        12 && svelte_element_type_value !== (svelte_element_type_value = /*href*/
        ctx2[2] ? void 0 : (
          /*type*/
          ctx2[3]
        ))) && { type: svelte_element_type_value },
        (!current || dirty & /*href*/
        4) && { href: (
          /*href*/
          ctx2[2]
        ) },
        dirty & /*$$restProps*/
        64 && /*$$restProps*/
        ctx2[6],
        (!current || dirty & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          ctx2[4]
        ) }
      ]);
      if (/-/.test(
        /*href*/
        ctx2[2] ? "a" : "button"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if_blocks[current_block_type_index].d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$c(ctx) {
  let previous_tag = (
    /*href*/
    ctx[2] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[2] ? "a" : "button") && create_dynamic_element(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*href*/
        ctx2[2] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[2] ? "a" : "button"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*href*/
      ctx2[2] ? "a" : "button";
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = ["pill", "outline", "gradient", "size", "href", "btnClass", "type", "color", "shadow"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
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
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(28, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("pill" in $$new_props)
      $$invalidate(7, pill = $$new_props.pill);
    if ("outline" in $$new_props)
      $$invalidate(0, outline = $$new_props.outline);
    if ("gradient" in $$new_props)
      $$invalidate(1, gradient = $$new_props.gradient);
    if ("size" in $$new_props)
      $$invalidate(8, size = $$new_props.size);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("btnClass" in $$new_props)
      $$invalidate(9, btnClass = $$new_props.btnClass);
    if ("type" in $$new_props)
      $$invalidate(3, type = $$new_props.type);
    if ("color" in $$new_props)
      $$invalidate(10, color = $$new_props.color);
    if ("shadow" in $$new_props)
      $$invalidate(11, shadow = $$new_props.shadow);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(4, buttonClass = btnClass ? btnClass : classNames(
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
    ));
    if ($$self.$$.dirty & /*size*/
    256) {
      $$invalidate(5, gradientOutlineClass = classNames("inline-flex items-center justify-center", sizeClasses[size], rounded(true), "bg-white text-gray-900 dark:bg-gray-900 dark:text-white", "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit"));
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    outline,
    gradient,
    href,
    type,
    buttonClass,
    gradientOutlineClass,
    $$restProps,
    pill,
    size,
    btnClass,
    color,
    shadow,
    $$scope,
    slots,
    click_handler,
    change_handler,
    keydown_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      pill: 7,
      outline: 0,
      gradient: 1,
      size: 8,
      href: 2,
      btnClass: 9,
      type: 3,
      color: 10,
      shadow: 11
    });
  }
}
function create_fragment$b(ctx) {
  let svg;
  let svg_class_value;
  let mounted;
  let dispose;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[0]
    ) },
    { height: (
      /*size*/
      ctx[0]
    ) },
    {
      class: svg_class_value = /*$$props*/
      ctx[4].class
    },
    /*$$restProps*/
    ctx[5],
    { "aria-label": (
      /*ariaLabel*/
      ctx[1]
    ) },
    { fill: "none" },
    { viewBox: (
      /*viewBox*/
      ctx[2]
    ) },
    { "stroke-width": "2" }
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        class: true,
        "aria-label": true,
        fill: true,
        viewBox: true,
        "stroke-width": true
      });
      var svg_nodes = children(svg);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      svg.innerHTML = /*svgpath*/
      ctx[3];
      if (!mounted) {
        dispose = listen(
          svg,
          "click",
          /*click_handler*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*svgpath*/
      8)
        svg.innerHTML = /*svgpath*/
        ctx2[3];
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        dirty & /*size*/
        1 && { width: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*size*/
        1 && { height: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*$$props*/
        16 && svg_class_value !== (svg_class_value = /*$$props*/
        ctx2[4].class) && { class: svg_class_value },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        dirty & /*ariaLabel*/
        2 && { "aria-label": (
          /*ariaLabel*/
          ctx2[1]
        ) },
        { fill: "none" },
        dirty & /*viewBox*/
        4 && { viewBox: (
          /*viewBox*/
          ctx2[2]
        ) },
        { "stroke-width": "2" }
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      mounted = false;
      dispose();
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M11.4806 3.49883C11.6728 3.03685 12.3272 3.03685 12.5193 3.49883L14.6453 8.61028C14.7263 8.80504 14.9095 8.93811 15.1197 8.95497L20.638 9.39736C21.1367 9.43735 21.339 10.0598 20.959 10.3853L16.7546 13.9867C16.5945 14.1239 16.5245 14.3392 16.5734 14.5444L17.8579 19.9293C17.974 20.416 17.4446 20.8007 17.0176 20.5398L12.2932 17.6542C12.1132 17.5443 11.8868 17.5443 11.7068 17.6542L6.98238 20.5398C6.55539 20.8007 6.02594 20.416 6.14203 19.9293L7.42652 14.5444C7.47546 14.3392 7.4055 14.1239 7.24531 13.9867L3.04099 10.3853C2.661 10.0598 2.86323 9.43735 3.36197 9.39736L8.88022 8.95497C9.09048 8.93811 9.27363 8.80504 9.35464 8.61028L11.4806 3.49883Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z" fill="${color}"/> `;
  let { ariaLabel = "star" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("color" in $$new_props)
      $$invalidate(6, color = $$new_props.color);
    if ("variation" in $$new_props)
      $$invalidate(7, variation = $$new_props.variation);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*variation*/
    128) {
      switch (variation) {
        case "outline":
          $$invalidate(3, svgpath = svgoutline);
          $$invalidate(2, viewBox = "0 0 24 24");
          break;
        case "solid":
          $$invalidate(3, svgpath = svgsolid);
          $$invalidate(2, viewBox = "0 0 24 24");
          break;
        default:
          $$invalidate(3, svgpath = svgoutline);
          $$invalidate(2, viewBox = "0 0 24 24");
      }
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    size,
    ariaLabel,
    viewBox,
    svgpath,
    $$props,
    $$restProps,
    color,
    variation,
    click_handler
  ];
}
class Star extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
const get_text_slot_changes = (dirty) => ({});
const get_text_slot_context = (ctx) => ({});
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
const get_ratingDown_slot_changes = (dirty) => ({});
const get_ratingDown_slot_context = (ctx) => ({});
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
const get_ratingUp_slot_changes = (dirty) => ({});
const get_ratingUp_slot_context = (ctx) => ({});
function create_else_block$3(ctx) {
  let t0;
  let t1;
  let if_block_anchor;
  let current;
  let each_value_1 = Array(
    /*roundedRating*/
    ctx[4]
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  let each_value = Array(
    /*grayStars*/
    ctx[5]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const out_1 = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  let if_block = (
    /*$$slots*/
    ctx[7].text && create_if_block_1$1(ctx)
  );
  return {
    c() {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t0 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(nodes);
      }
      t0 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      t1 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(target, anchor);
      }
      insert_hydration(target, t0, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*size, $$scope*/
      1026) {
        each_value_1 = Array(
          /*roundedRating*/
          ctx2[4]
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1$1(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(t0.parentNode, t0);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (dirty & /*size, $$scope*/
      1026) {
        each_value = Array(
          /*grayStars*/
          ctx2[5]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t1.parentNode, t1);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
      if (
        /*$$slots*/
        ctx2[7].text
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          128) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block);
      current = true;
    },
    o(local) {
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach(t0);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block$6(ctx) {
  let star;
  let t0;
  let p;
  let t1;
  let t2;
  let current;
  star = new Star({
    props: {
      variation: "solid",
      size: (
        /*size*/
        ctx[1]
      ),
      class: "text-yellow-300 dark:text-yellow-200"
    }
  });
  const default_slot_template = (
    /*#slots*/
    ctx[11].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    null
  );
  return {
    c() {
      create_component(star.$$.fragment);
      t0 = space();
      p = element("p");
      t1 = text(
        /*rating*/
        ctx[2]
      );
      t2 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      claim_component(star.$$.fragment, nodes);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t1 = claim_text(
        p_nodes,
        /*rating*/
        ctx[2]
      );
      p_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(p, "class", "ml-2 text-sm font-bold text-gray-900 dark:text-white");
    },
    m(target, anchor) {
      mount_component(star, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t1);
      insert_hydration(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      const star_changes = {};
      if (dirty & /*size*/
      2)
        star_changes.size = /*size*/
        ctx2[1];
      star.$set(star_changes);
      if (!current || dirty & /*rating*/
      4)
        set_data(
          t1,
          /*rating*/
          ctx2[2]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(star.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(star.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(star, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p);
      if (detaching)
        detach(t2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let star;
  let current;
  star = new Star({
    props: {
      variation: "solid",
      size: (
        /*size*/
        ctx[1]
      ),
      class: "text-yellow-300 dark:text-yellow-200"
    }
  });
  return {
    c() {
      create_component(star.$$.fragment);
    },
    l(nodes) {
      claim_component(star.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(star, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const star_changes = {};
      if (dirty & /*size*/
      2)
        star_changes.size = /*size*/
        ctx2[1];
      star.$set(star_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(star.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(star.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(star, detaching);
    }
  };
}
function create_each_block_1$1(ctx) {
  let current;
  const ratingUp_slot_template = (
    /*#slots*/
    ctx[11].ratingUp
  );
  const ratingUp_slot = create_slot(
    ratingUp_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    get_ratingUp_slot_context
  );
  const ratingUp_slot_or_fallback = ratingUp_slot || fallback_block_1(ctx);
  return {
    c() {
      if (ratingUp_slot_or_fallback)
        ratingUp_slot_or_fallback.c();
    },
    l(nodes) {
      if (ratingUp_slot_or_fallback)
        ratingUp_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (ratingUp_slot_or_fallback) {
        ratingUp_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (ratingUp_slot) {
        if (ratingUp_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            ratingUp_slot,
            ratingUp_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              ratingUp_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              get_ratingUp_slot_changes
            ),
            get_ratingUp_slot_context
          );
        }
      } else {
        if (ratingUp_slot_or_fallback && ratingUp_slot_or_fallback.p && (!current || dirty & /*size*/
        2)) {
          ratingUp_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(ratingUp_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(ratingUp_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (ratingUp_slot_or_fallback)
        ratingUp_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block$2(ctx) {
  let star;
  let current;
  star = new Star({
    props: {
      size: (
        /*size*/
        ctx[1]
      ),
      class: "text-gray-300 dark:text-gray-500"
    }
  });
  return {
    c() {
      create_component(star.$$.fragment);
    },
    l(nodes) {
      claim_component(star.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(star, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const star_changes = {};
      if (dirty & /*size*/
      2)
        star_changes.size = /*size*/
        ctx2[1];
      star.$set(star_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(star.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(star.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(star, detaching);
    }
  };
}
function create_each_block$2(ctx) {
  let current;
  const ratingDown_slot_template = (
    /*#slots*/
    ctx[11].ratingDown
  );
  const ratingDown_slot = create_slot(
    ratingDown_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    get_ratingDown_slot_context
  );
  const ratingDown_slot_or_fallback = ratingDown_slot || fallback_block$2(ctx);
  return {
    c() {
      if (ratingDown_slot_or_fallback)
        ratingDown_slot_or_fallback.c();
    },
    l(nodes) {
      if (ratingDown_slot_or_fallback)
        ratingDown_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (ratingDown_slot_or_fallback) {
        ratingDown_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (ratingDown_slot) {
        if (ratingDown_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            ratingDown_slot,
            ratingDown_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              ratingDown_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              get_ratingDown_slot_changes
            ),
            get_ratingDown_slot_context
          );
        }
      } else {
        if (ratingDown_slot_or_fallback && ratingDown_slot_or_fallback.p && (!current || dirty & /*size*/
        2)) {
          ratingDown_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(ratingDown_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(ratingDown_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (ratingDown_slot_or_fallback)
        ratingDown_slot_or_fallback.d(detaching);
    }
  };
}
function create_if_block_1$1(ctx) {
  let current;
  const text_slot_template = (
    /*#slots*/
    ctx[11].text
  );
  const text_slot = create_slot(
    text_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    get_text_slot_context
  );
  return {
    c() {
      if (text_slot)
        text_slot.c();
    },
    l(nodes) {
      if (text_slot)
        text_slot.l(nodes);
    },
    m(target, anchor) {
      if (text_slot) {
        text_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (text_slot) {
        if (text_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            text_slot,
            text_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              text_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              get_text_slot_changes
            ),
            get_text_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(text_slot, local);
      current = true;
    },
    o(local) {
      transition_out(text_slot, local);
      current = false;
    },
    d(detaching) {
      if (text_slot)
        text_slot.d(detaching);
    }
  };
}
function create_fragment$a(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_class_value;
  let current;
  const if_block_creators = [create_if_block$6, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*count*/
      ctx2[3]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = classNames(
        /*divClass*/
        ctx[0],
        /*$$props*/
        ctx[6].class
      ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      if (!current || dirty & /*divClass, $$props*/
      65 && div_class_value !== (div_class_value = classNames(
        /*divClass*/
        ctx2[0],
        /*$$props*/
        ctx2[6].class
      ))) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { divClass = "flex items-center" } = $$props;
  let { size = "24" } = $$props;
  let { total = 5 } = $$props;
  let { rating = 4 } = $$props;
  let { ceil = false } = $$props;
  let { count = false } = $$props;
  let roundedRating = ceil ? Math.ceil(rating) : Math.floor(rating);
  let grayStars = total - roundedRating;
  $$self.$$set = ($$new_props) => {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("divClass" in $$new_props)
      $$invalidate(0, divClass = $$new_props.divClass);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("total" in $$new_props)
      $$invalidate(8, total = $$new_props.total);
    if ("rating" in $$new_props)
      $$invalidate(2, rating = $$new_props.rating);
    if ("ceil" in $$new_props)
      $$invalidate(9, ceil = $$new_props.ceil);
    if ("count" in $$new_props)
      $$invalidate(3, count = $$new_props.count);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    divClass,
    size,
    rating,
    count,
    roundedRating,
    grayStars,
    $$props,
    $$slots,
    total,
    ceil,
    $$scope,
    slots
  ];
}
class Rating extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {
      divClass: 0,
      size: 1,
      total: 8,
      rating: 2,
      ceil: 9,
      count: 3
    });
  }
}
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function fallback_block$1(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*title*/
        ctx[1]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*title*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      2)
        set_data(
          t,
          /*title*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$5(ctx) {
  let div1;
  let div0;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "hidden tab_content_placeholder");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(
          /*init*/
          ctx[3].call(null, div0)
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
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
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$9(ctx) {
  let li;
  let button;
  let t;
  let li_class_value;
  let current;
  let mounted;
  let dispose;
  const title_slot_template = (
    /*#slots*/
    ctx[10].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_title_slot_context
  );
  const title_slot_or_fallback = title_slot || fallback_block$1(ctx);
  let button_levels = [
    { type: "button" },
    { role: "tab" },
    /*$$restProps*/
    ctx[5],
    { class: (
      /*buttonClass*/
      ctx[2]
    ) }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  let if_block = (
    /*open*/
    ctx[0] && create_if_block$5(ctx)
  );
  return {
    c() {
      li = element("li");
      button = element("button");
      if (title_slot_or_fallback)
        title_slot_or_fallback.c();
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true, role: true });
      var li_nodes = children(li);
      button = claim_element(li_nodes, "BUTTON", { type: true, role: true, class: true });
      var button_nodes = children(button);
      if (title_slot_or_fallback)
        title_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach);
      t = claim_space(li_nodes);
      if (if_block)
        if_block.l(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
      attr(li, "class", li_class_value = classNames(
        "group",
        /*$$props*/
        ctx[4].class
      ));
      attr(li, "role", "presentation");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, button);
      if (title_slot_or_fallback) {
        title_slot_or_fallback.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      append_hydration(li, t);
      if (if_block)
        if_block.m(li, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button,
            "click",
            /*click_handler_1*/
            ctx[21]
          ),
          listen(
            button,
            "blur",
            /*blur_handler*/
            ctx[11]
          ),
          listen(
            button,
            "click",
            /*click_handler*/
            ctx[12]
          ),
          listen(
            button,
            "contextmenu",
            /*contextmenu_handler*/
            ctx[13]
          ),
          listen(
            button,
            "focus",
            /*focus_handler*/
            ctx[14]
          ),
          listen(
            button,
            "keydown",
            /*keydown_handler*/
            ctx[15]
          ),
          listen(
            button,
            "keypress",
            /*keypress_handler*/
            ctx[16]
          ),
          listen(
            button,
            "keyup",
            /*keyup_handler*/
            ctx[17]
          ),
          listen(
            button,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[18]
          ),
          listen(
            button,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[19]
          ),
          listen(
            button,
            "mouseover",
            /*mouseover_handler*/
            ctx[20]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_title_slot_changes
            ),
            get_title_slot_context
          );
        }
      } else {
        if (title_slot_or_fallback && title_slot_or_fallback.p && (!current || dirty & /*title*/
        2)) {
          title_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { type: "button" },
        { role: "tab" },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        (!current || dirty & /*buttonClass*/
        4) && { class: (
          /*buttonClass*/
          ctx2[2]
        ) }
      ]));
      if (
        /*open*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*open*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$5(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(li, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*$$props*/
      16 && li_class_value !== (li_class_value = classNames(
        "group",
        /*$$props*/
        ctx2[4].class
      ))) {
        attr(li, "class", li_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(title_slot_or_fallback, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(title_slot_or_fallback, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (title_slot_or_fallback)
        title_slot_or_fallback.d(detaching);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  const omit_props_names = ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  function init2(node) {
    selected.set(node);
    const destroy = selected.subscribe((x) => {
      if (x !== node) {
        $$invalidate(0, open = false);
      }
    });
    return { destroy };
  }
  let buttonClass;
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function contextmenu_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler_1 = () => $$invalidate(0, open = true);
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
    if ("activeClasses" in $$new_props)
      $$invalidate(6, activeClasses = $$new_props.activeClasses);
    if ("inactiveClasses" in $$new_props)
      $$invalidate(7, inactiveClasses = $$new_props.inactiveClasses);
    if ("defaultClass" in $$new_props)
      $$invalidate(8, defaultClass = $$new_props.defaultClass);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*defaultClass, open, activeClasses, inactiveClasses*/
    449) {
      $$invalidate(2, buttonClass = classNames(
        defaultClass,
        open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
        open && "active"
      ));
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    title,
    buttonClass,
    init2,
    $$props,
    $$restProps,
    activeClasses,
    inactiveClasses,
    defaultClass,
    $$scope,
    slots,
    blur_handler,
    click_handler,
    contextmenu_handler,
    focus_handler,
    keydown_handler,
    keypress_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler,
    mouseover_handler,
    click_handler_1
  ];
}
class TabItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      open: 0,
      title: 1,
      activeClasses: 6,
      inactiveClasses: 7,
      defaultClass: 8
    });
  }
}
const get_divider_slot_changes = (dirty) => ({ style: dirty & /*style*/
2 });
const get_divider_slot_context = (ctx) => ({ style: (
  /*style*/
  ctx[1]
) });
const get_default_slot_changes = (dirty) => ({ style: dirty & /*style*/
2 });
const get_default_slot_context = (ctx) => ({ style: (
  /*style*/
  ctx[1]
) });
function create_if_block$4(ctx) {
  let current;
  const divider_slot_template = (
    /*#slots*/
    ctx[9].divider
  );
  const divider_slot = create_slot(
    divider_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_divider_slot_context
  );
  const divider_slot_or_fallback = divider_slot || fallback_block();
  return {
    c() {
      if (divider_slot_or_fallback)
        divider_slot_or_fallback.c();
    },
    l(nodes) {
      if (divider_slot_or_fallback)
        divider_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (divider_slot_or_fallback) {
        divider_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (divider_slot) {
        if (divider_slot.p && (!current || dirty & /*$$scope, style*/
        258)) {
          update_slot_base(
            divider_slot,
            divider_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              divider_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_divider_slot_changes
            ),
            get_divider_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(divider_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(divider_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (divider_slot_or_fallback)
        divider_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "h-px bg-gray-200 dark:bg-gray-700");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$8(ctx) {
  let ul;
  let t0;
  let t1;
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context
  );
  let if_block = (
    /*divider*/
    ctx[0] && create_if_block$4(ctx)
  );
  return {
    c() {
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      div = element("div");
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      t0 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true,
        role: true,
        "aria-labelledby": true
      });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(
        ul,
        "class",
        /*ulClass*/
        ctx[3]
      );
      attr(
        div,
        "class",
        /*contentClass*/
        ctx[2]
      );
      attr(div, "role", "tabpanel");
      attr(div, "aria-labelledby", "id-tab");
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      insert_hydration(target, t0, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(
          /*init*/
          ctx[4].call(null, div)
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, style*/
        258)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (!current || dirty & /*ulClass*/
      8) {
        attr(
          ul,
          "class",
          /*ulClass*/
          ctx2[3]
        );
      }
      if (
        /*divider*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*divider*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t1.parentNode, t1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*contentClass*/
      4) {
        attr(
          div,
          "class",
          /*contentClass*/
          ctx2[2]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
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
function instance$8($$self, $$props, $$invalidate) {
  let ulClass;
  let { $$slots: slots = {}, $$scope } = $$props;
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
  function init2(node) {
    const destroy = ctx.selected.subscribe((x) => {
      if (x)
        node.replaceChildren(x);
    });
    return { destroy };
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("style" in $$new_props)
      $$invalidate(1, style = $$new_props.style);
    if ("defaultClass" in $$new_props)
      $$invalidate(5, defaultClass = $$new_props.defaultClass);
    if ("contentClass" in $$new_props)
      $$invalidate(2, contentClass = $$new_props.contentClass);
    if ("divider" in $$new_props)
      $$invalidate(0, divider = $$new_props.divider);
    if ("activeClasses" in $$new_props)
      $$invalidate(6, activeClasses = $$new_props.activeClasses);
    if ("inactiveClasses" in $$new_props)
      $$invalidate(7, inactiveClasses = $$new_props.inactiveClasses);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*style, divider*/
    3) {
      $$invalidate(0, divider = ["full", "pill"].includes(style) ? false : divider);
    }
    $$invalidate(3, ulClass = classNames(defaultClass, style === "underline" && "-mb-px", $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    divider,
    style,
    contentClass,
    ulClass,
    init2,
    defaultClass,
    activeClasses,
    inactiveClasses,
    $$scope,
    slots
  ];
}
class Tabs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      style: 1,
      defaultClass: 5,
      contentClass: 2,
      divider: 0,
      activeClasses: 6,
      inactiveClasses: 7
    });
  }
}
function create_fragment$7(ctx) {
  let a;
  let a_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  let a_levels = [
    /*$$restProps*/
    ctx[3],
    { href: (
      /*href*/
      ctx[0]
    ) },
    {
      class: a_class_value = classNames(
        /*aClass*/
        ctx[2],
        /*color*/
        ctx[1],
        /*$$props*/
        ctx[4].class
      )
    }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3],
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        (!current || dirty & /*aClass, color, $$props*/
        22 && a_class_value !== (a_class_value = classNames(
          /*aClass*/
          ctx2[2],
          /*color*/
          ctx2[1],
          /*$$props*/
          ctx2[4].class
        ))) && { class: a_class_value }
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
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "color", "aClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "#" } = $$props;
  let { color = "text-blue-600 dark:text-blue-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("aClass" in $$new_props)
      $$invalidate(2, aClass = $$new_props.aClass);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [href, color, aClass, $$restProps, $$props, $$scope, slots];
}
class A extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { href: 0, color: 1, aClass: 2 });
  }
}
function create_fragment$6(ctx) {
  let blockquote;
  let blockquote_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  let blockquote_levels = [
    /*$$restProps*/
    ctx[10],
    {
      class: blockquote_class_value = classNames(
        /*baseClass*/
        ctx[5],
        /*alignmentClasses*/
        ctx[8][
          /*alignment*/
          ctx[6]
        ],
        /*sizes*/
        ctx[9][
          /*size*/
          ctx[7]
        ],
        /*bg*/
        ctx[4] && /*bgClass*/
        ctx[3],
        /*border*/
        ctx[0] && /*borderClass*/
        ctx[2],
        /*italic*/
        ctx[1] && "italic",
        /*$$props*/
        ctx[11].class
      )
    }
  ];
  let blockquote_data = {};
  for (let i = 0; i < blockquote_levels.length; i += 1) {
    blockquote_data = assign(blockquote_data, blockquote_levels[i]);
  }
  return {
    c() {
      blockquote = element("blockquote");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      blockquote = claim_element(nodes, "BLOCKQUOTE", { class: true });
      var blockquote_nodes = children(blockquote);
      if (default_slot)
        default_slot.l(blockquote_nodes);
      blockquote_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(blockquote, blockquote_data);
    },
    m(target, anchor) {
      insert_hydration(target, blockquote, anchor);
      if (default_slot) {
        default_slot.m(blockquote, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(blockquote, blockquote_data = get_spread_update(blockquote_levels, [
        dirty & /*$$restProps*/
        1024 && /*$$restProps*/
        ctx2[10],
        (!current || dirty & /*baseClass, alignment, size, bg, bgClass, border, borderClass, italic, $$props*/
        2303 && blockquote_class_value !== (blockquote_class_value = classNames(
          /*baseClass*/
          ctx2[5],
          /*alignmentClasses*/
          ctx2[8][
            /*alignment*/
            ctx2[6]
          ],
          /*sizes*/
          ctx2[9][
            /*size*/
            ctx2[7]
          ],
          /*bg*/
          ctx2[4] && /*bgClass*/
          ctx2[3],
          /*border*/
          ctx2[0] && /*borderClass*/
          ctx2[2],
          /*italic*/
          ctx2[1] && "italic",
          /*$$props*/
          ctx2[11].class
        ))) && { class: blockquote_class_value }
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
        detach(blockquote);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  const omit_props_names = ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("border" in $$new_props)
      $$invalidate(0, border = $$new_props.border);
    if ("italic" in $$new_props)
      $$invalidate(1, italic = $$new_props.italic);
    if ("borderClass" in $$new_props)
      $$invalidate(2, borderClass = $$new_props.borderClass);
    if ("bgClass" in $$new_props)
      $$invalidate(3, bgClass = $$new_props.bgClass);
    if ("bg" in $$new_props)
      $$invalidate(4, bg = $$new_props.bg);
    if ("baseClass" in $$new_props)
      $$invalidate(5, baseClass = $$new_props.baseClass);
    if ("alignment" in $$new_props)
      $$invalidate(6, alignment = $$new_props.alignment);
    if ("size" in $$new_props)
      $$invalidate(7, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    border,
    italic,
    borderClass,
    bgClass,
    bg,
    baseClass,
    alignment,
    size,
    alignmentClasses,
    sizes,
    $$restProps,
    $$props,
    $$scope,
    slots
  ];
}
class Blockquote extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      border: 0,
      italic: 1,
      borderClass: 2,
      bgClass: 3,
      bg: 4,
      baseClass: 5,
      alignment: 6,
      size: 7
    });
  }
}
const AboutMovieComponent_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function create_default_slot_21(ctx) {
  let t_value = (
    /*details*/
    (ctx[1].original_name ?? /*details*/
    ctx[1].original_title) + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t_value !== (t_value = /*details*/
      (ctx2[1].original_name ?? /*details*/
      ctx2[1].original_title) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_20(ctx) {
  let span;
  let t0;
  let a;
  let t1_value = (
    /*details*/
    ctx[1].vote_count + ""
  );
  let t1;
  let t2;
  return {
    c() {
      span = element("span");
      t0 = space();
      a = element("a");
      t1 = text(t1_value);
      t2 = text(" reviews");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      children(span).forEach(detach);
      t0 = claim_space(nodes);
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, t1_value);
      t2 = claim_text(a_nodes, " reviews");
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400");
      attr(a, "href", "#review-tab");
      attr(a, "class", "text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t1);
      append_hydration(a, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t1_value !== (t1_value = /*details*/
      ctx2[1].vote_count + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a);
    }
  };
}
function create_default_slot_19(ctx) {
  let t0;
  let t1_value = (
    /*details*/
    ctx[1].status + ""
  );
  let t1;
  return {
    c() {
      t0 = text("Status : ");
      t1 = text(t1_value);
    },
    l(nodes) {
      t0 = claim_text(nodes, "Status : ");
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t1_value !== (t1_value = /*details*/
      ctx2[1].status + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_default_slot_18(ctx) {
  let t_value = (
    /*details*/
    ctx[1].overview + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t_value !== (t_value = /*details*/
      ctx2[1].overview + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block$2(ctx) {
  let p;
  let current;
  p = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_17] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(p.$$.fragment);
    },
    l(nodes) {
      claim_component(p.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(p, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const p_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        p_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p.$set(p_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(p.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(p.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(p, detaching);
    }
  };
}
function create_if_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value_3 = (
    /*reviews*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*reviews*/
      1) {
        each_value_3 = /*reviews*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_3.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_17(ctx) {
  let t;
  return {
    c() {
      t = text("No Comments");
    },
    l(nodes) {
      t = claim_text(nodes, "No Comments");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_16(ctx) {
  let t;
  let svg;
  let path;
  return {
    c() {
      t = text("more\n                        ");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      t = claim_text(nodes, "more\n                        ");
      svg = claim_svg_element(nodes, "svg", {
        "aria-hidden": true,
        class: true,
        fill: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "fill-rule": true,
        d: true,
        "clip-rule": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "aria-hidden", "true");
      attr(svg, "class", "ml-1 w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(svg);
    }
  };
}
function create_default_slot_15(ctx) {
  let t0_value = (
    /*review*/
    ctx[14].content.slice(0, 90) + "..."
  );
  let t0;
  let t1;
  let a;
  let current;
  a = new A({
    props: {
      href: (
        /*review*/
        ctx[14].url
      ),
      target: "_blank",
      textColor: "text-blue-600 dark:text-blue-500",
      aClass: "inline-flex items-center font-small  hover:underline",
      $$slots: { default: [create_default_slot_16] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      create_component(a.$$.fragment);
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      claim_component(a.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(a, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*reviews*/
      1) && t0_value !== (t0_value = /*review*/
      ctx2[14].content.slice(0, 90) + "..."))
        set_data(t0, t0_value);
      const a_changes = {};
      if (dirty & /*reviews*/
      1)
        a_changes.href = /*review*/
        ctx2[14].url;
      if (dirty & /*$$scope*/
      131072) {
        a_changes.$$scope = { dirty, ctx: ctx2 };
      }
      a.$set(a_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(a.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(a.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      destroy_component(a, detaching);
    }
  };
}
function create_each_block_3(ctx) {
  let div1;
  let figure;
  let svg;
  let path;
  let t0;
  let blockquote;
  let t1;
  let figcaption;
  let avatar;
  let t2;
  let div0;
  let cite;
  let t3_value = (
    /*review*/
    ctx[14].author_details.username + ""
  );
  let t3;
  let t4;
  let current;
  blockquote = new Blockquote({
    props: {
      alignment: "center",
      size: "lg",
      $$slots: { default: [create_default_slot_15] },
      $$scope: { ctx }
    }
  });
  avatar = new Avatar({
    props: {
      src: (
        /*review*/
        ctx[14].author_details.avatar_path ? `https://image.tmdb.org/t/p/w500` + /*review*/
        ctx[14].author_details.avatar_path : ""
      )
    }
  });
  return {
    c() {
      div1 = element("div");
      figure = element("figure");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      create_component(blockquote.$$.fragment);
      t1 = space();
      figcaption = element("figcaption");
      create_component(avatar.$$.fragment);
      t2 = space();
      div0 = element("div");
      cite = element("cite");
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, id: true });
      var div1_nodes = children(div1);
      figure = claim_element(div1_nodes, "FIGURE", { class: true });
      var figure_nodes = children(figure);
      svg = claim_svg_element(figure_nodes, "svg", {
        "aria-hidden": true,
        class: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true, fill: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t0 = claim_space(figure_nodes);
      claim_component(blockquote.$$.fragment, figure_nodes);
      t1 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", { class: true });
      var figcaption_nodes = children(figcaption);
      claim_component(avatar.$$.fragment, figcaption_nodes);
      t2 = claim_space(figcaption_nodes);
      div0 = claim_element(figcaption_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      cite = claim_element(div0_nodes, "CITE", { class: true });
      var cite_nodes = children(cite);
      t3 = claim_text(cite_nodes, t3_value);
      cite_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      figcaption_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z");
      attr(path, "fill", "currentColor");
      attr(svg, "aria-hidden", "true");
      attr(svg, "class", "mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600");
      attr(svg, "viewBox", "0 0 24 27");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(cite, "class", "pr-3 font-medium text-gray-900 dark:text-white");
      attr(div0, "class", "flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700");
      attr(figcaption, "class", "flex justify-center items-center mt-6 space-x-3");
      attr(figure, "class", "mx-auto max-w-screen-md text-center");
      attr(div1, "class", "flex space-x-4 svelte-4h5iv6");
      attr(div1, "id", "commentor");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, figure);
      append_hydration(figure, svg);
      append_hydration(svg, path);
      append_hydration(figure, t0);
      mount_component(blockquote, figure, null);
      append_hydration(figure, t1);
      append_hydration(figure, figcaption);
      mount_component(avatar, figcaption, null);
      append_hydration(figcaption, t2);
      append_hydration(figcaption, div0);
      append_hydration(div0, cite);
      append_hydration(cite, t3);
      append_hydration(div1, t4);
      current = true;
    },
    p(ctx2, dirty) {
      const blockquote_changes = {};
      if (dirty & /*$$scope, reviews*/
      131073) {
        blockquote_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blockquote.$set(blockquote_changes);
      const avatar_changes = {};
      if (dirty & /*reviews*/
      1)
        avatar_changes.src = /*review*/
        ctx2[14].author_details.avatar_path ? `https://image.tmdb.org/t/p/w500` + /*review*/
        ctx2[14].author_details.avatar_path : "";
      avatar.$set(avatar_changes);
      if ((!current || dirty & /*reviews*/
      1) && t3_value !== (t3_value = /*review*/
      ctx2[14].author_details.username + ""))
        set_data(t3, t3_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(blockquote.$$.fragment, local);
      transition_in(avatar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(blockquote.$$.fragment, local);
      transition_out(avatar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(blockquote);
      destroy_component(avatar);
    }
  };
}
function create_default_slot_14(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$3, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*reviews*/
      ctx2[0].length
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_13(ctx) {
  let t_value = (
    /*company*/
    ctx[11].name + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t_value !== (t_value = /*company*/
      ctx2[11].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(ctx) {
  let li;
  let current;
  li = new Li({
    props: {
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(li.$$.fragment);
    },
    l(nodes) {
      claim_component(li.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(li, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const li_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        li_changes.$$scope = { dirty, ctx: ctx2 };
      }
      li.$set(li_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(li.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(li.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(li, detaching);
    }
  };
}
function create_default_slot_12(ctx) {
  let each_1_anchor;
  let current;
  let each_value_2 = (
    /*details*/
    ctx[1].production_companies
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2) {
        each_value_2 = /*details*/
        ctx2[1].production_companies;
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_2.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_11(ctx) {
  let t;
  let list;
  let current;
  list = new List({
    props: {
      tag: "ul",
      class: "pl-5 mt-2 space-y-1",
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t = text("Production Companies\n                    ");
      create_component(list.$$.fragment);
    },
    l(nodes) {
      t = claim_text(nodes, "Production Companies\n                    ");
      claim_component(list.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      mount_component(list, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const list_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      destroy_component(list, detaching);
    }
  };
}
function create_default_slot_10(ctx) {
  let t_value = (
    /*country*/
    ctx[8].name + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t_value !== (t_value = /*country*/
      ctx2[8].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(ctx) {
  let li;
  let current;
  li = new Li({
    props: {
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(li.$$.fragment);
    },
    l(nodes) {
      claim_component(li.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(li, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const li_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        li_changes.$$scope = { dirty, ctx: ctx2 };
      }
      li.$set(li_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(li.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(li.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(li, detaching);
    }
  };
}
function create_default_slot_9(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = (
    /*details*/
    ctx[1].production_countries
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2) {
        each_value_1 = /*details*/
        ctx2[1].production_countries;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_8(ctx) {
  let t;
  let list;
  let current;
  list = new List({
    props: {
      tag: "ul",
      class: "pl-5 mt-2 space-y-1",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t = text("Production Countries\n                    ");
      create_component(list.$$.fragment);
    },
    l(nodes) {
      t = claim_text(nodes, "Production Countries\n                    ");
      claim_component(list.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      mount_component(list, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const list_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t);
      destroy_component(list, detaching);
    }
  };
}
function create_default_slot_7(ctx) {
  let li0;
  let t;
  let li1;
  let current;
  li0 = new Li({
    props: {
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  li1 = new Li({
    props: {
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(li0.$$.fragment);
      t = space();
      create_component(li1.$$.fragment);
    },
    l(nodes) {
      claim_component(li0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(li1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(li0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(li1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const li0_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        li0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      li0.$set(li0_changes);
      const li1_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        li1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      li1.$set(li1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(li0.$$.fragment, local);
      transition_in(li1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(li0.$$.fragment, local);
      transition_out(li1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(li0, detaching);
      if (detaching)
        detach(t);
      destroy_component(li1, detaching);
    }
  };
}
function create_default_slot_6(ctx) {
  let list;
  let current;
  list = new List({
    props: {
      tag: "ol",
      list: "decimal",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(list.$$.fragment);
    },
    l(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const list_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(list, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let t_value = (
    /*genre*/
    ctx[5].name + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2 && t_value !== (t_value = /*genre*/
      ctx2[5].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$1(ctx) {
  let li;
  let current;
  li = new Li({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(li.$$.fragment);
    },
    l(nodes) {
      claim_component(li.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(li, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const li_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        li_changes.$$scope = { dirty, ctx: ctx2 };
      }
      li.$set(li_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(li.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(li.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(li, detaching);
    }
  };
}
function create_default_slot_4$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*details*/
    ctx[1].genres
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*details*/
      2) {
        each_value = /*details*/
        ctx2[1].genres;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_3$1(ctx) {
  let list;
  let current;
  list = new List({
    props: {
      tag: "ul",
      class: "space-y-1",
      $$slots: { default: [create_default_slot_4$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(list.$$.fragment);
    },
    l(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const list_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(list, detaching);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let tabitem0;
  let t0;
  let tabitem1;
  let t1;
  let tabitem2;
  let current;
  tabitem0 = new TabItem({
    props: {
      open: true,
      title: "Reviews",
      $$slots: { default: [create_default_slot_14] },
      $$scope: { ctx }
    }
  });
  tabitem1 = new TabItem({
    props: {
      title: "Production",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  tabitem2 = new TabItem({
    props: {
      title: "Genres",
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tabitem0.$$.fragment);
      t0 = space();
      create_component(tabitem1.$$.fragment);
      t1 = space();
      create_component(tabitem2.$$.fragment);
    },
    l(nodes) {
      claim_component(tabitem0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(tabitem1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(tabitem2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tabitem0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(tabitem1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(tabitem2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tabitem0_changes = {};
      if (dirty & /*$$scope, reviews*/
      131073) {
        tabitem0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabitem0.$set(tabitem0_changes);
      const tabitem1_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        tabitem1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabitem1.$set(tabitem1_changes);
      const tabitem2_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        tabitem2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabitem2.$set(tabitem2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tabitem0.$$.fragment, local);
      transition_in(tabitem1.$$.fragment, local);
      transition_in(tabitem2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tabitem0.$$.fragment, local);
      transition_out(tabitem1.$$.fragment, local);
      transition_out(tabitem2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tabitem0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(tabitem1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(tabitem2, detaching);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let div1;
  let div0;
  let heading;
  let t0;
  let img;
  let img_src_value;
  let img_alt_value;
  let t1;
  let div3;
  let rating;
  let t2;
  let p0;
  let t3;
  let p1;
  let t4;
  let div2;
  let tabs;
  let current;
  heading = new Heading({
    props: {
      tag: "h2",
      $$slots: { default: [create_default_slot_21] },
      $$scope: { ctx }
    }
  });
  rating = new Rating({
    props: {
      count: true,
      rating: (
        /*details*/
        ctx[1].vote_average
      ),
      $$slots: { default: [create_default_slot_20] },
      $$scope: { ctx }
    }
  });
  p0 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_19] },
      $$scope: { ctx }
    }
  });
  p1 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_18] },
      $$scope: { ctx }
    }
  });
  tabs = new Tabs({
    props: {
      style: "underline",
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(heading.$$.fragment);
      t0 = space();
      img = element("img");
      t1 = space();
      div3 = element("div");
      create_component(rating.$$.fragment);
      t2 = space();
      create_component(p0.$$.fragment);
      t3 = space();
      create_component(p1.$$.fragment);
      t4 = space();
      div2 = element("div");
      create_component(tabs.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(heading.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
      div1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(rating.$$.fragment, div3_nodes);
      t2 = claim_space(div3_nodes);
      claim_component(p0.$$.fragment, div3_nodes);
      t3 = claim_space(div3_nodes);
      claim_component(p1.$$.fragment, div3_nodes);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { id: true });
      var div2_nodes = children(div2);
      claim_component(tabs.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "title svelte-4h5iv6");
      if (!src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/w500` + /*details*/
      ctx[1].backdrop_path))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*details*/
      ctx[1].original_name ?? /*details*/
      ctx[1].original_title);
      attr(img, "class", "svelte-4h5iv6");
      attr(div1, "class", "mb-3");
      attr(div2, "id", "review-tab");
      attr(div3, "class", "col-span-2");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(heading, div0, null);
      append_hydration(div1, t0);
      append_hydration(div1, img);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div3, anchor);
      mount_component(rating, div3, null);
      append_hydration(div3, t2);
      mount_component(p0, div3, null);
      append_hydration(div3, t3);
      mount_component(p1, div3, null);
      append_hydration(div3, t4);
      append_hydration(div3, div2);
      mount_component(tabs, div2, null);
      current = true;
    },
    p(ctx2, dirty) {
      const heading_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        heading_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading.$set(heading_changes);
      if (!current || dirty & /*details*/
      2 && !src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/w500` + /*details*/
      ctx2[1].backdrop_path)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*details*/
      2 && img_alt_value !== (img_alt_value = /*details*/
      ctx2[1].original_name ?? /*details*/
      ctx2[1].original_title)) {
        attr(img, "alt", img_alt_value);
      }
      const rating_changes = {};
      if (dirty & /*details*/
      2)
        rating_changes.rating = /*details*/
        ctx2[1].vote_average;
      if (dirty & /*$$scope, details*/
      131074) {
        rating_changes.$$scope = { dirty, ctx: ctx2 };
      }
      rating.$set(rating_changes);
      const p0_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        p0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p0.$set(p0_changes);
      const p1_changes = {};
      if (dirty & /*$$scope, details*/
      131074) {
        p1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p1.$set(p1_changes);
      const tabs_changes = {};
      if (dirty & /*$$scope, details, reviews*/
      131075) {
        tabs_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabs.$set(tabs_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(heading.$$.fragment, local);
      transition_in(rating.$$.fragment, local);
      transition_in(p0.$$.fragment, local);
      transition_in(p1.$$.fragment, local);
      transition_in(tabs.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(heading.$$.fragment, local);
      transition_out(rating.$$.fragment, local);
      transition_out(p0.$$.fragment, local);
      transition_out(p1.$$.fragment, local);
      transition_out(tabs.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(heading);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div3);
      destroy_component(rating);
      destroy_component(p0);
      destroy_component(p1);
      destroy_component(tabs);
    }
  };
}
function create_default_slot$2(ctx) {
  let div0;
  let layout;
  let t;
  let div1;
  let movielistcomponent;
  let current;
  layout = new Layout({
    props: {
      gap: 6,
      cols: "grid-cols-3 sm:grid-cols-1",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  movielistcomponent = new MovieListComponent({ props: { titles: (
    /*titles*/
    ctx[2]
  ) } });
  return {
    c() {
      div0 = element("div");
      create_component(layout.$$.fragment);
      t = space();
      div1 = element("div");
      create_component(movielistcomponent.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(layout.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(movielistcomponent.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "left svelte-4h5iv6");
      attr(div1, "class", "mb-3");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      mount_component(layout, div0, null);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(movielistcomponent, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      const layout_changes = {};
      if (dirty & /*$$scope, details, reviews*/
      131075) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      transition_in(movielistcomponent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      transition_out(movielistcomponent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_component(layout);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div1);
      destroy_component(movielistcomponent);
    }
  };
}
function create_fragment$5(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      gap: 6,
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    l(nodes) {
      claim_component(layout.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & /*$$scope, details, reviews*/
      131075) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
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
  $$self.$$set = ($$props2) => {
    if ("details" in $$props2)
      $$invalidate(1, details = $$props2.details);
    if ("reviews" in $$props2)
      $$invalidate(0, reviews = $$props2.reviews);
    if ("similar" in $$props2)
      $$invalidate(3, similar = $$props2.similar);
    if ("type" in $$props2)
      $$invalidate(4, type = $$props2.type);
  };
  return [reviews, details, titles, similar, type];
}
class AboutMovieComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      details: 1,
      reviews: 0,
      similar: 3,
      type: 4
    });
  }
}
const ButtonComponent_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let button;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", {
        xmlns: true,
        "aria-hidden": true,
        class: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill", "#ff4e45");
      attr(path, "d", "m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "aria-hidden", "true");
      attr(svg, "class", "iconify iconify--mdi");
      attr(svg, "viewBox", "0 0 24 24");
      attr(button, "class", "svelte-14cp8on");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "play-button svelte-14cp8on");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div,
            "click",
            /*click_handler*/
            ctx[3]
          ),
          listen(
            div,
            "keydown",
            /*keydown_handler*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$4(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*isCustomPlayButton*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isCustomPlayButton } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  const keydown_handler = (event) => {
    console.log("played");
  };
  $$self.$$set = ($$props2) => {
    if ("isCustomPlayButton" in $$props2)
      $$invalidate(0, isCustomPlayButton = $$props2.isCustomPlayButton);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [
    isCustomPlayButton,
    $$scope,
    slots,
    click_handler,
    click_handler_1,
    keydown_handler
  ];
}
class ButtonComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { isCustomPlayButton: 0 });
  }
}
const Iframe_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let iframe;
  let iframe_src_value;
  let iframe_intro;
  return {
    c() {
      iframe = element("iframe");
      this.h();
    },
    l(nodes) {
      iframe = claim_element(nodes, "IFRAME", {
        src: true,
        title: true,
        frameborder: true,
        allow: true,
        class: true
      });
      children(iframe).forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(iframe.src, iframe_src_value = "https://www.youtube.com/embed/" + /*id*/
      ctx[1] + "?autoplay=1&rel=0"))
        attr(iframe, "src", iframe_src_value);
      attr(
        iframe,
        "title",
        /*title*/
        ctx[0]
      );
      attr(iframe, "frameborder", "0");
      attr(iframe, "allow", "autoplay; picture-in-picture; clipboard-write");
      iframe.allowFullscreen = true;
      attr(iframe, "class", "svelte-1xb0zjm");
    },
    m(target, anchor) {
      insert_hydration(target, iframe, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*id*/
      2 && !src_url_equal(iframe.src, iframe_src_value = "https://www.youtube.com/embed/" + /*id*/
      ctx2[1] + "?autoplay=1&rel=0")) {
        attr(iframe, "src", iframe_src_value);
      }
      if (dirty & /*title*/
      1) {
        attr(
          iframe,
          "title",
          /*title*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (!iframe_intro) {
        add_render_callback(() => {
          iframe_intro = create_in_transition(iframe, scale, { delay: 500, duration: 800 });
          iframe_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(iframe);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { title = "" } = $$props;
  let { id = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
  };
  return [title, id];
}
class Iframe extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { title: 0, id: 1 });
  }
}
const Image_svelte_svelte_type_style_lang = "";
function create_key_block(ctx) {
  let img;
  let img_src_value;
  let img_alt_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        title: true,
        alt: true,
        referrerpolicy: true,
        class: true
      });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "https://i.ytimg.com/vi/" + /*id*/
      ctx[0] + "/" + /*altThumb*/
      (ctx[2] ? "hqdefault" : "maxresdefault") + ".jpg"))
        attr(img, "src", img_src_value);
      attr(
        img,
        "title",
        /*title*/
        ctx[1]
      );
      attr(img, "alt", img_alt_value = "Youtube video: " + /*title*/
      ctx[1]);
      attr(img, "referrerpolicy", "no-referrer");
      attr(img, "class", "svelte-10ngg6p");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*id, altThumb*/
      5 && !src_url_equal(img.src, img_src_value = "https://i.ytimg.com/vi/" + /*id*/
      ctx2[0] + "/" + /*altThumb*/
      (ctx2[2] ? "hqdefault" : "maxresdefault") + ".jpg")) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*title*/
      2) {
        attr(
          img,
          "title",
          /*title*/
          ctx2[1]
        );
      }
      if (dirty & /*title*/
      2 && img_alt_value !== (img_alt_value = "Youtube video: " + /*title*/
      ctx2[1])) {
        attr(img, "alt", img_alt_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_fragment$2(ctx) {
  let previous_key = (
    /*play*/
    ctx[3]
  );
  let key_block_anchor;
  let key_block = create_key_block(ctx);
  return {
    c() {
      key_block.c();
      key_block_anchor = empty();
    },
    l(nodes) {
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m(target, anchor) {
      key_block.m(target, anchor);
      insert_hydration(target, key_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*play*/
      8 && safe_not_equal(previous_key, previous_key = /*play*/
      ctx2[3])) {
        key_block.d(1);
        key_block = create_key_block(ctx2);
        key_block.c();
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { id = "" } = $$props;
  let { title = "" } = $$props;
  let { altThumb } = $$props;
  let { play = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("altThumb" in $$props2)
      $$invalidate(2, altThumb = $$props2.altThumb);
    if ("play" in $$props2)
      $$invalidate(3, play = $$props2.play);
  };
  return [id, title, altThumb, play];
}
class Image extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { id: 0, title: 1, altThumb: 2, play: 3 });
  }
}
const Youtube_svelte_svelte_type_style_lang = "";
function get_then_context(ctx) {
  ctx[11] = ctx[14].title;
  ctx[12] = ctx[14].width;
  ctx[13] = ctx[14].height;
}
function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  get_then_context(ctx);
  let div;
  let current_block_type_index;
  let if_block0;
  let t;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*play*/
      ctx2[2]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = !/*play*/
  ctx[2] && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true, title: true });
      var div_nodes = children(div);
      if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "you__tube svelte-1m1psld");
      set_style(
        div,
        "--aspect-ratio",
        /*width*/
        ctx[12] / /*height*/
        ctx[13] || "16/9"
      );
      attr(
        div,
        "title",
        /*title*/
        ctx[11]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      append_hydration(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      get_then_context(ctx2);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(div, t);
      }
      if (!/*play*/
      ctx2[2]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*play*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_else_block(ctx) {
  let image;
  let t0;
  let div0;
  let t1;
  let div1;
  let h3;
  let t2_value = (
    /*title*/
    ctx[11] + ""
  );
  let t2;
  let current;
  let mounted;
  let dispose;
  image = new Image({
    props: {
      id: (
        /*id*/
        ctx[0]
      ),
      title: (
        /*title*/
        ctx[11]
      ),
      altThumb: (
        /*altThumb*/
        ctx[1]
      ),
      play: (
        /*play*/
        ctx[2]
      )
    }
  });
  return {
    c() {
      create_component(image.$$.fragment);
      t0 = space();
      div0 = element("div");
      t1 = space();
      div1 = element("div");
      h3 = element("h3");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      claim_component(image.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h3 = claim_element(div1_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, t2_value);
      h3_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "b__overlay svelte-1m1psld");
      attr(h3, "class", "svelte-1m1psld");
      attr(div1, "class", "v__title svelte-1m1psld");
    },
    m(target, anchor) {
      mount_component(image, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h3);
      append_hydration(h3, t2);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div0,
            "click",
            /*click_handler*/
            ctx[6]
          ),
          listen(
            div0,
            "keydown",
            /*keydown_handler*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const image_changes = {};
      if (dirty & /*id*/
      1)
        image_changes.id = /*id*/
        ctx2[0];
      if (dirty & /*altThumb*/
      2)
        image_changes.altThumb = /*altThumb*/
        ctx2[1];
      if (dirty & /*play*/
      4)
        image_changes.play = /*play*/
        ctx2[2];
      image.$set(image_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(image.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(image.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(image, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let iframe;
  let current;
  iframe = new Iframe({
    props: {
      id: (
        /*id*/
        ctx[0]
      ),
      title: (
        /*title*/
        ctx[11]
      )
    }
  });
  return {
    c() {
      create_component(iframe.$$.fragment);
    },
    l(nodes) {
      claim_component(iframe.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iframe, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const iframe_changes = {};
      if (dirty & /*id*/
      1)
        iframe_changes.id = /*id*/
        ctx2[0];
      iframe.$set(iframe_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iframe.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iframe.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iframe, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let buttoncomponent;
  let current;
  buttoncomponent = new ButtonComponent({
    props: {
      isCustomPlayButton: (
        /*isCustomPlayButton*/
        ctx[4]
      ),
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  buttoncomponent.$on(
    "click",
    /*click_handler_1*/
    ctx[8]
  );
  return {
    c() {
      create_component(buttoncomponent.$$.fragment);
    },
    l(nodes) {
      claim_component(buttoncomponent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(buttoncomponent, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const buttoncomponent_changes = {};
      if (dirty & /*$$scope*/
      512) {
        buttoncomponent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      buttoncomponent.$set(buttoncomponent_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(buttoncomponent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(buttoncomponent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(buttoncomponent, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_pending_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_fragment$1(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 14,
    blocks: [, , ,]
  };
  handle_promise(
    /*videoInfo*/
    ctx[3],
    info
  );
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { id = null } = $$props;
  let { altThumb = false } = $$props;
  let videoInfo = fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`).then((res) => res.json());
  let play = false;
  const isCustomPlayButton = $$slots.default;
  const click_handler = () => $$invalidate(2, play = true);
  const keydown_handler = (event) => {
    console.log("played");
  };
  const click_handler_1 = () => $$invalidate(2, play = true);
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
    if ("altThumb" in $$props2)
      $$invalidate(1, altThumb = $$props2.altThumb);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  return [
    id,
    altThumb,
    play,
    videoInfo,
    isCustomPlayButton,
    slots,
    click_handler,
    keydown_handler,
    click_handler_1,
    $$scope
  ];
}
class Youtube extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { id: 0, altThumb: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  child_ctx[12] = i;
  return child_ctx;
}
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Home");
    },
    l(nodes) {
      t = claim_text(nodes, "Home");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let t_value = (
    /*type*/
    ctx[2] === "tv" ? "TV Shows" : "Movies"
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = (
    /*title*/
    (ctx[3].original_title ?? /*title*/
    ctx[3].original_name) + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1(ctx) {
  let breadcrumbitem0;
  let t0;
  let breadcrumbitem1;
  let t1;
  let breadcrumbitem2;
  let current;
  breadcrumbitem0 = new BreadcrumbItem({
    props: {
      href: "/home",
      home: true,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  breadcrumbitem1 = new BreadcrumbItem({
    props: {
      href: (
        /*type*/
        ctx[2] === "tv" ? "/tv shows" : "/movies"
      ),
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  breadcrumbitem2 = new BreadcrumbItem({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(breadcrumbitem0.$$.fragment);
      t0 = space();
      create_component(breadcrumbitem1.$$.fragment);
      t1 = space();
      create_component(breadcrumbitem2.$$.fragment);
    },
    l(nodes) {
      claim_component(breadcrumbitem0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(breadcrumbitem1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(breadcrumbitem2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(breadcrumbitem0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(breadcrumbitem1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(breadcrumbitem2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const breadcrumbitem0_changes = {};
      if (dirty & /*$$scope*/
      8192) {
        breadcrumbitem0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumbitem0.$set(breadcrumbitem0_changes);
      const breadcrumbitem1_changes = {};
      if (dirty & /*$$scope*/
      8192) {
        breadcrumbitem1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumbitem1.$set(breadcrumbitem1_changes);
      const breadcrumbitem2_changes = {};
      if (dirty & /*$$scope*/
      8192) {
        breadcrumbitem2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumbitem2.$set(breadcrumbitem2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(breadcrumbitem0.$$.fragment, local);
      transition_in(breadcrumbitem1.$$.fragment, local);
      transition_in(breadcrumbitem2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(breadcrumbitem0.$$.fragment, local);
      transition_out(breadcrumbitem1.$$.fragment, local);
      transition_out(breadcrumbitem2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(breadcrumbitem0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(breadcrumbitem1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(breadcrumbitem2, detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let current;
  let each_value = (
    /*videos*/
    ctx[4]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "buttons svelte-jz2ia8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*playNext, videos*/
      18) {
        each_value = /*videos*/
        ctx2[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t_value = (
    /*video*/
    ctx[10].type + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(ctx) {
  let button;
  let current;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[8](
        /*index*/
        ctx[12]
      )
    );
  }
  button = new Button({
    props: {
      color: "alternative",
      pill: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  button.$on("click", click_handler);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const button_changes = {};
      if (dirty & /*$$scope*/
      8192) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div3;
  let div0;
  let breadcrumb;
  let t0;
  let div1;
  let youtube;
  let t1;
  let t2;
  let div2;
  let aboutmoviecomponent;
  let current;
  breadcrumb = new Breadcrumb({
    props: {
      "aria-label": "Default breadcrumb example",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  youtube = new Youtube({ props: { id: (
    /*key*/
    ctx[0]
  ) } });
  let if_block = (
    /*videos*/
    ctx[4] && create_if_block(ctx)
  );
  aboutmoviecomponent = new AboutMovieComponent({
    props: {
      details: (
        /*title*/
        ctx[3]
      ),
      reviews: (
        /*reviews*/
        ctx[5]
      ),
      similar: (
        /*similar*/
        ctx[6]
      ),
      type: (
        /*type*/
        ctx[2]
      )
    }
  });
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      create_component(breadcrumb.$$.fragment);
      t0 = space();
      div1 = element("div");
      create_component(youtube.$$.fragment);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      div2 = element("div");
      create_component(aboutmoviecomponent.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(breadcrumb.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(youtube.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      if (if_block)
        if_block.l(div3_nodes);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(aboutmoviecomponent.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "top svelte-jz2ia8");
      attr(div1, "class", "i-frame");
      attr(div2, "class", "about-section");
      attr(div3, "class", "movie-details svelte-jz2ia8");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      mount_component(breadcrumb, div0, null);
      append_hydration(div3, t0);
      append_hydration(div3, div1);
      mount_component(youtube, div1, null);
      append_hydration(div3, t1);
      if (if_block)
        if_block.m(div3, null);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      mount_component(aboutmoviecomponent, div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const breadcrumb_changes = {};
      if (dirty & /*$$scope*/
      8192) {
        breadcrumb_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumb.$set(breadcrumb_changes);
      const youtube_changes = {};
      if (dirty & /*key*/
      1)
        youtube_changes.id = /*key*/
        ctx2[0];
      youtube.$set(youtube_changes);
      if (
        /*videos*/
        ctx2[4]
      )
        if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(breadcrumb.$$.fragment, local);
      transition_in(youtube.$$.fragment, local);
      transition_in(if_block);
      transition_in(aboutmoviecomponent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(breadcrumb.$$.fragment, local);
      transition_out(youtube.$$.fragment, local);
      transition_out(if_block);
      transition_out(aboutmoviecomponent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(breadcrumb);
      destroy_component(youtube);
      if (if_block)
        if_block.d();
      destroy_component(aboutmoviecomponent);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let key;
  let playNext;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(9, $page = $$value));
  let { data } = $$props;
  let type = $page.params.type.toLocaleLowerCase();
  let { title, video_data: { results: videos }, reviews: { results: reviews }, similar: { results: similar } } = data;
  const click_handler = (index) => playNext(index);
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(7, data = $$props2.data);
  };
  $$invalidate(0, key = videos && videos.length ? videos[0].key : "MWn0R5cb4h0");
  $$invalidate(1, playNext = (index) => {
    $$invalidate(0, key = videos[index].key);
  });
  return [key, playNext, type, title, videos, reviews, similar, data, click_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 7 });
  }
}
export {
  Page as default
};
