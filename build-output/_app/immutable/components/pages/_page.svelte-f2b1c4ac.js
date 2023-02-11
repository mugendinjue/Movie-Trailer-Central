import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, C as noop, h as detach, D as compute_rest_props, F as assign, G as exclude_internal_props, k as element, l as claim_element, K as set_attributes, Q as get_spread_update, a4 as src_url_equal, a as space, m as children, c as claim_space, n as attr, _ as append_hydration, I as create_slot, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, f as transition_in, t as transition_out, x as create_component, y as claim_component, z as mount_component, A as destroy_component, q as text, r as claim_text, g as group_outros, d as check_outros, a6 as destroy_each, W as svg_element, X as claim_svg_element } from "../../chunks/index-68b73dd3.js";
import { c as classNames } from "../../chunks/Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { H as Hr } from "../../chunks/Hr-bc790408.js";
import { L as Layout, a as List, b as Li } from "../../chunks/List-ba359f4e.js";
import { P } from "../../chunks/P-82e30234.js";
import { l as logo, a as appName, k as keyFeatures } from "../../chunks/util-edf9c3bc.js";
function create_else_block(ctx) {
  let img;
  let img_class_value;
  let img_src_value;
  let img_levels = [
    /*$$restProps*/
    ctx[11],
    {
      class: img_class_value = classNames(
        /*imgClass*/
        ctx[5],
        /*size*/
        ctx[3],
        /*alignment*/
        ctx[4],
        /*effect*/
        ctx[8],
        /*$$props*/
        ctx[10].class
      )
    },
    { src: img_src_value = /*src*/
    ctx[1] },
    { srcset: (
      /*srcset*/
      ctx[2]
    ) },
    { alt: (
      /*alt*/
      ctx[7]
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
      img = claim_element(nodes, "IMG", {
        class: true,
        src: true,
        srcset: true,
        alt: true
      });
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
        2048 && /*$$restProps*/
        ctx2[11],
        dirty & /*imgClass, size, alignment, effect, $$props*/
        1336 && img_class_value !== (img_class_value = classNames(
          /*imgClass*/
          ctx2[5],
          /*size*/
          ctx2[3],
          /*alignment*/
          ctx2[4],
          /*effect*/
          ctx2[8],
          /*$$props*/
          ctx2[10].class
        )) && { class: img_class_value },
        dirty & /*src*/
        2 && !src_url_equal(img.src, img_src_value = /*src*/
        ctx2[1]) && { src: img_src_value },
        dirty & /*srcset*/
        4 && { srcset: (
          /*srcset*/
          ctx2[2]
        ) },
        dirty & /*alt*/
        128 && { alt: (
          /*alt*/
          ctx2[7]
        ) }
      ]));
    },
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block(ctx) {
  let figure;
  let img;
  let img_class_value;
  let img_src_value;
  let t;
  let figcaption;
  return {
    c() {
      figure = element("figure");
      img = element("img");
      t = space();
      figcaption = element("figcaption");
      this.h();
    },
    l(nodes) {
      figure = claim_element(nodes, "FIGURE", { class: true });
      var figure_nodes = children(figure);
      img = claim_element(figure_nodes, "IMG", {
        class: true,
        src: true,
        srcset: true,
        alt: true
      });
      t = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", { class: true });
      var figcaption_nodes = children(figcaption);
      figcaption_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", img_class_value = classNames(
        /*imgClass*/
        ctx[5],
        /*size*/
        ctx[3],
        /*alignment*/
        ctx[4],
        /*effect*/
        ctx[8],
        /*$$props*/
        ctx[10].class
      ));
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[1]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "srcset",
        /*srcset*/
        ctx[2]
      );
      attr(
        img,
        "alt",
        /*alt*/
        ctx[7]
      );
      attr(
        figcaption,
        "class",
        /*captionClass*/
        ctx[9]
      );
      attr(
        figure,
        "class",
        /*figClass*/
        ctx[6]
      );
    },
    m(target, anchor) {
      insert_hydration(target, figure, anchor);
      append_hydration(figure, img);
      append_hydration(figure, t);
      append_hydration(figure, figcaption);
      figcaption.innerHTML = /*caption*/
      ctx[0];
    },
    p(ctx2, dirty) {
      if (dirty & /*imgClass, size, alignment, effect, $$props*/
      1336 && img_class_value !== (img_class_value = classNames(
        /*imgClass*/
        ctx2[5],
        /*size*/
        ctx2[3],
        /*alignment*/
        ctx2[4],
        /*effect*/
        ctx2[8],
        /*$$props*/
        ctx2[10].class
      ))) {
        attr(img, "class", img_class_value);
      }
      if (dirty & /*src*/
      2 && !src_url_equal(img.src, img_src_value = /*src*/
      ctx2[1])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*srcset*/
      4) {
        attr(
          img,
          "srcset",
          /*srcset*/
          ctx2[2]
        );
      }
      if (dirty & /*alt*/
      128) {
        attr(
          img,
          "alt",
          /*alt*/
          ctx2[7]
        );
      }
      if (dirty & /*caption*/
      1)
        figcaption.innerHTML = /*caption*/
        ctx2[0];
      if (dirty & /*captionClass*/
      512) {
        attr(
          figcaption,
          "class",
          /*captionClass*/
          ctx2[9]
        );
      }
      if (dirty & /*figClass*/
      64) {
        attr(
          figure,
          "class",
          /*figClass*/
          ctx2[6]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(figure);
    }
  };
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*caption*/
      ctx2[0]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
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
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = [
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
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("caption" in $$new_props)
      $$invalidate(0, caption = $$new_props.caption);
    if ("src" in $$new_props)
      $$invalidate(1, src = $$new_props.src);
    if ("srcset" in $$new_props)
      $$invalidate(2, srcset = $$new_props.srcset);
    if ("size" in $$new_props)
      $$invalidate(3, size = $$new_props.size);
    if ("alignment" in $$new_props)
      $$invalidate(4, alignment = $$new_props.alignment);
    if ("imgClass" in $$new_props)
      $$invalidate(5, imgClass = $$new_props.imgClass);
    if ("figClass" in $$new_props)
      $$invalidate(6, figClass = $$new_props.figClass);
    if ("alt" in $$new_props)
      $$invalidate(7, alt = $$new_props.alt);
    if ("effect" in $$new_props)
      $$invalidate(8, effect = $$new_props.effect);
    if ("captionClass" in $$new_props)
      $$invalidate(9, captionClass = $$new_props.captionClass);
  };
  $$props = exclude_internal_props($$props);
  return [
    caption,
    src,
    srcset,
    size,
    alignment,
    imgClass,
    figClass,
    alt,
    effect,
    captionClass,
    $$props,
    $$restProps
  ];
}
class Img extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      caption: 0,
      src: 1,
      srcset: 2,
      size: 3,
      alignment: 4,
      imgClass: 5,
      figClass: 6,
      alt: 7,
      effect: 8,
      captionClass: 9
    });
  }
}
function create_fragment$1(ctx) {
  let span;
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
  let span_levels = [
    /*$$restProps*/
    ctx[1],
    { class: (
      /*classSpan*/
      ctx[0]
    ) }
  ];
  let span_data = {};
  for (let i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }
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
      set_attributes(span, span_data);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
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
      }
      set_attributes(span, span_data = get_spread_update(span_levels, [
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        { class: (
          /*classSpan*/
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
        detach(span);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "italic",
    "underline",
    "linethrough",
    "uppercase",
    "gradient",
    "highlight",
    "highlightClass",
    "decorationClass",
    "gradientClass"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
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
  $$self.$$set = ($$new_props) => {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("italic" in $$new_props)
      $$invalidate(2, italic = $$new_props.italic);
    if ("underline" in $$new_props)
      $$invalidate(3, underline = $$new_props.underline);
    if ("linethrough" in $$new_props)
      $$invalidate(4, linethrough = $$new_props.linethrough);
    if ("uppercase" in $$new_props)
      $$invalidate(5, uppercase = $$new_props.uppercase);
    if ("gradient" in $$new_props)
      $$invalidate(6, gradient = $$new_props.gradient);
    if ("highlight" in $$new_props)
      $$invalidate(7, highlight = $$new_props.highlight);
    if ("highlightClass" in $$new_props)
      $$invalidate(8, highlightClass = $$new_props.highlightClass);
    if ("decorationClass" in $$new_props)
      $$invalidate(9, decorationClass = $$new_props.decorationClass);
    if ("gradientClass" in $$new_props)
      $$invalidate(10, gradientClass = $$new_props.gradientClass);
    if ("$$scope" in $$new_props)
      $$invalidate(11, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    classSpan,
    $$restProps,
    italic,
    underline,
    linethrough,
    uppercase,
    gradient,
    highlight,
    highlightClass,
    decorationClass,
    gradientClass,
    $$scope,
    slots
  ];
}
class Span extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      italic: 2,
      underline: 3,
      linethrough: 4,
      uppercase: 5,
      gradient: 6,
      highlight: 7,
      highlightClass: 8,
      decorationClass: 9,
      gradientClass: 10
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_default_slot_5(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*app_name*/
        ctx[0]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*app_name*/
        ctx[0]
      );
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
function create_default_slot_4(ctx) {
  let t0;
  let span;
  let t1;
  let current;
  span = new Span({
    props: {
      gradient: true,
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      t0 = text("Welcome to ");
      create_component(span.$$.fragment);
      t1 = text(" - Your One-Stop Destination for Movie Trailers.");
    },
    l(nodes) {
      t0 = claim_text(nodes, "Welcome to ");
      claim_component(span.$$.fragment, nodes);
      t1 = claim_text(nodes, " - Your One-Stop Destination for Movie Trailers.");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      mount_component(span, target, anchor);
      insert_hydration(target, t1, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const span_changes = {};
      if (dirty & /*$$scope*/
      16) {
        span_changes.$$scope = { dirty, ctx: ctx2 };
      }
      span.$set(span_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(span.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(span.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      destroy_component(span, detaching);
      if (detaching)
        detach(t1);
    }
  };
}
function create_default_slot_3(ctx) {
  let t0;
  let t1;
  return {
    c() {
      t0 = text(
        /*app_name*/
        ctx[0]
      );
      t1 = text(" is the ultimate platform for movie enthusiasts who want to stay up-to-date with the latest trailers and releases. Watch trailers for upcoming blockbusters, indie gems, and everything in between, all in one place.");
    },
    l(nodes) {
      t0 = claim_text(
        nodes,
        /*app_name*/
        ctx[0]
      );
      t1 = claim_text(nodes, " is the ultimate platform for movie enthusiasts who want to stay up-to-date with the latest trailers and releases. Watch trailers for upcoming blockbusters, indie gems, and everything in between, all in one place.");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_default_slot_2(ctx) {
  let svg;
  let path;
  let t0;
  let t1_value = (
    /*feature*/
    ctx[1] + ""
  );
  let t1;
  let t2;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
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
      t0 = claim_space(nodes);
      t1 = claim_text(nodes, t1_value);
      t2 = claim_space(nodes);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", "w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let current;
  li = new Li({
    props: {
      icon: true,
      $$slots: { default: [create_default_slot_2] },
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
      if (dirty & /*$$scope*/
      16) {
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
function create_default_slot_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = keyFeatures;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
      if (dirty & /*keyFeatures*/
      0) {
        each_value = keyFeatures;
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
function create_default_slot(ctx) {
  let p0;
  let t0;
  let div;
  let p1;
  let t1;
  let hr0;
  let t2;
  let p2;
  let t3;
  let hr1;
  let t4;
  let list;
  let t5;
  let p3;
  let current;
  p0 = new P({
    props: {
      class: "mb-3",
      weight: "light",
      color: "text-gray-500 dark:text-gray-400"
    }
  });
  p1 = new P({
    props: {
      weight: "light",
      align: "left",
      size: "5xl",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  hr0 = new Hr({
    props: {
      class: "my-4 mx-auto md:my-10",
      width: "w-48",
      height: "h-1"
    }
  });
  p2 = new P({
    props: {
      weight: "light",
      align: "center",
      size: "3xl",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  hr1 = new Hr({
    props: {
      class: "my-4 mx-auto md:my-10",
      width: "w-48",
      height: "h-1"
    }
  });
  list = new List({
    props: {
      tag: "ul",
      class: "space-y-2",
      list: "none",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  p3 = new P({
    props: {
      class: "mb-3",
      weight: "light",
      color: "text-gray-500 dark:text-gray-400"
    }
  });
  return {
    c() {
      create_component(p0.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(p1.$$.fragment);
      t1 = space();
      create_component(hr0.$$.fragment);
      t2 = space();
      create_component(p2.$$.fragment);
      t3 = space();
      create_component(hr1.$$.fragment);
      t4 = space();
      create_component(list.$$.fragment);
      t5 = space();
      create_component(p3.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(p0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(p1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(hr0.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(p2.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(hr1.$$.fragment, div_nodes);
      t4 = claim_space(div_nodes);
      claim_component(list.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      t5 = claim_space(nodes);
      claim_component(p3.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(div, "class", "mb-3");
    },
    m(target, anchor) {
      mount_component(p0, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      mount_component(p1, div, null);
      append_hydration(div, t1);
      mount_component(hr0, div, null);
      append_hydration(div, t2);
      mount_component(p2, div, null);
      append_hydration(div, t3);
      mount_component(hr1, div, null);
      append_hydration(div, t4);
      mount_component(list, div, null);
      insert_hydration(target, t5, anchor);
      mount_component(p3, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const p1_changes = {};
      if (dirty & /*$$scope*/
      16) {
        p1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p1.$set(p1_changes);
      const p2_changes = {};
      if (dirty & /*$$scope*/
      16) {
        p2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p2.$set(p2_changes);
      const list_changes = {};
      if (dirty & /*$$scope*/
      16) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(p0.$$.fragment, local);
      transition_in(p1.$$.fragment, local);
      transition_in(hr0.$$.fragment, local);
      transition_in(p2.$$.fragment, local);
      transition_in(hr1.$$.fragment, local);
      transition_in(list.$$.fragment, local);
      transition_in(p3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(p0.$$.fragment, local);
      transition_out(p1.$$.fragment, local);
      transition_out(hr0.$$.fragment, local);
      transition_out(p2.$$.fragment, local);
      transition_out(hr1.$$.fragment, local);
      transition_out(list.$$.fragment, local);
      transition_out(p3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(p0, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      destroy_component(p1);
      destroy_component(hr0);
      destroy_component(p2);
      destroy_component(hr1);
      destroy_component(list);
      if (detaching)
        detach(t5);
      destroy_component(p3, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div0;
  let img;
  let t;
  let div1;
  let layout;
  let current;
  img = new Img({
    props: {
      alignment: "mx-auto",
      src: logo,
      alt: "sample 1",
      size: "max-w-xs",
      class: "rounded-lg",
      href: "/home"
    }
  });
  layout = new Layout({
    props: {
      gap: 6,
      cols: "grid-cols-1 sm:grid-cols-3",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div0 = element("div");
      create_component(img.$$.fragment);
      t = space();
      div1 = element("div");
      create_component(layout.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(img.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(layout.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "top-img svelte-1edskix");
      attr(div1, "class", "center-text svelte-1edskix");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      mount_component(img, div0, null);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(layout, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & /*$$scope*/
      16) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(img.$$.fragment, local);
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(img.$$.fragment, local);
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_component(img);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div1);
      destroy_component(layout);
    }
  };
}
function instance($$self) {
  let app_name = appName;
  return [app_name];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
