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
    font-size: 5.06vw;
    margin-left: -0.4em;

    text-transform: uppercase;
    letter-spacing: .161em;

    img {
      height: 0.96em;
      margin-left: -0.06em;
      margin-top: 0.06em;
    }

    @include for-widescreen {
      margin-left: 0.3em;
      font-size: 34px;
      letter-spacing: .159em;
      margin-top: 13px;
      img {
        margin-left: 3px;
        margin-top: 0.12em;
      }
    }

  }
</style>