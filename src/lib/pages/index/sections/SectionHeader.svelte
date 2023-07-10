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
    font-size: 5.0vw;
    margin-left: -0.35em;

    text-transform: uppercase;
    letter-spacing: .175em;

    img {
      height: 1.00em;
      margin-left: -0.09em;
    }
    @media screen and (min-device-width: 1680px) {
      font-size: 34px;
      letter-spacing: .159em;
      margin-left: 10px;
      margin-top: 13px;
      img {
        margin-left: 3px;
      }
    }

  }
</style>