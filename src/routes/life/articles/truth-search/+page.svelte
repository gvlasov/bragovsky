<script lang="ts">
    import {_} from 'svelte-i18n'
    import pinkVolkhov from '$imagesOptimized/Статьи/Этюд. Розовый волхов 6.jpg'
    import blueVolkhov from '$imagesOptimized/Живопись/_s-2901-2. Resolution 65.jpg'
    import petyaFruit from '$imagesOptimized/Статьи/Оригинал/Петя и фрукты 1970 (4).jpg'
    import art1 from '$imagesOptimized/Статьи/Творчество 1.jpg'
    import art2 from '$imagesOptimized/Статьи/Оригинал/Творчество 4.2.jpg'
    import art3 from '$imagesOptimized/Статьи/Оригинал/Творчество 5.1.jpg'
    import art1_big from '$images/Статьи/Творчество 1.jpg'
    import art2_big from '$images/Статьи/Оригинал/Творчество 4.2.jpg'
    import art3_big from '$images/Статьи/Оригинал/Творчество 5.1.jpg'
    import FootnotesArticle from "$lib/pages/articles/FootnotesArticle.svelte";
    import ArticleGallery from "$lib/ArticleGallery.svelte";
    import type {GalleryImage} from "$lib/GalleryImages";

    const images: GalleryImage[] = [
        {
            small: art1,
            big: art1_big,
        },
        {
            small: art2,
            big: art2_big
        },
        {
            small: art3,
            big: art3_big
        }
    ]
</script>

<FootnotesArticle>
    <svelte:fragment slot="h1">{@html $_('page.truth-search.heading1')}</svelte:fragment>
    <svelte:fragment slot="h2">{@html $_('page.truth-search.heading2')}</svelte:fragment>
    <svelte:fragment slot="author">{@html $_('page.truth-search.author')}</svelte:fragment>
    <svelte:fragment slot="content">
        <div class="part part1">
            {@html $_('page.truth-search.text.part1')}
        </div>
        <div class="part part2">
            <figure class="footnote-figure-left">
                <img src="{pinkVolkhov}"/>
                <figcaption>{@html $_('page.truth-search.images.pinkVolkhov.caption')}</figcaption>
            </figure>
            {@html $_('page.truth-search.text.part2')}
        </div>
        <div class="part part3">
            <figure class="footnote-figure-right">
                <img src="{blueVolkhov}"/>
                <figcaption>{@html $_('page.truth-search.images.blueVolkhov.caption')}</figcaption>
            </figure>
            {@html $_('page.truth-search.text.part3')}
        </div>
        <div class="part part4">
            <figure class="footnote-figure-left">
                <img src="{petyaFruit}"/>
                <figcaption>{@html $_('page.truth-search.images.petyaFruit.caption')}</figcaption>
            </figure>
            {@html $_('page.truth-search.text.part4')}
        </div>
        <div class="footer">
            <ArticleGallery images="{images}"/>
        </div>
    </svelte:fragment>
</FootnotesArticle>


<style lang="scss">
  @import "../../../../mixins";

  .part1 {
    margin-bottom: 2.3em;
  }

  .part2 {
    margin-bottom: 3em;

    figure {
      max-width: 35.833vw;
    }
  }

  .part3 {
    margin-top: -0.8em;

    figure {
      max-width: 33.512vw;
    }
  }

  .part4 {
    padding-top: 0.5em;

    figure {
      max-width: 37.083vw;
    }
  }

  @include for-widescreen {
    .footer {
      img {
        margin-right: 6vw;
        height: 25vw;
      }
    }
  }
</style>
