<script lang="ts">
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';
</script>

<section class="intro">
    <h3 class="top">{$_('page.index.desc.top')}</h3>
    <figure>
        <img class="image-right" src="{base}/Сайт/Фото/pap23-pl01-06.jpg"/><figcaption>{$_('page.index.desc.photo.desc')}</figcaption>
    </figure>
    <div class="bottom">{$_('page.index.desc.bottom')}</div>
    <div class="years">{$_('page.index.desc.years')}</div>
</section>

<style lang="scss">
  @import "../variables";

  section.intro {
    font-family: Bruta Glb, sans-serif;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: min-content min-content 1fr;
    max-width: 100vw;
    width: 100%;

    .top, .bottom, .years {
      max-width: 37rem;
      @media screen and (max-width: 639px) {
        margin-right: 0;
      }
    }

    .top {
      font-size: 1.8rem;
      margin-bottom: 9rem;
      margin-top: 10rem;
      line-height: 1.25;
      letter-spacing: 0.06em;
      @media screen and (max-width: 639px) {
        margin-top: 0;
        font-size: 19px;
        line-height: 1.6;
        margin-bottom: 11vw;
        letter-spacing: 0.06em;
      }
    }

    .bottom {
      font-size: 1rem;
      margin-bottom: 3rem;
      @media screen and (max-width: 820px) {
        margin-top: 26px;
        font-size: 12px;
        line-height: 2;
      }
    }

    .years {
      font-size: .9rem;
      @media screen and (max-width: 639px) {
        font-size: 12px;
      }
    }

    figure {
      @media screen and (min-width: 640px) {
        max-width: 709px;
        margin-left: 20px;
      }
      height: auto;
      grid-row: span 3;
      margin: auto 0-$bodyPadding auto auto;
      font-size: 0; // Remove newline

      img.image-right {
        max-width: 100%;
      }

      figcaption {
        text-align: right;
        font-size: .7rem;
        padding-right: 3em;
        padding-top: 1.6em;
        @media screen and (max-width: 639px) {
          padding-top: 16px;
          font-size: 9px;
        }
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
