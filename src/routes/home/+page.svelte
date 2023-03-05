<script lang="ts">
  import { Carousel } from 'flowbite-svelte'
	import MovieListComponent from '../../components/MovieListComponent.svelte';
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
    {cat: 'Latest Movies', movies: trends, type: "movie"},
    {cat: 'New Releases', movies: now_playing, type: "movie"},
    {cat: 'Popular Movies', movies: popular, type: "movie"},
    {cat: 'Top Rated Movies', movies: top_rated, type: "movie"},
    {cat: 'Upcoming Movies', movies: upcoming, type: "movie"}
  ];

</script>

<!-- <div class="max-w-4xl" id="carousel">
  <div class="overlay">
    <Carousel 
    {images} loop {showCaptions} {showThumbs} duration="3000" 
    />
  </div>
</div> -->

<MovieListComponent {titles}/>

<style>
  #carousel {
    padding: 2rem;
  }
</style>