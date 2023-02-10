<script lang="ts">

	import MovieListComponent from '../../components/MovieListComponent.svelte';
	import PaginationComponent from '../../components/PaginationComponent.svelte';

    export let data;

    let {popular} = data;

    let {results,page:current_page,total_pages} = popular;

    let titles : any = [
        {cat: 'Popular Movies', movies: results, type: 'movie'}
    ];

    $: pages = [
        {name: current_page, href: `/movies?page=${current_page}`}
    ];

    let generatePages = (action : any) => {
        let last = action == 'next' ? pages[pages.length - 1].name : pages[0].name;
        if (action == 'next' ? last + 5 < total_pages : last - 5 > 1){
            let _arr : any[] = [];
            if (last == 1) _arr.push({name: last, href: `/movies?page=${last}`});
            [...Array(5)].map((item, i) => {
                _arr.push({
                    name: action == 'next' ? last + 1 : last - 1 , href: `/movies?page=${action == 'next' ? last + 1 : last - 1}`
                })
                action == 'next' ? last ++ : last -- ;
            })
            if (last == 2) _arr.push({name: 1, href: `/movies?page=1`});
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