<script lang="ts">

	import MovieListComponent from '../../../components/MovieListComponent.svelte';
	import PaginationComponent from '../../../components/PaginationComponent.svelte';

    export let data : any;

    let movies = data.popular.results ;

    let current_page = data.popular.page;

    let total_pages = data.popular.total_pages;

    let titles : any = [
        {cat: 'Popular Movies', movies, type: 'movie'}
    ];

    $: pages = [
        {name: current_page, href: `/movies/${current_page}`}
    ];

    let generatePages = (action : any) => {
        let last = action == 'next' ? pages[pages.length - 1].name : pages[0].name;
        if (action == 'next' ? last + 5 < total_pages : last - 5 > 1){
            let _arr : any[] = [];
            if (last == 1) _arr.push({name: last, href: `/movies/${last}`});
            [...Array(5)].map((item, i) => {
                _arr.push({
                    name: action == 'next' ? last + 1 : last - 1 , href: `/movies/${action == 'next' ? last + 1 : last - 1}`
                })
                action == 'next' ? last ++ : last -- ;
            })
            if (last == 2) _arr.push({name: 1, href: `/movies/1`});
            pages = action == 'next' ? _arr : _arr.reverse();
        }
    }

    $: previous = () => {
        generatePages('previous');
    };

    $: next = () => {
        generatePages('next');
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