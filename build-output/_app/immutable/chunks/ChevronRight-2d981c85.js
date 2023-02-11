import { S as SvelteComponent, i as init, s as safe_not_equal, F as assign, W as svg_element, X as claim_svg_element, m as children, h as detach, Y as set_svg_attributes, b as insert_hydration, M as listen, Q as get_spread_update, C as noop, D as compute_rest_props, G as exclude_internal_props, H as bubble } from "./index-68b73dd3.js";
function create_fragment$1(ctx) {
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
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71967 12.5303C7.42678 12.2374 7.42678 11.7626 7.71967 11.4697L15.2197 3.96967C15.5126 3.67678 15.9874 3.67678 16.2803 3.96967C16.5732 4.26256 16.5732 4.73744 16.2803 5.03033L9.31066 12L16.2803 18.9697C16.5732 19.2626 16.5732 19.7374 16.2803 20.0303C15.9874 20.3232 15.5126 20.3232 15.2197 20.0303L7.71967 12.5303Z" fill="${color}"/> `;
  let { ariaLabel = "chevron left" } = $$props;
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
class ChevronLeft extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
function create_fragment(ctx) {
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
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z" fill="${color}"/> `;
  let { ariaLabel = "chevron right" } = $$props;
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
class ChevronRight extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
export {
  ChevronRight as C,
  ChevronLeft as a
};
