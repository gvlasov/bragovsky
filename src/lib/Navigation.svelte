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
<nav class:sticky={$open}>
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
  @import "../mixins";
  nav {
    .hamburger-wrap {
      display: block;
      margin-top: -.1vw;
      margin-right: -3.8vw;
      z-index: 2;
      position: relative;
    }

    .items {
      will-change: opacity;
      display: flex;
      transition: opacity 0.2s ease;
      opacity: 0;

      &.open {
        display: flex;
        opacity: 1;
        a, button {
          opacity: 1;
          transition-duration: .4s !important;
        }
      }

      font-family: 'Montserrat', 'sans-serif';
      flex-direction: column;
      row-gap: 10.8vw;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      width: 100vw;
      min-height: 100vh;
      align-items: center;
      font-size: 4.9vw;
      letter-spacing: .15em;
      padding: 26.6vw 0;

      a, button {
        will-change: opacity;
        background-color: white;
        text-transform: uppercase;
        margin-left: -1.6vw;
        transition: opacity .0s ease .1s;
        opacity: 0;

        &:nth-of-type(1) {
          transition-delay: .2s;
        }

        &:nth-of-type(2) {
          transition-delay: .3s;
        }

        &:nth-of-type(3) {
          transition-delay: .4s;
        }

        &:nth-of-type(4) {
          transition-delay: .5s;
        }

      }
      button {
        transition-delay: .6s !important;
      }
    }

    @include for-widescreen {
      .hamburger-wrap {
        display: none;
      }
      &.sticky {
        position: static;
      }

      .items {
        opacity: initial;
        &.open {
          display: flex;
        }

        min-height: initial;
        padding: 0 0;

        display: flex;
        flex-direction: row;
        column-gap: 3.05rem;
        position: static;
        width: auto;
        height: auto;
        top: initial;
        right: initial;

        a, button {
          opacity: initial;
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
          margin-left: 0.1rem;
        }
      }
    }
  }
</style>