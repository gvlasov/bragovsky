<script lang="ts">
    import {_} from 'svelte-i18n'
    import art1 from '$imagesOptimized/Статьи/Каталог 3.jpg'
    import art1_big from '$images/Статьи/Каталог 3.jpg'
    import art2 from '$imagesOptimized/Статьи/Юный Художник 1.jpg'
    import art2_big from '$images/Статьи/Юный Художник 1.jpg'
    import art3 from '$imagesOptimized/Статьи/Юный Художник 3.jpg'
    import art3_big from '$images/Статьи/Юный Художник 3.jpg'
    import art4 from '$imagesOptimized/Статьи/Юный Художник 2.jpg'
    import art4_big from '$images/Статьи/Юный Художник 2.jpg'
    import art5 from '$imagesOptimized/Статьи/Юный Художник 4.jpg'
    import art5_big from '$images/Статьи/Юный Художник 4.jpg'
    import FootnotesArticle from "$lib/pages/articles/FootnotesArticle.svelte";
    import ArticleGallery from "$lib/ArticleGallery.svelte";
    import type {GalleryImage} from "$lib/GalleryImages";

    import rooksBack from '$assets/custom/rooks-back.jpg'
    import korovinBridge from '$assets/custom/korovin-bridge.jpg'
    import bragovskyIstomino from '$imagesOptimized/Статьи/Вечер в Истомино 3.jpg'
    import lentulovSquare from '$assets/custom/lentulov-square.jpg'

    const images: GalleryImage[] = [
        {
            small: art1,
            big: art1_big,
        },
        {
            small: art2,
            big: art2_big,
        },
        {
            small: art3,
            big: art3_big,
        },
        {
            small: art4,
            big: art4_big,
        },
        {
            small: art5,
            big: art5_big,
        },
    ]
</script>

<FootnotesArticle>
    <svelte:fragment slot="h1">{@html $_('page.from-etude-to-landscape.heading1')}</svelte:fragment>
    <svelte:fragment slot="h2">{@html $_('page.from-etude-to-landscape.heading2')}</svelte:fragment>
    <svelte:fragment slot="author">{@html $_('page.from-etude-to-landscape.author')}</svelte:fragment>
    <svelte:fragment slot="content">
        <div class="part part1">
            {@html $_('page.from-etude-to-landscape.text.part1')}
        </div>
        <div class="part part2">
            <figure class="footnote-figure-left">
                <img src="{rooksBack}"/>
                <figcaption>{@html $_('page.from-etude-to-landscape.images.savrasov-rooks.caption')}</figcaption>
            </figure>
            {@html $_('page.from-etude-to-landscape.text.part2')}
        </div>
        <div class="part part3">
            <figure class="footnote-figure-right">
                <img src="{korovinBridge}"/>
                <figcaption>{@html $_('page.from-etude-to-landscape.images.korovin-bridge.caption')}</figcaption>
            </figure>
            {@html $_('page.from-etude-to-landscape.text.part3')}
        </div>
        <div class="part part4">
            <figure class="footnote-figure-left">
                <img src="{bragovskyIstomino}"/>
                <figcaption>{@html $_('page.from-etude-to-landscape.images.bragovsky-istomino.caption')}</figcaption>
            </figure>
            {@html $_('page.from-etude-to-landscape.text.part4')}
        </div>
        <div class="part part5">
            <figure class="footnote-figure-right">
                <img src="{lentulovSquare}"/>
                <figcaption>{@html $_('page.from-etude-to-landscape.images.lentulov-square.caption')}</figcaption>
            </figure>
            {@html $_('page.from-etude-to-landscape.text.part5')}
        </div>
        <div class="footer">
            <ArticleGallery images="{images}"/>
        </div>
    </svelte:fragment>
</FootnotesArticle>


<style lang="scss">
  @import "../../../../mixins";

  article {
    .part1 {
      margin-bottom: 2.3em;
    }

    .part2 {
      margin-bottom: 3em;

      figure {
        max-width: 25.260vw;
      }
    }

    .part3 {
      margin-top: -0.8em;

      figure {
        max-width: 29.762vw;
      }
    }

    .part4 {
      padding-top: 0.5em;

      figure {
        max-width: 32.679vw;
      }
    }

    .part5 {
      padding-top: 0.5em;

      figure {
        max-width: 29.762vw;
      }
    }
  }
</style>
