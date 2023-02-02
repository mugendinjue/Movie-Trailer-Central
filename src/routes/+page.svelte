<script lang="ts">

    import { P, Img, Layout, Hr, Span, List, Li } from 'flowbite-svelte'
    
    import logo from '$lib/assets/logo3.png';

    import { keyFeatures } from '$lib/constants/util';

    import { appName } from '$lib/constants/util';

    let app_name = appName;

</script>


<div class="top-img">
    <Img alignment="mx-auto" src={logo} alt="sample 1" size="max-w-xs" class="rounded-lg" href="/home" />
</div>


<div class="center-text">
    <Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
        <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"></P>
        <div class="mb-3">
            <P weight="light" align='left' size="5xl" color="text-gray-500 dark:text-gray-400" >
                Welcome to <Span gradient>{app_name}</Span> - Your One-Stop Destination for Movie Trailers.
            </P>
            <Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
            <P weight="light" align='center' size="3xl" color="text-gray-500 dark:text-gray-400" >
                {app_name} is the ultimate platform for movie enthusiasts who want to stay up-to-date with the latest trailers and releases. Watch trailers for upcoming blockbusters, indie gems, and everything in between, all in one place.
            </P>
            <Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
            <List tag="ul" class="space-y-2" list="none">
                {#each keyFeatures as feature}
                <Li icon>
                    <svg
                      class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      ><path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" /></svg>
                        {feature}
                  </Li>
                {/each}
            </List>
        </div>

        <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"></P>
    </Layout>
</div>

<style>
    .top-img{
        margin-top: 90px;
    }
    .center-text {
        margin-top: 90px;
    }
</style>