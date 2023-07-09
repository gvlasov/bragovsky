<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';
    import arrowRight from '$assets/arrow-right.svg'

    export let pageName: string
</script>

<a href="{base}/{pageName}">
    <div>{$_('page.' + pageName + '.name')}</div>
    <img src="{arrowRight}"/>
</a>

<style lang="scss">
  a {
    float: left;
    display: flex;
    gap: 1em;
    align-items: start;
    font-size: 4.9rem;

    text-transform: uppercase;
    letter-spacing: .17em;
    line-height: 41.6px;

    img {
      height: 1.00em;
      margin-top: -0.40em;
      margin-left: -0.09em;
    }

  }
</style>