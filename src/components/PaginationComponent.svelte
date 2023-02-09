<script lang="ts">

    import { page } from '$app/stores';
    import { Pagination, ChevronLeft, ChevronRight } from 'flowbite-svelte'

    $: activeUrl = $page.url.searchParams.get('page');

    let pages : any = [
        { name: 6, href: `/genre/${$page.params.genre}?page=6`},
        { name: 7, href: '/components/pagination?page=7'},
        { name: 8, href: '/components/pagination?page=8'},
        { name: 9, href: '/components/pagination?page=9'},
        { name: 10, href: '/components/pagination?page=10'}
    ];
  
    $:{
        pages.forEach((page : any)=>{
            let splitUrl = page.href.split('?');
            let queryString = splitUrl.slice(1).join('?');
            const hrefParams = new URLSearchParams(queryString);
            let hrefValue = hrefParams.get('page');
            if ( hrefValue === activeUrl){
                page.active=true
            }else{
                page.active=false
            }
        })
        pages=pages
    }

    const previous = () => {
        alert('Previous btn clicked. Make a call to your server to fetch data.');
    };
    const next = () => {
        alert('Next btn clicked. Make a call to your server to fetch data.');
    };

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