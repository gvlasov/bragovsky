<script lang="ts">
    import {_} from 'svelte-i18n'
    import pinkVolkhov from '$assets/Сайт_optimal/Статьи/Этюд. Розовый волхов 6.jpg'
    import blueVolkhov from '$assets/Сайт_optimal/Живопись/_s-2901-2. Resolution 65.jpg'
    import petyaFruit from '$assets/Сайт_optimal/Статьи/Оригинал/Петя и фрукты 1970 (4).jpg'
    import art1 from '$assets/Сайт_optimal/Статьи/Творчество 1.jpg'
    import art2 from '$assets/Сайт_optimal/Статьи/Оригинал/Творчество 4.2.jpg'
    import FootnotesArticle from "$lib/pages/articles/FootnotesArticle.svelte";
</script>

<div class="content">
    <FootnotesArticle>
        <svelte:fragment slot="h1">{@html $_('page.life_truth.heading1')}</svelte:fragment>
        <svelte:fragment slot="h2">{@html $_('page.life_truth.heading2')}</svelte:fragment>
        <svelte:fragment slot="author">{@html $_('page.life_truth.author')}</svelte:fragment>
        <svelte:fragment slot="content">
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
            <div class="part part4">
                <figure>
                    <img src="{petyaFruit}"/>
                    <figcaption>{$_('page.life_truth.images.petyaFruit.caption')}</figcaption>
                </figure>
                {@html $_('page.life_truth.text.part4')}
            </div>
            <div class="footer">
                <img src="{art1}"/>
                <img src="{art2}"/>
            </div>
        </svelte:fragment>
    </FootnotesArticle>
</div>


<style lang="scss">
  .content {
    padding: 7vw 1.7vw;

    article {

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
            letter-spacing: 0.138em;
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

      .part4 {
        padding-top: 0.5em;

        figure {
          margin-top: 0.8em;
          float: left;
          max-width: 37.1vw;
          margin-right: 4.2vw;
          margin-bottom: 1em;

          figcaption {
            font-size: 0.952vw;
            line-height: 1.190vw;
            letter-spacing: 0.138em;
            text-align: right;
            margin-top: 2.6em;
          }
        }
      }

      .footer {
        margin-top: 16.3em;
        margin-bottom: 3em;
        display: flex;
        justify-content: start;
        gap: 6.3em;

        img:nth-child(1) {
          width: 20.6vw;
          height: auto;
          margin-left: 3.2em;
        }

        img:nth-child(2) {
          width: 41.4vw;
          height: auto;
        }
      }
    }
  }
</style>
