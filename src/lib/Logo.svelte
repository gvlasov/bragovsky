<script lang="ts">
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';
    import {menuOpen} from "./store";
</script>

<a href="{base}/" on:click={() => menuOpen.set(false)}>{$_('author.fullName')}</a>

<style lang="scss">
  a {
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    letter-spacing: .15em;
    white-space: nowrap;
  }
</style>