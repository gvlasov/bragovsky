<script lang="ts">
    import {_} from 'svelte-i18n'
    import imageRight from '$assets/Сайт/Фото/pap23-pl01-06.jpg' // Not optimal on purpose, not used anywhere else
</script>

<section class="intro">
    <h3 class="top">{$_('page.index.desc.top')}</h3>
    <figure>
        <img class="image-right" src="{imageRight}"/>
        <figcaption>{$_('page.index.desc.photo.desc')}</figcaption>
    </figure>
    <div class="bottom">{@html ($_('page.index.desc.bottom'))}</div>
</section>

<style lang="scss">
  @import "../../../../variables";
  @import "../../../../mixins";

  section.intro {
    margin-top: 7.9vw;
    font-family: Bruta Global Regular, sans-serif;
    max-width: 100vw;
    width: 100%;

    .top {
      font-size: 19px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.05em;
      text-align: left;
    }

    .bottom, .years {
      margin-top: 6.42vw;
      font-size: 12px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0.025em;
      text-align: left;
    }

    figure {
      margin: 5.5vw 0-$narrowBodyPadding 0 0-$narrowBodyPadding;

      img.image-right {
        width: 100%;
      }

      figcaption {
        text-align: right;
        font-size: 8px;
        letter-spacing: 0.0571em;
        padding-right: 1em;
        padding-top: 0.4em;
      }
    }

    @include for-widescreen {
      margin-top: 7.1vw;
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: min-content min-content 1fr;

      .top {
        margin-top: 6vw;
        font-size: 30.7px;
        max-width: 19em;
        letter-spacing: 0.045em;
        line-height: 1.22em;
        grid-column: 1;
        grid-row: 1;
      }

      .bottom {
        margin-top: 7vw;
        max-width: 39em;
        font-size: 15.35px;
        line-height: 1.32em;
        letter-spacing: 0.0165em;
        grid-column: 1;
        grid-row: 2;
      }

      figure {
        margin: auto 0-$bodyPadding auto auto;
        display: flex;
        flex-direction: column;
        align-items: end;
        height: auto;
        grid-row: 1/3;
        font-size: 0; // Remove newline
        img.image-right {
          max-width: min(100%, 37vw);
          margin-left: auto;
          min-width: 469px;
        }

        figcaption {
          line-height: 16px;
          letter-spacing: 0.6px;
          padding-right: 19px;
          padding-top: 1.6em;
          font-size: 11px;
        }
      }
    }
  }

</style>
