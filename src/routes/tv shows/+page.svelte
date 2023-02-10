<script lang="ts">

	import MovieListComponent from '../../components/MovieListComponent.svelte';
	import PaginationComponent from '../../components/PaginationComponent.svelte';

    export let data;

    let {popular} = data;

    let {results,page:current_page,total_pages} = popular;

    let titles : any = [
        {cat: 'Popular Tv Shows', movies: results, type: 'TV'}
    ];

    $: pages  = [
        { name: 1, href: `/movies`},
    ];

    $: previous = () => {
        if (current_page + 5 < total_pages){
            [...Array(5)].map((item, i) => console.log(item, i))
        }
    };
    $: next = () => {
        if (current_page + 5 < total_pages){
            [...Array(5)].map((item, i) => console.log(item, i))
        }
    };

</script>

<div class="pagination">
    <PaginationComponent {previous} {next} {pages}/>
</div>

<MovieListComponent {titles} />

<div class="pagination">
    <PaginationComponent {previous} {next} {pages}/>
</div>

<style>
    .pagination {
        text-align: center;
        padding: 2rem;
    }
</style>