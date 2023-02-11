
<script lang="ts">
	import ButtonComponent from "./ButtonComponent.svelte";
    import Iframe from "./Iframe.svelte";
    import Image from "./Image.svelte";

    export let id : any = null;
    export let altThumb : boolean = false;

    let videoInfo : any = fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    ).then((res : any) => res.json());
  
    let play : boolean = false;

    const isCustomPlayButton : boolean = $$slots.default;

  </script>
  
  {#await videoInfo then { title, width, height }}
    <div
      class="you__tube"
      style="--aspect-ratio:{width / height || '16/9'}"
      {title}
    >
      {#if play}
        <Iframe {id} {title} />
      {:else}
        <Image {id} {title} {altThumb} {play} />
        <div class="b__overlay" on:click={() => (play = true)} on:keydown={event => {
          console.log('played');
        }} />
        <div class="v__title"><h3>{title}</h3></div>
      {/if}
      {#if !play}
        <ButtonComponent on:click={() => (play = true)} {isCustomPlayButton}>
          <slot />
        </ButtonComponent>
      {/if}
    </div>
  {/await}
  
  <style>
    .you__tube {
      position: relative;
    }
  
    .v__title {
      position: absolute;
      top: 0;
      width: 100%;
      background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);
      pointer-events: none;
    }
    .v__title h3 {
      font-family: var(
        --title-font-family,
        "Segoe UI",
        Geneva,
        Verdana,
        sans-serif
      );
      color: var(--title-color, #ffffff);
      padding: 0 2ch;
      font-weight: 400;
      text-shadow: 0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2));
    }
    .b__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      aspect-ratio: var(--aspect-ratio);
      cursor: pointer;
      transition: var(--overlay-transition, all 250ms ease-in-out);
    }
    .you__tube:hover .b__overlay {
      background: var(--overlay-bg-color, #00000030);
    }
  </style>