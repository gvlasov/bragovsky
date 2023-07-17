<script lang="ts">
    import ShadowedContainer from "$lib/ShadowedContainer.svelte";
    import {base} from '$app/paths';
    import artistStory1 from '$imagesOptimized/Статьи/Художник 1.jpg'
    import artistStory2 from '$imagesOptimized/Статьи/Художник 2.2.1.png'
    import artistStory3 from '$imagesOptimized/Статьи/Художник 4.2.1.png'
    import artistStory4 from '$imagesOptimized/Статьи/Художник 3.2.1.png'
    import paintersGift from '$imagesOptimized/Статьи/А. Тутунов.jpg'
    import truthSearch1 from '$imagesOptimized/Статьи/Творчество 1.jpg'
    import truthSearch2 from '$imagesOptimized/Статьи/Творчество 4.2.png'
    import truthSearch3 from '$imagesOptimized/Статьи/Творчество 5.1.png'
    import simpleTruths from '$imagesOptimized/Статьи/О Браговском.jpg'
    import timeForTruth from '$imagesOptimized/Статьи/О Никонове 3.jpg'
    import fromEtude1 from '$imagesOptimized/Статьи/Каталог 3.jpg'
    import fromEtude2 from '$imagesOptimized/Статьи/Юный Художник 1.png'
    import fromEtude3 from '$imagesOptimized/Статьи/Юный Художник 3.png'
    import fromEtude4 from '$imagesOptimized/Статьи/Юный Художник 2.png'
    import kravchenko from '$imagesOptimized/Статьи/Кравченко 2.jpg'
    import unknownColors from '$imagesOptimized/Статьи/75 лет 2.jpg'

    import {_} from 'svelte-i18n'
</script>

<div class="articles">
    <a href="{base}/life/articles/artist-story" class="article article-artist-story">
        <ShadowedContainer>
            <div class="thumbnails">
                <img src="{artistStory1}"/>
                <img src="{artistStory2}"/>
                <img src="{artistStory3}"/>
                <img src="{artistStory4}"/>
            </div>
        </ShadowedContainer>
        <h3>{$_('page.artist-story.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/time-for-truth" class="article article-time-for-truth">
        <ShadowedContainer>
            <img src="{timeForTruth}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.time-for-truth.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/painters-gift" class="article article-painters-gift">
        <ShadowedContainer>
            <img src="{paintersGift}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.painters-gift.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/from-etude-to-landscape" class="article article-from-etude-to-landscape">
        <ShadowedContainer>
            <div class="thumbnails">
                <img src="{fromEtude1}"/>
                <img src="{fromEtude2}"/>
                <img src="{fromEtude3}"/>
                <img src="{fromEtude4}"/>
            </div>
        </ShadowedContainer>
        <h3>{$_('page.from-etude-to-landscape.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/kravchenko" class="article article-kravchenko">
        <ShadowedContainer>
            <img src="{kravchenko}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.kravchenko.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/truth-search" class="article article-truth-search">
        <ShadowedContainer>
            <div class="thumbnails">
                <img src="{truthSearch1}"/>
                <img src="{truthSearch2}"/>
                <img src="{truthSearch3}"/>
            </div>
        </ShadowedContainer>
        <h3>{@html $_('page.truth-search.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/simple-truths" class="article article-simple-truths">
        <ShadowedContainer>
            <img src="{simpleTruths}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.simple-truths.article-title')}</h3>
    </a>
    <a href="{base}/life/articles/unknown-colors" class="article article-unknown-colors">
        <ShadowedContainer>
            <img src="{unknownColors}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.unknown-colors.article-title')}</h3>
    </a>
</div>

<style lang="scss">
  @import "../../../mixins";

  .articles {
    margin-top: 9.6vw;
    margin-bottom: 4.5em;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    justify-content: center;
    gap: 13vw;

    .left-column, .right-column {
      width: 0;
      display: flex;
      flex-direction: column;
    }

    .left-column {
      grid-column: 1;
      align-items: start;
    }

    .right-column {
      grid-column: 2;
      align-items: end;
    }

    a.article {
      display: block;
      text-align: center;
      align-self: center;

      .thumbnails {
        padding: 6.3vw;
      }

      h3 {
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1.8px;
        margin-top: 22px;
      }
    }


    .article-artist-story {
      width: 100%;

      .thumbnails {
        display: grid;
        grid-template-columns: 0 0;
        justify-content: space-between;

        img {
          &:nth-of-type(1) {
            min-width: 27.44vw;
          }

          &:nth-of-type(2) {
            min-width: 38.2vw;
            margin-right: 1.5vw;
            margin-top: 4vw;
            justify-self: end;
          }

          &:nth-of-type(3) {
            min-width: 32.5vw;
            margin-top: 7vw;
          }

          &:nth-of-type(4) {
            min-width: 36vw;
            justify-self: end;
          }
        }
      }
    }

    .article-painters-gift {
      width: 61.026vw;

      img {
        min-width: 21.73vw;
      }
    }

    .article-truth-search {
      width: 100%;

      .thumbnails {
        display: grid;
        grid-template-columns: 0 0;
        justify-content: space-between;

        img {
          &:nth-of-type(1) {
            min-width: 27.44vw;
            grid-column: 1;
            grid-row: 1;
          }

          &:nth-of-type(2) {
            min-width: 38.2vw;
            margin-top: 5vw;
            grid-column: 2;
            justify-self: end;
            grid-row: 1;
          }

          &:nth-of-type(3) {
            min-width: 46.0vw;
            margin-top: 43vw;
            margin-left: 16vw;
            grid-column: 1;
            grid-row: 1/3;
          }

        }

      }
    }

    .article-simple-truths {
      width: 69.744vw;

      img {
        min-width: 40.51vw
      }
    }

    .article-time-for-truth {
      align-self: center;
      width: 61.026vw;

      img {
        min-width: 22.08vw;
      }
    }

    .article-from-etude-to-landscape {
      width: 100%;

      .thumbnails {
        display: grid;
        grid-template-columns: 0 0;
        justify-content: space-between;

        img {
          &:nth-of-type(1) {
            min-width: 27.44vw;
          }

          &:nth-of-type(2) {
            min-width: 38.2vw;
            justify-self: end;
          }

          &:nth-of-type(3) {
            min-width: 32.5vw;
            margin-top: 7vw;
          }

          &:nth-of-type(4) {
            min-width: 36vw;
            margin-top: -1vw;
            justify-self: end;
          }
        }
      }
    }

    .article-kravchenko {
      width: 61.026vw;

      img {
        min-width: 22.89vw;
      }
    }

    .article-unknown-colors {
      width: 69.744vw;

      img {
        min-width: 29.16vw;
      }
    }

    @include for-widescreen {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0;
      justify-content: space-between;

      a.article {
        width: min-content;
        height: 0;
        position: absolute;
        margin-top: 7.5em;
        margin-left: 3em;

        h3 {
          font-size: 1.012vw;
          line-height: 2.500vw;
          letter-spacing: 0.155vw;
          text-align: center;
          margin-top: 2.67em;
          display: block;
        }

        .thumbnails {
          padding: 3.6vw;
        }
      }

      .article-artist-story {
        min-width: 47vw;
        left: 0;

        .thumbnails {
          img {
            &:nth-of-type(1) {
              min-width: 14.36vw;
            }

            &:nth-of-type(2) {
              min-width: 21.7vw;
              margin-right: 0.0vw;
              margin-top: 1.4vw;
              justify-self: end;
            }

            &:nth-of-type(3) {
              min-width: 16.9vw;
              margin-top: 4.1vw;
            }

            &:nth-of-type(4) {
              min-width: 19vw;
              justify-self: end;
            }
          }
        }
      }

      .article-time-for-truth {
        right: 5.5vw;
        top: 13.8vw;
        align-self: end;
        width: initial;
      }

      .article-painters-gift {
        top: 59vw;
        left: 2.2vw;
        width: initial;
      }
      .article-from-etude-to-landscape {
        top: 68.4vw;
        right: 2.7vw;
        align-self: end;
        width: initial;
        min-width: 47vw;
        .thumbnails {
          img {
            &:nth-of-type(1) {
              min-width: 15.36vw;
            }

            &:nth-of-type(2) {
              min-width: 20.9vw;
              margin-right: 0.0vw;
              margin-top: 0.1vw;
              justify-self: end;
            }

            &:nth-of-type(3) {
              min-width: 17.4vw;
              margin-top: 3.3vw;
            }

            &:nth-of-type(4) {
              min-width: 18.4vw;
              margin-top: -2.7vw;
              justify-self: end;
            }
          }
        }
      }

      .article-truth-search {
        top: 123.1vw;
        left: 0;
        width: initial;
        min-width: 47vw;
        .thumbnails {
          img {
            &:nth-of-type(1) {
              grid-column: 1;
              grid-row: 1;
              min-width: 14.9vw;
            }

            &:nth-of-type(2) {
              grid-column: 2;
              grid-row: 1;
              min-width: 20.9vw;
              margin-right: 0.0vw;
              margin-top: 1.3vw;
              justify-self: end;
            }

            &:nth-of-type(3) {
              min-width: 25.3vw;
              margin-top: 21.6vw;
              margin-left: 7.9vw;
              grid-column: 1;
              grid-row: 1/3;
            }

          }
        }
      }

      .article-kravchenko {
        top: 138.2vw;
        right: 5.3vw;
        align-self: end;
        width: initial;
      }

      .article-simple-truths {
        top: 183vw;
        left: 0;
        width: initial;
      }

      .article-unknown-colors {
        top: 193.6vw;
        right: 2.7vw;
        align-self: end;
        width: initial;

        h3 {
          padding-bottom: 6em;
        }
      }
    }
  }
</style>
