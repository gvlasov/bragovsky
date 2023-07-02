<script lang="ts">
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';
</script>

<a href="{base}/">{$_('author.fullName')}</a>

<style lang="scss">
  a {
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    letter-spacing: .3em;
    font-size: .9rem;
    white-space: nowrap;
  }
</style>