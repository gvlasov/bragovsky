<script lang="ts">
    import ShadowedContainer from "../../lib/ShadowedContainer.svelte";
    import {base} from '$app/paths';
    import artistStory1 from '$imagesOptimized/Статьи/Художник 1.jpg'
    import artistStory2 from '$imagesOptimized/Статьи/Художник 2.2.1.jpg'
    import artistStory3 from '$imagesOptimized/Статьи/Художник 4.2.1.jpg'
    import artistStory4 from '$imagesOptimized/Статьи/Художник 3.2.1.jpg'
    import paintersGift from '$imagesOptimized/Статьи/А. Тутунов.jpg'
    import truthSearch1 from '$imagesOptimized/Статьи/Творчество 1.jpg'
    import truthSearch2 from '$imagesOptimized/Статьи/Творчество 4.2.jpg'
    import truthSearch3 from '$imagesOptimized/Статьи/Творчество 5.1.jpg'
    import simpleTruths from '$imagesOptimized/Статьи/О Браговском.jpg'
    import timeForTruth from '$imagesOptimized/Статьи/О Никонове 3.jpg'
    import fromEtude1 from '$imagesOptimized/Статьи/Каталог 3.jpg'
    import fromEtude2 from '$imagesOptimized/Статьи/Юный Художник 1.jpg'
    import fromEtude3 from '$imagesOptimized/Статьи/Юный Художник 3.jpg'
    import fromEtude4 from '$imagesOptimized/Статьи/Юный Художник 2.jpg'
    import kravchenko from '$imagesOptimized/Статьи/Кравченко 2.jpg'
    import unknownColors from '$imagesOptimized/Статьи/75 лет 2.jpg'

    import {_} from 'svelte-i18n'
</script>

<div class="articles">
    <a href="{base}/articles/artist-story" class="article article-artist-story">
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
    <a href="{base}/articles/time-for-truth" class="article article-time-for-truth">
        <ShadowedContainer>
            <img src="{timeForTruth}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.time-for-truth.article-title')}</h3>
    </a>
    <a href="{base}/articles/painters-gift" class="article article-painters-gift">
        <ShadowedContainer>
            <img src="{paintersGift}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.painters-gift.article-title')}</h3>
    </a>
    <a href="{base}/articles/from-etude-to-landscape" class="article article-from-etude-to-landscape">
        <ShadowedContainer>
            <div class="thumbnails" href="{base}/articles/from-etude-to-landscape">
                <img src="{fromEtude1}"/>
                <img src="{fromEtude2}"/>
                <img src="{fromEtude3}"/>
                <img src="{fromEtude4}"/>
            </div>
        </ShadowedContainer>
        <h3>{$_('page.from-etude-to-landscape.article-title')}</h3>
    </a>
    <a href="{base}/articles/truth-search" class="article article-truth-search">
        <ShadowedContainer>
            <div class="thumbnails">
                <img src="{truthSearch1}"/>
                <img src="{truthSearch2}"/>
                <img src="{truthSearch3}"/>
            </div>
        </ShadowedContainer>
        <h3>{@html $_('page.truth-search.article-title')}</h3>
    </a>
    <a href="{base}/articles/kravchenko" class="article article-kravchenko">
        <ShadowedContainer>
            <img src="{kravchenko}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.kravchenko.article-title')}</h3>
    </a>
    <a href="{base}/articles/simple-truths" class="article article-simple-truths">
        <ShadowedContainer>
            <img src="{simpleTruths}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.simple-truths.article-title')}</h3>
    </a>
    <a href="{base}/articles/unknown-colors" class="article article-unknown-colors">
        <ShadowedContainer>
            <img src="{unknownColors}"/>
        </ShadowedContainer>
        <h3>{@html $_('page.unknown-colors.article-title')}</h3>
    </a>
</div>

<style lang="scss">
  @import "../../mixins";

  .articles {
    margin-top: 9.6vw;
    margin-bottom: 4.5em;
    display: flex;
    flex-direction: column;
    grid-template-columns: 0 0;
    justify-content: space-between;
    max-width: 100vw;

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

      .thumbnails {
        padding: 6.3vw;
      }

      h3 {
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 1.8px;
        margin-top: 8px;
        display: block;
      }
    }


    .article-artist-story {
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
      margin-left: 2.2vw;

      img {
        min-width: 21.73vw;
      }
    }

    .article-truth-search {
      .thumbnails {
        display: grid;
        grid-template-columns: max-content max-content;
        margin-top: 17.5vw;

        img {
          &:nth-of-type(1) {
            width: 14.8vw;
            grid-column: 1;
            grid-row: 1;
            margin-bottom: 10%;
          }

          &:nth-of-type(2) {
            width: 20.8vw;
            grid-column: 2;
            grid-row: 1;
            margin-top: 6%;
            margin-left: 4vw;
          }

          &:nth-of-type(3) {
            width: 25.3vw;
            grid-column: 1/3;
            grid-row: 2;
            justify-self: center;
            margin-top: .8vw;
            margin-left: 2vw;
          }
        }
      }
    }

    .article-simple-truths {
      img {
        min-width: 40.51vw
      }
    }

    .article-time-for-truth {
      align-self: end;
      margin-right: 5.5vw;

      img {
        min-width: 22.08vw;
      }
    }

    .article-from-etude-to-landscape {
      margin-right: 2.5vw;

      .thumbnails {
        display: grid;
        grid-template-columns: max-content max-content;

        img {
          &:nth-of-type(1) {
            width: 15.0vw;
          }

          &:nth-of-type(2) {
            width: 21.04vw;
            margin-left: 1.9vw;
          }

          &:nth-of-type(3) {
            width: 17vw;
            margin-top: 4vw;
          }

          &:nth-of-type(4) {
            width: 18.54vw;
            margin-left: 4.2vw;
            margin-top: -2.5vw;

          }
        }
      }
    }

    .article-kravchenko {
      margin-right: 5.3vw;

      img {
        min-width: 22.89vw;
      }
    }

    .article-unknown-colors {
      margin-right: 2.6vw;

      img {
        min-width: 29.16vw;
      }
    }

    @include for-widescreen {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0;


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
      .article-unknown-colors {
        align-self: end;
      }

      .article-kravchenko {
        align-self: end;
      }

      .article-from-etude-to-landscape {
        align-self: end;
      }

      .article-time-for-truth {
        align-self: end;
      }

      .article-simple-truths {
        top: 183vw;
      }

      .article-unknown-colors {
        top: 194vw;
        right: 0;
        h3 {
          padding-bottom: 6em;
        }
      }
      .article-truth-search {
        top: 105.5vw;
      }
      .article-kravchenko {
        top: 138.2vw;
        right: 0;
      }
      .article-painters-gift {
        top: 59vw;
      }
      .article-from-etude-to-landscape {
        top: 68.4vw;
        right: 0;
      }
      .article-time-for-truth {
        right: 0;
        top: 13.8vw;
      }
    }
  }
</style>
