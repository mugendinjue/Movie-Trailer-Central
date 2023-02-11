import { c as create_ssr_component, g as add_attribute, l as escape, u as null_to_empty, v as validate_component, p as each, k as compute_slots } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { M as MovieListComponent } from "../../../chunks/MovieListComponent.js";
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { altTag = "" } = $$props;
  let { attr = "" } = $$props;
  let { slideClass = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.attr === void 0 && $$bindings.attr && attr !== void 0)
    $$bindings.attr(attr);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  return `<div${add_attribute("class", slideClass, 0)}><img${add_attribute("src", image, 0)}${add_attribute("alt", altTag, 0)}${add_attribute("title", attr, 0)}></div>`;
});
const css$2 = {
  code: ".active.svelte-1o2b5yq{opacity:1}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumbImg = "" } = $$props;
  let { altTag = "" } = $$props;
  let { titleLink = "" } = $$props;
  let { id } = $$props;
  let { thumbWidth } = $$props;
  let { selected = false } = $$props;
  if ($$props.thumbImg === void 0 && $$bindings.thumbImg && thumbImg !== void 0)
    $$bindings.thumbImg(thumbImg);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.titleLink === void 0 && $$bindings.titleLink && titleLink !== void 0)
    $$bindings.titleLink(titleLink);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.thumbWidth === void 0 && $$bindings.thumbWidth && thumbWidth !== void 0)
    $$bindings.thumbWidth(thumbWidth);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$2);
  return `
<img class="${["opacity-40 svelte-1o2b5yq", selected ? "active" : ""].join(" ").trim()}"${add_attribute("id", id.toString(), 0)}${add_attribute("src", thumbImg, 0)}${add_attribute("alt", altTag, 0)} title="${"Image from " + escape(titleLink, true)}" width="${escape(thumbWidth, true) + "%"}">`;
});
const Caption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caption = "" } = $$props;
  let { captionClass = "" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `<div${add_attribute("class", captionClass, 0)}><p id="${"caption"}" class="${"text-gray-900 dark:text-white"}">${escape(caption)}</p></div>`;
});
const css$1 = {
  code: ".active.svelte-1o2b5yq{opacity:1}",
  map: null
};
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = false } = $$props;
  let { indicatorClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  $$result.css.add(css$1);
  return `<button type="${"button"}" class="${[
    escape(null_to_empty(indicatorClass), true) + " svelte-1o2b5yq",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-label", name, 0)}></button>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let $$slots = compute_slots(slots);
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
      imageShowingIndex = 0;
    } else {
      imageShowingIndex += 1;
    }
  };
  let thumbWidth = 100 / images.length;
  if (loop) {
    setInterval(
      () => {
        nextSlide();
      },
      duration
    );
  }
  if ($$props.showIndicators === void 0 && $$bindings.showIndicators && showIndicators !== void 0)
    $$bindings.showIndicators(showIndicators);
  if ($$props.showCaptions === void 0 && $$bindings.showCaptions && showCaptions2 !== void 0)
    $$bindings.showCaptions(showCaptions2);
  if ($$props.showThumbs === void 0 && $$bindings.showThumbs && showThumbs2 !== void 0)
    $$bindings.showThumbs(showThumbs2);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.slideControls === void 0 && $$bindings.slideControls && slideControls !== void 0)
    $$bindings.slideControls(slideControls);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.indicatorDivClass === void 0 && $$bindings.indicatorDivClass && indicatorDivClass !== void 0)
    $$bindings.indicatorDivClass(indicatorDivClass);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  image = images[imageShowingIndex];
  return `<div id="${"default-carousel"}" class="${"relative"}"><div${add_attribute("class", divClass, 0)}>${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: image.imgurl,
      altTag: image.name,
      attr: image.attribution,
      slideClass
    },
    {},
    {}
  )}</div>
  ${showIndicators ? `
    <div${add_attribute("class", indicatorDivClass, 0)}>${each(images, ({ id, imgurl, name, attribution }) => {
    return `${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        name,
        selected: imageShowingIndex === id,
        indicatorClass
      },
      {},
      {}
    )}`;
  })}</div>` : ``}
  ${slideControls ? `
    <button type="${"button"}" class="${"flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"}" data-carousel-prev><span class="${"inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"}">${$$slots.previous ? `${slots.previous ? slots.previous({}) : ``}` : `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 19l-7-7 7-7"}"></path></svg>`}
        <span class="${"hidden"}">Previous</span></span></button>
    <button type="${"button"}" class="${"flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"}" data-carousel-next><span class="${"inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"}">${$$slots.next ? `${slots.next ? slots.next({}) : ``}` : `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg>`}
        <span class="${"hidden"}">Next</span></span></button>` : ``}</div>

${showCaptions2 ? `${validate_component(Caption, "Caption").$$render(
    $$result,
    {
      caption: images[imageShowingIndex].name,
      captionClass
    },
    {},
    {}
  )}` : ``}

${showThumbs2 ? `<div class="${"flex flex-row justify-center bg-gray-100"}">${each(images, ({ id, imgurl, name, attribution }) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        thumbWidth,
        thumbImg: imgurl,
        altTag: name,
        titleLink: attribution,
        id,
        selected: imageShowingIndex === id
      },
      {},
      {}
    )}`;
  })}</div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#carousel.svelte-n2kwbc{padding:2rem}",
  map: null
};
let showThumbs = false;
let showCaptions = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"max-w-4xl svelte-n2kwbc"}" id="${"carousel"}"><div class="${"overlay"}">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      images,
      loop: true,
      showCaptions,
      showThumbs,
      duration: "3000"
    },
    {},
    {}
  )}</div></div>

${validate_component(MovieListComponent, "MovieListComponent").$$render($$result, { titles }, {}, {})}`;
});
export {
  Page as default
};
