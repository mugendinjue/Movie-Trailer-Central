import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, a as space, l as claim_element, m as children, y as claim_component, h as detach, c as claim_space, n as attr, b as insert_hydration, _ as append_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text } from "../../../chunks/index-68b73dd3.js";
import "../../../chunks/Indicator.svelte_svelte_type_style_lang-6134595f.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/BreadcrumbItem-3c4674a0.js";
import { H as Heading } from "../../../chunks/Heading-fc05dc71.js";
import { P } from "../../../chunks/P-82e30234.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_16(ctx) {
  let t;
  return {
    c() {
      t = text("Home");
    },
    l(nodes) {
      t = claim_text(nodes, "Home");
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
function create_default_slot_15(ctx) {
  let t;
  return {
    c() {
      t = text("Terms and conditions");
    },
    l(nodes) {
      t = claim_text(nodes, "Terms and conditions");
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
function create_default_slot_14(ctx) {
  let breadcrumbitem0;
  let t;
  let breadcrumbitem1;
  let current;
  breadcrumbitem0 = new BreadcrumbItem({
    props: {
      href: "/",
      home: true,
      $$slots: { default: [create_default_slot_16] },
      $$scope: { ctx }
    }
  });
  breadcrumbitem1 = new BreadcrumbItem({
    props: {
      $$slots: { default: [create_default_slot_15] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(breadcrumbitem0.$$.fragment);
      t = space();
      create_component(breadcrumbitem1.$$.fragment);
    },
    l(nodes) {
      claim_component(breadcrumbitem0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(breadcrumbitem1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(breadcrumbitem0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(breadcrumbitem1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const breadcrumbitem0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        breadcrumbitem0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumbitem0.$set(breadcrumbitem0_changes);
      const breadcrumbitem1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        breadcrumbitem1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumbitem1.$set(breadcrumbitem1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(breadcrumbitem0.$$.fragment, local);
      transition_in(breadcrumbitem1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(breadcrumbitem0.$$.fragment, local);
      transition_out(breadcrumbitem1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(breadcrumbitem0, detaching);
      if (detaching)
        detach(t);
      destroy_component(breadcrumbitem1, detaching);
    }
  };
}
function create_default_slot_13(ctx) {
  let t;
  return {
    c() {
      t = text("Terms and Conditions");
    },
    l(nodes) {
      t = claim_text(nodes, "Terms and Conditions");
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
function create_default_slot_12(ctx) {
  let t;
  return {
    c() {
      t = text("This Agreement contains the complete terms and conditions that apply to your participation in our site. If you wish to use the site including its tools and services please read these terms of use carefully. By accessing this site or using any part of the site or any content or services hereof, you agree to become bound by these terms and conditions. If you do not agree to all the terms and conditions, then you may not access the site or use the content or any services in the site.");
    },
    l(nodes) {
      t = claim_text(nodes, "This Agreement contains the complete terms and conditions that apply to your participation in our site. If you wish to use the site including its tools and services please read these terms of use carefully. By accessing this site or using any part of the site or any content or services hereof, you agree to become bound by these terms and conditions. If you do not agree to all the terms and conditions, then you may not access the site or use the content or any services in the site.");
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
function create_default_slot_11(ctx) {
  let t;
  return {
    c() {
      t = text("Modifications of Terms and Conditions");
    },
    l(nodes) {
      t = claim_text(nodes, "Modifications of Terms and Conditions");
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
function create_default_slot_10(ctx) {
  let t;
  return {
    c() {
      t = text("Amendments to this agreement can be made and effected by us from time to time without specific notice to your end. Agreement posted on the Site reflects the latest agreement and you should carefully review the same before you use our site.");
    },
    l(nodes) {
      t = claim_text(nodes, "Amendments to this agreement can be made and effected by us from time to time without specific notice to your end. Agreement posted on the Site reflects the latest agreement and you should carefully review the same before you use our site.");
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
function create_default_slot_9(ctx) {
  let t;
  return {
    c() {
      t = text("Use of the site");
    },
    l(nodes) {
      t = claim_text(nodes, "Use of the site");
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
function create_default_slot_8(ctx) {
  let t;
  return {
    c() {
      t = text("The Site allows you to post offers, sell, advertise, bid and shop online. However, you are prohibited to do the following acts, to wit: (a) use our sites, including its services and or tools if you are not able to form legally binding contracts, are under the age of 18, or are temporarily or indefinitely suspended from using our sites, services, or tools (b) posting of an items in inappropriate category or areas on our sites and services; (c) collecting information about users’ personal information; (d) maneuvering the price of any item or interfere with other users’ listings; (f) post false, inaccurate, misleading, defamatory, or libelous content; (g) take any action that may damage the rating system.");
    },
    l(nodes) {
      t = claim_text(nodes, "The Site allows you to post offers, sell, advertise, bid and shop online. However, you are prohibited to do the following acts, to wit: (a) use our sites, including its services and or tools if you are not able to form legally binding contracts, are under the age of 18, or are temporarily or indefinitely suspended from using our sites, services, or tools (b) posting of an items in inappropriate category or areas on our sites and services; (c) collecting information about users’ personal information; (d) maneuvering the price of any item or interfere with other users’ listings; (f) post false, inaccurate, misleading, defamatory, or libelous content; (g) take any action that may damage the rating system.");
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
function create_default_slot_7(ctx) {
  let t;
  return {
    c() {
      t = text("Registration Information");
    },
    l(nodes) {
      t = claim_text(nodes, "Registration Information");
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
function create_default_slot_6(ctx) {
  let t;
  return {
    c() {
      t = text("For you to complete the sign-up process in our site, you must provide your full legal name, current address, a valid email address, member name and any other information needed in order to complete the signup process. You must qualify that you are 18 years or older and must be responsible for keeping your password secure and be responsible for all activities and contents that are uploaded under your account. You must not transmit any worms or viruses or any code of a destructive nature. Any information provided by you or gathered by the site or third parties during any visit to the site shall be subject to the terms of YesMovies.to’s Privacy Policy.");
    },
    l(nodes) {
      t = claim_text(nodes, "For you to complete the sign-up process in our site, you must provide your full legal name, current address, a valid email address, member name and any other information needed in order to complete the signup process. You must qualify that you are 18 years or older and must be responsible for keeping your password secure and be responsible for all activities and contents that are uploaded under your account. You must not transmit any worms or viruses or any code of a destructive nature. Any information provided by you or gathered by the site or third parties during any visit to the site shall be subject to the terms of YesMovies.to’s Privacy Policy.");
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
function create_default_slot_5(ctx) {
  let t;
  return {
    c() {
      t = text("Modifications of Terms and Conditions");
    },
    l(nodes) {
      t = claim_text(nodes, "Modifications of Terms and Conditions");
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
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Amendments to this agreement can be made and effected by us from time to time without specific notice to your end. Agreement posted on the Site reflects the latest agreement and you should carefully review the same before you use our site.");
    },
    l(nodes) {
      t = claim_text(nodes, "Amendments to this agreement can be made and effected by us from time to time without specific notice to your end. Agreement posted on the Site reflects the latest agreement and you should carefully review the same before you use our site.");
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
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Use of the site");
    },
    l(nodes) {
      t = claim_text(nodes, "Use of the site");
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
  let t;
  return {
    c() {
      t = text("The Site allows you to post offers, sell, advertise, bid and shop online. However, you are prohibited to do the following acts, to wit: (a) use our sites, including its services and or tools if you are not able to form legally binding contracts, are under the age of 18, or are temporarily or indefinitely suspended from using our sites, services, or tools (b) posting of an items in inappropriate category or areas on our sites and services; (c) collecting information about users’ personal information; (d) maneuvering the price of any item or interfere with other users’ listings; (f) post false, inaccurate, misleading, defamatory, or libelous content; (g) take any action that may damage the rating system.");
    },
    l(nodes) {
      t = claim_text(nodes, "The Site allows you to post offers, sell, advertise, bid and shop online. However, you are prohibited to do the following acts, to wit: (a) use our sites, including its services and or tools if you are not able to form legally binding contracts, are under the age of 18, or are temporarily or indefinitely suspended from using our sites, services, or tools (b) posting of an items in inappropriate category or areas on our sites and services; (c) collecting information about users’ personal information; (d) maneuvering the price of any item or interfere with other users’ listings; (f) post false, inaccurate, misleading, defamatory, or libelous content; (g) take any action that may damage the rating system.");
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
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Registration Information");
    },
    l(nodes) {
      t = claim_text(nodes, "Registration Information");
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
  let t;
  return {
    c() {
      t = text("For you to complete the sign-up process in our site, you must provide your full legal name, current address, a valid email address, member name and any other information needed in order to complete the signup process. You must qualify that you are 18 years or older and must be responsible for keeping your password secure and be responsible for all activities and contents that are uploaded under your account. You must not transmit any worms or viruses or any code of a destructive nature. Any information provided by you or gathered by the site or third parties during any visit to the site shall be subject to the terms of YesMovies.to’s Privacy Policy.");
    },
    l(nodes) {
      t = claim_text(nodes, "For you to complete the sign-up process in our site, you must provide your full legal name, current address, a valid email address, member name and any other information needed in order to complete the signup process. You must qualify that you are 18 years or older and must be responsible for keeping your password secure and be responsible for all activities and contents that are uploaded under your account. You must not transmit any worms or viruses or any code of a destructive nature. Any information provided by you or gathered by the site or third parties during any visit to the site shall be subject to the terms of YesMovies.to’s Privacy Policy.");
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
function create_fragment(ctx) {
  let div1;
  let div0;
  let breadcrumb;
  let t0;
  let heading0;
  let t1;
  let p0;
  let t2;
  let heading1;
  let t3;
  let p1;
  let t4;
  let heading2;
  let t5;
  let p2;
  let t6;
  let heading3;
  let t7;
  let p3;
  let t8;
  let heading4;
  let t9;
  let p4;
  let t10;
  let heading5;
  let t11;
  let p5;
  let t12;
  let heading6;
  let t13;
  let p6;
  let current;
  breadcrumb = new Breadcrumb({
    props: {
      "aria-label": "Default breadcrumb example",
      $$slots: { default: [create_default_slot_14] },
      $$scope: { ctx }
    }
  });
  heading0 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    }
  });
  p0 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  heading1 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  p1 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    }
  });
  heading2 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  p2 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  heading3 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  p3 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  heading4 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  p4 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  heading5 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  p5 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  heading6 = new Heading({
    props: {
      tag: "h4",
      class: "mb-4",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  p6 = new P({
    props: {
      weight: "light",
      color: "text-gray-500 dark:text-gray-400",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(breadcrumb.$$.fragment);
      t0 = space();
      create_component(heading0.$$.fragment);
      t1 = space();
      create_component(p0.$$.fragment);
      t2 = space();
      create_component(heading1.$$.fragment);
      t3 = space();
      create_component(p1.$$.fragment);
      t4 = space();
      create_component(heading2.$$.fragment);
      t5 = space();
      create_component(p2.$$.fragment);
      t6 = space();
      create_component(heading3.$$.fragment);
      t7 = space();
      create_component(p3.$$.fragment);
      t8 = space();
      create_component(heading4.$$.fragment);
      t9 = space();
      create_component(p4.$$.fragment);
      t10 = space();
      create_component(heading5.$$.fragment);
      t11 = space();
      create_component(p5.$$.fragment);
      t12 = space();
      create_component(heading6.$$.fragment);
      t13 = space();
      create_component(p6.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(breadcrumb.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      claim_component(heading0.$$.fragment, div1_nodes);
      t1 = claim_space(div1_nodes);
      claim_component(p0.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(heading1.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(p1.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(heading2.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(p2.$$.fragment, div1_nodes);
      t6 = claim_space(div1_nodes);
      claim_component(heading3.$$.fragment, div1_nodes);
      t7 = claim_space(div1_nodes);
      claim_component(p3.$$.fragment, div1_nodes);
      t8 = claim_space(div1_nodes);
      claim_component(heading4.$$.fragment, div1_nodes);
      t9 = claim_space(div1_nodes);
      claim_component(p4.$$.fragment, div1_nodes);
      t10 = claim_space(div1_nodes);
      claim_component(heading5.$$.fragment, div1_nodes);
      t11 = claim_space(div1_nodes);
      claim_component(p5.$$.fragment, div1_nodes);
      t12 = claim_space(div1_nodes);
      claim_component(heading6.$$.fragment, div1_nodes);
      t13 = claim_space(div1_nodes);
      claim_component(p6.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "top svelte-ab2gzj");
      attr(div1, "class", "body svelte-ab2gzj");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(breadcrumb, div0, null);
      append_hydration(div1, t0);
      mount_component(heading0, div1, null);
      append_hydration(div1, t1);
      mount_component(p0, div1, null);
      append_hydration(div1, t2);
      mount_component(heading1, div1, null);
      append_hydration(div1, t3);
      mount_component(p1, div1, null);
      append_hydration(div1, t4);
      mount_component(heading2, div1, null);
      append_hydration(div1, t5);
      mount_component(p2, div1, null);
      append_hydration(div1, t6);
      mount_component(heading3, div1, null);
      append_hydration(div1, t7);
      mount_component(p3, div1, null);
      append_hydration(div1, t8);
      mount_component(heading4, div1, null);
      append_hydration(div1, t9);
      mount_component(p4, div1, null);
      append_hydration(div1, t10);
      mount_component(heading5, div1, null);
      append_hydration(div1, t11);
      mount_component(p5, div1, null);
      append_hydration(div1, t12);
      mount_component(heading6, div1, null);
      append_hydration(div1, t13);
      mount_component(p6, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const breadcrumb_changes = {};
      if (dirty & /*$$scope*/
      1) {
        breadcrumb_changes.$$scope = { dirty, ctx: ctx2 };
      }
      breadcrumb.$set(breadcrumb_changes);
      const heading0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading0.$set(heading0_changes);
      const p0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p0.$set(p0_changes);
      const heading1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading1.$set(heading1_changes);
      const p1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p1.$set(p1_changes);
      const heading2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading2.$set(heading2_changes);
      const p2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p2.$set(p2_changes);
      const heading3_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading3.$set(heading3_changes);
      const p3_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p3.$set(p3_changes);
      const heading4_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading4.$set(heading4_changes);
      const p4_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p4.$set(p4_changes);
      const heading5_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading5.$set(heading5_changes);
      const p5_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p5.$set(p5_changes);
      const heading6_changes = {};
      if (dirty & /*$$scope*/
      1) {
        heading6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      heading6.$set(heading6_changes);
      const p6_changes = {};
      if (dirty & /*$$scope*/
      1) {
        p6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      p6.$set(p6_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(breadcrumb.$$.fragment, local);
      transition_in(heading0.$$.fragment, local);
      transition_in(p0.$$.fragment, local);
      transition_in(heading1.$$.fragment, local);
      transition_in(p1.$$.fragment, local);
      transition_in(heading2.$$.fragment, local);
      transition_in(p2.$$.fragment, local);
      transition_in(heading3.$$.fragment, local);
      transition_in(p3.$$.fragment, local);
      transition_in(heading4.$$.fragment, local);
      transition_in(p4.$$.fragment, local);
      transition_in(heading5.$$.fragment, local);
      transition_in(p5.$$.fragment, local);
      transition_in(heading6.$$.fragment, local);
      transition_in(p6.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(breadcrumb.$$.fragment, local);
      transition_out(heading0.$$.fragment, local);
      transition_out(p0.$$.fragment, local);
      transition_out(heading1.$$.fragment, local);
      transition_out(p1.$$.fragment, local);
      transition_out(heading2.$$.fragment, local);
      transition_out(p2.$$.fragment, local);
      transition_out(heading3.$$.fragment, local);
      transition_out(p3.$$.fragment, local);
      transition_out(heading4.$$.fragment, local);
      transition_out(p4.$$.fragment, local);
      transition_out(heading5.$$.fragment, local);
      transition_out(p5.$$.fragment, local);
      transition_out(heading6.$$.fragment, local);
      transition_out(p6.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(breadcrumb);
      destroy_component(heading0);
      destroy_component(p0);
      destroy_component(heading1);
      destroy_component(p1);
      destroy_component(heading2);
      destroy_component(p2);
      destroy_component(heading3);
      destroy_component(p3);
      destroy_component(heading4);
      destroy_component(p4);
      destroy_component(heading5);
      destroy_component(p5);
      destroy_component(heading6);
      destroy_component(p6);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
