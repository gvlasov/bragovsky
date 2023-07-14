<script lang="ts">
    import Article from "$lib/pages/articles/Article.svelte";
    import {_} from 'svelte-i18n'
</script>

<div class="content">
    <Article name="unknown-colors">
        <svelte:fragment slot="heading">{$_('page.unknown-colors.heading')}</svelte:fragment>
        <svelte:fragment slot="content">{@html $_('page.unknown-colors.content')}</svelte:fragment>
        <svelte:fragment slot="author">{$_('page.unknown-colors.author')}</svelte:fragment>
    </Article>
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
