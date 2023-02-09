<script lang="ts">

    export let movie : any;

    import { P } from 'flowbite-svelte'

</script>

<div class="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path} alt="movie.name ?? movie.title">
    <div class="description">
        <div class="tt">
            <P>{movie.name ?? movie.title}</P>
        </div>
        <P>{movie.release_date ?? movie.first_air_date}</P>
    </div>
</div>

<style>
    img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    .tt {
        font-size: 0.9rem;
    }

    .description {
        height: 5vh;
        font-size: 0.7rem;
    }

    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
    }
</style>