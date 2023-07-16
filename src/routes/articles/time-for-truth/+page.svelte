<script lang="ts">
    import Article from "$lib/pages/articles/Article.svelte";
    import {_} from 'svelte-i18n'
    import opening from "$images/Статьи/О Никонове 4.jpg"
</script>

<Article>
    <svelte:fragment slot="heading">{$_('page.time-for-truth.heading')}</svelte:fragment>
    <svelte:fragment slot="content">
        {@html $_('page.time-for-truth.text.part1')}
        <figure>
            <img src="{opening}"/>
            <figcaption>
                {@html $_('page.time-for-truth.images.opening.caption')}
            </figcaption>
        </figure>
        {@html $_('page.time-for-truth.text.part2')}
    </svelte:fragment>
    <svelte:fragment slot="author">{$_('page.time-for-truth.author')}</svelte:fragment>
</Article>


<style lang="scss">
  article {
    figure {
      img {
        margin-top: 2.5em;
        width: 100%;
      }
      figcaption {
        text-align: center;
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 41.5px;
        letter-spacing: 2.8px;
      }
    }
  }
</style>
