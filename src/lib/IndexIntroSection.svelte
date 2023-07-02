<script lang="ts">
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';
</script>

<section class="intro">
    <h3 class="top">{$_('page.index.desc.top')}</h3>
    <figure>
        <img class="image-right" src="{base}/Сайт/Фото/pap23-pl01-06.jpg"/>
        <figcaption>{$_('page.index.desc.photo.desc')}</figcaption>
    </figure>
    <div class="bottom">{$_('page.index.desc.bottom')}</div>
    <div class="years">{$_('page.index.desc.years')}</div>
</section>

<style lang="scss">
  @import "../variables";

  $sideImageHeight: 40rem;
  section.intro {
    font-family: "Bruta Glb Regular", sans-serif;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: min-content min-content 1fr;
    max-width: 100vw;
    width: 100%;
    max-height: $sideImageHeight;

    .top, .bottom, .years {
      max-width: 35rem;
      margin-right: 2em;
    }

    .top {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 11rem;
      margin-top: 8rem;
    }

    .bottom {
      font-size: 1rem;
      margin-bottom: 3rem;
    }

    .years {
      font-size: .9rem;
    }

    figure {
      max-width: $sideImageHeight;
      height: auto;
      grid-row: span 3;
      margin: auto 0-$bodyPadding auto auto;

      img.image-right {
        max-width: 100%;
      }

      figcaption {
        text-align: right;
        font-size: .7rem;
        padding-right: 3em;
        padding-top: 1.6em;
      }
    }

    @media screen and (max-width: 820px) {
      display: flex;
      flex-direction: column;
      max-height: initial;
      figure {
        max-width: 100vw !important;
        margin: auto 0-$bodyPadding auto 0-$bodyPadding !important;
      }
    }
  }

</style>
