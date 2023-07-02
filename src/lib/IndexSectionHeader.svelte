<script lang="ts">
    import {_} from 'svelte-i18n'

    export let pageName: string
</script>

<a href="/{pageName}">
    <div>{$_('page.' + pageName + '.name')}</div>
    <img src="/arrow-right.svg"/>
</a>

<style lang="scss">
  a {
    float: left;
    display: flex;
    gap: 1.4rem;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .2em;

    img {
      height: 1em;
    }
  }
</style>