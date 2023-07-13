<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';
    import {menuOpen} from "./store";
</script>

<a href="{base}/" on:click={() => menuOpen.set(false)}>{$_('author.fullName')}</a>

<style lang="scss">
  @import "../mixins";

  a {
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.186em;
    text-align: left;
    @include for-widescreen {
      font-size: 14px;
      letter-spacing: 4px;
    }
  }
</style>