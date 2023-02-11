import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, a4 as src_url_equal, n as attr, b as insert_hydration, _ as append_hydration, C as noop, ac as toggle_class, M as listen, H as bubble, q as text, r as claim_text, u as set_data, ad as null_to_empty, x as create_component, a as space, e as empty, y as claim_component, c as claim_space, z as mount_component, f as transition_in, g as group_outros, t as transition_out, d as check_outros, A as destroy_component, a3 as compute_slots, a6 as destroy_each, T as run_all, W as svg_element, X as claim_svg_element, I as create_slot, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes } from "../../../chunks/index-68b73dd3.js";
import "../../../chunks/Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { M as MovieListComponent } from "../../../chunks/MovieListComponent-3283e146.js";
function create_fragment$5(ctx) {
  let div;
  let img;
  let img_src_value;
  return {
    c() {
      div = element("div");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", { src: true, alt: true, title: true });
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*image*/
      ctx[0]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*altTag*/
        ctx[1]
      );
      attr(
        img,
        "title",
        /*attr*/
        ctx[2]
      );
      attr(
        div,
        "class",
        /*slideClass*/
        ctx[3]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, img);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*image*/
      1 && !src_url_equal(img.src, img_src_value = /*image*/
      ctx2[0])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*altTag*/
      2) {
        attr(
          img,
          "alt",
          /*altTag*/
          ctx2[1]
        );
      }
      if (dirty & /*attr*/
      4) {
        attr(
          img,
          "title",
          /*attr*/
          ctx2[2]
        );
      }
      if (dirty & /*slideClass*/
      8) {
        attr(
          div,
          "class",
          /*slideClass*/
          ctx2[3]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { image = "" } = $$props;
  let { altTag = "" } = $$props;
  let { attr: attr2 = "" } = $$props;
  let { slideClass = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("image" in $$props2)
      $$invalidate(0, image = $$props2.image);
    if ("altTag" in $$props2)
      $$invalidate(1, altTag = $$props2.altTag);
    if ("attr" in $$props2)
      $$invalidate(2, attr2 = $$props2.attr);
    if ("slideClass" in $$props2)
      $$invalidate(3, slideClass = $$props2.slideClass);
  };
  return [image, altTag, attr2, slideClass];
}
class Slide extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      image: 0,
      altTag: 1,
      attr: 2,
      slideClass: 3
    });
  }
}
function create_fragment$4(ctx) {
  let img;
  let img_id_value;
  let img_src_value;
  let img_title_value;
  let img_width_value;
  let mounted;
  let dispose;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        class: true,
        id: true,
        src: true,
        alt: true,
        title: true,
        width: true
      });
      this.h();
    },
    h() {
      attr(img, "class", "opacity-40 svelte-1o2b5yq");
      attr(img, "id", img_id_value = /*id*/
      ctx[3].toString());
      if (!src_url_equal(img.src, img_src_value = /*thumbImg*/
      ctx[0]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*altTag*/
        ctx[1]
      );
      attr(img, "title", img_title_value = "Image from " + /*titleLink*/
      ctx[2]);
      attr(img, "width", img_width_value = /*thumbWidth*/
      ctx[4] + "%");
      toggle_class(
        img,
        "active",
        /*selected*/
        ctx[5]
      );
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
      if (!mounted) {
        dispose = listen(
          img,
          "click",
          /*click_handler*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*id*/
      8 && img_id_value !== (img_id_value = /*id*/
      ctx2[3].toString())) {
        attr(img, "id", img_id_value);
      }
      if (dirty & /*thumbImg*/
      1 && !src_url_equal(img.src, img_src_value = /*thumbImg*/
      ctx2[0])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*altTag*/
      2) {
        attr(
          img,
          "alt",
          /*altTag*/
          ctx2[1]
        );
      }
      if (dirty & /*titleLink*/
      4 && img_title_value !== (img_title_value = "Image from " + /*titleLink*/
      ctx2[2])) {
        attr(img, "title", img_title_value);
      }
      if (dirty & /*thumbWidth*/
      16 && img_width_value !== (img_width_value = /*thumbWidth*/
      ctx2[4] + "%")) {
        attr(img, "width", img_width_value);
      }
      if (dirty & /*selected*/
      32) {
        toggle_class(
          img,
          "active",
          /*selected*/
          ctx2[5]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
      mounted = false;
      dispose();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { thumbImg = "" } = $$props;
  let { altTag = "" } = $$props;
  let { titleLink = "" } = $$props;
  let { id } = $$props;
  let { thumbWidth } = $$props;
  let { selected = false } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("thumbImg" in $$props2)
      $$invalidate(0, thumbImg = $$props2.thumbImg);
    if ("altTag" in $$props2)
      $$invalidate(1, altTag = $$props2.altTag);
    if ("titleLink" in $$props2)
      $$invalidate(2, titleLink = $$props2.titleLink);
    if ("id" in $$props2)
      $$invalidate(3, id = $$props2.id);
    if ("thumbWidth" in $$props2)
      $$invalidate(4, thumbWidth = $$props2.thumbWidth);
    if ("selected" in $$props2)
      $$invalidate(5, selected = $$props2.selected);
  };
  return [thumbImg, altTag, titleLink, id, thumbWidth, selected, click_handler];
}
class Thumbnail extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      thumbImg: 0,
      altTag: 1,
      titleLink: 2,
      id: 3,
      thumbWidth: 4,
      selected: 5
    });
  }
}
function create_fragment$3(ctx) {
  let div;
  let p;
  let t;
  return {
    c() {
      div = element("div");
      p = element("p");
      t = text(
        /*caption*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", { id: true, class: true });
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*caption*/
        ctx[0]
      );
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "id", "caption");
      attr(p, "class", "text-gray-900 dark:text-white");
      attr(
        div,
        "class",
        /*captionClass*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(p, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*caption*/
      1)
        set_data(
          t,
          /*caption*/
          ctx2[0]
        );
      if (dirty & /*captionClass*/
      2) {
        attr(
          div,
          "class",
          /*captionClass*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { caption = "" } = $$props;
  let { captionClass = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("caption" in $$props2)
      $$invalidate(0, caption = $$props2.caption);
    if ("captionClass" in $$props2)
      $$invalidate(1, captionClass = $$props2.captionClass);
  };
  return [caption, captionClass];
}
class Caption extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { caption: 0, captionClass: 1 });
  }
}
function create_fragment$2(ctx) {
  let button;
  let button_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        class: true,
        "aria-label": true
      });
      children(button).forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "class", button_class_value = null_to_empty(
        /*indicatorClass*/
        ctx[2]
      ) + " svelte-1o2b5yq");
      attr(
        button,
        "aria-label",
        /*name*/
        ctx[0]
      );
      toggle_class(
        button,
        "active",
        /*selected*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*indicatorClass*/
      4 && button_class_value !== (button_class_value = null_to_empty(
        /*indicatorClass*/
        ctx2[2]
      ) + " svelte-1o2b5yq")) {
        attr(button, "class", button_class_value);
      }
      if (dirty & /*name*/
      1) {
        attr(
          button,
          "aria-label",
          /*name*/
          ctx2[0]
        );
      }
      if (dirty & /*indicatorClass, selected*/
      6) {
        toggle_class(
          button,
          "active",
          /*selected*/
          ctx2[1]
        );
      }
    },
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
function instance$2($$self, $$props, $$invalidate) {
  let { name = "" } = $$props;
  let { selected = false } = $$props;
  let { indicatorClass = "" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("selected" in $$props2)
      $$invalidate(1, selected = $$props2.selected);
    if ("indicatorClass" in $$props2)
      $$invalidate(2, indicatorClass = $$props2.indicatorClass);
  };
  return [name, selected, indicatorClass, click_handler];
}
class Indicator extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { name: 0, selected: 1, indicatorClass: 2 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i].id;
  child_ctx[24] = list[i].imgurl;
  child_ctx[25] = list[i].name;
  child_ctx[26] = list[i].attribution;
  return child_ctx;
}
const get_next_slot_changes = (dirty) => ({});
const get_next_slot_context = (ctx) => ({});
const get_previous_slot_changes = (dirty) => ({});
const get_previous_slot_context = (ctx) => ({});
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[23] = list[i].id;
  child_ctx[24] = list[i].imgurl;
  child_ctx[25] = list[i].name;
  child_ctx[26] = list[i].attribution;
  return child_ctx;
}
function create_if_block_5(ctx) {
  let div;
  let current;
  let each_value_1 = (
    /*images*/
    ctx[3]
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
      attr(
        div,
        "class",
        /*indicatorDivClass*/
        ctx[6]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*images, imageShowingIndex, indicatorClass, goToSlide*/
      17672) {
        each_value_1 = /*images*/
        ctx2[3];
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
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (!current || dirty & /*indicatorDivClass*/
      64) {
        attr(
          div,
          "class",
          /*indicatorDivClass*/
          ctx2[6]
        );
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
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let indicator;
  let current;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[21](
        /*id*/
        ctx[23]
      )
    );
  }
  indicator = new Indicator({
    props: {
      name: (
        /*name*/
        ctx[25]
      ),
      selected: (
        /*imageShowingIndex*/
        ctx[10] === /*id*/
        ctx[23]
      ),
      indicatorClass: (
        /*indicatorClass*/
        ctx[8]
      )
    }
  });
  indicator.$on("click", click_handler);
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
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const indicator_changes = {};
      if (dirty & /*images*/
      8)
        indicator_changes.name = /*name*/
        ctx[25];
      if (dirty & /*imageShowingIndex, images*/
      1032)
        indicator_changes.selected = /*imageShowingIndex*/
        ctx[10] === /*id*/
        ctx[23];
      if (dirty & /*indicatorClass*/
      256)
        indicator_changes.indicatorClass = /*indicatorClass*/
        ctx[8];
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
function create_if_block_2(ctx) {
  let button0;
  let span1;
  let current_block_type_index;
  let if_block0;
  let t0;
  let span0;
  let t1;
  let t2;
  let button1;
  let span3;
  let current_block_type_index_1;
  let if_block1;
  let t3;
  let span2;
  let t4;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_4, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$$slots*/
      ctx2[16].previous
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const if_block_creators_1 = [create_if_block_3, create_else_block];
  const if_blocks_1 = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*$$slots*/
      ctx2[16].next
    )
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_1(ctx);
  if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  return {
    c() {
      button0 = element("button");
      span1 = element("span");
      if_block0.c();
      t0 = space();
      span0 = element("span");
      t1 = text("Previous");
      t2 = space();
      button1 = element("button");
      span3 = element("span");
      if_block1.c();
      t3 = space();
      span2 = element("span");
      t4 = text("Next");
      this.h();
    },
    l(nodes) {
      button0 = claim_element(nodes, "BUTTON", {
        type: true,
        class: true,
        "data-carousel-prev": true
      });
      var button0_nodes = children(button0);
      span1 = claim_element(button0_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      if_block0.l(span1_nodes);
      t0 = claim_space(span1_nodes);
      span0 = claim_element(span1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "Previous");
      span0_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {
        type: true,
        class: true,
        "data-carousel-next": true
      });
      var button1_nodes = children(button1);
      span3 = claim_element(button1_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      if_block1.l(span3_nodes);
      t3 = claim_space(span3_nodes);
      span2 = claim_element(span3_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, "Next");
      span2_nodes.forEach(detach);
      span3_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "hidden");
      attr(span1, "class", "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none");
      attr(button0, "type", "button");
      attr(button0, "class", "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none");
      attr(button0, "data-carousel-prev", "");
      attr(span2, "class", "hidden");
      attr(span3, "class", "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none");
      attr(button1, "type", "button");
      attr(button1, "class", "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none");
      attr(button1, "data-carousel-next", "");
    },
    m(target, anchor) {
      insert_hydration(target, button0, anchor);
      append_hydration(button0, span1);
      if_blocks[current_block_type_index].m(span1, null);
      append_hydration(span1, t0);
      append_hydration(span1, span0);
      append_hydration(span0, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, button1, anchor);
      append_hydration(button1, span3);
      if_blocks_1[current_block_type_index_1].m(span3, null);
      append_hydration(span3, t3);
      append_hydration(span3, span2);
      append_hydration(span2, t4);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*prevSlide*/
            ctx[13]
          ),
          listen(
            button1,
            "click",
            /*nextSlide*/
            ctx[12]
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(span1, t0);
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_1(ctx2);
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
        if_block1.m(span3, t3);
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
        detach(button0);
      if_blocks[current_block_type_index].d();
      if (detaching)
        detach(t2);
      if (detaching)
        detach(button1);
      if_blocks_1[current_block_type_index_1].d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_else_block_1(ctx) {
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
        "aria-hidden": true,
        class: true,
        fill: true,
        stroke: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M15 19l-7-7 7-7");
      attr(svg, "aria-hidden", "true");
      attr(svg, "class", "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300");
      attr(svg, "fill", "none");
      attr(svg, "stroke", "currentColor");
      attr(svg, "viewBox", "0 0 24 24");
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
function create_if_block_4(ctx) {
  let current;
  const previous_slot_template = (
    /*#slots*/
    ctx[20].previous
  );
  const previous_slot = create_slot(
    previous_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    get_previous_slot_context
  );
  return {
    c() {
      if (previous_slot)
        previous_slot.c();
    },
    l(nodes) {
      if (previous_slot)
        previous_slot.l(nodes);
    },
    m(target, anchor) {
      if (previous_slot) {
        previous_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (previous_slot) {
        if (previous_slot.p && (!current || dirty & /*$$scope*/
        524288)) {
          update_slot_base(
            previous_slot,
            previous_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[19],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[19]
            ) : get_slot_changes(
              previous_slot_template,
              /*$$scope*/
              ctx2[19],
              dirty,
              get_previous_slot_changes
            ),
            get_previous_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(previous_slot, local);
      current = true;
    },
    o(local) {
      transition_out(previous_slot, local);
      current = false;
    },
    d(detaching) {
      if (previous_slot)
        previous_slot.d(detaching);
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
        "aria-hidden": true,
        class: true,
        fill: true,
        stroke: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M9 5l7 7-7 7");
      attr(svg, "aria-hidden", "true");
      attr(svg, "class", "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300");
      attr(svg, "fill", "none");
      attr(svg, "stroke", "currentColor");
      attr(svg, "viewBox", "0 0 24 24");
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
  const next_slot_template = (
    /*#slots*/
    ctx[20].next
  );
  const next_slot = create_slot(
    next_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    get_next_slot_context
  );
  return {
    c() {
      if (next_slot)
        next_slot.c();
    },
    l(nodes) {
      if (next_slot)
        next_slot.l(nodes);
    },
    m(target, anchor) {
      if (next_slot) {
        next_slot.m(target, anchor);
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
      transition_in(next_slot, local);
      current = true;
    },
    o(local) {
      transition_out(next_slot, local);
      current = false;
    },
    d(detaching) {
      if (next_slot)
        next_slot.d(detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let caption;
  let current;
  caption = new Caption({
    props: {
      caption: (
        /*images*/
        ctx[3][
          /*imageShowingIndex*/
          ctx[10]
        ].name
      ),
      captionClass: (
        /*captionClass*/
        ctx[7]
      )
    }
  });
  return {
    c() {
      create_component(caption.$$.fragment);
    },
    l(nodes) {
      claim_component(caption.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(caption, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const caption_changes = {};
      if (dirty & /*images, imageShowingIndex*/
      1032)
        caption_changes.caption = /*images*/
        ctx2[3][
          /*imageShowingIndex*/
          ctx2[10]
        ].name;
      if (dirty & /*captionClass*/
      128)
        caption_changes.captionClass = /*captionClass*/
        ctx2[7];
      caption.$set(caption_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(caption.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(caption.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(caption, detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let current;
  let each_value = (
    /*images*/
    ctx[3]
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
      attr(div, "class", "flex flex-row justify-center bg-gray-100");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*thumbWidth, images, imageShowingIndex, goToSlide*/
      50184) {
        each_value = /*images*/
        ctx2[3];
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
function create_each_block(ctx) {
  let thumbnail;
  let current;
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[22](
        /*id*/
        ctx[23]
      )
    );
  }
  thumbnail = new Thumbnail({
    props: {
      thumbWidth: (
        /*thumbWidth*/
        ctx[15]
      ),
      thumbImg: (
        /*imgurl*/
        ctx[24]
      ),
      altTag: (
        /*name*/
        ctx[25]
      ),
      titleLink: (
        /*attribution*/
        ctx[26]
      ),
      id: (
        /*id*/
        ctx[23]
      ),
      selected: (
        /*imageShowingIndex*/
        ctx[10] === /*id*/
        ctx[23]
      )
    }
  });
  thumbnail.$on("click", click_handler_1);
  return {
    c() {
      create_component(thumbnail.$$.fragment);
    },
    l(nodes) {
      claim_component(thumbnail.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(thumbnail, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const thumbnail_changes = {};
      if (dirty & /*images*/
      8)
        thumbnail_changes.thumbImg = /*imgurl*/
        ctx[24];
      if (dirty & /*images*/
      8)
        thumbnail_changes.altTag = /*name*/
        ctx[25];
      if (dirty & /*images*/
      8)
        thumbnail_changes.titleLink = /*attribution*/
        ctx[26];
      if (dirty & /*images*/
      8)
        thumbnail_changes.id = /*id*/
        ctx[23];
      if (dirty & /*imageShowingIndex, images*/
      1032)
        thumbnail_changes.selected = /*imageShowingIndex*/
        ctx[10] === /*id*/
        ctx[23];
      thumbnail.$set(thumbnail_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(thumbnail.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(thumbnail.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(thumbnail, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let slide;
  let t0;
  let t1;
  let t2;
  let t3;
  let if_block3_anchor;
  let current;
  slide = new Slide({
    props: {
      image: (
        /*image*/
        ctx[11].imgurl
      ),
      altTag: (
        /*image*/
        ctx[11].name
      ),
      attr: (
        /*image*/
        ctx[11].attribution
      ),
      slideClass: (
        /*slideClass*/
        ctx[9]
      )
    }
  });
  let if_block0 = (
    /*showIndicators*/
    ctx[0] && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*slideControls*/
    ctx[4] && create_if_block_2(ctx)
  );
  let if_block2 = (
    /*showCaptions*/
    ctx[1] && create_if_block_1(ctx)
  );
  let if_block3 = (
    /*showThumbs*/
    ctx[2] && create_if_block(ctx)
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(slide.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(slide.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      if (if_block0)
        if_block0.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t3 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h() {
      attr(
        div0,
        "class",
        /*divClass*/
        ctx[5]
      );
      attr(div1, "id", "default-carousel");
      attr(div1, "class", "relative");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(slide, div0, null);
      append_hydration(div1, t0);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t1);
      if (if_block1)
        if_block1.m(div1, null);
      insert_hydration(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t3, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration(target, if_block3_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const slide_changes = {};
      if (dirty & /*image*/
      2048)
        slide_changes.image = /*image*/
        ctx2[11].imgurl;
      if (dirty & /*image*/
      2048)
        slide_changes.altTag = /*image*/
        ctx2[11].name;
      if (dirty & /*image*/
      2048)
        slide_changes.attr = /*image*/
        ctx2[11].attribution;
      if (dirty & /*slideClass*/
      512)
        slide_changes.slideClass = /*slideClass*/
        ctx2[9];
      slide.$set(slide_changes);
      if (!current || dirty & /*divClass*/
      32) {
        attr(
          div0,
          "class",
          /*divClass*/
          ctx2[5]
        );
      }
      if (
        /*showIndicators*/
        ctx2[0]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*showIndicators*/
          1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*slideControls*/
        ctx2[4]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*slideControls*/
          16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*showCaptions*/
        ctx2[1]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*showCaptions*/
          2) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_1(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(t3.parentNode, t3);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (
        /*showThumbs*/
        ctx2[2]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*showThumbs*/
          4) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(slide.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(if_block3);
      current = true;
    },
    o(local) {
      transition_out(slide.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(if_block3);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(slide);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t3);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(if_block3_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let image;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { showIndicators = true } = $$props;
  let { showCaptions: showCaptions2 = true } = $$props;
  let { showThumbs: showThumbs2 = true } = $$props;
  let { images } = $$props;
  let { slideControls = true } = $$props;
  let { loop = false } = $$props;
  let { duration = 2e3 } = $$props;
  let { divClass = "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" } = $$props;
  let { indicatorDivClass = "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2" } = $$props;
  let { captionClass = "h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center" } = $$props;
  let { indicatorClass = "w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" } = $$props;
  let { slideClass = "" } = $$props;
  let imageShowingIndex = 0;
  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      $$invalidate(10, imageShowingIndex = 0);
    } else {
      $$invalidate(10, imageShowingIndex += 1);
    }
  };
  const prevSlide = () => {
    if (imageShowingIndex === 0) {
      $$invalidate(10, imageShowingIndex = images.length - 1);
    } else {
      $$invalidate(10, imageShowingIndex -= 1);
    }
  };
  const goToSlide = (number) => $$invalidate(10, imageShowingIndex = number);
  let thumbWidth = 100 / images.length;
  if (loop) {
    setInterval(
      () => {
        nextSlide();
      },
      duration
    );
  }
  const click_handler = (id) => goToSlide(id);
  const click_handler_1 = (id) => goToSlide(id);
  $$self.$$set = ($$props2) => {
    if ("showIndicators" in $$props2)
      $$invalidate(0, showIndicators = $$props2.showIndicators);
    if ("showCaptions" in $$props2)
      $$invalidate(1, showCaptions2 = $$props2.showCaptions);
    if ("showThumbs" in $$props2)
      $$invalidate(2, showThumbs2 = $$props2.showThumbs);
    if ("images" in $$props2)
      $$invalidate(3, images = $$props2.images);
    if ("slideControls" in $$props2)
      $$invalidate(4, slideControls = $$props2.slideControls);
    if ("loop" in $$props2)
      $$invalidate(17, loop = $$props2.loop);
    if ("duration" in $$props2)
      $$invalidate(18, duration = $$props2.duration);
    if ("divClass" in $$props2)
      $$invalidate(5, divClass = $$props2.divClass);
    if ("indicatorDivClass" in $$props2)
      $$invalidate(6, indicatorDivClass = $$props2.indicatorDivClass);
    if ("captionClass" in $$props2)
      $$invalidate(7, captionClass = $$props2.captionClass);
    if ("indicatorClass" in $$props2)
      $$invalidate(8, indicatorClass = $$props2.indicatorClass);
    if ("slideClass" in $$props2)
      $$invalidate(9, slideClass = $$props2.slideClass);
    if ("$$scope" in $$props2)
      $$invalidate(19, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*images, imageShowingIndex*/
    1032) {
      $$invalidate(11, image = images[imageShowingIndex]);
    }
  };
  return [
    showIndicators,
    showCaptions2,
    showThumbs2,
    images,
    slideControls,
    divClass,
    indicatorDivClass,
    captionClass,
    indicatorClass,
    slideClass,
    imageShowingIndex,
    image,
    nextSlide,
    prevSlide,
    goToSlide,
    thumbWidth,
    $$slots,
    loop,
    duration,
    $$scope,
    slots,
    click_handler,
    click_handler_1
  ];
}
class Carousel extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      showIndicators: 0,
      showCaptions: 1,
      showThumbs: 2,
      images: 3,
      slideControls: 4,
      loop: 17,
      duration: 18,
      divClass: 5,
      indicatorDivClass: 6,
      captionClass: 7,
      indicatorClass: 8,
      slideClass: 9
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div1;
  let div0;
  let carousel;
  let t;
  let movielistcomponent;
  let current;
  carousel = new Carousel({
    props: {
      images: (
        /*images*/
        ctx[0]
      ),
      loop: true,
      showCaptions,
      showThumbs,
      duration: "3000"
    }
  });
  movielistcomponent = new MovieListComponent({ props: { titles: (
    /*titles*/
    ctx[1]
  ) } });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(carousel.$$.fragment);
      t = space();
      create_component(movielistcomponent.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, id: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(carousel.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t = claim_space(nodes);
      claim_component(movielistcomponent.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(div0, "class", "overlay");
      attr(div1, "class", "max-w-4xl svelte-n2kwbc");
      attr(div1, "id", "carousel");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(carousel, div0, null);
      insert_hydration(target, t, anchor);
      mount_component(movielistcomponent, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(carousel.$$.fragment, local);
      transition_in(movielistcomponent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(carousel.$$.fragment, local);
      transition_out(movielistcomponent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(carousel);
      if (detaching)
        detach(t);
      destroy_component(movielistcomponent, detaching);
    }
  };
}
let showThumbs = false;
let showCaptions = false;
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  let { trending: { results: trends }, now_playing: { results: now_playing }, popular: { results: popular }, top_rated: { results: top_rated }, upcoming: { results: upcoming } } = data;
  let images = trends.map((trend) => {
    return {
      id: trend.id,
      imgurl: `https://image.tmdb.org/t/p/w500${trend.backdrop_path}`,
      name: trend.backdrop_path,
      attribution: trend.backdrop_path
    };
  });
  let titles = [
    {
      cat: "Latest Movies",
      movies: trends,
      type: "movie"
    },
    {
      cat: "New Releases",
      movies: now_playing,
      type: "movie"
    },
    {
      cat: "Popular Movies",
      movies: popular,
      type: "movie"
    },
    {
      cat: "Top Rated Movies",
      movies: top_rated,
      type: "movie"
    },
    {
      cat: "Upcoming Movies",
      movies: upcoming,
      type: "movie"
    }
  ];
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(2, data = $$props2.data);
  };
  return [images, titles, data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 2 });
  }
}
export {
  Page as default
};
