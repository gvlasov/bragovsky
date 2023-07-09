<script lang="ts">
    import {_} from 'svelte-i18n'
    import imageRight from '$assets/Сайт/Фото/pap23-pl01-06.jpg'
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

  section.intro {
    margin-top: 7.9vw;
    font-family: Bruta Glb, sans-serif;
    max-width: 100vw;
    width: 100%;

    .top {
      font-size: 4.7rem;
      letter-spacing: 0.056em;
      line-height: 7.5rem;
    }

    .bottom, .years {
      font-size: 15px;
      letter-spacing: 0.03em;
    }

    .years {
      margin-top: 20px;
    }

    figure {
      min-width: 100vw;
      margin: 5.3vw 0-$narrowBodyPadding 0 0-$narrowBodyPadding;

      img.image-right {
        width: 100%;
        margin-left: auto;
      }

      figcaption {
        text-align: right;
        font-size: 2rem;
        letter-spacing: 0.0571em;
        padding-right: 2.2vw;
        padding-top: 2.12vw;
      }
    }

    .bottom, .years {
      margin-top: 6.5vw;
      font-size: 3rem;
      line-height: 5.74rem;
      letter-spacing: 0.025em;
    }

    @media screen and (min-width: 1680px) {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: min-content min-content 1fr;
      .top {
        margin-top: 98px;
        margin-bottom: 173px;
      }
      .bottom {
        max-width: 36rem;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.45px;
      }
      figure {
        margin: auto 0-$bodyPadding auto auto;
        display: flex;
        flex-direction: column;
        align-items: end;
        height: auto;
        grid-row: span 3;
        font-size: 0; // Remove newline
        img.image-right {
          max-width: min(100%, 37vw);
        }

        figcaption {
          line-height: 14.7px;
          letter-spacing: 0.6px;
          padding-right: 18px;
          padding-top: 19px;
        }
      }
    }
  }

</style>
