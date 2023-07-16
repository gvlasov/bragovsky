<script lang="ts">
    import {_} from 'svelte-i18n'
    import autumn from '$assets/Сайт_optimal/Статьи/Художник 2.jpg'
    import autoportrait from '$imagesOptimized/Статьи/Художник 3.jpg'
    import willows from "$imagesOptimized/Живопись/_s-2933. Resolution 130.jpg"
    import workshop from "$imagesOptimized/Живопись/Мастерская. Resolution 120.jpg"
    import evening from "$imagesOptimized/Живопись/Вечер У замёрзшего окна. 1979 год — правильный. Resolution 90.jpg"
    import petya from "$imagesOptimized/Живопись/В список. Resolution 50.jpg"
    import art1 from '$imagesOptimized/Статьи/Художник 1.jpg'
    import art1_big from '$images/Статьи/Художник 1.jpg'
    import art2 from '$imagesOptimized/Статьи/Художник 2.2.1.jpg'
    import art2_big from '$images/Статьи/Художник 2.2.1.jpg'
    import art3 from '$imagesOptimized/Статьи/Художник 3.2.1.jpg'
    import art3_big from '$images/Статьи/Художник 3.2.1.jpg'
    import art4 from '$imagesOptimized/Статьи/Художник 4.2.1.jpg'
    import art4_big from '$images/Статьи/Художник 4.2.1.jpg'
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
            big: art2_big,
        },
        {
            small: art3,
            big: art3_big,
        },
        {
            small: art4,
            big: art4_big,
        }
    ]
</script>

<FootnotesArticle>
    <svelte:fragment slot="h1">{@html $_('page.artist-story.heading1')}</svelte:fragment>
    <svelte:fragment slot="h2">{@html $_('page.artist-story.heading2')}</svelte:fragment>
    <svelte:fragment slot="author">{@html $_('page.artist-story.author')}</svelte:fragment>
    <svelte:fragment slot="content">
        <div class="part part1">
            {@html $_('page.artist-story.text.part1')}
        </div>
        <div class="part part2">
            <figure class="footnote-figure-left">
                <img src="{autumn}"/>
                <figcaption>{$_('page.artist-story.images.autumn.caption')}</figcaption>
            </figure>
            {@html $_('page.artist-story.text.part2')}
        </div>
        <div class="part part3">
            <figure class="footnote-figure-right">
                <img src="{autoportrait}"/>
                <figcaption>{$_('page.artist-story.images.autoportrait.caption')}</figcaption>
            </figure>
            {@html $_('page.artist-story.text.part3')}
        </div>
        <div class="part part4">
            <figure class="footnote-figure-left">
                <img src="{workshop}"/>
                <figcaption>{$_('page.artist-story.images.workshop.caption')}</figcaption>
            </figure>
            {@html $_('page.artist-story.text.part4')}
        </div>
        <div class="part part5">
            <figure class="footnote-figure-left">
                <img src="{willows}"/>
                <figcaption>{$_('page.artist-story.images.willows.caption')}</figcaption>
            </figure>
            {@html $_('page.artist-story.text.part5')}
        </div>
        <div class="part part6">
            <figure class="footnote-figure-left">
                <img src="{evening}"/>
                <figcaption>{$_('page.artist-story.images.evening.caption')}</figcaption>
            </figure>
            {@html $_('page.artist-story.text.part6')}
        </div>
        <div class="part part7">
            <figure class="footnote-figure-right">
                <img src="{petya}"/>
                <figcaption>{$_('page.artist-story.images.petya.caption')}</figcaption>
            </figure>
            {@html $_('page.artist-story.text.part7')}
        </div>
        <div class="footer">
            <ArticleGallery images="{images}"/>
        </div>
    </svelte:fragment>
</FootnotesArticle>


<style lang="scss">
  @import "../../../mixins";

  article {

    .part1 {
    }

    .part2 {
      figure {
        max-width: 34.896vw;
      }
    }

    .part3 {
      figure {
        max-width: 21.410vw;
      }
    }

    .part4 {
      figure {
        max-width: 34.115vw;
      }
    }

    .part5 {
      figure {
        max-width: 35.337vw;
      }
    }

    .part6 {
      figure {
        max-width: 36.667vw;
      }
    }

    .part7 {
      figure {
        max-width: 27.344vw;
      }
    }
  }

  @include for-widescreen {
    .footer .gallery .carousel-slider .slick-list .slick-track img {
      margin-right: 15vw;
      height: 25vw;
    }
  }
</style>
