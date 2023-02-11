import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, x as create_component, l as claim_element, m as children, h as detach, c as claim_space, y as claim_component, a4 as src_url_equal, n as attr, b as insert_hydration, _ as append_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, u as set_data, e as empty, g as group_outros, d as check_outros, a6 as destroy_each } from "./index-68b73dd3.js";
import "./Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { H as Heading } from "./Heading-fc05dc71.js";
import { P } from "./P-82e30234.js";
const MovieCard_svelte_svelte_type_style_lang = "";
function create_default_slot_1(ctx) {
  let t_value = (
    /*movie*/
    (ctx[0].name ?? /*movie*/
    ctx[0].title) + ""
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
      if (dirty & /*movie*/
      1 && t_value !== (t_value = /*movie*/
      (ctx2[0].name ?? /*movie*/
      ctx2[0].title) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$1(ctx) {
  let t_value = (
    /*movie*/
    (ctx[0].release_date ?? /*movie*/
    ctx[0].first_air_date) + ""
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
      if (dirty & /*movie*/
      1 && t_value !== (t_value = /*movie*/
      (ctx2[0].release_date ?? /*movie*/
      ctx2[0].first_air_date) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$1(ctx) {
  let div2;
  let a;
  let img;
  let img_src_value;
  let img_alt_value;
  let a_href_value;
  let t0;
  let div1;
  let div0;
  let p0;
  let t1;
  let p1;
  let current;
  p0 = new P({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  p1 = new P({
    props: {
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      a = element("a");
      img = element("img");
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      create_component(p0.$$.fragment);
      t1 = space();
      create_component(p1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a = claim_element(div2_nodes, "A", { href: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
      a_nodes.forEach(detach);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(p0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      claim_component(p1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/w500` + /*movie*/
      ctx[0].backdrop_path))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = `${/*movie*/
      ctx[0].name ?? /*movie*/
      ctx[0].title}`);
      attr(img, "class", "svelte-5ewc20");
      attr(a, "href", a_href_value = `/${/*type*/
      ctx[1]}/${/*movie_name*/
      ctx[2]}--${/*movie*/
      ctx[0].id}`);
      attr(div0, "class", "tt svelte-5ewc20");
      attr(div1, "class", "description svelte-5ewc20");
      attr(div2, "class", "movie-card svelte-5ewc20");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, a);
      append_hydration(a, img);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      mount_component(p0, div0, null);
      append_hydration(div1, t1);
      mount_component(p1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*movie*/
      1 && !src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/w500` + /*movie*/
      ctx2[0].backdrop_path)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*movie*/
      1 && img_alt_value !== (img_alt_value = `${/*movie*/
      ctx2[0].name ?? /*movie*/
      ctx2[0].title}`)) {
        attr(img, "alt", img_alt_value);
      }
      if (!current || dirty & /*type, movie_name, movie*/
      7 && a_href_value !== (a_href_value = `/${/*type*/
      ctx2[1]}/${/*movie_name*/
      ctx2[2]}--${/*movie*/
      ctx2[0].id}`)) {
        attr(a, "href", a_href_value);
      }
      const p0_changes = {};
      if (dirty & /*$$scope, movie*/
      17) {
        p0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p0.$set(p0_changes);
      const p1_changes = {};
      if (dirty & /*$$scope, movie*/
      17) {
        p1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p1.$set(p1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(p0.$$.fragment, local);
      transition_in(p1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(p0.$$.fragment, local);
      transition_out(p1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(p0);
      destroy_component(p1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  var _a;
  let { movie } = $$props;
  let movie_name = (_a = movie.name) !== null && _a !== void 0 ? _a : movie.title;
  movie_name = movie_name.replace(/\s+/g, "-").toLowerCase();
  let { type } = $$props;
  $$self.$$set = ($$props2) => {
    if ("movie" in $$props2)
      $$invalidate(0, movie = $$props2.movie);
    if ("type" in $$props2)
      $$invalidate(1, type = $$props2.type);
  };
  return [movie, type, movie_name];
}
class MovieCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { movie: 0, type: 1 });
  }
}
const MovieListComponent_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_default_slot(ctx) {
  let t_value = (
    /*title*/
    ctx[2].cat + ""
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
      if (dirty & /*titles*/
      1 && t_value !== (t_value = /*title*/
      ctx2[2].cat + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(ctx) {
  let moviecard;
  let current;
  moviecard = new MovieCard({
    props: {
      movie: (
        /*movie*/
        ctx[5]
      ),
      type: (
        /*title*/
        ctx[2].type
      )
    }
  });
  return {
    c() {
      create_component(moviecard.$$.fragment);
    },
    l(nodes) {
      claim_component(moviecard.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(moviecard, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const moviecard_changes = {};
      if (dirty & /*titles*/
      1)
        moviecard_changes.movie = /*movie*/
        ctx2[5];
      if (dirty & /*titles*/
      1)
        moviecard_changes.type = /*title*/
        ctx2[2].type;
      moviecard.$set(moviecard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(moviecard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(moviecard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(moviecard, detaching);
    }
  };
}
function create_each_block(ctx) {
  let div1;
  let heading;
  let t0;
  let div0;
  let t1;
  let current;
  heading = new Heading({
    props: {
      tag: "h4",
      class: "tt",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  let each_value_1 = (
    /*title*/
    ctx[2].movies
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
      div1 = element("div");
      create_component(heading.$$.fragment);
      t0 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      claim_component(heading.$$.fragment, div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "movies svelte-19bcixo");
      attr(div0, "style", !/*is_similar_tab*/
      ctx[1] ? "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))" : "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))");
      attr(div1, "class", "home");
      attr(div1, "style", !/*is_similar_tab*/
      ctx[1] ? "margin-top: 40px;" : "margin-top: 20px;");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      mount_component(heading, div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div1, t1);
      current = true;
    },
    p(ctx2, dirty) {
      const heading_changes = {};
      if (dirty & /*$$scope, titles*/
      257) {
        heading_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading.$set(heading_changes);
      if (dirty & /*titles*/
      1) {
        each_value_1 = /*title*/
        ctx2[2].movies;
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
            each_blocks[i].m(div0, null);
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
      transition_in(heading.$$.fragment, local);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(heading.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(heading);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*titles*/
    ctx[0]
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
    p(ctx2, [dirty]) {
      if (dirty & /*is_similar_tab, titles*/
      3) {
        each_value = /*titles*/
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
function instance($$self, $$props, $$invalidate) {
  let { titles } = $$props;
  let { is_similar_tab = false } = titles[0];
  $$self.$$set = ($$props2) => {
    if ("titles" in $$props2)
      $$invalidate(0, titles = $$props2.titles);
  };
  return [titles, is_similar_tab];
}
class MovieListComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { titles: 0 });
  }
}
export {
  MovieListComponent as M
};
