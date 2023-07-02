<script lang="ts">
    import {_} from 'svelte-i18n'
</script>

<a href="/">{$_('author.fullName')}</a>

<style lang="scss">
  a {
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    letter-spacing: .3em;
    white-space: nowrap;
  }
</style>