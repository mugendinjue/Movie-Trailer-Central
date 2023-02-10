<script lang="ts">
	import { Heading } from "flowbite-svelte";
	import MovieCard from "./MovieCard.svelte";
  export let titles : any;

  let {is_similar_tab=false} = titles[0];

</script>

{#each titles as title }
  
    <div class="home" style={!is_similar_tab ? 'margin-top: 40px;' :'margin-top: 20px;'}>
      <Heading tag="h4" class='tt'>{title.cat}</Heading>
      <div class="movies" style={!is_similar_tab ? 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))' :'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))'}>
        {#each title.movies as movie}
          <MovieCard {movie} type = {title.type} {is_similar_tab} />
        {/each}
      </div>
    </div>
    
{/each}
  
<style>
    .movies {
      display: grid;
      /* grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
      grid-column-gap: 1rem;
      grid-row-gap: 2rem;
    }
</style>