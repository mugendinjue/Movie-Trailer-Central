import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, g as group_outros, t as transition_out, d as check_outros, f as transition_in, h as detach, D as compute_rest_props, E as setContext, F as assign, G as exclude_internal_props, C as noop, H as bubble, v as binding_callbacks, I as create_slot, k as element, l as claim_element, m as children, J as set_custom_element_data_map, K as set_attributes, L as action_destroyer, M as listen, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update, R as is_function, T as run_all, U as add_render_callback, V as create_bidirectional_transition, W as svg_element, X as claim_svg_element, Y as set_svg_attributes, q as text, a as space, Z as head_selector, r as claim_text, c as claim_space, n as attr, _ as append_hydration, $ as get_current_component, o as onMount, x as create_component, y as claim_component, z as mount_component, a0 as get_spread_object, A as destroy_component, a1 as bind, a2 as add_flush_callback, a3 as compute_slots, a4 as src_url_equal, u as set_data, a5 as getContext, w as construct_svelte_component, a6 as destroy_each } from "../../chunks/index-68b73dd3.js";
import { c as classNames } from "../../chunks/Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { q as quintOut, s as slide } from "../../chunks/index-dd9601ee.js";
import { C as ChevronRight, a as ChevronLeft } from "../../chunks/ChevronRight-2d981c85.js";
import { l as logo, Q as QuickLinks, n as navTabs } from "../../chunks/util-edf9c3bc.js";
const app = "";
function create_else_block$7(ctx) {
  let previous_tag = (
    /*tag*/
    ctx[1]
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*tag*/
    ctx[1] && create_dynamic_element_1(ctx)
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
        /*tag*/
        ctx2[1]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element_1(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[1]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element_1(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*tag*/
      ctx2[1];
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
function create_if_block$a(ctx) {
  let previous_tag = (
    /*tag*/
    ctx[1]
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*tag*/
    ctx[1] && create_dynamic_element$3(ctx)
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
        /*tag*/
        ctx2[1]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$3(ctx2);
          svelte_element.c();
          transition_in(svelte_element);
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[1]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$3(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        group_outros();
        transition_out(svelte_element, 1, 1, () => {
          svelte_element = null;
        });
        check_outros();
      }
      previous_tag = /*tag*/
      ctx2[1];
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
function create_dynamic_element_1(ctx) {
  let svelte_element;
  let use_action;
  let current;
  let mounted;
  let dispose;
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
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[7],
    { class: (
      /*divClass*/
      ctx[6]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*tag*/
        ctx[1]
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*tag*/
        (ctx[1] || "null").toUpperCase(),
        { class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*tag*/
        ctx[1]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      ctx[23](svelte_element);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(use_action = /*use*/
          ctx[4].call(
            null,
            svelte_element,
            /*options*/
            ctx[5]
          )),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler_1*/
            ctx[18]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler_1*/
            ctx[19]
          ),
          listen(
            svelte_element,
            "focusin",
            /*focusin_handler_1*/
            ctx[20]
          ),
          listen(
            svelte_element,
            "focusout",
            /*focusout_handler_1*/
            ctx[21]
          )
        ];
        mounted = true;
      }
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
      svelte_element_data = get_spread_update(svelte_element_levels, [
        dirty & /*$$restProps*/
        128 && /*$$restProps*/
        ctx2[7],
        (!current || dirty & /*divClass*/
        64) && { class: (
          /*divClass*/
          ctx2[6]
        ) }
      ]);
      if (/-/.test(
        /*tag*/
        ctx2[1]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
      if (use_action && is_function(use_action.update) && dirty & /*options*/
      32)
        use_action.update.call(
          null,
          /*options*/
          ctx2[5]
        );
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
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      ctx[23](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_dynamic_element$3(ctx) {
  let svelte_element;
  let use_action;
  let svelte_element_transition;
  let current;
  let mounted;
  let dispose;
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
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[7],
    { class: (
      /*divClass*/
      ctx[6]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*tag*/
        ctx[1]
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*tag*/
        (ctx[1] || "null").toUpperCase(),
        { class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*tag*/
        ctx[1]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      ctx[22](svelte_element);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(use_action = /*use*/
          ctx[4].call(
            null,
            svelte_element,
            /*options*/
            ctx[5]
          )),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "focusin",
            /*focusin_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "focusout",
            /*focusout_handler*/
            ctx[17]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        dirty & /*$$restProps*/
        128 && /*$$restProps*/
        ctx[7],
        (!current || dirty & /*divClass*/
        64) && { class: (
          /*divClass*/
          ctx[6]
        ) }
      ]);
      if (/-/.test(
        /*tag*/
        ctx[1]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
      if (use_action && is_function(use_action.update) && dirty & /*options*/
      32)
        use_action.update.call(
          null,
          /*options*/
          ctx[5]
        );
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      add_render_callback(() => {
        if (!svelte_element_transition)
          svelte_element_transition = create_bidirectional_transition(
            svelte_element,
            /*transition*/
            ctx[2],
            /*params*/
            ctx[3],
            true
          );
        svelte_element_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (!svelte_element_transition)
        svelte_element_transition = create_bidirectional_transition(
          svelte_element,
          /*transition*/
          ctx[2],
          /*params*/
          ctx[3],
          false
        );
      svelte_element_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      ctx[22](null);
      if (detaching && svelte_element_transition)
        svelte_element_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$m(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$a, create_else_block$7];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*transition*/
      ctx2[2]
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
function instance$m($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  setContext("background", true);
  let { tag = "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  const bgColors = {
    gray: "bg-gray-100 dark:bg-gray-200 ",
    red: "bg-red-100 dark:bg-red-200",
    yellow: "bg-yellow-100 dark:bg-yellow-200 ",
    green: "bg-green-100 dark:bg-green-200 ",
    indigo: "bg-indigo-100 dark:bg-indigo-200 ",
    purple: "bg-purple-100 dark:bg-purple-200 ",
    pink: "bg-pink-100 dark:bg-pink-200 ",
    blue: "bg-blue-100 dark:bg-blue-200 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-100 dark:bg-gray-700",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-100 dark:bg-primary-200 ",
    none: ""
  };
  const textColors = {
    gray: "text-gray-700 dark:text-gray-800",
    red: "text-red-700 dark:text-red-800",
    yellow: "text-yellow-700 dark:text-yellow-800",
    green: "text-green-700 dark:text-green-800",
    indigo: "text-indigo-700 dark:text-indigo-800",
    purple: "text-purple-700 dark:text-purple-800",
    pink: "text-pink-700 dark:text-pink-800",
    blue: "text-blue-700 dark:text-blue-800",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-700 dark:text-primary-800",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-500 dark:bg-gray-200 ",
    red: "border-red-500 dark:bg-red-200 ",
    yellow: "border-yellow-500 dark:bg-tellow-200 ",
    green: "border-green-500 dark:bg-green-200 ",
    indigo: "border-indigo-500 dark:bg-indigo-200 ",
    purple: "border-purple-500 dark:bg-purple-200 ",
    pink: "border-pink-500 dark:bg-pink-200 ",
    blue: "border-blue-500 dark:bg-blue-200 ",
    light: "border-gray-500",
    dark: "border-gray-500",
    default: "border-gray-200 dark:border-gray-700",
    dropdown: "border-gray-100 dark:border-gray-700",
    navbar: "border-gray-100 dark:border-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700",
    form: "border-gray-300 dark:border-gray-700",
    primary: "border-primary-500 dark:bg-primary-200 ",
    none: ""
  };
  let divClass;
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focusin_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focusout_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function focusin_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function focusout_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function svelte_element_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      node = $$value;
      $$invalidate(0, node);
    });
  }
  function svelte_element_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      node = $$value;
      $$invalidate(0, node);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(27, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("tag" in $$new_props)
      $$invalidate(1, tag = $$new_props.tag);
    if ("color" in $$new_props)
      $$invalidate(8, color = $$new_props.color);
    if ("rounded" in $$new_props)
      $$invalidate(9, rounded = $$new_props.rounded);
    if ("border" in $$new_props)
      $$invalidate(10, border = $$new_props.border);
    if ("shadow" in $$new_props)
      $$invalidate(11, shadow = $$new_props.shadow);
    if ("transition" in $$new_props)
      $$invalidate(2, transition = $$new_props.transition);
    if ("params" in $$new_props)
      $$invalidate(3, params = $$new_props.params);
    if ("node" in $$new_props)
      $$invalidate(0, node = $$new_props.node);
    if ("use" in $$new_props)
      $$invalidate(4, use = $$new_props.use);
    if ("options" in $$new_props)
      $$invalidate(5, options = $$new_props.options);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*color*/
    256) {
      setContext("color", color);
    }
    $$invalidate(6, divClass = classNames(bgColors[color], textColors[color], rounded && (color === "dropdown" ? "rounded" : "rounded-lg"), border && "border", borderColors[color], shadow && "shadow-md", $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    node,
    tag,
    transition,
    params,
    use,
    options,
    divClass,
    $$restProps,
    color,
    rounded,
    border,
    shadow,
    $$scope,
    slots,
    mouseenter_handler,
    mouseleave_handler,
    focusin_handler,
    focusout_handler,
    mouseenter_handler_1,
    mouseleave_handler_1,
    focusin_handler_1,
    focusout_handler_1,
    svelte_element_binding,
    svelte_element_binding_1
  ];
}
class Frame extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$m, safe_not_equal, {
      tag: 1,
      color: 8,
      rounded: 9,
      border: 10,
      shadow: 11,
      transition: 2,
      params: 3,
      node: 0,
      use: 4,
      options: 5
    });
  }
}
function create_fragment$l(ctx) {
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
function instance$l($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z" fill="${color}"/> `;
  let { ariaLabel = "chevron down" } = $$props;
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
class ChevronDown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$l, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
function create_fragment$k(ctx) {
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
function instance$k($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L20.0303 15.2197C20.3232 15.5126 20.3232 15.9874 20.0303 16.2803C19.7374 16.5732 19.2626 16.5732 18.9697 16.2803L12 9.31066L5.03033 16.2803C4.73744 16.5732 4.26256 16.5732 3.96967 16.2803C3.67678 15.9874 3.67678 15.5126 3.96967 15.2197L11.4697 7.71967Z" fill="${color}"/> `;
  let { ariaLabel = "chevron up" } = $$props;
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
class ChevronUp extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$k, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
const get_darkIcon_slot_changes = (dirty) => ({});
const get_darkIcon_slot_context = (ctx) => ({});
const get_lightIcon_slot_changes = (dirty) => ({});
const get_lightIcon_slot_context = (ctx) => ({});
function fallback_block_1(ctx) {
  let svg;
  let path;
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
        d: true,
        "fill-rule": true,
        "clip-rule": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1\n  0 100-2H3a1 1 0 000 2h1z");
      attr(path, "fill-rule", "evenodd");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function fallback_block$1(ctx) {
  let svg;
  let path;
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
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment$j(ctx) {
  let script;
  let t0;
  let t1;
  let button;
  let span0;
  let t2;
  let span1;
  let button_class_value;
  let current;
  let mounted;
  let dispose;
  const lightIcon_slot_template = (
    /*#slots*/
    ctx[5].lightIcon
  );
  const lightIcon_slot = create_slot(
    lightIcon_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_lightIcon_slot_context
  );
  const lightIcon_slot_or_fallback = lightIcon_slot || fallback_block_1();
  const darkIcon_slot_template = (
    /*#slots*/
    ctx[5].darkIcon
  );
  const darkIcon_slot = create_slot(
    darkIcon_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_darkIcon_slot_context
  );
  const darkIcon_slot_or_fallback = darkIcon_slot || fallback_block$1();
  let button_levels = [
    { "aria-label": "Dark mode" },
    { type: "button" },
    /*$$restProps*/
    ctx[2],
    {
      class: button_class_value = classNames(
        /*btnClass*/
        ctx[0],
        /*$$props*/
        ctx[3].class
      )
    }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      script = element("script");
      t0 = text("if (window) {\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n        ? window.document.documentElement.classList.add('dark')\n        : window.document.documentElement.classList.remove('dark');\n    }");
      t1 = space();
      button = element("button");
      span0 = element("span");
      if (lightIcon_slot_or_fallback)
        lightIcon_slot_or_fallback.c();
      t2 = space();
      span1 = element("span");
      if (darkIcon_slot_or_fallback)
        darkIcon_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-16q53hu", document.head);
      script = claim_element(head_nodes, "SCRIPT", {});
      var script_nodes = children(script);
      t0 = claim_text(script_nodes, "if (window) {\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n        ? window.document.documentElement.classList.add('dark')\n        : window.document.documentElement.classList.remove('dark');\n    }");
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        "aria-label": true,
        type: true,
        class: true
      });
      var button_nodes = children(button);
      span0 = claim_element(button_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      if (lightIcon_slot_or_fallback)
        lightIcon_slot_or_fallback.l(span0_nodes);
      span0_nodes.forEach(detach);
      t2 = claim_space(button_nodes);
      span1 = claim_element(button_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      if (darkIcon_slot_or_fallback)
        darkIcon_slot_or_fallback.l(span1_nodes);
      span1_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "hidden dark:block");
      attr(span1, "class", "dark:hidden");
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      append_hydration(script, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, span0);
      if (lightIcon_slot_or_fallback) {
        lightIcon_slot_or_fallback.m(span0, null);
      }
      append_hydration(button, t2);
      append_hydration(button, span1);
      if (darkIcon_slot_or_fallback) {
        darkIcon_slot_or_fallback.m(span1, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*toggleTheme*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (lightIcon_slot) {
        if (lightIcon_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            lightIcon_slot,
            lightIcon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              lightIcon_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_lightIcon_slot_changes
            ),
            get_lightIcon_slot_context
          );
        }
      }
      if (darkIcon_slot) {
        if (darkIcon_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            darkIcon_slot,
            darkIcon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              darkIcon_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_darkIcon_slot_changes
            ),
            get_darkIcon_slot_context
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { "aria-label": "Dark mode" },
        { type: "button" },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*btnClass, $$props*/
        9 && button_class_value !== (button_class_value = classNames(
          /*btnClass*/
          ctx2[0],
          /*$$props*/
          ctx2[3].class
        ))) && { class: button_class_value }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(lightIcon_slot_or_fallback, local);
      transition_in(darkIcon_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(lightIcon_slot_or_fallback, local);
      transition_out(darkIcon_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      detach(script);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button);
      if (lightIcon_slot_or_fallback)
        lightIcon_slot_or_fallback.d(detaching);
      if (darkIcon_slot_or_fallback)
        darkIcon_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  const omit_props_names = ["btnClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  const toggleTheme = () => {
    const isDark = window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("btnClass" in $$new_props)
      $$invalidate(0, btnClass = $$new_props.btnClass);
    if ("$$scope" in $$new_props)
      $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [btnClass, toggleTheme, $$restProps, $$props, $$scope, slots];
}
class DarkMode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { btnClass: 0 });
  }
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element2) {
  return element2 ? (element2.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element2 = state.elements[name];
    if (!isHTMLElement(element2) || !getNodeName(element2)) {
      return;
    }
    Object.assign(element2.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element2.removeAttribute(name2);
      } else {
        element2.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element2 = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element2) || !getNodeName(element2)) {
        return;
      }
      Object.assign(element2.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element2.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element2.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element2)) {
    scaleX = element2.offsetWidth > 0 ? round(clientRect.width) / element2.offsetWidth || 1 : 1;
    scaleY = element2.offsetHeight > 0 ? round(clientRect.height) / element2.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element2) ? getWindow(element2) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element2) {
  var clientRect = getBoundingClientRect(element2);
  var width = element2.offsetWidth;
  var height = element2.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element2.offsetLeft,
    y: element2.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function isTableElement(element2) {
  return ["table", "td", "th"].indexOf(getNodeName(element2)) >= 0;
}
function getDocumentElement(element2) {
  return ((isElement(element2) ? element2.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element2.document
  )) || window.document).documentElement;
}
function getParentNode(element2) {
  if (getNodeName(element2) === "html") {
    return element2;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element2.parentNode || // DOM Element detected
    (isShadowRoot(element2) ? element2.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element2)
  );
}
function getTrueOffsetParent(element2) {
  if (!isHTMLElement(element2) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element2).position === "fixed") {
    return null;
  }
  return element2.offsetParent;
}
function getContainingBlock(element2) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element2)) {
    var elementCss = getComputedStyle(element2);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element2);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element2) {
  var window2 = getWindow(element2);
  var offsetParent = getTrueOffsetParent(element2);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element2) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance2.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance2.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance2.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getWindowScroll(element2).scrollLeft;
}
function getViewportRect(element2, strategy) {
  var win = getWindow(element2);
  var html = getDocumentElement(element2);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element2),
    y
  };
}
function getDocumentRect(element2) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element2);
  var winScroll = getWindowScroll(element2);
  var body = (_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element2);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element2) {
  var _getComputedStyle = getComputedStyle(element2), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element2, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element2);
  var isBody = scrollParent === ((_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element2, strategy) {
  var rect = getBoundingClientRect(element2, false, strategy === "fixed");
  rect.top = rect.top + element2.clientTop;
  rect.left = rect.left + element2.clientLeft;
  rect.bottom = rect.top + element2.clientHeight;
  rect.right = rect.left + element2.clientWidth;
  rect.width = element2.clientWidth;
  rect.height = element2.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element2, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element2, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element2)));
}
function getClippingParents(element2) {
  var clippingParents2 = listScrollParents(getParentNode(element2));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element2).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element2) ? getOffsetParent(element2) : element2;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element2, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element2) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element2, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element2, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element2 = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element2.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element2.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element2.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element2.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element2[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element2[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element2 = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element2) ? element2 : element2.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element2) {
  return {
    scrollLeft: element2.scrollLeft,
    scrollTop: element2.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element2) {
  var rect = element2.getBoundingClientRect();
  var scaleX = round(rect.width) / element2.offsetWidth || 1;
  var scaleY = round(rect.height) / element2.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element2) {
    return !(element2 && typeof element2.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance2 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance2.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance: instance2
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance2.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance2;
    }
    instance2.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance: instance2,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance2;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn2) => {
        fn2.call(component, event);
      });
    }
  };
}
function create_if_block_2$1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      children(div).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      ctx[19](div);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[19](null);
    }
  };
}
function create_if_block$9(ctx) {
  let frame;
  let current;
  const frame_spread_levels = [
    { use: (
      /*init*/
      ctx[8]
    ) },
    { options: (
      /*triggerEl*/
      ctx[3]
    ) },
    { role: "tooltip" },
    {
      tabIndex: (
        /*activeContent*/
        ctx[1] ? -1 : void 0
      )
    },
    /*$$restProps*/
    ctx[9],
    {
      class: classNames(
        "z-10 outline-none",
        /*$$props*/
        ctx[10].class
      )
    }
  ];
  let frame_props = {
    $$slots: { default: [create_default_slot$7] },
    $$scope: { ctx }
  };
  for (let i = 0; i < frame_spread_levels.length; i += 1) {
    frame_props = assign(frame_props, frame_spread_levels[i]);
  }
  frame = new Frame({ props: frame_props });
  frame.$on("focusin", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1],
      /*showHandler*/
      ctx[6]
    )))
      optional(
        /*activeContent*/
        ctx[1],
        /*showHandler*/
        ctx[6]
      ).apply(this, arguments);
  });
  frame.$on("focusout", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1],
      /*hideHandler*/
      ctx[7]
    )))
      optional(
        /*activeContent*/
        ctx[1],
        /*hideHandler*/
        ctx[7]
      ).apply(this, arguments);
  });
  frame.$on("mouseenter", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1] && !/*clickable*/
      ctx[4],
      /*showHandler*/
      ctx[6]
    )))
      optional(
        /*activeContent*/
        ctx[1] && !/*clickable*/
        ctx[4],
        /*showHandler*/
        ctx[6]
      ).apply(this, arguments);
  });
  frame.$on("mouseleave", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1] && !/*clickable*/
      ctx[4],
      /*hideHandler*/
      ctx[7]
    )))
      optional(
        /*activeContent*/
        ctx[1] && !/*clickable*/
        ctx[4],
        /*hideHandler*/
        ctx[7]
      ).apply(this, arguments);
  });
  return {
    c() {
      create_component(frame.$$.fragment);
    },
    l(nodes) {
      claim_component(frame.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(frame, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const frame_changes = dirty & /*init, triggerEl, activeContent, undefined, $$restProps, classNames, $$props*/
      1802 ? get_spread_update(frame_spread_levels, [
        dirty & /*init*/
        256 && { use: (
          /*init*/
          ctx[8]
        ) },
        dirty & /*triggerEl*/
        8 && { options: (
          /*triggerEl*/
          ctx[3]
        ) },
        frame_spread_levels[2],
        dirty & /*activeContent, undefined*/
        2 && {
          tabIndex: (
            /*activeContent*/
            ctx[1] ? -1 : void 0
          )
        },
        dirty & /*$$restProps*/
        512 && get_spread_object(
          /*$$restProps*/
          ctx[9]
        ),
        dirty & /*classNames, $$props*/
        1024 && {
          class: classNames(
            "z-10 outline-none",
            /*$$props*/
            ctx[10].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope, arrow*/
      1048580) {
        frame_changes.$$scope = { dirty, ctx };
      }
      frame.$set(frame_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(frame, detaching);
    }
  };
}
function create_if_block_1$2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { "data-popper-arrow": true, class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "data-popper-arrow", "");
      attr(div, "class", "tooltip-arrow");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot$7(ctx) {
  let t;
  let if_block_anchor;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[18].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[20],
    null
  );
  let if_block = (
    /*arrow*/
    ctx[2] && create_if_block_1$2()
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1048576)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[20],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[20]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[20],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*arrow*/
        ctx2[2]
      ) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_1$2();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
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
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$i(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = !/*triggerEl*/
  ctx[3] && create_if_block_2$1(ctx);
  let if_block1 = (
    /*open*/
    ctx[0] && /*triggerEl*/
    ctx[3] && create_if_block$9(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!/*triggerEl*/
      ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2$1(ctx2);
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*open*/
        ctx2[0] && /*triggerEl*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*open, triggerEl*/
          9) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$9(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
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
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function optional(pred, func) {
  return pred && func || null;
}
function instance$i($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { activeContent = false } = $$props;
  let { arrow: arrow2 = true } = $$props;
  let { offset: offset2 = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let clickable;
  let triggerEl;
  let contentEl;
  let triggerEls = [];
  let popper2;
  let _blocked = false;
  const block = () => (_blocked = true, setTimeout(() => _blocked = false, 250));
  const showHandler = (ev) => {
    if (triggerEl === void 0)
      console.error("trigger undefined");
    if (triggerEls.includes(ev.target) && triggerEl !== ev.target) {
      $$invalidate(3, triggerEl = ev.target);
      block();
    }
    if (clickable && ev.type === "focusin" && !open)
      block();
    $$invalidate(0, open = clickable && ev.type === "click" && !_blocked ? !open : true);
  };
  const hasHover = (el) => el.matches && el.matches(":hover");
  const hasFocus = (el) => el.contains && el.contains(document.activeElement);
  const hideHandler = (ev) => {
    if (activeContent) {
      setTimeout(
        () => {
          const elements = Object.values((popper2 == null ? void 0 : popper2.state.elements) ?? {});
          if (ev.type === "mouseleave" && elements.some(hasHover))
            return;
          if (ev.type === "focusout" && elements.some(hasFocus))
            return;
          $$invalidate(0, open = false);
        },
        100
      );
    } else
      $$invalidate(0, open = false);
  };
  function init2(node, _triggerEl) {
    $$invalidate(17, popper2 = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference: reference2, popper: popper3 }) => {
              return [
                yOnly ? popper3.width / 2 - reference2.width / 2 - reference2.x : 0,
                offset2
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false }
      ]
    }));
    return {
      update(_triggerEl2) {
        $$invalidate(17, popper2.state.elements.reference = _triggerEl2, popper2);
        popper2.update();
      },
      destroy() {
        popper2.destroy();
      }
    };
  }
  onMount(() => {
    const events = [
      ["focusin", showHandler, true],
      ["focusout", hideHandler, true],
      ["click", showHandler, clickable],
      ["mouseenter", showHandler, !clickable],
      ["mouseleave", hideHandler, !clickable]
    ];
    if (triggeredBy)
      triggerEls = [...document.querySelectorAll(triggeredBy)];
    else
      triggerEls = contentEl.previousElementSibling ? [contentEl.previousElementSibling] : [];
    if (!triggerEls.length) {
      console.error("No triggers found.");
    }
    triggerEls.forEach((element2) => {
      if (element2.tabIndex < 0)
        element2.tabIndex = 0;
      for (const [name, handler, cond] of events)
        if (cond)
          element2.addEventListener(name, handler);
    });
    $$invalidate(3, triggerEl = triggerEls[0]);
    return () => {
      triggerEls.forEach((element2) => {
        if (element2) {
          for (const [name, handler] of events)
            element2.removeEventListener(name, handler);
        }
      });
    };
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      contentEl = $$value;
      $$invalidate(5, contentEl);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("activeContent" in $$new_props)
      $$invalidate(1, activeContent = $$new_props.activeContent);
    if ("arrow" in $$new_props)
      $$invalidate(2, arrow2 = $$new_props.arrow);
    if ("offset" in $$new_props)
      $$invalidate(11, offset2 = $$new_props.offset);
    if ("placement" in $$new_props)
      $$invalidate(12, placement = $$new_props.placement);
    if ("trigger" in $$new_props)
      $$invalidate(13, trigger = $$new_props.trigger);
    if ("triggeredBy" in $$new_props)
      $$invalidate(14, triggeredBy = $$new_props.triggeredBy);
    if ("strategy" in $$new_props)
      $$invalidate(15, strategy = $$new_props.strategy);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("yOnly" in $$new_props)
      $$invalidate(16, yOnly = $$new_props.yOnly);
    if ("$$scope" in $$new_props)
      $$invalidate(20, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*trigger*/
    8192) {
      $$invalidate(4, clickable = trigger === "click");
    }
    if ($$self.$$.dirty & /*triggerEl, open*/
    9) {
      dispatch("show", triggerEl, open);
    }
    if ($$self.$$.dirty & /*popper, placement*/
    135168) {
      popper2 && popper2.setOptions({ placement });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    activeContent,
    arrow2,
    triggerEl,
    clickable,
    contentEl,
    showHandler,
    hideHandler,
    init2,
    $$restProps,
    $$props,
    offset2,
    placement,
    trigger,
    triggeredBy,
    strategy,
    yOnly,
    popper2,
    slots,
    div_binding,
    $$scope
  ];
}
class Popper extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, {
      activeContent: 1,
      arrow: 2,
      offset: 11,
      placement: 12,
      trigger: 13,
      triggeredBy: 14,
      strategy: 15,
      open: 0,
      yOnly: 16
    });
  }
}
const get_footer_slot_changes = (dirty) => ({});
const get_footer_slot_context = (ctx) => ({});
const get_header_slot_changes = (dirty) => ({});
const get_header_slot_context = (ctx) => ({});
function create_if_block_1$1(ctx) {
  let div;
  let current;
  const header_slot_template = (
    /*#slots*/
    ctx[6].header
  );
  const header_slot = create_slot(
    header_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_header_slot_context
  );
  return {
    c() {
      div = element("div");
      if (header_slot)
        header_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (header_slot)
        header_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "py-1 overflow-hidden rounded-t");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (header_slot) {
        header_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (header_slot) {
        if (header_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            header_slot,
            header_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              header_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_header_slot_changes
            ),
            get_header_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (header_slot)
        header_slot.d(detaching);
    }
  };
}
function create_if_block$8(ctx) {
  let div;
  let current;
  const footer_slot_template = (
    /*#slots*/
    ctx[6].footer
  );
  const footer_slot = create_slot(
    footer_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_footer_slot_context
  );
  return {
    c() {
      div = element("div");
      if (footer_slot)
        footer_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (footer_slot)
        footer_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "py-1 overflow-hidden rounded-b");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (footer_slot) {
        footer_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (footer_slot) {
        if (footer_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            footer_slot,
            footer_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              footer_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_footer_slot_changes
            ),
            get_footer_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(footer_slot, local);
      current = true;
    },
    o(local) {
      transition_out(footer_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (footer_slot)
        footer_slot.d(detaching);
    }
  };
}
function create_default_slot$6(ctx) {
  let t0;
  let ul;
  let ul_class_value;
  let t1;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*$$slots*/
    ctx[3].header && create_if_block_1$1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  let if_block1 = (
    /*$$slots*/
    ctx[3].footer && create_if_block$8(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(ul, "class", ul_class_value = /*$$props*/
      ctx[4].class ?? "py-1 w-44");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*$$slots*/
        ctx2[3].header
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
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
      if (!current || dirty & /*$$props*/
      16 && ul_class_value !== (ul_class_value = /*$$props*/
      ctx2[4].class ?? "py-1 w-44")) {
        attr(ul, "class", ul_class_value);
      }
      if (
        /*$$slots*/
        ctx2[3].footer
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$8(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
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
      transition_in(default_slot, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_fragment$h(ctx) {
  let popper2;
  let updating_open;
  let current;
  const popper_spread_levels = [
    { activeContent: true },
    /*$$restProps*/
    ctx[2],
    { class: (
      /*popoverClass*/
      ctx[1]
    ) }
  ];
  function popper_open_binding(value) {
    ctx[7](value);
  }
  let popper_props = {
    $$slots: { default: [create_default_slot$6] },
    $$scope: { ctx }
  };
  for (let i = 0; i < popper_spread_levels.length; i += 1) {
    popper_props = assign(popper_props, popper_spread_levels[i]);
  }
  if (
    /*open*/
    ctx[0] !== void 0
  ) {
    popper_props.open = /*open*/
    ctx[0];
  }
  popper2 = new Popper({ props: popper_props });
  binding_callbacks.push(() => bind(popper2, "open", popper_open_binding));
  popper2.$on(
    "show",
    /*show_handler*/
    ctx[8]
  );
  return {
    c() {
      create_component(popper2.$$.fragment);
    },
    l(nodes) {
      claim_component(popper2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(popper2, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const popper_changes = dirty & /*$$restProps, popoverClass*/
      6 ? get_spread_update(popper_spread_levels, [
        popper_spread_levels[0],
        dirty & /*$$restProps*/
        4 && get_spread_object(
          /*$$restProps*/
          ctx2[2]
        ),
        dirty & /*popoverClass*/
        2 && { class: (
          /*popoverClass*/
          ctx2[1]
        ) }
      ]) : {};
      if (dirty & /*$$scope, $$slots, $$props*/
      536) {
        popper_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      1) {
        updating_open = true;
        popper_changes.open = /*open*/
        ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      popper2.$set(popper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(popper2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(popper2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(popper2, detaching);
    }
  };
}
function instance$h($$self, $$props, $$invalidate) {
  const omit_props_names = ["open", "frameClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { frameClass = "" } = $$props;
  let popoverClass;
  function popper_open_binding(value) {
    open = value;
    $$invalidate(0, open);
  }
  function show_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("frameClass" in $$new_props)
      $$invalidate(5, frameClass = $$new_props.frameClass);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    {
      $$invalidate(2, $$restProps.arrow = $$restProps.arrow ?? false, $$restProps);
      $$invalidate(2, $$restProps.trigger = $$restProps.trigger ?? "click", $$restProps);
      $$invalidate(2, $$restProps.placement = $$restProps.placement ?? "bottom", $$restProps);
      $$invalidate(2, $$restProps.color = $$restProps.color ?? "dropdown", $$restProps);
      $$invalidate(2, $$restProps.shadow = $$restProps.shadow ?? true, $$restProps);
      $$invalidate(2, $$restProps.rounded = $$restProps.rounded ?? true, $$restProps);
    }
    if ($$self.$$.dirty & /*frameClass*/
    32) {
      $$invalidate(1, popoverClass = classNames("divide-y divide-gray-100 dark:divide-gray-600", frameClass));
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    popoverClass,
    $$restProps,
    $$slots,
    $$props,
    frameClass,
    slots,
    popper_open_binding,
    show_handler,
    $$scope
  ];
}
class Dropdown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { open: 0, frameClass: 5 });
  }
}
function create_else_block$6(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
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
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
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
  let previous_tag = (
    /*tag*/
    ctx[0]
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*tag*/
    ctx[0] && create_dynamic_element$2(ctx)
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
        /*tag*/
        ctx2[0]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$2(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[0]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$2(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*tag*/
      ctx2[0];
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
function create_dynamic_element$2(ctx) {
  let svelte_element;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[3]
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*tag*/
        ctx[0]
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*tag*/
        (ctx[0] || "null").toUpperCase(),
        {}
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*tag*/
        ctx[0]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(
          /*use*/
          ctx[2].call(null, svelte_element)
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*$$restProps*/
      8 && /*$$restProps*/
      ctx2[3]]);
      if (/-/.test(
        /*tag*/
        ctx2[0]
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
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
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$g(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$7, create_else_block$6];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*show*/
      ctx2[1]
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
function instance$g($$self, $$props, $$invalidate) {
  const omit_props_names = ["tag", "show", "use"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("tag" in $$new_props)
      $$invalidate(0, tag = $$new_props.tag);
    if ("show" in $$new_props)
      $$invalidate(1, show = $$new_props.show);
    if ("use" in $$new_props)
      $$invalidate(2, use = $$new_props.use);
    if ("$$scope" in $$new_props)
      $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  return [tag, show, use, $$restProps, $$scope, slots];
}
class Wrapper extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { tag: 0, show: 1, use: 2 });
  }
}
function create_dynamic_element$1(ctx) {
  let svelte_element;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    null
  );
  let svelte_element_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[4],
    { class: (
      /*liClass*/
      ctx[1]
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
        ctx[0] ? "a" : "button"
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[0] ? "a" : "button") || "null").toUpperCase(),
        { href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*href*/
        ctx[0] ? "a" : "button"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[7]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[8]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[9]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "focus",
            /*focus_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "blur",
            /*blur_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[13]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[14]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32768)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[15],
              dirty,
              null
            ),
            null
          );
        }
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*liClass*/
        2) && { class: (
          /*liClass*/
          ctx2[1]
        ) }
      ]);
      if (/-/.test(
        /*href*/
        ctx2[0] ? "a" : "button"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
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
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_default_slot$5(ctx) {
  let previous_tag = (
    /*href*/
    ctx[0] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[0] ? "a" : "button") && create_dynamic_element$1(ctx)
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
        ctx2[0] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$1(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[0] ? "a" : "button"
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
      ctx2[0] ? "a" : "button";
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
function create_fragment$f(ctx) {
  let wrapper;
  let current;
  wrapper = new Wrapper({
    props: {
      tag: "li",
      show: (
        /*wrap*/
        ctx[2]
      ),
      use: (
        /*init*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(wrapper.$$.fragment);
    },
    l(nodes) {
      claim_component(wrapper.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(wrapper, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const wrapper_changes = {};
      if (dirty & /*wrap*/
      4)
        wrapper_changes.show = /*wrap*/
        ctx2[2];
      if (dirty & /*$$scope, href, $$restProps, liClass*/
      32787) {
        wrapper_changes.$$scope = { dirty, ctx: ctx2 };
      }
      wrapper.$set(wrapper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(wrapper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(wrapper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(wrapper, detaching);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  const omit_props_names = ["defaultClass", "href"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init2(node) {
    var _a;
    $$invalidate(2, wrap = ((_a = node.parentElement) == null ? void 0 : _a.tagName) === "UL");
  }
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
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(16, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("defaultClass" in $$new_props)
      $$invalidate(5, defaultClass = $$new_props.defaultClass);
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("$$scope" in $$new_props)
      $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, liClass = classNames(defaultClass, href ? "block" : "w-full text-left", $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    href,
    liClass,
    wrap,
    init2,
    $$restProps,
    defaultClass,
    slots,
    click_handler,
    change_handler,
    keydown_handler,
    keyup_handler,
    focus_handler,
    blur_handler,
    mouseenter_handler,
    mouseleave_handler,
    $$scope
  ];
}
class DropdownItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { defaultClass: 5, href: 0 });
  }
}
function create_fragment$e(ctx) {
  let footer;
  let footer_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  let footer_levels = [
    /*$$restProps*/
    ctx[2],
    {
      class: footer_class_value = classNames(
        {
          "bg-gray-800": (
            /*footerType*/
            ctx[1] === "sitemap"
          ),
          "p-4 bg-white sm:p-6 dark:bg-gray-800": (
            /*footerType*/
            ctx[1] === "socialmedia"
          ),
          "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800": (
            /*footerType*/
            ctx[1] === "logo"
          ),
          "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800": (
            /*footerType*/
            ctx[1] === "default"
          ),
          [`${/*customClass*/
          ctx[0]}`]: (
            /*footerType*/
            ctx[1] === "custom"
          )
        },
        /*$$props*/
        ctx[3].class
      )
    }
  ];
  let footer_data = {};
  for (let i = 0; i < footer_levels.length; i += 1) {
    footer_data = assign(footer_data, footer_levels[i]);
  }
  return {
    c() {
      footer = element("footer");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      if (default_slot)
        default_slot.l(footer_nodes);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(footer, footer_data);
    },
    m(target, anchor) {
      insert_hydration(target, footer, anchor);
      if (default_slot) {
        default_slot.m(footer, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(footer, footer_data = get_spread_update(footer_levels, [
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*footerType, customClass, $$props*/
        11 && footer_class_value !== (footer_class_value = classNames(
          {
            "bg-gray-800": (
              /*footerType*/
              ctx2[1] === "sitemap"
            ),
            "p-4 bg-white sm:p-6 dark:bg-gray-800": (
              /*footerType*/
              ctx2[1] === "socialmedia"
            ),
            "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800": (
              /*footerType*/
              ctx2[1] === "logo"
            ),
            "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800": (
              /*footerType*/
              ctx2[1] === "default"
            ),
            [`${/*customClass*/
            ctx2[0]}`]: (
              /*footerType*/
              ctx2[1] === "custom"
            )
          },
          /*$$props*/
          ctx2[3].class
        ))) && { class: footer_class_value }
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
        detach(footer);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  const omit_props_names = ["customClass", "footerType"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { customClass = "" } = $$props;
  let { footerType = "default" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("customClass" in $$new_props)
      $$invalidate(0, customClass = $$new_props.customClass);
    if ("footerType" in $$new_props)
      $$invalidate(1, footerType = $$new_props.footerType);
    if ("$$scope" in $$new_props)
      $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [customClass, footerType, $$restProps, $$props, $$scope, slots];
}
class Footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { customClass: 0, footerType: 1 });
  }
}
function create_else_block$5(ctx) {
  let img;
  let img_src_value;
  let img_levels = [
    /*$$restProps*/
    ctx[8],
    { src: img_src_value = /*src*/
    ctx[4] },
    { class: (
      /*imgClass*/
      ctx[2]
    ) },
    { alt: (
      /*alt*/
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
      img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
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
        dirty & /*$$restProps*/
        256 && /*$$restProps*/
        ctx2[8],
        dirty & /*src*/
        16 && !src_url_equal(img.src, img_src_value = /*src*/
        ctx2[4]) && { src: img_src_value },
        dirty & /*imgClass*/
        4 && { class: (
          /*imgClass*/
          ctx2[2]
        ) },
        dirty & /*alt*/
        32 && { alt: (
          /*alt*/
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
function create_if_block$6(ctx) {
  let a;
  let img;
  let img_src_value;
  let t0;
  let span;
  let t1;
  let t2;
  let a_class_value;
  let current;
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
  let a_levels = [
    /*$$restProps*/
    ctx[8],
    { href: (
      /*href*/
      ctx[3]
    ) },
    { target: (
      /*target*/
      ctx[7]
    ) },
    {
      class: a_class_value = classNames(
        /*aClass*/
        ctx[0],
        /*$$props*/
        ctx[9].class
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
      img = element("img");
      t0 = space();
      span = element("span");
      t1 = text(
        /*name*/
        ctx[6]
      );
      t2 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, target: true, class: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
      t0 = claim_space(a_nodes);
      span = claim_element(a_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(
        span_nodes,
        /*name*/
        ctx[6]
      );
      span_nodes.forEach(detach);
      t2 = claim_space(a_nodes);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[4]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "class",
        /*imgClass*/
        ctx[2]
      );
      attr(
        img,
        "alt",
        /*alt*/
        ctx[5]
      );
      attr(
        span,
        "class",
        /*spanClass*/
        ctx[1]
      );
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, img);
      append_hydration(a, t0);
      append_hydration(a, span);
      append_hydration(span, t1);
      append_hydration(a, t2);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*src*/
      16 && !src_url_equal(img.src, img_src_value = /*src*/
      ctx2[4])) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*imgClass*/
      4) {
        attr(
          img,
          "class",
          /*imgClass*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*alt*/
      32) {
        attr(
          img,
          "alt",
          /*alt*/
          ctx2[5]
        );
      }
      if (!current || dirty & /*name*/
      64)
        set_data(
          t1,
          /*name*/
          ctx2[6]
        );
      if (!current || dirty & /*spanClass*/
      2) {
        attr(
          span,
          "class",
          /*spanClass*/
          ctx2[1]
        );
      }
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
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & /*$$restProps*/
        256 && /*$$restProps*/
        ctx2[8],
        (!current || dirty & /*href*/
        8) && { href: (
          /*href*/
          ctx2[3]
        ) },
        (!current || dirty & /*target*/
        128) && { target: (
          /*target*/
          ctx2[7]
        ) },
        (!current || dirty & /*aClass, $$props*/
        513 && a_class_value !== (a_class_value = classNames(
          /*aClass*/
          ctx2[0],
          /*$$props*/
          ctx2[9].class
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
function create_fragment$d(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$6, create_else_block$5];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*href*/
      ctx2[3]
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
function instance$d($$self, $$props, $$invalidate) {
  const omit_props_names = ["aClass", "spanClass", "imgClass", "href", "src", "alt", "name", "target"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { aClass = "flex items-center" } = $$props;
  let { spanClass = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  let { imgClass = "mr-3 h-8" } = $$props;
  let { href = "" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { name = "" } = $$props;
  let { target = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("aClass" in $$new_props)
      $$invalidate(0, aClass = $$new_props.aClass);
    if ("spanClass" in $$new_props)
      $$invalidate(1, spanClass = $$new_props.spanClass);
    if ("imgClass" in $$new_props)
      $$invalidate(2, imgClass = $$new_props.imgClass);
    if ("href" in $$new_props)
      $$invalidate(3, href = $$new_props.href);
    if ("src" in $$new_props)
      $$invalidate(4, src = $$new_props.src);
    if ("alt" in $$new_props)
      $$invalidate(5, alt = $$new_props.alt);
    if ("name" in $$new_props)
      $$invalidate(6, name = $$new_props.name);
    if ("target" in $$new_props)
      $$invalidate(7, target = $$new_props.target);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    target,
    $$restProps,
    $$props,
    $$scope,
    slots
  ];
}
class FooterBrand extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      aClass: 0,
      spanClass: 1,
      imgClass: 2,
      href: 3,
      src: 4,
      alt: 5,
      name: 6,
      target: 7
    });
  }
}
function create_else_block$4(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*by*/
        ctx[4]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*by*/
        ctx[4]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "ml-1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*by*/
      16)
        set_data(
          t,
          /*by*/
          ctx2[4]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block$5(ctx) {
  let a;
  let t;
  let a_levels = [
    /*$$restProps*/
    ctx[8],
    { href: (
      /*href*/
      ctx[3]
    ) },
    { target: (
      /*target*/
      ctx[5]
    ) },
    { class: (
      /*aClass*/
      ctx[1]
    ) }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      t = text(
        /*by*/
        ctx[4]
      );
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, target: true, class: true });
      var a_nodes = children(a);
      t = claim_text(
        a_nodes,
        /*by*/
        ctx[4]
      );
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*by*/
      16)
        set_data(
          t,
          /*by*/
          ctx2[4]
        );
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & /*$$restProps*/
        256 && /*$$restProps*/
        ctx2[8],
        dirty & /*href*/
        8 && { href: (
          /*href*/
          ctx2[3]
        ) },
        dirty & /*target*/
        32 && { target: (
          /*target*/
          ctx2[5]
        ) },
        dirty & /*aClass*/
        2 && { class: (
          /*aClass*/
          ctx2[1]
        ) }
      ]));
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_fragment$c(ctx) {
  let span;
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let span_class_value;
  function select_block_type(ctx2, dirty) {
    if (
      /*href*/
      ctx2[3]
    )
      return create_if_block$5;
    return create_else_block$4;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      span = element("span");
      t0 = text("© ");
      t1 = text(
        /*year*/
        ctx[2]
      );
      t2 = space();
      if_block.c();
      t3 = text("\n  . ");
      t4 = text(
        /*copyrightMessage*/
        ctx[6]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "© ");
      t1 = claim_text(
        span_nodes,
        /*year*/
        ctx[2]
      );
      t2 = claim_space(span_nodes);
      if_block.l(span_nodes);
      t3 = claim_text(span_nodes, "\n  . ");
      t4 = claim_text(
        span_nodes,
        /*copyrightMessage*/
        ctx[6]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = classNames(
        /*spanClass*/
        ctx[0],
        /*$$props*/
        ctx[7].class
      ));
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
      if_block.m(span, null);
      append_hydration(span, t3);
      append_hydration(span, t4);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*year*/
      4)
        set_data(
          t1,
          /*year*/
          ctx2[2]
        );
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(span, t3);
        }
      }
      if (dirty & /*copyrightMessage*/
      64)
        set_data(
          t4,
          /*copyrightMessage*/
          ctx2[6]
        );
      if (dirty & /*spanClass, $$props*/
      129 && span_class_value !== (span_class_value = classNames(
        /*spanClass*/
        ctx2[0],
        /*$$props*/
        ctx2[7].class
      ))) {
        attr(span, "class", span_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      if_block.d();
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = new Date().getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("spanClass" in $$new_props)
      $$invalidate(0, spanClass = $$new_props.spanClass);
    if ("aClass" in $$new_props)
      $$invalidate(1, aClass = $$new_props.aClass);
    if ("year" in $$new_props)
      $$invalidate(2, year = $$new_props.year);
    if ("href" in $$new_props)
      $$invalidate(3, href = $$new_props.href);
    if ("by" in $$new_props)
      $$invalidate(4, by = $$new_props.by);
    if ("target" in $$new_props)
      $$invalidate(5, target = $$new_props.target);
    if ("copyrightMessage" in $$new_props)
      $$invalidate(6, copyrightMessage = $$new_props.copyrightMessage);
  };
  $$props = exclude_internal_props($$props);
  return [
    spanClass,
    aClass,
    year,
    href,
    by,
    target,
    copyrightMessage,
    $$props,
    $$restProps
  ];
}
class FooterCopyright extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      spanClass: 0,
      aClass: 1,
      year: 2,
      href: 3,
      by: 4,
      target: 5,
      copyrightMessage: 6
    });
  }
}
function create_else_block$3(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
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
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
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
function create_if_block$4(ctx) {
  let a;
  let a_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let a_levels = [
    /*$$restProps*/
    ctx[4],
    { href: (
      /*href*/
      ctx[0]
    ) },
    { target: (
      /*target*/
      ctx[3]
    ) },
    { "aria-label": (
      /*ariaLabel*/
      ctx[1]
    ) },
    {
      class: a_class_value = classNames(
        /*aClass*/
        ctx[2],
        /*$$props*/
        ctx[5].class
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
      a = claim_element(nodes, "A", {
        href: true,
        target: true,
        "aria-label": true,
        class: true
      });
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
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        (!current || dirty & /*target*/
        8) && { target: (
          /*target*/
          ctx2[3]
        ) },
        (!current || dirty & /*ariaLabel*/
        2) && { "aria-label": (
          /*ariaLabel*/
          ctx2[1]
        ) },
        (!current || dirty & /*aClass, $$props*/
        36 && a_class_value !== (a_class_value = classNames(
          /*aClass*/
          ctx2[2],
          /*$$props*/
          ctx2[5].class
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
function create_fragment$b(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*href*/
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
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "ariaLabel", "aClass", "target"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  let { ariaLabel = "" } = $$props;
  let { aClass = "text-gray-500 hover:text-gray-900 dark:hover:text-white" } = $$props;
  let { target = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
    if ("aClass" in $$new_props)
      $$invalidate(2, aClass = $$new_props.aClass);
    if ("target" in $$new_props)
      $$invalidate(3, target = $$new_props.target);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [href, ariaLabel, aClass, target, $$restProps, $$props, $$scope, slots];
}
class FooterIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
      href: 0,
      ariaLabel: 1,
      aClass: 2,
      target: 3
    });
  }
}
function create_fragment$a(ctx) {
  let li;
  let a;
  let li_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let a_levels = [
    /*$$restProps*/
    ctx[5],
    { href: (
      /*href*/
      ctx[2]
    ) },
    { class: (
      /*aClass*/
      ctx[1]
    ) },
    { target: (
      /*target*/
      ctx[3]
    ) }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", { href: true, class: true, target: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
      attr(li, "class", li_class_value = classNames(
        /*liClass*/
        ctx[0],
        /*$$props*/
        ctx[4].class
      ));
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        (!current || dirty & /*href*/
        4) && { href: (
          /*href*/
          ctx2[2]
        ) },
        (!current || dirty & /*aClass*/
        2) && { class: (
          /*aClass*/
          ctx2[1]
        ) },
        (!current || dirty & /*target*/
        8) && { target: (
          /*target*/
          ctx2[3]
        ) }
      ]));
      if (!current || dirty & /*liClass, $$props*/
      17 && li_class_value !== (li_class_value = classNames(
        /*liClass*/
        ctx2[0],
        /*$$props*/
        ctx2[4].class
      ))) {
        attr(li, "class", li_class_value);
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
        detach(li);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  const omit_props_names = ["liClass", "aClass", "href", "target"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { liClass = "mr-4 last:mr-0 md:mr-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("liClass" in $$new_props)
      $$invalidate(0, liClass = $$new_props.liClass);
    if ("aClass" in $$new_props)
      $$invalidate(1, aClass = $$new_props.aClass);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("target" in $$new_props)
      $$invalidate(3, target = $$new_props.target);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [liClass, aClass, href, target, $$props, $$restProps, $$scope, slots];
}
class FooterLink extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {
      liClass: 0,
      aClass: 1,
      href: 2,
      target: 3
    });
  }
}
function create_fragment$9(ctx) {
  let ul;
  let ul_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", ul_class_value = classNames(
        /*ulClass*/
        ctx[0],
        /*$$props*/
        ctx[1].class
      ));
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*ulClass, $$props*/
      3 && ul_class_value !== (ul_class_value = classNames(
        /*ulClass*/
        ctx2[0],
        /*$$props*/
        ctx2[1].class
      ))) {
        attr(ul, "class", ul_class_value);
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
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("ulClass" in $$new_props)
      $$invalidate(0, ulClass = $$new_props.ulClass);
    if ("$$scope" in $$new_props)
      $$invalidate(2, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [ulClass, $$props, $$scope, slots];
}
class FooterLinkGroup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { ulClass: 0 });
  }
}
const get_default_slot_changes = (dirty) => ({ hidden: dirty & /*hidden*/
16 });
const get_default_slot_context = (ctx) => ({
  hidden: (
    /*hidden*/
    ctx[4]
  ),
  toggle: (
    /*toggle*/
    ctx[5]
  )
});
function create_default_slot$4(ctx) {
  let div;
  let div_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_default_slot_context
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
      attr(div, "class", div_class_value = classNames(
        /*navDivClass*/
        ctx[1],
        /*fluid*/
        ctx[2] && "container"
      ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, hidden*/
        528)) {
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
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (!current || dirty & /*navDivClass, fluid*/
      6 && div_class_value !== (div_class_value = classNames(
        /*navDivClass*/
        ctx2[1],
        /*fluid*/
        ctx2[2] && "container"
      ))) {
        attr(div, "class", div_class_value);
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
function create_fragment$8(ctx) {
  let frame;
  let current;
  const frame_spread_levels = [
    { tag: "nav" },
    { color: (
      /*color*/
      ctx[3]
    ) },
    /*$$restProps*/
    ctx[6],
    {
      class: classNames(
        /*navClass*/
        ctx[0],
        /*$$props*/
        ctx[7].class
      )
    }
  ];
  let frame_props = {
    $$slots: { default: [create_default_slot$4] },
    $$scope: { ctx }
  };
  for (let i = 0; i < frame_spread_levels.length; i += 1) {
    frame_props = assign(frame_props, frame_spread_levels[i]);
  }
  frame = new Frame({ props: frame_props });
  return {
    c() {
      create_component(frame.$$.fragment);
    },
    l(nodes) {
      claim_component(frame.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(frame, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const frame_changes = dirty & /*color, $$restProps, classNames, navClass, $$props*/
      201 ? get_spread_update(frame_spread_levels, [
        frame_spread_levels[0],
        dirty & /*color*/
        8 && { color: (
          /*color*/
          ctx2[3]
        ) },
        dirty & /*$$restProps*/
        64 && get_spread_object(
          /*$$restProps*/
          ctx2[6]
        ),
        dirty & /*classNames, navClass, $$props*/
        129 && {
          class: classNames(
            /*navClass*/
            ctx2[0],
            /*$$props*/
            ctx2[7].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope, navDivClass, fluid, hidden*/
      534) {
        frame_changes.$$scope = { dirty, ctx: ctx2 };
      }
      frame.$set(frame_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(frame, detaching);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = ["navClass", "navDivClass", "fluid", "color"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = true } = $$props;
  let { color = "navbar" } = $$props;
  let hidden = true;
  let toggle = () => {
    $$invalidate(4, hidden = !hidden);
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("navClass" in $$new_props)
      $$invalidate(0, navClass = $$new_props.navClass);
    if ("navDivClass" in $$new_props)
      $$invalidate(1, navDivClass = $$new_props.navDivClass);
    if ("fluid" in $$new_props)
      $$invalidate(2, fluid = $$new_props.fluid);
    if ("color" in $$new_props)
      $$invalidate(3, color = $$new_props.color);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    navClass,
    navDivClass,
    fluid,
    color,
    hidden,
    toggle,
    $$restProps,
    $$props,
    slots,
    $$scope
  ];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      navClass: 0,
      navDivClass: 1,
      fluid: 2,
      color: 3
    });
  }
}
function create_fragment$7(ctx) {
  let a;
  let a_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  let a_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[1],
    {
      class: a_class_value = classNames(
        "flex items-center",
        /*$$props*/
        ctx[2].class
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
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        (!current || dirty & /*$$props*/
        4 && a_class_value !== (a_class_value = classNames(
          "flex items-center",
          /*$$props*/
          ctx2[2].class
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
  const omit_props_names = ["href"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [href, $$restProps, $$props, $$scope, slots];
}
class NavBrand extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { href: 0 });
  }
}
function create_if_block$3(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*name*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*name*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*name*/
      1)
        set_data(
          t,
          /*name*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block(ctx) {
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
      attr(path, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", svg_class_value = /*svgSizes*/
      ctx[4][
        /*size*/
        ctx[2]
      ]);
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p(ctx2, dirty) {
      if (dirty & /*size*/
      4 && svg_class_value !== (svg_class_value = /*svgSizes*/
      ctx2[4][
        /*size*/
        ctx2[2]
      ])) {
        attr(svg, "class", svg_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment$6(ctx) {
  let button;
  let t;
  let button_aria_label_value;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*name*/
    ctx[0] && create_if_block$3(ctx)
  );
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
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  let button_levels = [
    { type: "button" },
    /*$$restProps*/
    ctx[5],
    { class: (
      /*buttonClass*/
      ctx[3]
    ) },
    {
      "aria-label": button_aria_label_value = /*ariaLabel*/
      ctx[1] ?? /*name*/
      ctx[0]
    }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        class: true,
        "aria-label": true
      });
      var button_nodes = children(button);
      if (if_block)
        if_block.l(button_nodes);
      t = claim_space(button_nodes);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      append_hydration(button, t);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*name*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
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
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*size*/
        4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { type: "button" },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        (!current || dirty & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          ctx2[3]
        ) },
        (!current || dirty & /*ariaLabel, name*/
        3 && button_aria_label_value !== (button_aria_label_value = /*ariaLabel*/
        ctx2[1] ?? /*name*/
        ctx2[0])) && { "aria-label": button_aria_label_value }
      ]));
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
      if (detaching)
        detach(button);
      if (if_block)
        if_block.d();
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  const omit_props_names = ["color", "name", "ariaLabel", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    default: "hover:text-gray-900 hover:bg-gray-100 text-gray-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300"
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(6, color = $$new_props.color);
    if ("name" in $$new_props)
      $$invalidate(0, name = $$new_props.name);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(3, buttonClass = classNames(
      "focus:outline-none whitespace-normal",
      sizing[size],
      colors[color],
      color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    name,
    ariaLabel,
    size,
    buttonClass,
    svgSizes,
    $$restProps,
    color,
    $$scope,
    slots,
    click_handler
  ];
}
class ToolbarButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { color: 6, name: 0, ariaLabel: 1, size: 2 });
  }
}
function create_fragment$5(ctx) {
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
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H3.75C3.33579 18 3 17.6642 3 17.25Z" fill="${color}"/> `;
  let { ariaLabel = "bars 3" } = $$props;
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
class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
function create_default_slot$3(ctx) {
  let menu;
  let current;
  menu = new Menu({ props: { class: "h-6 w-6 shrink-0" } });
  return {
    c() {
      create_component(menu.$$.fragment);
    },
    l(nodes) {
      claim_component(menu.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(menu, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(menu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(menu, detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let toolbarbutton;
  let current;
  const toolbarbutton_spread_levels = [
    { name: "Open main menu" },
    /*$$restProps*/
    ctx[1],
    {
      class: classNames(
        /*btnClass*/
        ctx[0],
        /*$$props*/
        ctx[2].class
      )
    }
  ];
  let toolbarbutton_props = {
    $$slots: { default: [create_default_slot$3] },
    $$scope: { ctx }
  };
  for (let i = 0; i < toolbarbutton_spread_levels.length; i += 1) {
    toolbarbutton_props = assign(toolbarbutton_props, toolbarbutton_spread_levels[i]);
  }
  toolbarbutton = new ToolbarButton({ props: toolbarbutton_props });
  toolbarbutton.$on(
    "click",
    /*click_handler*/
    ctx[3]
  );
  return {
    c() {
      create_component(toolbarbutton.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbarbutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbarbutton, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const toolbarbutton_changes = dirty & /*$$restProps, classNames, btnClass, $$props*/
      7 ? get_spread_update(toolbarbutton_spread_levels, [
        toolbarbutton_spread_levels[0],
        dirty & /*$$restProps*/
        2 && get_spread_object(
          /*$$restProps*/
          ctx2[1]
        ),
        dirty & /*classNames, btnClass, $$props*/
        5 && {
          class: classNames(
            /*btnClass*/
            ctx2[0],
            /*$$props*/
            ctx2[2].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope*/
      16) {
        toolbarbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbarbutton.$set(toolbarbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbarbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarbutton, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["btnClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("btnClass" in $$new_props)
      $$invalidate(0, btnClass = $$new_props.btnClass);
  };
  $$props = exclude_internal_props($$props);
  return [btnClass, $$restProps, $$props, click_handler];
}
class NavHamburger extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { btnClass: 0 });
  }
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let svelte_element_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[2],
    { class: (
      /*liClass*/
      ctx[1]
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
        ctx[0] ? "a" : "div"
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[0] ? "a" : "div") || "null").toUpperCase(),
        { href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*href*/
        ctx[0] ? "a" : "div"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "blur",
            /*blur_handler*/
            ctx[8]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[9]
          ),
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "focus",
            /*focus_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "keypress",
            /*keypress_handler*/
            ctx[13]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "mouseover",
            /*mouseover_handler*/
            ctx[17]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*liClass*/
        2) && { class: (
          /*liClass*/
          ctx2[1]
        ) }
      ]);
      if (/-/.test(
        /*href*/
        ctx2[0] ? "a" : "div"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
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
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$3(ctx) {
  let li;
  let previous_tag = (
    /*href*/
    ctx[0] ? "a" : "div"
  );
  let current;
  let svelte_element = (
    /*href*/
    (ctx[0] ? "a" : "div") && create_dynamic_element(ctx)
  );
  return {
    c() {
      li = element("li");
      if (svelte_element)
        svelte_element.c();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      if (svelte_element)
        svelte_element.l(li_nodes);
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      if (svelte_element)
        svelte_element.m(li, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*href*/
        ctx2[0] ? "a" : "div"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(li, null);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[0] ? "a" : "div"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(li, null);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*href*/
      ctx2[0] ? "a" : "div";
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
        detach(li);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "active", "activeClass", "nonActiveClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  let liClass;
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("active" in $$new_props)
      $$invalidate(3, active = $$new_props.active);
    if ("activeClass" in $$new_props)
      $$invalidate(4, activeClass = $$new_props.activeClass);
    if ("nonActiveClass" in $$new_props)
      $$invalidate(5, nonActiveClass = $$new_props.nonActiveClass);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, liClass = classNames("block py-2 pr-4 pl-3 md:p-0 rounded md:border-0", active ? activeClass : nonActiveClass, $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    href,
    liClass,
    $$restProps,
    active,
    activeClass,
    nonActiveClass,
    $$scope,
    slots,
    blur_handler,
    change_handler,
    click_handler,
    focus_handler,
    keydown_handler,
    keypress_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler,
    mouseover_handler
  ];
}
class NavLi extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      href: 0,
      active: 3,
      activeClass: 4,
      nonActiveClass: 5
    });
  }
}
function create_else_block$2(ctx) {
  let div;
  let ul;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    null
  );
  let div_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*_divClass*/
      ctx[2]
    ) },
    { hidden: (
      /*hidden*/
      ctx[0]
    ) }
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      ul = claim_element(div_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        ul,
        "class",
        /*_ulClass*/
        ctx[3]
      );
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, ul);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        256)) {
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
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*_ulClass*/
      8) {
        attr(
          ul,
          "class",
          /*_ulClass*/
          ctx2[3]
        );
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*_divClass*/
        4) && { class: (
          /*_divClass*/
          ctx2[2]
        ) },
        (!current || dirty & /*hidden*/
        1) && { hidden: (
          /*hidden*/
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let frame;
  let div_transition;
  let current;
  frame = new Frame({
    props: {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: (
        /*_ulClass*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  let div_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*_divClass*/
      ctx[2]
    ) }
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      create_component(frame.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(frame.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(frame, div, null);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const frame_changes = {};
      if (dirty & /*_ulClass*/
      8)
        frame_changes.class = /*_ulClass*/
        ctx[3];
      if (dirty & /*$$scope*/
      256) {
        frame_changes.$$scope = { dirty, ctx };
      }
      frame.$set(frame_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx[4],
        (!current || dirty & /*_divClass*/
        4) && { class: (
          /*_divClass*/
          ctx[2]
        ) }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(
            div,
            slide,
            /*slideParams*/
            ctx[1],
            true
          );
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      if (!div_transition)
        div_transition = create_bidirectional_transition(
          div,
          slide,
          /*slideParams*/
          ctx[1],
          false
        );
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(frame);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_default_slot$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
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
        256)) {
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
function create_fragment$2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*hidden*/
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
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["divClass", "ulClass", "hidden", "slideParams"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let _divClass;
  let _ulClass;
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("divClass" in $$new_props)
      $$invalidate(5, divClass = $$new_props.divClass);
    if ("ulClass" in $$new_props)
      $$invalidate(6, ulClass = $$new_props.ulClass);
    if ("hidden" in $$new_props)
      $$invalidate(0, hidden = $$new_props.hidden);
    if ("slideParams" in $$new_props)
      $$invalidate(1, slideParams = $$new_props.slideParams);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(2, _divClass = classNames(divClass, $$props.class));
    $$invalidate(3, _ulClass = classNames(
      ulClass,
      // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    hidden,
    slideParams,
    _divClass,
    _ulClass,
    $$restProps,
    divClass,
    ulClass,
    slots,
    $$scope
  ];
}
class NavUl extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      divClass: 5,
      ulClass: 6,
      hidden: 0,
      slideParams: 1
    });
  }
}
function create_else_block$1(ctx) {
  let t;
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  var switch_value = (
    /*icon*/
    ctx[2]
  );
  function switch_props(ctx2) {
    return { props: { class: "h-4 w-4 ml-2" } };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      if (default_slot)
        default_slot.c();
      t = space();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
      t = claim_space(nodes);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (switch_value !== (switch_value = /*icon*/
      ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let chevronleft;
  let t;
  let current;
  chevronleft = new ChevronLeft({ props: { class: "h-4 w-4 mr-2" } });
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      create_component(chevronleft.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(chevronleft.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(chevronleft, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
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
      transition_in(chevronleft.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(chevronleft.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(chevronleft, detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let show_if;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (dirty & /*placement*/
    1)
      show_if = null;
    if (show_if == null)
      show_if = !!/*placement*/
      (ctx2[0].split("-")[0] === "left");
    if (show_if)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
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
      current_block_type_index = select_block_type(ctx2, dirty);
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
function create_fragment$1(ctx) {
  let wrapper;
  let current;
  wrapper = new Wrapper({
    props: {
      class: "flex items-center justify-between",
      show: (
        /*aligned*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(wrapper.$$.fragment);
    },
    l(nodes) {
      claim_component(wrapper.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(wrapper, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const wrapper_changes = {};
      if (dirty & /*aligned*/
      2)
        wrapper_changes.show = /*aligned*/
        ctx2[1];
      if (dirty & /*$$scope, placement, icon*/
      21) {
        wrapper_changes.$$scope = { dirty, ctx: ctx2 };
      }
      wrapper.$set(wrapper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(wrapper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(wrapper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(wrapper, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { placement = "bottom" } = $$props;
  let { aligned = false } = $$props;
  const icons = {
    top: ChevronUp,
    right: ChevronRight,
    bottom: ChevronDown,
    left: ChevronLeft
  };
  let icon;
  $$self.$$set = ($$props2) => {
    if ("placement" in $$props2)
      $$invalidate(0, placement = $$props2.placement);
    if ("aligned" in $$props2)
      $$invalidate(1, aligned = $$props2.aligned);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*placement*/
    1) {
      $$invalidate(2, icon = icons[placement.split("-")[0]] ?? ChevronDown);
    }
  };
  return [placement, aligned, icon, slots, $$scope];
}
class Chevron extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { placement: 0, aligned: 1 });
  }
}
const splitArrayIntoPairs = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr.slice(i, i + 2));
  }
  return result;
};
const _layout_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}
function create_default_slot_17(ctx) {
  let img;
  let img_src_value;
  let t0;
  let span;
  let t1;
  return {
    c() {
      img = element("img");
      t0 = space();
      span = element("span");
      t1 = text("Trailer Park");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
      t0 = claim_space(nodes);
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Trailer Park");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = logo))
        attr(img, "src", img_src_value);
      attr(img, "class", "mr-3 h-6 sm:h-9");
      attr(img, "alt", "Flowbite Logo");
      attr(span, "class", "self-center whitespace-nowrap text-xl font-semibold dark:text-white");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, span, anchor);
      append_hydration(span, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(img);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block(ctx) {
  let navli;
  let current;
  navli = new NavLi({
    props: {
      href: (
        /*nav_item*/
        ctx[20].toLowerCase()
      ),
      $$slots: { default: [create_default_slot_16] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navli.$$.fragment);
    },
    l(nodes) {
      claim_component(navli.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navli, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const navli_changes = {};
      if (dirty & /*$$scope*/
      32) {
        navli_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli.$set(navli_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navli.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navli.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navli, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let navli;
  let current;
  navli = new NavLi({
    props: {
      id: "country",
      "data-sveltekit-prefetch": true,
      class: "cursor-pointer",
      $$slots: { default: [create_default_slot_14] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navli.$$.fragment);
    },
    l(nodes) {
      claim_component(navli.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navli, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const navli_changes = {};
      if (dirty & /*$$scope*/
      32) {
        navli_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli.$set(navli_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navli.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navli.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navli, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let navli;
  let current;
  navli = new NavLi({
    props: {
      id: "genre",
      "data-sveltekit-prefetch": true,
      class: "cursor-pointer",
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navli.$$.fragment);
    },
    l(nodes) {
      claim_component(navli.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navli, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const navli_changes = {};
      if (dirty & /*$$scope*/
      32) {
        navli_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli.$set(navli_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navli.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navli.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navli, detaching);
    }
  };
}
function create_if_block(ctx) {
  let navli;
  let current;
  navli = new NavLi({
    props: {
      href: "/home",
      active: true,
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navli.$$.fragment);
    },
    l(nodes) {
      claim_component(navli.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navli, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const navli_changes = {};
      if (dirty & /*$$scope*/
      32) {
        navli_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli.$set(navli_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navli.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navli.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navli, detaching);
    }
  };
}
function create_default_slot_16(ctx) {
  let t_value = (
    /*nav_item*/
    ctx[20] + ""
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
function create_default_slot_15(ctx) {
  let t_value = (
    /*nav_item*/
    ctx[20] + ""
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
function create_default_slot_14(ctx) {
  let chevron;
  let current;
  chevron = new Chevron({
    props: {
      aligned: true,
      $$slots: { default: [create_default_slot_15] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(chevron.$$.fragment);
    },
    l(nodes) {
      claim_component(chevron.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(chevron, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const chevron_changes = {};
      if (dirty & /*$$scope*/
      32) {
        chevron_changes.$$scope = { dirty, ctx: ctx2 };
      }
      chevron.$set(chevron_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(chevron.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevron.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(chevron, detaching);
    }
  };
}
function create_default_slot_13(ctx) {
  let t_value = (
    /*nav_item*/
    ctx[20] + ""
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
function create_default_slot_12(ctx) {
  let chevron;
  let current;
  chevron = new Chevron({
    props: {
      aligned: true,
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(chevron.$$.fragment);
    },
    l(nodes) {
      claim_component(chevron.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(chevron, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const chevron_changes = {};
      if (dirty & /*$$scope*/
      32) {
        chevron_changes.$$scope = { dirty, ctx: ctx2 };
      }
      chevron.$set(chevron_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(chevron.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevron.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(chevron, detaching);
    }
  };
}
function create_default_slot_11(ctx) {
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
function create_each_block_4(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*nav_item*/
      ctx2[20].toLowerCase() == "home"
    )
      return 0;
    if (["genre"].includes(
      /*nav_item*/
      ctx2[20].toLowerCase()
    ))
      return 1;
    if (["country"].includes(
      /*nav_item*/
      ctx2[20].toLowerCase()
    ))
      return 2;
    return 3;
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
      if_block.p(ctx2, dirty);
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
function create_default_slot_10(ctx) {
  let t_value = (
    /*genre*/
    ctx[17].name + ""
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
function create_each_block_3(ctx) {
  let a;
  let dropdownitem;
  let t;
  let current;
  dropdownitem = new DropdownItem({
    props: {
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      a = element("a");
      create_component(dropdownitem.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      claim_component(dropdownitem.$$.fragment, a_nodes);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      mount_component(dropdownitem, a, null);
      append_hydration(a, t);
      current = true;
    },
    p(ctx2, dirty) {
      const dropdownitem_changes = {};
      if (dirty & /*$$scope*/
      32) {
        dropdownitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropdownitem.$set(dropdownitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(dropdownitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dropdownitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      destroy_component(dropdownitem);
    }
  };
}
function create_default_slot_9(ctx) {
  let each_1_anchor;
  let current;
  let each_value_3 = (
    /*genres*/
    ctx[2]
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
      if (dirty & /*genres*/
      4) {
        each_value_3 = /*genres*/
        ctx2[2];
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
function create_default_slot_8(ctx) {
  let t_value = (
    /*country*/
    ctx[14].english_name + ""
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
      if (dirty & /*countries*/
      1 && t_value !== (t_value = /*country*/
      ctx2[14].english_name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(ctx) {
  let a;
  let dropdownitem;
  let t;
  let current;
  dropdownitem = new DropdownItem({
    props: {
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      a = element("a");
      create_component(dropdownitem.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      claim_component(dropdownitem.$$.fragment, a_nodes);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      mount_component(dropdownitem, a, null);
      append_hydration(a, t);
      current = true;
    },
    p(ctx2, dirty) {
      const dropdownitem_changes = {};
      if (dirty & /*$$scope, countries*/
      33) {
        dropdownitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropdownitem.$set(dropdownitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(dropdownitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dropdownitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      destroy_component(dropdownitem);
    }
  };
}
function create_default_slot_7(ctx) {
  let each_1_anchor;
  let current;
  let each_value_2 = (
    /*countries*/
    ctx[0]
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
      if (dirty & /*countries*/
      1) {
        each_value_2 = /*countries*/
        ctx2[0];
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
function create_default_slot_6(ctx) {
  let t0;
  let dropdown0;
  let t1;
  let dropdown1;
  let current;
  let each_value_4 = navTabs;
  let each_blocks = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  dropdown0 = new Dropdown({
    props: {
      triggeredBy: "#genre",
      class: "w-44 z-20",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  dropdown1 = new Dropdown({
    props: {
      triggeredBy: "#country",
      class: "w-44 z-20",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      create_component(dropdown0.$$.fragment);
      t1 = space();
      create_component(dropdown1.$$.fragment);
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      t0 = claim_space(nodes);
      claim_component(dropdown0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(dropdown1.$$.fragment, nodes);
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, t0, anchor);
      mount_component(dropdown0, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(dropdown1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*navTabs*/
      0) {
        each_value_4 = navTabs;
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_4(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t0.parentNode, t0);
          }
        }
        group_outros();
        for (i = each_value_4.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const dropdown0_changes = {};
      if (dirty & /*$$scope*/
      32) {
        dropdown0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropdown0.$set(dropdown0_changes);
      const dropdown1_changes = {};
      if (dirty & /*$$scope, countries*/
      33) {
        dropdown1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropdown1.$set(dropdown1_changes);
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_4.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(dropdown0.$$.fragment, local);
      transition_in(dropdown1.$$.fragment, local);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(dropdown0.$$.fragment, local);
      transition_out(dropdown1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t0);
      destroy_component(dropdown0, detaching);
      if (detaching)
        detach(t1);
      destroy_component(dropdown1, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let navbrand;
  let t0;
  let navhamburger;
  let t1;
  let navul;
  let t2;
  let darkmode;
  let current;
  navbrand = new NavBrand({
    props: {
      href: "/",
      $$slots: { default: [create_default_slot_17] },
      $$scope: { ctx }
    }
  });
  navhamburger = new NavHamburger({});
  navhamburger.$on("click", function() {
    if (is_function(
      /*toggle*/
      ctx[13]
    ))
      ctx[13].apply(this, arguments);
  });
  navul = new NavUl({
    props: {
      hidden: (
        /*hidden*/
        ctx[12]
      ),
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  darkmode = new DarkMode({});
  return {
    c() {
      create_component(navbrand.$$.fragment);
      t0 = space();
      create_component(navhamburger.$$.fragment);
      t1 = space();
      create_component(navul.$$.fragment);
      t2 = space();
      create_component(darkmode.$$.fragment);
    },
    l(nodes) {
      claim_component(navbrand.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(navhamburger.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(navul.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(darkmode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navbrand, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(navhamburger, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(navul, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(darkmode, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const navbrand_changes = {};
      if (dirty & /*$$scope*/
      32) {
        navbrand_changes.$$scope = { dirty, ctx };
      }
      navbrand.$set(navbrand_changes);
      const navul_changes = {};
      if (dirty & /*hidden*/
      4096)
        navul_changes.hidden = /*hidden*/
        ctx[12];
      if (dirty & /*$$scope, countries*/
      33) {
        navul_changes.$$scope = { dirty, ctx };
      }
      navul.$set(navul_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navbrand.$$.fragment, local);
      transition_in(navhamburger.$$.fragment, local);
      transition_in(navul.$$.fragment, local);
      transition_in(darkmode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbrand.$$.fragment, local);
      transition_out(navhamburger.$$.fragment, local);
      transition_out(navul.$$.fragment, local);
      transition_out(darkmode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbrand, detaching);
      if (detaching)
        detach(t0);
      destroy_component(navhamburger, detaching);
      if (detaching)
        detach(t1);
      destroy_component(navul, detaching);
      if (detaching)
        detach(t2);
      destroy_component(darkmode, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let t_value = (
    /*link*/
    ctx[9].label + ""
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
function create_each_block_1(ctx) {
  let footerlink;
  let current;
  footerlink = new FooterLink({
    props: {
      liClass: "mb-4",
      href: (
        /*link*/
        ctx[9].path
      ),
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(footerlink.$$.fragment);
    },
    l(nodes) {
      claim_component(footerlink.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(footerlink, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const footerlink_changes = {};
      if (dirty & /*$$scope*/
      32) {
        footerlink_changes.$$scope = { dirty, ctx: ctx2 };
      }
      footerlink.$set(footerlink_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(footerlink.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(footerlink.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(footerlink, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = (
    /*pair*/
    ctx[6]
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
      if (dirty & /*pairs*/
      2) {
        each_value_1 = /*pair*/
        ctx2[6];
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
function create_each_block(ctx) {
  let div;
  let footerlinkgroup;
  let t;
  let current;
  footerlinkgroup = new FooterLinkGroup({
    props: {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(footerlinkgroup.$$.fragment);
      t = space();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      claim_component(footerlinkgroup.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(footerlinkgroup, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const footerlinkgroup_changes = {};
      if (dirty & /*$$scope*/
      32) {
        footerlinkgroup_changes.$$scope = { dirty, ctx: ctx2 };
      }
      footerlinkgroup.$set(footerlinkgroup_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(footerlinkgroup.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(footerlinkgroup.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(footerlinkgroup);
    }
  };
}
function create_default_slot_2(ctx) {
  let svg;
  let path;
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
        "aria-hidden": true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "aria-hidden", "true");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_default_slot_1(ctx) {
  let svg;
  let path;
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
        "aria-hidden": true
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
      attr(path, "d", "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "aria-hidden", "true");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_default_slot(ctx) {
  let div2;
  let div0;
  let footerbrand;
  let t0;
  let div1;
  let t1;
  let hr;
  let t2;
  let div4;
  let footercopyright;
  let t3;
  let div3;
  let footericon0;
  let t4;
  let footericon1;
  let current;
  footerbrand = new FooterBrand({
    props: {
      href: "/",
      src: logo,
      alt: "Logo",
      name: "Trailer Park"
    }
  });
  let each_value = (
    /*pairs*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  footercopyright = new FooterCopyright({ props: { href: "/", by: "Mugendi" } });
  footericon0 = new FooterIcon({
    props: {
      target: "_blank",
      href: "https://twitter.com/MugendiNjue3",
      class: "text-gray-400 hover:text-gray-900",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  footericon1 = new FooterIcon({
    props: {
      target: "_blank",
      href: "https://github.com/mugendinjue",
      class: "text-gray-400 hover:text-gray-900",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      create_component(footerbrand.$$.fragment);
      t0 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      hr = element("hr");
      t2 = space();
      div4 = element("div");
      create_component(footercopyright.$$.fragment);
      t3 = space();
      div3 = element("div");
      create_component(footericon0.$$.fragment);
      t4 = space();
      create_component(footericon1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(footerbrand.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t1 = claim_space(nodes);
      hr = claim_element(nodes, "HR", { class: true });
      t2 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      claim_component(footercopyright.$$.fragment, div4_nodes);
      t3 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(footericon0.$$.fragment, div3_nodes);
      t4 = claim_space(div3_nodes);
      claim_component(footericon1.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "mb-4 md:mb-0");
      attr(div1, "class", "mb-6 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3");
      attr(div2, "class", "md:flex md:justify-between");
      attr(hr, "class", "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8");
      attr(div3, "class", "flex mt-4 space-x-6 sm:justify-center sm:mt-0");
      attr(div4, "class", "sm:flex sm:items-center sm:justify-between");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      mount_component(footerbrand, div0, null);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      insert_hydration(target, t1, anchor);
      insert_hydration(target, hr, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div4, anchor);
      mount_component(footercopyright, div4, null);
      append_hydration(div4, t3);
      append_hydration(div4, div3);
      mount_component(footericon0, div3, null);
      append_hydration(div3, t4);
      mount_component(footericon1, div3, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*pairs*/
      2) {
        each_value = /*pairs*/
        ctx2[1];
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
            each_blocks[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const footericon0_changes = {};
      if (dirty & /*$$scope*/
      32) {
        footericon0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      footericon0.$set(footericon0_changes);
      const footericon1_changes = {};
      if (dirty & /*$$scope*/
      32) {
        footericon1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      footericon1.$set(footericon1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(footerbrand.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(footercopyright.$$.fragment, local);
      transition_in(footericon0.$$.fragment, local);
      transition_in(footericon1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(footerbrand.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(footercopyright.$$.fragment, local);
      transition_out(footericon0.$$.fragment, local);
      transition_out(footericon1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(footerbrand);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(hr);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div4);
      destroy_component(footercopyright);
      destroy_component(footericon0);
      destroy_component(footericon1);
    }
  };
}
function create_fragment(ctx) {
  let navbar;
  let t0;
  let t1;
  let div;
  let footer;
  let current;
  navbar = new Navbar({
    props: {
      rounded: true,
      color: "form",
      $$slots: {
        default: [
          create_default_slot_5,
          ({ hidden, toggle }) => ({ 12: hidden, 13: toggle }),
          ({ hidden, toggle }) => (hidden ? 4096 : 0) | (toggle ? 8192 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  footer = new Footer({
    props: {
      footerType: "socialmedia",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navbar.$$.fragment);
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      div = element("div");
      create_component(footer.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(navbar.$$.fragment, nodes);
      t0 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(footer.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "footer svelte-1kukbnd");
    },
    m(target, anchor) {
      mount_component(navbar, target, anchor);
      insert_hydration(target, t0, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      mount_component(footer, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const navbar_changes = {};
      if (dirty & /*$$scope, hidden, countries, toggle*/
      12321) {
        navbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navbar.$set(navbar_changes);
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
      const footer_changes = {};
      if (dirty & /*$$scope*/
      32) {
        footer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      footer.$set(footer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbar, detaching);
      if (detaching)
        detach(t0);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_component(footer);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { data } = $$props;
  let pairs = splitArrayIntoPairs(QuickLinks);
  let { genres: { genres }, countries } = data;
  countries = countries.slice(0, 10);
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(3, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [countries, pairs, genres, data, slots, $$scope];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 3 });
  }
}
export {
  Layout as default
};
