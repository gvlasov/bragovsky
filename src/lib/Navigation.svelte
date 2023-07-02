<script lang="ts">
    import {_, locale} from 'svelte-i18n';
    import HamburgerToCross from "./HamburgerToCross.svelte";
    import MediaQuery from 'svelte-media-queries'
    import {get } from 'svelte/store'
    import { base } from '$app/paths';

    function toggleLanguage(): void {
        if (get(locale) === 'en') {
            locale.set('ru')
        } else {
            locale.set('en')
        }
    }

    let open: boolean = false
</script>
<nav>
    <MediaQuery let:matches={narrowScreen} query='(max-width: 1080px)'>
        {#if narrowScreen}
            <HamburgerToCross open="{open}" on:click={ () => open = !open }/>
        {/if}
        {#if (narrowScreen && open || !narrowScreen)}
            <div class="items">
                <a href="{base}/life">{$_('page.life.name')}</a>
                <a href="{base}/work">{$_('page.work.name')}</a>
                <a href="{base}/contacts">{$_('page.contacts.name')}</a>
                <a href="{base}/search">{$_('page.search.name')}</a>
                <button on:click={toggleLanguage}>EN/RU</button>
            </div>
        {/if}
    </MediaQuery>
</nav>
<style lang="scss">
  nav {
    .items {
      display: flex;
      font-family: 'Montserrat', 'sans-serif';
      gap: 2em;
      position: absolute;

      @media screen and (max-width: 1080px) {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: white;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        font-size: 1.2rem;
        button {
          margin-left: 0 !important;
        }
        & > * {
          &:hover {
            border-bottom: 1px solid black;
          }

          border-bottom: 1px solid transparent;
          padding-bottom: .2em;
        }
      }

      a, button {
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: .3em;
        text-decoration: none;

        &:visited {
          color: black;
        }
      }

      button {
        margin-left: 2em;
      }
    }


  }
</style>