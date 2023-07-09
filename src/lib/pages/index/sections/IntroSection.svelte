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
      font-size: 5.0vw;
      letter-spacing: 0.034em;
      line-height: 7.68vw;
    }

    .bottom, .years {
      margin-top: 6.42vw;
      font-size: 3.06vw;
      line-height: 5.89vw;
      letter-spacing: 0.028em;
    }

    figure {
      margin: 5.5vw 0-$narrowBodyPadding 0 0-$narrowBodyPadding;

      img.image-right {
        width: 100%;
      }

      figcaption {
        text-align: right;
        font-size: 2.05vw;
        letter-spacing: 0.0571em;
        padding-right: 2.2vw;
        padding-top: 2.1vw;
      }
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
          margin-left: auto;
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
