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
  @import "../../../../mixins";
  a {
    float: left;
    display: flex;
    gap: 1em;
    align-items: start;


    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 0.15em;
    text-align: left;

    img {
      height: 0.96em;
      margin-left: -0.06em;
      margin-top: 0.06em;
    }

    @include for-widescreen {
      font-size: 34px;
      letter-spacing: .159em;
      img {
        margin-left: -10px;
        margin-top: 4px;
        height: 28.17px;
      }
    }

  }
</style>