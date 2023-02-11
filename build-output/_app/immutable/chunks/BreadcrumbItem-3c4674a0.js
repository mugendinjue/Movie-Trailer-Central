import { S as SvelteComponent, i as init, s as safe_not_equal, I as create_slot, F as assign, k as element, l as claim_element, m as children, h as detach, n as attr, K as set_attributes, b as insert_hydration, _ as append_hydration, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update, f as transition_in, t as transition_out, D as compute_rest_props, G as exclude_internal_props, g as group_outros, d as check_outros, a3 as compute_slots, a as space, e as empty, c as claim_space, W as svg_element, X as claim_svg_element, C as noop } from "./index-68b73dd3.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
function create_fragment$1(ctx) {
  let nav;
  let ol;
  let ol_class_value;
  let nav_class_value;
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
  let nav_levels = [
    { "aria-label": "Breadcrumb" },
    /*$$restProps*/
    ctx[2],
    {
      class: nav_class_value = classNames(
        /*classNav*/
        ctx[1],
        /*$$props*/
        ctx[3].class
      )
    }
  ];
  let nav_data = {};
  for (let i = 0; i < nav_levels.length; i += 1) {
    nav_data = assign(nav_data, nav_levels[i]);
  }
  return {
    c() {
      nav = element("nav");
      ol = element("ol");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { "aria-label": true, class: true });
      var nav_nodes = children(nav);
      ol = claim_element(nav_nodes, "OL", { class: true });
      var ol_nodes = children(ol);
      if (default_slot)
        default_slot.l(ol_nodes);
      ol_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ol, "class", ol_class_value = classNames(
        /*olClass*/
        ctx[0],
        /*$$props*/
        ctx[3].classOl
      ));
      set_attributes(nav, nav_data);
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, ol);
      if (default_slot) {
        default_slot.m(ol, null);
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
      if (!current || dirty & /*olClass, $$props*/
      9 && ol_class_value !== (ol_class_value = classNames(
        /*olClass*/
        ctx2[0],
        /*$$props*/
        ctx2[3].classOl
      ))) {
        attr(ol, "class", ol_class_value);
      }
      set_attributes(nav, nav_data = get_spread_update(nav_levels, [
        { "aria-label": "Breadcrumb" },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*$$props*/
        8 && nav_class_value !== (nav_class_value = classNames(
          /*classNav*/
          ctx2[1],
          /*$$props*/
          ctx2[3].class
        ))) && { class: nav_class_value }
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
        detach(nav);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = ["solid", "navClass", "solidClass", "olClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 md:space-x-3" } = $$props;
  let classNav = solid ? solidClass : navClass;
  $$self.$$set = ($$new_props) => {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("solid" in $$new_props)
      $$invalidate(4, solid = $$new_props.solid);
    if ("navClass" in $$new_props)
      $$invalidate(5, navClass = $$new_props.navClass);
    if ("solidClass" in $$new_props)
      $$invalidate(6, solidClass = $$new_props.solidClass);
    if ("olClass" in $$new_props)
      $$invalidate(0, olClass = $$new_props.olClass);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    olClass,
    classNav,
    $$restProps,
    $$props,
    solid,
    navClass,
    solidClass,
    $$scope,
    slots
  ];
}
class Breadcrumb extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      solid: 4,
      navClass: 5,
      solidClass: 6,
      olClass: 0
    });
  }
}
const get_icon_slot_changes_1 = (dirty) => ({});
const get_icon_slot_context_1 = (ctx) => ({});
const get_icon_slot_changes = (dirty) => ({});
const get_icon_slot_context = (ctx) => ({});
function create_else_block_1(ctx) {
  let current_block_type_index;
  let if_block0;
  let t;
  let current_block_type_index_1;
  let if_block1;
  let if_block1_anchor;
  let current;
  const if_block_creators = [create_if_block_3, create_else_block_3];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (
      /*$$slots*/
      ctx2[6].icon
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const if_block_creators_1 = [create_if_block_2, create_else_block_2];
  const if_blocks_1 = [];
  function select_block_type_3(ctx2, dirty) {
    if (
      /*href*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_3(ctx);
  if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  return {
    c() {
      if_block0.c();
      t = space();
      if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      if_block0.l(nodes);
      t = claim_space(nodes);
      if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, t, anchor);
      if_blocks_1[current_block_type_index_1].m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
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
        if_block0.m(t.parentNode, t);
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_3(ctx2);
      if (current_block_type_index_1 === previous_block_index_1) {
        if_blocks_1[current_block_type_index_1].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
          if_blocks_1[previous_block_index_1] = null;
        });
        check_outros();
        if_block1 = if_blocks_1[current_block_type_index_1];
        if (!if_block1) {
          if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t);
      if_blocks_1[current_block_type_index_1].d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_if_block(ctx) {
  let a;
  let current_block_type_index;
  let if_block;
  let t;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*$$slots*/
      ctx2[6].icon
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      a = element("a");
      if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      if_block.l(a_nodes);
      t = claim_space(a_nodes);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "class",
        /*homeClass*/
        ctx[4]
      );
      attr(
        a,
        "href",
        /*href*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if_blocks[current_block_type_index].m(a, null);
      append_hydration(a, t);
      if (default_slot) {
        default_slot.m(a, null);
      }
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
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(a, t);
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
      }
      if (!current || dirty & /*homeClass*/
      16) {
        attr(
          a,
          "class",
          /*homeClass*/
          ctx2[4]
        );
      }
      if (!current || dirty & /*href*/
      2) {
        attr(
          a,
          "href",
          /*href*/
          ctx2[1]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if_blocks[current_block_type_index].d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_else_block_3(ctx) {
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
      attr(path, "d", "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", "w-6 h-6 text-gray-400");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_3(ctx) {
  let current;
  const icon_slot_template = (
    /*#slots*/
    ctx[8].icon
  );
  const icon_slot = create_slot(
    icon_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_icon_slot_context_1
  );
  return {
    c() {
      if (icon_slot)
        icon_slot.c();
    },
    l(nodes) {
      if (icon_slot)
        icon_slot.l(nodes);
    },
    m(target, anchor) {
      if (icon_slot) {
        icon_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            icon_slot,
            icon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              icon_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              get_icon_slot_changes_1
            ),
            get_icon_slot_context_1
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_else_block_2(ctx) {
  let span;
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
        /*spanClass*/
        ctx[3]
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
      if (!current || dirty & /*spanClass*/
      8) {
        attr(
          span,
          "class",
          /*spanClass*/
          ctx2[3]
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
function create_if_block_2(ctx) {
  let a;
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
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "class",
        /*linkClass*/
        ctx[2]
      );
      attr(
        a,
        "href",
        /*href*/
        ctx[1]
      );
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
      if (!current || dirty & /*linkClass*/
      4) {
        attr(
          a,
          "class",
          /*linkClass*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*href*/
      2) {
        attr(
          a,
          "href",
          /*href*/
          ctx2[1]
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
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_else_block(ctx) {
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
      attr(path, "d", "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z");
      attr(svg, "class", "w-4 h-4 mr-2");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_1(ctx) {
  let current;
  const icon_slot_template = (
    /*#slots*/
    ctx[8].icon
  );
  const icon_slot = create_slot(
    icon_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_icon_slot_context
  );
  return {
    c() {
      if (icon_slot)
        icon_slot.c();
    },
    l(nodes) {
      if (icon_slot)
        icon_slot.l(nodes);
    },
    m(target, anchor) {
      if (icon_slot) {
        icon_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            icon_slot,
            icon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              icon_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              get_icon_slot_changes
            ),
            get_icon_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let li;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*home*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let li_levels = [
    { class: "inline-flex items-center" },
    /*$$restProps*/
    ctx[5]
  ];
  let li_data = {};
  for (let i = 0; i < li_levels.length; i += 1) {
    li_data = assign(li_data, li_levels[i]);
  }
  return {
    c() {
      li = element("li");
      if_block.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      if_block.l(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(li, li_data);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      if_blocks[current_block_type_index].m(li, null);
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
        if_block.m(li, null);
      }
      set_attributes(li, li_data = get_spread_update(li_levels, [
        { class: "inline-flex items-center" },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
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
        detach(li);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = ["home", "href", "linkClass", "spanClass", "homeClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass = "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("home" in $$new_props)
      $$invalidate(0, home = $$new_props.home);
    if ("href" in $$new_props)
      $$invalidate(1, href = $$new_props.href);
    if ("linkClass" in $$new_props)
      $$invalidate(2, linkClass = $$new_props.linkClass);
    if ("spanClass" in $$new_props)
      $$invalidate(3, spanClass = $$new_props.spanClass);
    if ("homeClass" in $$new_props)
      $$invalidate(4, homeClass = $$new_props.homeClass);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  return [
    home,
    href,
    linkClass,
    spanClass,
    homeClass,
    $$restProps,
    $$slots,
    $$scope,
    slots
  ];
}
class BreadcrumbItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      home: 0,
      href: 1,
      linkClass: 2,
      spanClass: 3,
      homeClass: 4
    });
  }
}
export {
  Breadcrumb as B,
  BreadcrumbItem as a
};
