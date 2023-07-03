<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';
</script>

<section class="intro">
    <h3 class="top">{$_('page.index.desc.top')}</h3>
    <figure>
        <img class="image-right" src="{base}/Сайт/Фото/pap23-pl01-06.jpg"/>
        <figcaption>{$_('page.index.desc.photo.desc')}</figcaption>
    </figure>
    <div class="bottom">{@html ($_('page.index.desc.bottom'))}</div>
</section>

<style lang="scss">
  @import "../../../../variables";

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
      font-size: 30px;
      margin-bottom: 220px;
      margin-top: 112px;
      line-height: 38px;
      letter-spacing: 0.06em;
      @media screen and (max-width: 820px) {
        margin-top: 0;
        font-size: 19px;
        line-height: 1.6;
        margin-bottom: 19px;
        letter-spacing: 0.05em;
      }
    }

    .bottom, .years {
      font-size: 15px;
      letter-spacing: 0.03em;
      @media screen and (max-width: 820px) {
        margin-top: 26px;
        line-height: 2;
      }
    }
    .years {
      margin-top: 20px;
    }

    figure {
      @media screen and (min-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: end;
        img.image-right {
          max-width: min(100%, 709px);
          margin-left: auto;
        }
        margin-left: 20px;
      }
      height: auto;
      grid-row: span 3;
      margin: auto 0-$bodyPadding auto auto;
      font-size: 0; // Remove newline


      figcaption {
        text-align: right;
        font-size: 11px;
        letter-spacing: 0.057em;
        line-height: 14.6px;
        padding-right: 19px;
        padding-top: 22px;
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
        min-width: 100vw;
        margin: 0 0-$bodyPadding 0 0-$bodyPadding;
      }
    }
  }

</style>
