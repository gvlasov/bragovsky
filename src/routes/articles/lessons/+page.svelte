<script lang="ts">
    import {_} from 'svelte-i18n'
    import savrasovRooks from '$imagesOptimized/Статьи/RooksBackOfSavrasov.jpg'
    import korovinBridge from '$imagesOptimized/Статьи/KorovinBridge.jpg'
    import bragovskyIstomino from '$imagesOptimized/Статьи/Вечер в Истомино.jpg'
    import lentulovSquare from '$assets/Сайт_optimal/Статьи/лентулов-057.jpg'
    import art1 from '$imagesOptimized/Статьи/Каталог 3.jpg'
    import art2 from '$imagesOptimized//Статьи/Юный Художник 1.jpg'
    import Article from "$lib/pages/articles/Article.svelte";
</script>

<div class="content">
    <Article>
        <svelte:fragment slot="h1">{@html $_('page.life_lessons.heading1')}</svelte:fragment>
        <svelte:fragment slot="h2">{@html $_('page.life_lessons.heading2')}</svelte:fragment>
        <svelte:fragment slot="author">{@html $_('page.life_lessons.author')}</svelte:fragment>
        <svelte:fragment slot="content">
            <div class="part part1">
                {@html $_('page.life_lessons.text.part1')}
            </div>
            <div class="part part2">
                <figure>
                    <img src="{savrasovRooks}"/>
                    <figcaption>{$_('page.life_lessons.images.savrasovRooks.caption')}</figcaption>
                </figure>
                {@html $_('page.life_lessons.text.part2')}
            </div>
            <div class="part part3">
                <figure>
                    <img src="{korovinBridge}"/>
                    <figcaption>{$_('page.life_lessons.images.korovinBridge.caption')}</figcaption>
                </figure>
                {@html $_('page.life_lessons.text.part3')}
            </div>
            <div class="part part4">
                <figure>
                    <img src="{bragovskyIstomino}"/>
                    <figcaption>{$_('page.life_lessons.images.bragovskyIstomino.caption')}</figcaption>
                </figure>
                {@html $_('page.life_lessons.text.part4')}
            </div>
            <div class="part part5">
                <figure>
                    <img src="{lentulovSquare}"/>
                    <figcaption>{$_('page.life_lessons.images.lentulovSquare.caption')}</figcaption>
                </figure>
                {@html $_('page.life_lessons.text.part5')}
            </div>
            <div class="footer">
                <img src="{art1}"/>
                <img src="{art2}"/>
            </div>
        </svelte:fragment>
    </Article>
</div>


<style lang="scss">
  .content {
    padding: 7vw 1.7vw;

    article {

      .part1 {
        margin-bottom: 2.9em;
      }

      .part2 {
        margin-bottom: 3em;

        figure {
          margin-top: 0.8em;
          float: left;
          max-width: 35.8vw;
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

      .part5 {
        margin-top: -1.1em;

        figure {
          float: right;
          max-width: 33.5vw;
          margin-left: 4.0vw;
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

      .footer {
        margin-top: 13.3em;
        margin-bottom: 3em;
        display: flex;
        justify-content: start;
        gap: 6.7em;

        img:nth-child(1) {
          width: 20.6vw;
          height: auto;
          margin-left: 2.6em;
        }

        img:nth-child(2) {
          width: 41.4vw;
          height: auto;
        }
      }
    }
  }
</style>
