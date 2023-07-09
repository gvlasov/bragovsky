<script lang="ts">
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';
    import {menuOpen} from "./store";
</script>

<a href="{base}/" on:click={() => menuOpen.set(false)}>{$_('author.fullName')}</a>

<style lang="scss">
  a {
    font-size: 3.5rem;
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    letter-spacing: .188em;
    line-height: 19.6px;
    white-space: nowrap;
    @media screen and (max-width: 639px) {
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 0.186em;
    }
  }
</style>