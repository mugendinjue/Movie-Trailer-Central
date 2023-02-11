import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, t as transition_out, h as detach, D as compute_rest_props, F as assign, G as exclude_internal_props, I as create_slot, k as element, l as claim_element, m as children, J as set_custom_element_data_map, K as set_attributes, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update } from "./index-68b73dd3.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
function create_dynamic_element(ctx) {
  let svelte_element;
  let svelte_element_class_value;
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
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[4],
    {
      class: svelte_element_class_value = classNames(
        /*customSize*/
        ctx[2] ? (
          /*customSize*/
          ctx[2]
        ) : (
          /*textSizes*/
          ctx[3][
            /*tag*/
            ctx[0]
          ]
        ),
        /*color*/
        ctx[1],
        "w-full",
        /*$$props*/
        ctx[5].class
      )
    }
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
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*customSize, tag, color, $$props*/
        39 && svelte_element_class_value !== (svelte_element_class_value = classNames(
          /*customSize*/
          ctx2[2] ? (
            /*customSize*/
            ctx2[2]
          ) : (
            /*textSizes*/
            ctx2[3][
              /*tag*/
              ctx2[0]
            ]
          ),
          /*color*/
          ctx2[1],
          "w-full",
          /*$$props*/
          ctx2[5].class
        ))) && { class: svelte_element_class_value }
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
  const omit_props_names = ["tag", "color", "customSize"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("tag" in $$new_props)
      $$invalidate(0, tag = $$new_props.tag);
    if ("color" in $$new_props)
      $$invalidate(1, color = $$new_props.color);
    if ("customSize" in $$new_props)
      $$invalidate(2, customSize = $$new_props.customSize);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [tag, color, customSize, textSizes, $$restProps, $$props, $$scope, slots];
}
class Heading extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { tag: 0, color: 1, customSize: 2 });
  }
}
export {
  Heading as H
};
