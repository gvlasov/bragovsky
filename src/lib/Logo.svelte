<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';
    import {menuOpen} from "./store";
</script>

<a href="{base}/" on:click={() => menuOpen.set(false)}>{$_('author.fullName')}</a>

<style lang="scss">
  a {
    font-size: 3.45vw;
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    letter-spacing: .765vw;
    white-space: nowrap;
    @media screen and (min-device-width: 1680px) {
      font-size: .75vw;
      letter-spacing: .197vw;
    }
  }
</style>