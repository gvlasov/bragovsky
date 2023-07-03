<script lang="ts">
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';

    export let pageName: string
</script>

<a href="{base}/{pageName}">
    <div>{$_('page.' + pageName + '.name')}</div>
    <img src="{base}/arrow-right.svg"/>
</a>

<style lang="scss">
  a {
    float: left;
    display: flex;
    gap: 40px;
    align-items: start;
    font-size: 34px;

    text-transform: uppercase;
    letter-spacing: .15em;
    line-height: 41.6px;
    margin-left: 10px;
    @media screen and (max-width: 639px) {
      font-size: 20px;
    }

    img {
      height: 1em;
      margin-top: -1px;
    }
  }
</style>