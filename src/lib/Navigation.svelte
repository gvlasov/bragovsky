<script lang="ts">
    import {_, locale} from 'svelte-i18n';
    import HamburgerToCross from "./HamburgerToCross.svelte";
    import {get} from 'svelte/store'
    import {base} from '$app/paths';
    import {menuOpen as open} from "./store.js";


    function toggleLanguage(): void {
        if (get(locale) === 'en') {
            locale.set('ru')
        } else {
            locale.set('en')
        }
    }

    function close() {
        open.set(false)
    }

</script>
<nav>
    <div class="hamburger-wrap">
        <HamburgerToCross open={$open} on:click={ () => open.update(n => !n) }/>
    </div>
    <div class="items" class:open={$open}>
        <a href="{base}/life" on:click={close}>{$_('page.life.name')}</a>
        <a href="{base}/work" on:click={close}>{$_('page.work.name')}</a>
        <a href="{base}/contacts" on:click={close}>{$_('page.contacts.name')}</a>
        <a href="{base}/search" on:click={close}>{$_('page.search.name')}</a>
        <button on:click={toggleLanguage}>EN/RU</button>
    </div>
</nav>

<style lang="scss">
  nav {
    .hamburger-wrap {
      display: block;
      margin-top: -.3vw;
      margin-right: -5vw;
    }

    .items {
      display: flex;
      font-family: 'Montserrat', 'sans-serif';
      padding-top: 73px;
      flex-direction: column;
      row-gap: 42px;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      width: 100vw;
      height: 100vh;
      align-items: center;
      font-size: 19px;
      letter-spacing: 0.15em;

      & > * {
        &:hover {
          border-bottom: 1px solid black;
        }

        border-bottom: 1px solid transparent;
      }
    }

    @media screen and (min-device-width: 1680px) {
      .hamburger-wrap {
        display: none;
      }

      .items {
        display: flex;
        flex-direction: row;
        column-gap: 2.4rem;
        position: static;
        width: auto;
        height: auto;
        top: initial;
        right: initial;
        padding-top: 0;

        a, button {
          font-size: .98rem;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-decoration: none;

          &:visited {
            color: black;
          }
        }
        button {
          margin-left: 1.8rem;
        }
      }
    }
  }
</style>