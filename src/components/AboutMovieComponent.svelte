<script lang="ts">
	import { P, Layout, Heading, Tabs, TabItem, List, Li, Blockquote, Avatar, A, Rating } from "flowbite-svelte";
	import MovieListComponent from "./MovieListComponent.svelte";
  export let details : any;
  export let reviews : any;
  export let similar : any;
  export let type : any;
  similar = similar ? similar.filter( (i : any) => i.backdrop_path != null) : [];
  reviews = reviews ? reviews.slice(0,3) : [];
  similar = similar.slice(0,9);
  let titles : any = [
    {cat: 'You May Also Like', movies: similar, type, is_similar_tab: true}
  ];
  
</script>

<Layout gap={6}>
    <div class="left">
      <Layout gap={6} cols="grid-cols-3 sm:grid-cols-1">
        <div class="mb-3">
          <div class="title">
            <Heading tag="h2">{details.original_name ?? details.original_title}</Heading>
          </div>
          <img src={`https://image.tmdb.org/t/p/w500` + details.backdrop_path} alt={details.original_name ?? details.original_title}>
        </div>
        <div class="col-span-2">
          <Rating count rating={details.vote_average} >
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
            <a
              href="#"
              class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >{details.vote_count} reviews</a
            >
          </Rating>
          <P weight="light" color="text-gray-500 dark:text-gray-400">
            Status : {details.status}
          </P>
          <P weight="light" color="text-gray-500 dark:text-gray-400">
              {details.overview}
          </P>
          <div id="review-tab">
            <Tabs style="underline">
              <TabItem open title="Reviews">
                {#if reviews.length}

                  {#each reviews as review}
                  <div class="flex space-x-4" id="commentor">
                    <figure class="mx-auto max-w-screen-md text-center">
                      <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                      <Blockquote alignment="center" size='lg'>
                      {review.content.slice(0,90) + '...'}
                      <A href={review.url} target="_blank" textColor="text-blue-600 dark:text-blue-500" aClass="inline-flex items-center font-small  hover:underline">
                        more
                        <svg aria-hidden="true" class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </A>
                      </Blockquote>
                      <figcaption class="flex justify-center items-center mt-6 space-x-3">
                        <Avatar src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w500` + review.author_details.avatar_path : ''}/>
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite class="pr-3 font-medium text-gray-900 dark:text-white">{review.author_details.username}</cite>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  {/each}

                {:else}

                  <P weight="light" color="text-gray-500 dark:text-gray-400">
                      No Comments
                  </P>
                  
                {/if}
              </TabItem>
              <TabItem title="Production">
                <List tag="ol" list="decimal">
                  <Li
                    >Production Companies
                    <List tag="ul" class="pl-5 mt-2 space-y-1">
                      {#each details.production_companies as company}
                        <Li>{company.name}</Li>
                      {/each}
                    </List>
                  </Li>
                  <Li
                    >Production Countries
                    <List tag="ul" class="pl-5 mt-2 space-y-1">
                      {#each details.production_countries as country}
                        <Li>{country.name}</Li>
                      {/each}
                    </List>
                  </Li>
                </List>
              </TabItem>
              <TabItem title="Genres">
                <List tag="ul" class="space-y-1">
                  {#each details.genres as genre}
                    <Li>{genre.name}</Li>
                  {/each}
                </List>
              </TabItem>
            </Tabs>
          </div>
        </div>
    </Layout>
    </div>
    <div class="mb-3">
        <MovieListComponent {titles}/>
    </div>
</Layout>

<style>
    img {
      width: 90%;
      height: 50vh;
      object-fit: cover;
      border-radius: 1rem;
      margin-bottom: 1rem;
    }
    .left {
      padding: 0.6rem;
    }
    .title, #commentor {
      padding: 0.4rem;
    }
</style>