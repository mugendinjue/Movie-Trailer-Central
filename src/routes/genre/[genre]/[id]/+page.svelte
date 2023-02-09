<script lang="ts">

    import { Heading, Hr } from 'flowbite-svelte';
    import { page } from '$app/stores';
	import PaginationComponent from '../../../../components/PaginationComponent.svelte';

    // import type { PageData } from './$types';

    // export let data: PageData;

</script>

<div class="genre">
    <Heading tag="h4">{$page.params.genre} Movies and TV Shows</Heading>
    <Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
</div>

<div class="pagination">
    <PaginationComponent/>
</div>

<h2>Genre movies go here</h2>

<div class="pagination">
    <PaginationComponent/>
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