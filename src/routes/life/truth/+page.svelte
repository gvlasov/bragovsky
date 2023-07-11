<script lang="ts">
    import {_} from 'svelte-i18n'
    import ShadowedContainer from "$lib/ShadowedContainer.svelte";
    import pinkVolkhov from '$assets/Сайт_optimal/Статьи/Этюд. Розовый волхов 6.jpg'
    import blueVolkhov from '$assets/Сайт_optimal/Живопись/_s-2901-2. Resolution 65.jpg'
</script>

<div class="content">
    <ShadowedContainer>
        <article>
            <div class="description">
                <h1>{$_('page.life_truth.heading1')}</h1>
                <h2>{$_('page.life_truth.heading2')}</h2>
                <h3>{$_('page.life_truth.author')}</h3>
            </div>
            <div class="part part1">
                {@html $_('page.life_truth.text.part1')}
            </div>
            <div class="part part2">
                <figure>
                    <img src="{pinkVolkhov}"/>
                    <figcaption>{$_('page.life_truth.images.pinkVolkhov.caption')}</figcaption>
                </figure>
                {@html $_('page.life_truth.text.part2')}
            </div>
            <div class="part part3">
                <figure>
                    <img src="{blueVolkhov}"/>
                    <figcaption>{$_('page.life_truth.images.blueVolkhov.caption')}</figcaption>
                </figure>
                {@html $_('page.life_truth.text.part3')}
            </div>
        </article>
    </ShadowedContainer>
</div>


<style lang="scss">
  .content {
    padding: 7vw 1.7vw;

    article {
      font-family: Bruta Glb Regular, sans-serif;
      padding: 4.15em 4.1em 4.15em 4.1em;
      font-size: 1.012vw;

      .description {
        float: left;
        padding-left: 3.5em;
        padding-right: 3.6em;

        :global(h1) {
          font-size: 0.952vw;
          line-height: 1.547em;
          letter-spacing: 0.010em;
          margin-top: 4.5em;
          margin-left: 2.1em;
        }

        :global(h2) {
          font-size: 25px;
          line-height: 48px;
          letter-spacing: 0.61px;
          max-width: 10em;
          margin-top: 7em;
          margin-left: 1.35em;
        }

        :global(h3) {
          font-size: 25px;
          font-weight: 300;
          line-height: 17px;
          letter-spacing: 0.6px;
          margin-top: 5.87em;
          margin-left: 1.3em;
          margin-bottom: 12em;
        }
      }

      :global(p) {
        font-size: 17px;
        line-height: 43.4px;
        letter-spacing: 0.58px;
        margin: 0 0 1.8em 0;
      }

      .part1 {
        margin-bottom: 2.3em;
      }

      .part2 {
        margin-bottom: 3em;

        figure {
          margin-top: 0.8em;
          float: left;
          max-width: 35.8vw;
          margin-right: 4.7vw;

          figcaption {
            font-size: 0.952vw;
            line-height: 1.190vw;
            letter-spacing: 2.2px;
            text-align: right;
            margin-top: 2.6em;
          }
        }
      }

      .part3 {
        margin-top: -0.8em;

        figure {
          float: right;
          max-width: 33.5vw;
          margin-left: 4.3vw;
          margin-top: 0.8em;
          margin-bottom: 1em;

          figcaption {
            font-size: 0.952vw;
            line-height: 1.190vw;
            letter-spacing: 2.2px;
            text-align: right;
            margin-top: 2.6em;
          }
        }
      }
    }
  }
</style>
