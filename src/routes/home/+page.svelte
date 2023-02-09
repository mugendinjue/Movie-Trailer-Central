<script lang="ts">
  import { Carousel, Heading } from 'flowbite-svelte'
	import MovieCard from '../../components/MovieCard.svelte';
  let showThumbs=false
  let showCaptions=false

  export let data;

  let {
    trending : {results:trends},
    now_playing : {results:now_playing},
    popular : {results:popular},
    top_rated : {results:top_rated},
    upcoming : {results:upcoming},
  } = data;

  let images : any[] = trends.map( (trend : any) => { return {id: trend.id, imgurl: `https://image.tmdb.org/t/p/w500${trend.backdrop_path}`, name: trend.backdrop_path, attribution: trend.backdrop_path}})

  let titles : any = [
    {cat: 'Latest Movies', movies: trends},
    {cat: 'New Releases', movies: now_playing},
    {cat: 'Popular Movies', movies: popular},
    {cat: 'Top Rated Movies', movies: top_rated},
    {cat: 'Upcoming Movies', movies: upcoming}
  ];

</script>

<div class="max-w-4xl carousel">
    <Carousel {images} loop {showCaptions} {showThumbs} duration="6000" divClass="4xl:h-96"/>
</div>

{#each titles as title }

  <div class="home">
    <Heading tag="h4" class='tt'>{title.cat}</Heading>
    <div class="movies">
      {#each title.movies as movie}
        <MovieCard {movie} />
      {/each}
    </div>
  </div>
  
{/each}

<style>
  .home, .carousel {
    margin-top: 40px;
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
</style>