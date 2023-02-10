<script lang="ts">

    export let data
	  import '../app.postcss';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DarkMode, Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte'
    import logo from '$lib/assets/logo3.png';
    import { navTabs } from '$lib/constants/util';
    import { QuickLinks } from '$lib/constants/util';

    import { splitArrayIntoPairs } from '$lib/helpers/common';

    let pairs = splitArrayIntoPairs(QuickLinks);

    let {genres: {genres}, countries} = data;

    countries = countries.slice(0,10);

</script>
  
<Navbar let:hidden let:toggle rounded color="form">
    <NavBrand href="/">
      <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Trailer Park</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each navTabs as nav_item}
            {#if nav_item.toLowerCase() == 'home'}
                <NavLi href="/home" active={true}>Home</NavLi>
            {:else if ['genre'].includes(nav_item.toLowerCase())}
                <NavLi id="genre" data-sveltekit-prefetch class="cursor-pointer"><Chevron aligned>{nav_item}</Chevron></NavLi>
            {:else if ['country'].includes(nav_item.toLowerCase())}
                <NavLi id="country" data-sveltekit-prefetch class="cursor-pointer"><Chevron aligned>{nav_item}</Chevron></NavLi>
            {:else}
                <NavLi href={nav_item.toLowerCase()} >{nav_item}</NavLi>
            {/if}
        {/each}
        <Dropdown triggeredBy="#genre" class="w-44 z-20">
            {#each genres as genre}
              <a href="/">
                <DropdownItem>{genre.name}</DropdownItem>
              </a>
            {/each}
        </Dropdown>
        <Dropdown triggeredBy="#country" class="w-44 z-20">
          {#each countries as country}
            <a href='/'>
              <DropdownItem>{country.english_name}</DropdownItem>
            </a>
          {/each}
      </Dropdown>
    </NavUl>
    <DarkMode />
</Navbar>

<slot />

<div class="footer">
    <Footer footerType="socialmedia">
        <div class="md:flex md:justify-between">
          <div class="mb-4 md:mb-0">
            <FooterBrand
              href="/"
              src={logo}
              alt="Logo"
              name="Trailer Park"
            />
          </div>
          <div class="mb-6 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {#each pairs as pair}
                <div>
                    <FooterLinkGroup>
                        {#each pair as link}
                            <FooterLink liClass="mb-4" href={link.path} >{link.label}</FooterLink>
                        {/each}
                    </FooterLinkGroup>
                </div>
            {/each}
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Mugendi" />
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <FooterIcon target="_blank" href="https://twitter.com/MugendiNjue3" class="text-gray-400 hover:text-gray-900">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </FooterIcon>
            <FooterIcon target="_blank" href="https://github.com/mugendinjue" class="text-gray-400 hover:text-gray-900">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
            </FooterIcon>
          </div>
        </div>
      </Footer>
</div>

<style>
  .footer {
    margin-top: 40px;
    background-color: black;
  }
  
</style>