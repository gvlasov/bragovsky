<script lang="ts">
    import {_} from 'svelte-i18n'
    import {base} from '$app/paths';
    import photos from "$imagesOptimized/Фото/001.jpg"
    import sketches from "$imagesOptimized/Наброски/Автопортрет 11.jpg"
    import books from "$imagesOptimized/Книги/Книга 1-2.png"
    import articles from "$imagesOptimized/Статьи/Папикян-газета.jpg"
    import year1971 from "$imagesOptimized/Статьи/1.jpg"
    import dates from "$assets/custom/dates.jpeg"
</script>

<div class="categories">
    <figure class="category category-photos">
        <a href="{base}/life/photos/">
            <img
                    alt="{$_(`page.life.categories.photos.title`)}"
                    src="{photos}"
            />
            <figcaption>{@html $_(`page.life.categories.photos.title`)}</figcaption>
        </a>
    </figure>
    <figure class="category category-sketches">
        <a href="{base}/life/sketches/">
            <img
                    alt="{$_(`page.life.categories.sketches.title`)}"
                    src="{sketches}"
            />
            <figcaption>{@html $_(`page.life.categories.sketches.title`)}</figcaption>
        </a>
    </figure>
    <figure class="category category-books">
        <a href="{base}/life/books/">
            <img
                    alt="{$_(`page.life.categories.books.title`)}"
                    src="{books}"
            />
            <figcaption>{@html $_(`page.life.categories.books.title`)}</figcaption>
        </a>
    </figure>
    <figure class="category category-articles">
        <a href="{base}/life/articles/">
            <img
                    alt="{$_(`page.life.categories.articles.title`)}"
                    src="{articles}"
            />
            <figcaption>{@html $_(`page.life.categories.articles.title`)}</figcaption>
        </a>
    </figure>
    <figure class="category category-1971">
        <a href="{base}/life/1971/">
            <img
                    alt="{$_(`page.life.categories.1971.title`)}"
                    src="{year1971}"
            />
            <figcaption>{@html $_(`page.life.categories.1971.title`)}</figcaption>
        </a>
    </figure>
    <figure class="category category-dates">
        <a href="{base}/life/dates/">
            <img
                    alt="{$_(`page.life.categories.dates.title`)}"
                    src="{dates}"
            />
            <figcaption>{@html $_(`page.life.categories.dates.title`)}</figcaption>
        </a>
    </figure>
</div>


<style lang="scss">
  @import "../../mixins";
  @import "../../variables";

  .categories {
    display: grid;
    grid-template-columns: 0 0;
    justify-content: space-between;
    margin-top: 34px;
    max-width: 100%;

    figure.category {
      display: block;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 100%;
        }
      }

      &.category-photos {
        min-width: 44vw;
      }

      &.category-sketches {
        min-width: 36vw;
        position: relative;
        top: 15vw;
        justify-self: end;
      }

      &.category-books {
        min-width: 40vw;
        position: relative;
        top: 8vw;
      }

      &.category-articles {
        min-width: 41vw;
        position: relative;
        top: 14.0vw;
        justify-self: end;

        img {
          box-shadow: 0 0 10px 0 rgba(209, 207, 207, 0.50);
        }
      }

      &.category-1971 {
        min-width: 38vw;
        position: relative;
        top: 15.0vw;
        figcaption {
          margin-bottom: $mobileBodyPadding;
        }
      }

      &.category-dates {
        min-width: 38vw;
        position: relative;
        top: 2.0vw;
        justify-self: end;

        .dates-figure {
          background-color: #F2F2F2;
          width: 40.823vw;
          height: 25.526vw;
          margin-left: auto;
          display: flex;
          align-items: center;
          text-align: center;
          font-size: 9px;
          font-style: normal;
          font-weight: 400;
          line-height: 50px; /* 555.556% */
          letter-spacing: 0.081px;

          & > div {
            flex-basis: 100%;
          }
        }
      }

      figcaption {
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 1.8px;
        margin-top: 17px;
      }
    }

    @include for-widescreen {
      max-width: 67vw;
      margin: 0 auto;
      figure.category {
        position: relative;

        figcaption {
          text-align: center;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 42px; /* 247.059% */
          letter-spacing: 2.6px;
          margin-top: 47px;
        }

        &.category-photos {
          top: 13.8vw;
          min-width: 28.5vw;
        }

        &.category-sketches {
          top: 32.0vw;
          min-width: 17.5vw;
          right: 6vw;
        }

        &.category-books {
          top: 24.0vw;
          min-width: 25.5vw;
          left: 1.7vw;
        }

        &.category-articles {
          top: 25.5vw;
          min-width: 31.5vw;
          left: 1.5vw;
        }

        &.category-1971 {
          top: 32.0vw;
          min-width: 22.4vw;
          left: 2.0vw;
          figcaption {
            padding-bottom: 10vw;
          }
        }

        &.category-dates {
          top: 25.6vw;
          min-width: 31.1vw;
          left: 1.7vw;
        }
      }
    }
  }
</style>
