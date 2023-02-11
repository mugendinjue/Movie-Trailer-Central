import { S as SvelteComponent, i as init, s as safe_not_equal, I as create_slot, F as assign, k as element, l as claim_element, m as children, h as detach, K as set_attributes, b as insert_hydration, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update, f as transition_in, t as transition_out, D as compute_rest_props, G as exclude_internal_props, e as empty, J as set_custom_element_data_map } from "./index-68b73dd3.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
function create_fragment$2(ctx) {
  let div;
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
  let div_levels = [
    /*$$restProps*/
    ctx[1],
    { class: (
      /*classDiv*/
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
      set_attributes(div, div_data);
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
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        { class: (
          /*classDiv*/
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
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["divClass", "cols", "gap"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { divClass = "grid" } = $$props;
  let { cols = "grid-cols-1 sm:grid-cols-2" } = $$props;
  let { gap } = $$props;
  let classDiv = classNames(divClass, "gap-" + String(gap), cols);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("divClass" in $$new_props)
      $$invalidate(2, divClass = $$new_props.divClass);
    if ("cols" in $$new_props)
      $$invalidate(3, cols = $$new_props.cols);
    if ("gap" in $$new_props)
      $$invalidate(4, gap = $$new_props.gap);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [classDiv, $$restProps, divClass, cols, gap, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { divClass: 2, cols: 3, gap: 4 });
  }
}
function create_fragment$1(ctx) {
  let li;
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
  let li_levels = [
    /*$$restProps*/
    ctx[1],
    { class: (
      /*classLi*/
      ctx[0]
    ) }
  ];
  let li_data = {};
  for (let i = 0; i < li_levels.length; i += 1) {
    li_data = assign(li_data, li_levels[i]);
  }
  return {
    c() {
      li = element("li");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      if (default_slot)
        default_slot.l(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(li, li_data);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      if (default_slot) {
        default_slot.m(li, null);
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
      set_attributes(li, li_data = get_spread_update(li_levels, [
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        { class: (
          /*classLi*/
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
        detach(li);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = ["icon", "liClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = classNames(liClass, icon && "flex items-center", $$props.class);
  $$self.$$set = ($$new_props) => {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("icon" in $$new_props)
      $$invalidate(2, icon = $$new_props.icon);
    if ("liClass" in $$new_props)
      $$invalidate(3, liClass = $$new_props.liClass);
    if ("$$scope" in $$new_props)
      $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [classLi, $$restProps, icon, liClass, $$scope, slots];
}
class Li extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { icon: 2, liClass: 3 });
  }
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let current;
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
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[2],
    { class: (
      /*classList*/
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
      svelte_element_data = get_spread_update(svelte_element_levels, [
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        { class: (
          /*classList*/
          ctx2[1]
        ) }
      ]);
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
    }
  };
}
function create_fragment(ctx) {
  let previous_tag = (
    /*tag*/
    ctx[0]
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*tag*/
    ctx[0] && create_dynamic_element(ctx)
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
        /*tag*/
        ctx2[0]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[0]
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
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = ["tag", "list", "position", "color", "olClass", "ulClass", "dlClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { tag = "ul" } = $$props;
  let { list = "disc" } = $$props;
  let { position = "inside" } = $$props;
  let { color = "text-gray-500 dark:text-gray-400" } = $$props;
  let { olClass = "list-decimal list-inside" } = $$props;
  let { ulClass = "max-w-md" } = $$props;
  let { dlClass = "max-w-md divide-y divide-gray-200  dark:divide-gray-700" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = classNames(color, tag === "ul" ? ulClass : olClass, lists[list], positions[position], $$props.class);
  $$self.$$set = ($$new_props) => {
    $$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("tag" in $$new_props)
      $$invalidate(0, tag = $$new_props.tag);
    if ("list" in $$new_props)
      $$invalidate(3, list = $$new_props.list);
    if ("position" in $$new_props)
      $$invalidate(4, position = $$new_props.position);
    if ("color" in $$new_props)
      $$invalidate(5, color = $$new_props.color);
    if ("olClass" in $$new_props)
      $$invalidate(6, olClass = $$new_props.olClass);
    if ("ulClass" in $$new_props)
      $$invalidate(7, ulClass = $$new_props.ulClass);
    if ("dlClass" in $$new_props)
      $$invalidate(8, dlClass = $$new_props.dlClass);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    tag,
    classList,
    $$restProps,
    list,
    position,
    color,
    olClass,
    ulClass,
    dlClass,
    $$scope,
    slots
  ];
}
class List extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      tag: 0,
      list: 3,
      position: 4,
      color: 5,
      olClass: 6,
      ulClass: 7,
      dlClass: 8
    });
  }
}
export {
  Layout as L,
  List as a,
  Li as b
};
