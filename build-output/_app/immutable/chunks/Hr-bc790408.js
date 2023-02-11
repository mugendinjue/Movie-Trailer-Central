import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, g as group_outros, t as transition_out, d as check_outros, f as transition_in, h as detach, D as compute_rest_props, a3 as compute_slots, F as assign, G as exclude_internal_props, k as element, l as claim_element, n as attr, C as noop, I as create_slot, a as space, m as children, c as claim_space, K as set_attributes, _ as append_hydration, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, Q as get_spread_update } from "./index-68b73dd3.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
function create_else_block(ctx) {
  let hr;
  return {
    c() {
      hr = element("hr");
      this.h();
    },
    l(nodes) {
      hr = claim_element(nodes, "HR", { class: true });
      this.h();
    },
    h() {
      attr(
        hr,
        "class",
        /*horizontalClass*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, hr, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(hr);
    }
  };
}
function create_if_block(ctx) {
  let div1;
  let hr;
  let t;
  let div0;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[14].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[13],
    null
  );
  let div1_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*classDiv*/
      ctx[1]
    ) }
  ];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      hr = element("hr");
      t = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      hr = claim_element(div1_nodes, "HR", { class: true });
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        hr,
        "class",
        /*horizontalClass*/
        ctx[0]
      );
      attr(
        div0,
        "class",
        /*middleClass*/
        ctx[2]
      );
      set_attributes(div1, div1_data);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, hr);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8192)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[13],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[13]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[13],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        { class: (
          /*classDiv*/
          ctx2[1]
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
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$$slots*/
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
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "icon",
    "width",
    "height",
    "divClass",
    "hrClass",
    "iconDivClass",
    "textSpanClass",
    "middleBgColor"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(15, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("icon" in $$new_props)
      $$invalidate(5, icon = $$new_props.icon);
    if ("width" in $$new_props)
      $$invalidate(6, width = $$new_props.width);
    if ("height" in $$new_props)
      $$invalidate(7, height = $$new_props.height);
    if ("divClass" in $$new_props)
      $$invalidate(8, divClass = $$new_props.divClass);
    if ("hrClass" in $$new_props)
      $$invalidate(9, hrClass = $$new_props.hrClass);
    if ("iconDivClass" in $$new_props)
      $$invalidate(10, iconDivClass = $$new_props.iconDivClass);
    if ("textSpanClass" in $$new_props)
      $$invalidate(11, textSpanClass = $$new_props.textSpanClass);
    if ("middleBgColor" in $$new_props)
      $$invalidate(12, middleBgColor = $$new_props.middleBgColor);
    if ("$$scope" in $$new_props)
      $$invalidate(13, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    horizontalClass,
    classDiv,
    middleClass,
    $$slots,
    $$restProps,
    icon,
    width,
    height,
    divClass,
    hrClass,
    iconDivClass,
    textSpanClass,
    middleBgColor,
    $$scope,
    slots
  ];
}
class Hr extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      icon: 5,
      width: 6,
      height: 7,
      divClass: 8,
      hrClass: 9,
      iconDivClass: 10,
      textSpanClass: 11,
      middleBgColor: 12
    });
  }
}
export {
  Hr as H
};
