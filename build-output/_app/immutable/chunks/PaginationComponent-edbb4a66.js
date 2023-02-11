import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, t as transition_out, h as detach, a5 as getContext, F as assign, G as exclude_internal_props, I as create_slot, k as element, l as claim_element, m as children, J as set_custom_element_data_map, K as set_attributes, M as listen, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update, T as run_all, H as bubble, x as create_component, a as space, y as claim_component, c as claim_space, n as attr, _ as append_hydration, z as mount_component, g as group_outros, d as check_outros, A as destroy_component, a6 as destroy_each, ab as createEventDispatcher, E as setContext, q as text, r as claim_text, u as set_data, R as is_function, a7 as component_subscribe, C as noop } from "./index-68b73dd3.js";
import { p as page } from "./stores-089d934a.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { a as ChevronLeft, C as ChevronRight } from "./ChevronRight-2d981c85.js";
function create_dynamic_element(ctx) {
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
    ctx[5],
    null
  );
  let svelte_element_levels = [{ href: (
    /*href*/
    ctx[0]
  ) }, { class: (
    /*defaultClass*/
    ctx[1]
  ) }];
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
            "blur",
            /*blur_handler*/
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
            "click",
            /*click_handler*/
            ctx[9]
          ),
          listen(
            svelte_element,
            "focus",
            /*focus_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "keypress",
            /*keypress_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[13]
          ),
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
            "mouseover",
            /*mouseover_handler*/
            ctx[16]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
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
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        (!current || dirty & /*defaultClass*/
        2) && { class: (
          /*defaultClass*/
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
function create_fragment$2(ctx) {
  let previous_tag = (
    /*href*/
    ctx[0] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[0] ? "a" : "button") && create_dynamic_element(ctx)
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
        ctx2[0] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[0] ? "a" : "button"
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
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = void 0 } = $$props;
  let { active = false } = $$props;
  let { activeClass = "" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  let defaultClass;
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
    $$invalidate(19, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("active" in $$new_props)
      $$invalidate(2, active = $$new_props.active);
    if ("activeClass" in $$new_props)
      $$invalidate(3, activeClass = $$new_props.activeClass);
    if ("normalClass" in $$new_props)
      $$invalidate(4, normalClass = $$new_props.normalClass);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, defaultClass = classNames("block py-2", group ? "px-3" : "px-4", "text-sm font-medium", table || "border border-gray-300", group || (table ? "rounded" : "rounded-lg"), active ? activeClass : normalClass, $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    href,
    defaultClass,
    active,
    activeClass,
    normalClass,
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
class PaginationItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      href: 0,
      active: 2,
      activeClass: 3,
      normalClass: 4
    });
  }
}
const get_next_slot_changes = (dirty) => ({});
const get_next_slot_context = (ctx) => ({});
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i].name;
  child_ctx[22] = list[i].href;
  child_ctx[23] = list[i].active;
  return child_ctx;
}
const get_prev_slot_changes = (dirty) => ({});
const get_prev_slot_context = (ctx) => ({});
function fallback_block_1(ctx) {
  let t;
  return {
    c() {
      t = text("Previous");
    },
    l(nodes) {
      t = claim_text(nodes, "Previous");
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
function create_default_slot_2(ctx) {
  let current;
  const prev_slot_template = (
    /*#slots*/
    ctx[8].prev
  );
  const prev_slot = create_slot(
    prev_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    get_prev_slot_context
  );
  const prev_slot_or_fallback = prev_slot || fallback_block_1();
  return {
    c() {
      if (prev_slot_or_fallback)
        prev_slot_or_fallback.c();
    },
    l(nodes) {
      if (prev_slot_or_fallback)
        prev_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (prev_slot_or_fallback) {
        prev_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (prev_slot) {
        if (prev_slot.p && (!current || dirty & /*$$scope*/
        524288)) {
          update_slot_base(
            prev_slot,
            prev_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[19],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[19]
            ) : get_slot_changes(
              prev_slot_template,
              /*$$scope*/
              ctx2[19],
              dirty,
              get_prev_slot_changes
            ),
            get_prev_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(prev_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(prev_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (prev_slot_or_fallback)
        prev_slot_or_fallback.d(detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t_value = (
    /*name*/
    ctx[21] + ""
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
      if (dirty & /*pages*/
      1 && t_value !== (t_value = /*name*/
      ctx2[21] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let paginationitem;
  let current;
  paginationitem = new PaginationItem({
    props: {
      active: (
        /*active*/
        ctx[23]
      ),
      activeClass: (
        /*activeClass*/
        ctx[1]
      ),
      normalClass: (
        /*normalClass*/
        ctx[2]
      ),
      href: (
        /*href*/
        ctx[22]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  paginationitem.$on(
    "blur",
    /*blur_handler*/
    ctx[9]
  );
  paginationitem.$on(
    "change",
    /*change_handler*/
    ctx[10]
  );
  paginationitem.$on(
    "click",
    /*click_handler*/
    ctx[11]
  );
  paginationitem.$on(
    "focus",
    /*focus_handler*/
    ctx[12]
  );
  paginationitem.$on(
    "keydown",
    /*keydown_handler*/
    ctx[13]
  );
  paginationitem.$on(
    "keypress",
    /*keypress_handler*/
    ctx[14]
  );
  paginationitem.$on(
    "keyup",
    /*keyup_handler*/
    ctx[15]
  );
  paginationitem.$on(
    "mouseenter",
    /*mouseenter_handler*/
    ctx[16]
  );
  paginationitem.$on(
    "mouseleave",
    /*mouseleave_handler*/
    ctx[17]
  );
  paginationitem.$on(
    "mouseover",
    /*mouseover_handler*/
    ctx[18]
  );
  return {
    c() {
      li = element("li");
      create_component(paginationitem.$$.fragment);
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      claim_component(paginationitem.$$.fragment, li_nodes);
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      mount_component(paginationitem, li, null);
      current = true;
    },
    p(ctx2, dirty) {
      const paginationitem_changes = {};
      if (dirty & /*pages*/
      1)
        paginationitem_changes.active = /*active*/
        ctx2[23];
      if (dirty & /*activeClass*/
      2)
        paginationitem_changes.activeClass = /*activeClass*/
        ctx2[1];
      if (dirty & /*normalClass*/
      4)
        paginationitem_changes.normalClass = /*normalClass*/
        ctx2[2];
      if (dirty & /*pages*/
      1)
        paginationitem_changes.href = /*href*/
        ctx2[22];
      if (dirty & /*$$scope, pages*/
      524289) {
        paginationitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      paginationitem.$set(paginationitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(paginationitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(paginationitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(paginationitem);
    }
  };
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text("Next");
    },
    l(nodes) {
      t = claim_text(nodes, "Next");
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
function create_default_slot(ctx) {
  let current;
  const next_slot_template = (
    /*#slots*/
    ctx[8].next
  );
  const next_slot = create_slot(
    next_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    get_next_slot_context
  );
  const next_slot_or_fallback = next_slot || fallback_block();
  return {
    c() {
      if (next_slot_or_fallback)
        next_slot_or_fallback.c();
    },
    l(nodes) {
      if (next_slot_or_fallback)
        next_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (next_slot_or_fallback) {
        next_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (next_slot) {
        if (next_slot.p && (!current || dirty & /*$$scope*/
        524288)) {
          update_slot_base(
            next_slot,
            next_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[19],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[19]
            ) : get_slot_changes(
              next_slot_template,
              /*$$scope*/
              ctx2[19],
              dirty,
              get_next_slot_changes
            ),
            get_next_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(next_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(next_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (next_slot_or_fallback)
        next_slot_or_fallback.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let nav;
  let ul;
  let li0;
  let paginationitem0;
  let t0;
  let t1;
  let li1;
  let paginationitem1;
  let ul_class_value;
  let current;
  paginationitem0 = new PaginationItem({
    props: {
      class: classNames(
        /*normalClass*/
        ctx[2],
        /*table*/
        ctx[4] ? "rounded-l" : "rounded-l-lg"
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  paginationitem0.$on(
    "click",
    /*previous*/
    ctx[5]
  );
  let each_value = (
    /*pages*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  paginationitem1 = new PaginationItem({
    props: {
      class: classNames(
        /*normalClass*/
        ctx[2],
        /*table*/
        ctx[4] ? "rounded-r" : "rounded-r-lg"
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  paginationitem1.$on(
    "click",
    /*next*/
    ctx[6]
  );
  return {
    c() {
      nav = element("nav");
      ul = element("ul");
      li0 = element("li");
      create_component(paginationitem0.$$.fragment);
      t0 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      li1 = element("li");
      create_component(paginationitem1.$$.fragment);
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { "aria-label": true });
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      claim_component(paginationitem0.$$.fragment, li0_nodes);
      li0_nodes.forEach(detach);
      t0 = claim_space(ul_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      t1 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      claim_component(paginationitem1.$$.fragment, li1_nodes);
      li1_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", ul_class_value = classNames(
        /*ulClass*/
        ctx[3],
        /*table*/
        ctx[4] && "divide-x divide-gray-700",
        /*$$props*/
        ctx[7].class
      ));
      attr(nav, "aria-label", "Page navigation");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, ul);
      append_hydration(ul, li0);
      mount_component(paginationitem0, li0, null);
      append_hydration(ul, t0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append_hydration(ul, t1);
      append_hydration(ul, li1);
      mount_component(paginationitem1, li1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const paginationitem0_changes = {};
      if (dirty & /*normalClass, table*/
      20)
        paginationitem0_changes.class = classNames(
          /*normalClass*/
          ctx2[2],
          /*table*/
          ctx2[4] ? "rounded-l" : "rounded-l-lg"
        );
      if (dirty & /*$$scope*/
      524288) {
        paginationitem0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      paginationitem0.$set(paginationitem0_changes);
      if (dirty & /*pages, activeClass, normalClass*/
      7) {
        each_value = /*pages*/
        ctx2[0];
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
            each_blocks[i].m(ul, t1);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const paginationitem1_changes = {};
      if (dirty & /*normalClass, table*/
      20)
        paginationitem1_changes.class = classNames(
          /*normalClass*/
          ctx2[2],
          /*table*/
          ctx2[4] ? "rounded-r" : "rounded-r-lg"
        );
      if (dirty & /*$$scope*/
      524288) {
        paginationitem1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      paginationitem1.$set(paginationitem1_changes);
      if (!current || dirty & /*ulClass, table, $$props*/
      152 && ul_class_value !== (ul_class_value = classNames(
        /*ulClass*/
        ctx2[3],
        /*table*/
        ctx2[4] && "divide-x divide-gray-700",
        /*$$props*/
        ctx2[7].class
      ))) {
        attr(ul, "class", ul_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(paginationitem0.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(paginationitem1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(paginationitem0.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(paginationitem1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      destroy_component(paginationitem0);
      destroy_each(each_blocks, detaching);
      destroy_component(paginationitem1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { pages = [] } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { ulClass = "inline-flex -space-x-px items-center" } = $$props;
  let { table = false } = $$props;
  const dispatch = createEventDispatcher();
  setContext("group", true);
  setContext("table", table);
  const previous = () => {
    dispatch("previous");
  };
  const next = () => {
    dispatch("next");
  };
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
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("pages" in $$new_props)
      $$invalidate(0, pages = $$new_props.pages);
    if ("activeClass" in $$new_props)
      $$invalidate(1, activeClass = $$new_props.activeClass);
    if ("normalClass" in $$new_props)
      $$invalidate(2, normalClass = $$new_props.normalClass);
    if ("ulClass" in $$new_props)
      $$invalidate(3, ulClass = $$new_props.ulClass);
    if ("table" in $$new_props)
      $$invalidate(4, table = $$new_props.table);
    if ("$$scope" in $$new_props)
      $$invalidate(19, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    pages,
    activeClass,
    normalClass,
    ulClass,
    table,
    previous,
    next,
    $$props,
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
    mouseover_handler,
    $$scope
  ];
}
class Pagination extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      pages: 0,
      activeClass: 1,
      normalClass: 2,
      ulClass: 3,
      table: 4
    });
  }
}
function create_prev_slot(ctx) {
  let span;
  let t0;
  let t1;
  let chevronleft;
  let current;
  chevronleft = new ChevronLeft({ props: { class: "w-5 h-5" } });
  return {
    c() {
      span = element("span");
      t0 = text("Previous");
      t1 = space();
      create_component(chevronleft.$$.fragment);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Previous");
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(chevronleft.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      mount_component(chevronleft, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(chevronleft.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevronleft.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      destroy_component(chevronleft, detaching);
    }
  };
}
function create_next_slot(ctx) {
  let span;
  let t0;
  let t1;
  let chevronright;
  let current;
  chevronright = new ChevronRight({ props: { class: "w-5 h-5" } });
  return {
    c() {
      span = element("span");
      t0 = text("Next");
      t1 = space();
      create_component(chevronright.$$.fragment);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Next");
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(chevronright.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      mount_component(chevronright, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(chevronright.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevronright.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      destroy_component(chevronright, detaching);
    }
  };
}
function create_fragment(ctx) {
  let pagination;
  let current;
  pagination = new Pagination({
    props: {
      pages: (
        /*pages*/
        ctx[0]
      ),
      icon: true,
      $$slots: {
        next: [create_next_slot],
        prev: [create_prev_slot]
      },
      $$scope: { ctx }
    }
  });
  pagination.$on("previous", function() {
    if (is_function(
      /*previous*/
      ctx[1]
    ))
      ctx[1].apply(this, arguments);
  });
  pagination.$on("next", function() {
    if (is_function(
      /*next*/
      ctx[2]
    ))
      ctx[2].apply(this, arguments);
  });
  return {
    c() {
      create_component(pagination.$$.fragment);
    },
    l(nodes) {
      claim_component(pagination.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pagination, target, anchor);
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      const pagination_changes = {};
      if (dirty & /*pages*/
      1)
        pagination_changes.pages = /*pages*/
        ctx[0];
      if (dirty & /*$$scope*/
      32) {
        pagination_changes.$$scope = { dirty, ctx };
      }
      pagination.$set(pagination_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pagination.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pagination.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pagination, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let activeUrl;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(4, $page = $$value));
  let { pages } = $$props;
  let { previous } = $$props;
  let { next } = $$props;
  $$self.$$set = ($$props2) => {
    if ("pages" in $$props2)
      $$invalidate(0, pages = $$props2.pages);
    if ("previous" in $$props2)
      $$invalidate(1, previous = $$props2.previous);
    if ("next" in $$props2)
      $$invalidate(2, next = $$props2.next);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    16) {
      $$invalidate(3, activeUrl = $page.url.searchParams.get("page"));
    }
    if ($$self.$$.dirty & /*pages, activeUrl*/
    9) {
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
        $$invalidate(0, pages), $$invalidate(3, activeUrl), $$invalidate(4, $page);
      }
    }
  };
  return [pages, previous, next, activeUrl, $page];
}
class PaginationComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { pages: 0, previous: 1, next: 2 });
  }
}
export {
  PaginationComponent as P
};
