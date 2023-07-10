<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';
    import {menuOpen} from "./store";
</script>

<a href="{base}/" on:click={() => menuOpen.set(false)}>{$_('author.fullName')}</a>

<style lang="scss">
  @import "../mixins";
  a {
    font-size: 3.45vw;
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    letter-spacing: .765vw;
    white-space: nowrap;
    @include for-widescreen {
      font-size: 14px;
      letter-spacing: .208vw;
    }
  }
</style>