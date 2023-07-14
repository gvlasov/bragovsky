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
    margin-top: 30px;
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
      margin: 5.5vw 0-$mobileBodyPadding 0 0-$mobileBodyPadding;

      img.image-right {
        max-width: 100%;
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
      margin-top: max(7.083vw, 99px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      position: relative;

      .top {
        @media screen and (max-width: 1200px) {
          margin-left: 17px;
        }
        margin-top: 2.95vw;
        font-size: 30px;
        max-width: 19em;
        min-width: 15em;
        letter-spacing: 0.06em;
        line-height: 38px;
        grid-column: 1;
        grid-row: 1;
        align-self: center;
      }


      .bottom {
        @media screen and (max-width: 1200px) {
          margin-left: 17px;
        }
        margin-top: 0;
        margin-bottom: 3.2vw;
        max-width: 600px;
        min-width: 361px;
        margin-right: 81px;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.03em;
        grid-column: 1;
        grid-row: 2;
        align-self: end;
      }

      figure {
        margin: auto 0-$desktopBodyPadding auto auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        grid-column: 2;
        grid-row: 1/3;
        width: 100%;
        font-size: 0; // Remove newline
        overflow: hidden;
        position: relative;

        img.image-right {
          min-width: 531.75px;
          max-width: min(100%, 709px);
          width: 37vw;
          align-self: end;
        }

        figcaption {
          line-height: 16px;
          letter-spacing: 0.6px;
          padding-right: 19px;
          padding-top: 16px;
          font-size: 11px;
          width: 100%;
        }
      }
    }
  }

</style>
