<script lang="ts">

    import { Heading, Hr } from 'flowbite-svelte';
    import { page } from '$app/stores';
	import PaginationComponent from '../../../../components/PaginationComponent.svelte';

    let current_page = 1,total_pages = 20;

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

<div class="genre">
    <Heading tag="h4">{$page.params.genre} Movies and TV Shows</Heading>
    <Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
</div>

<div class="pagination">
    <PaginationComponent {previous} {next} {pages}/>
</div>

<h2>Genre movies go here</h2>

<div class="pagination">
    <PaginationComponent {previous} {next} {pages}/>
</div>
<style>
    .genre {
      margin-top: 40px;
    }
    .pagination {
        text-align: center;
        padding: 2rem;
    }
</style>