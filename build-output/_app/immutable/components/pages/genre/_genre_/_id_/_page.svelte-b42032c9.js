import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, a as space, q as text, l as claim_element, m as children, y as claim_component, c as claim_space, h as detach, r as claim_text, n as attr, b as insert_hydration, z as mount_component, _ as append_hydration, f as transition_in, t as transition_out, A as destroy_component, a7 as component_subscribe, u as set_data } from "../../../../../chunks/index-68b73dd3.js";
import "../../../../../chunks/Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { H as Heading } from "../../../../../chunks/Heading-fc05dc71.js";
import { H as Hr } from "../../../../../chunks/Hr-bc790408.js";
import { p as page } from "../../../../../chunks/stores-089d934a.js";
import { P as PaginationComponent } from "../../../../../chunks/PaginationComponent-edbb4a66.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot(ctx) {
  let t0_value = (
    /*$page*/
    ctx[3].params.genre + ""
  );
  let t0;
  let t1;
  return {
    c() {
      t0 = text(t0_value);
      t1 = text(" Movies and TV Shows");
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_text(nodes, " Movies and TV Shows");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      8 && t0_value !== (t0_value = /*$page*/
      ctx2[3].params.genre + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_fragment(ctx) {
  let div0;
  let heading;
  let t0;
  let hr;
  let t1;
  let div1;
  let paginationcomponent0;
  let t2;
  let h2;
  let t3;
  let t4;
  let div2;
  let paginationcomponent1;
  let current;
  heading = new Heading({
    props: {
      tag: "h4",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  hr = new Hr({
    props: {
      class: "my-4 mx-auto md:my-10",
      width: "w-48",
      height: "h-1"
    }
  });
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
      create_component(heading.$$.fragment);
      t0 = space();
      create_component(hr.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(paginationcomponent0.$$.fragment);
      t2 = space();
      h2 = element("h2");
      t3 = text("Genre movies go here");
      t4 = space();
      div2 = element("div");
      create_component(paginationcomponent1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(heading.$$.fragment, div0_nodes);
      t0 = claim_space(div0_nodes);
      claim_component(hr.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(paginationcomponent0.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Genre movies go here");
      h2_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(paginationcomponent1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "genre svelte-1bvqhoo");
      attr(div1, "class", "pagination svelte-1bvqhoo");
      attr(div2, "class", "pagination svelte-1bvqhoo");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      mount_component(heading, div0, null);
      append_hydration(div0, t0);
      mount_component(hr, div0, null);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(paginationcomponent0, div1, null);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, h2, anchor);
      append_hydration(h2, t3);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div2, anchor);
      mount_component(paginationcomponent1, div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const heading_changes = {};
      if (dirty & /*$$scope, $page*/
      24) {
        heading_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading.$set(heading_changes);
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
      transition_in(heading.$$.fragment, local);
      transition_in(hr.$$.fragment, local);
      transition_in(paginationcomponent0.$$.fragment, local);
      transition_in(paginationcomponent1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(heading.$$.fragment, local);
      transition_out(hr.$$.fragment, local);
      transition_out(paginationcomponent0.$$.fragment, local);
      transition_out(paginationcomponent1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_component(heading);
      destroy_component(hr);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      destroy_component(paginationcomponent0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(h2);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div2);
      destroy_component(paginationcomponent1);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let pages;
  let previous;
  let next;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(3, $page = $$value));
  $$invalidate(2, pages = [{ name: 1, href: `/movies` }]);
  $$invalidate(1, previous = () => {
    {
      [...Array(5)].map((item, i) => console.log(item, i));
    }
  });
  $$invalidate(0, next = () => {
    {
      [...Array(5)].map((item, i) => console.log(item, i));
    }
  });
  return [next, previous, pages, $page];
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
