import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, a as space, l as claim_element, m as children, y as claim_component, h as detach, c as claim_space, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-68b73dd3.js";
import { M as MovieListComponent } from "../../../chunks/MovieListComponent-3283e146.js";
import { P as PaginationComponent } from "../../../chunks/PaginationComponent-edbb4a66.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div0;
  let paginationcomponent0;
  let t0;
  let movielistcomponent;
  let t1;
  let div1;
  let paginationcomponent1;
  let current;
  paginationcomponent0 = new PaginationComponent({
    props: {
      previous: (
        /*previous*/
        ctx[1]
      ),
      next: (
        /*next*/
        ctx[0]
      ),
      pages: (
        /*pages*/
        ctx[2]
      )
    }
  });
  movielistcomponent = new MovieListComponent({ props: { titles: (
    /*titles*/
    ctx[3]
  ) } });
  paginationcomponent1 = new PaginationComponent({
    props: {
      previous: (
        /*previous*/
        ctx[1]
      ),
      next: (
        /*next*/
        ctx[0]
      ),
      pages: (
        /*pages*/
        ctx[2]
      )
    }
  });
  return {
    c() {
      div0 = element("div");
      create_component(paginationcomponent0.$$.fragment);
      t0 = space();
      create_component(movielistcomponent.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(paginationcomponent1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(paginationcomponent0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      claim_component(movielistcomponent.$$.fragment, nodes);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(paginationcomponent1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "pagination svelte-5pjen6");
      attr(div1, "class", "pagination svelte-5pjen6");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      mount_component(paginationcomponent0, div0, null);
      insert_hydration(target, t0, anchor);
      mount_component(movielistcomponent, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(paginationcomponent1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const paginationcomponent0_changes = {};
      if (dirty & /*previous*/
      2)
        paginationcomponent0_changes.previous = /*previous*/
        ctx2[1];
      if (dirty & /*next*/
      1)
        paginationcomponent0_changes.next = /*next*/
        ctx2[0];
      if (dirty & /*pages*/
      4)
        paginationcomponent0_changes.pages = /*pages*/
        ctx2[2];
      paginationcomponent0.$set(paginationcomponent0_changes);
      const paginationcomponent1_changes = {};
      if (dirty & /*previous*/
      2)
        paginationcomponent1_changes.previous = /*previous*/
        ctx2[1];
      if (dirty & /*next*/
      1)
        paginationcomponent1_changes.next = /*next*/
        ctx2[0];
      if (dirty & /*pages*/
      4)
        paginationcomponent1_changes.pages = /*pages*/
        ctx2[2];
      paginationcomponent1.$set(paginationcomponent1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(paginationcomponent0.$$.fragment, local);
      transition_in(movielistcomponent.$$.fragment, local);
      transition_in(paginationcomponent1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(paginationcomponent0.$$.fragment, local);
      transition_out(movielistcomponent.$$.fragment, local);
      transition_out(paginationcomponent1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_component(paginationcomponent0);
      if (detaching)
        detach(t0);
      destroy_component(movielistcomponent, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      destroy_component(paginationcomponent1);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let pages;
  let previous;
  let next;
  let { data } = $$props;
  let { popular } = data;
  let { results, page: current_page, total_pages } = popular;
  let titles = [
    {
      cat: "Popular Movies",
      movies: results,
      type: "movie"
    }
  ];
  let generatePages = (action) => {
    let last = action == "next" ? pages[pages.length - 1].name : pages[0].name;
    if (action == "next" ? last + 5 < total_pages : last - 5 > 1) {
      let _arr = [];
      if (last == 1)
        _arr.push({ name: last, href: `/movies?page=${last}` });
      [...Array(5)].map((item, i) => {
        _arr.push({
          name: action == "next" ? last + 1 : last - 1,
          href: `/movies?page=${action == "next" ? last + 1 : last - 1}`
        });
        action == "next" ? last++ : last--;
      });
      if (last == 2)
        _arr.push({ name: 1, href: `/movies?page=1` });
      $$invalidate(2, pages = action == "next" ? _arr : _arr.reverse());
    }
  };
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(4, data = $$props2.data);
  };
  $$invalidate(2, pages = [
    {
      name: current_page,
      href: `/movies?page=${current_page}`
    }
  ]);
  $$invalidate(1, previous = () => {
    generatePages("previous");
  });
  $$invalidate(0, next = () => {
    generatePages("next");
  });
  return [next, previous, pages, titles, data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 4 });
  }
}
export {
  Page as default
};
