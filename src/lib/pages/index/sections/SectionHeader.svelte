<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';

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

    img {
      height: 1em;
      margin-top: -1px;
    }

    @media screen and (max-width: 639px) {
      font-size: 20px;
      margin-left: 0;
      gap: 18px;
      img {
        margin-top: 7px;
      }
    }

  }
</style>