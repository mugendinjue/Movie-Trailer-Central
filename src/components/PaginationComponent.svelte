<script lang="ts">

    import { page } from '$app/stores';
    import { Pagination, ChevronLeft, ChevronRight } from 'flowbite-svelte'

    $: activeUrl = $page.params.page;

    export let pages : any[];

    $:{
        pages.forEach((page : any)=>{
            let hrefValue = page.href.split('/')[2]
            if ( hrefValue === activeUrl){
                page.active=true
            }else{
                page.active=false
            }
        })
        pages=pages
    }

    export let previous : any;

    export let next : any;

</script>

<Pagination {pages} on:previous={previous} on:next={next} icon  >
    <svelte:fragment slot="prev">
        <span class="sr-only">Previous</span>
        <ChevronLeft class="w-5 h-5"/>
    </svelte:fragment>
    <svelte:fragment slot="next">
        <span class="sr-only">Next</span>
        <ChevronRight class="w-5 h-5"/>
    </svelte:fragment>
</Pagination>