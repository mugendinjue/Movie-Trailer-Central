<script lang="ts">
    import { scale } from "svelte/transition";
    export let title : string = "";
    export let id : string = "";
  </script>
  
  <iframe
    src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
    {title}
    frameborder="0"
    allow="autoplay; picture-in-picture; clipboard-write"
    allowfullscreen
    in:scale={{ delay: 500, duration: 800 }}
  />
  
  <style>
    iframe {
      height: auto;
      aspect-ratio: var(--aspect-ratio);
      width: 100%;
    }
  </style>