<script lang="ts">

    import { page } from "$app/stores";
    import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-svelte";
	import AboutMovieComponent from "../../../components/AboutMovieComponent.svelte";
	import Youtube from "../../../components/Youtube.svelte";

    export let data;

    let type = $page.params.type.toLocaleLowerCase();

    let {title,video_data:{results:videos},reviews: {results:reviews}, similar: {results:similar}} = data;

    $: key = videos && videos.length ? videos[0].key : 'MWn0R5cb4h0';

    $: playNext = (index : any) => {
        key = videos[index].key;
    };

</script>

<div class="movie-details">

    <div class="top">
        <Breadcrumb aria-label="Default breadcrumb example">
            <BreadcrumbItem href="/home" home>Home</BreadcrumbItem>
            <BreadcrumbItem href={type === 'tv' ? '/tv shows' : '/movies'}>{type === 'tv' ? 'TV Shows' : 'Movies'}</BreadcrumbItem>
            <BreadcrumbItem>{title.original_title ?? title.original_name}</BreadcrumbItem>
        </Breadcrumb>
    </div>
    
    <div class="i-frame">
        <Youtube id = {key} />
    </div>

    {#if videos}
        <div class="buttons">
            {#each videos as video, index}
                <Button on:click={() => playNext(index)} color="alternative" pill={true} >{video.type}</Button>
            {/each}
        </div>
    {/if}

    <div class="about-section">
        <AboutMovieComponent details = {title} {reviews} {similar} {type}/>
    </div>

</div>

<style>
    .top {
        margin-top: 90px;
        margin-bottom: 10px;
    }

    .movie-details {
        margin: 5px 80px 5px;
    }

    .buttons {
        padding: 1rem;
    }
</style>
  
