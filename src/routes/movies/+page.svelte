<script lang="ts">
  import { Carousel } from 'flowbite-svelte'
  let showThumbs=false
  let showCaptions=false

    export let data;

    let {trending : {results:trends}} = data;

    let images : any[] = trends.map( (trend : any) => { return {id: trend.id, imgurl: `https://image.tmdb.org/t/p/w500${trend.backdrop_path}`, name: trend.backdrop_path, attribution: trend.backdrop_path}})

</script>

<div class="max-w-4xl">
    <Carousel {images} loop {showCaptions} {showThumbs} duration="6000" divClass="4xl:h-96"/>
</div>