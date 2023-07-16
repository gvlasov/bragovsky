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
    <div class="left-column">
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
        <a href="{base}/articles/painters-gift" class="article article-painters-gift">
            <ShadowedContainer>
                <img src="{paintersGift}"/>
            </ShadowedContainer>
            <h3>{@html $_('page.painters-gift.article-title')}</h3>
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
        <a href="{base}/articles/simple-truths" class="article article-simple-truths">
            <ShadowedContainer>
                <img src="{simpleTruths}"/>
            </ShadowedContainer>
            <h3>{@html $_('page.articles.simple-truths.caption')}</h3>
        </a>
    </div>
    <div class="right-column">
        <a href="{base}/articles/time-for-truth" class="article article-time-for-truth">
            <ShadowedContainer>
                <img src="{timeForTruth}"/>
            </ShadowedContainer>
            <h3>{@html $_('page.time-for-truth.article-title')}</h3>
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
        <a href="{base}/articles/kravchenko" class="article article-kravchenko">
            <ShadowedContainer>
                <img src="{kravchenko}"/>
            </ShadowedContainer>
            <h3>{@html $_('page.articles.kravchenko.caption')}</h3>
        </a>
        <a href="{base}/articles/unknown-colors" class="article article-unknown-colors">
            <ShadowedContainer>
                <img src="{unknownColors}"/>
            </ShadowedContainer>
            <h3>{@html $_('page.unknown-colors.article-title')}</h3>
        </a>
    </div>
</div>

<style lang="scss">
  .articles {
    margin-top: 7.5em;
    margin-bottom: 4.5em;
    margin-left: 3em;
    display: grid;
    justify-content: space-between;

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
      width: min-content;
      text-align: center;

      .thumbnails {
        padding: 3.7vw;
      }

      h3 {
        font-size: 17px;
        line-height: 42px;
        letter-spacing: 2.6px;
        text-align: center;
        margin-top: 2.67em;
        display: block;
      }
    }


    .article-artist-story {
      .thumbnails {
        display: grid;
        grid-template-columns: max-content max-content;

        img {
          &:nth-of-type(1) {
            width: 14.44vw;
          }

          &:nth-of-type(2) {
            width: 22.2vw;
            margin-top: 1.3vw;
            margin-left: .5vw;
          }

          &:nth-of-type(3) {
            width: 17vw;
            margin-top: 4vw;
          }

          &:nth-of-type(4) {
            width: 19vw;
            margin-left: 3.5vw;
          }
        }
      }
    }

    .article-painters-gift {
      margin-top: 11.4vw;
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
      margin-top: 9vw;

      img {
        min-width: 40.51vw
      }
    }

    .article-time-for-truth {
      margin-top: 14vw;
      margin-right: 5.5vw;

      img {
        min-width: 22.08vw;
      }
    }

    .article-from-etude-to-landscape {
      margin-top: 3.9vw;
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
      margin-top: 22.2vw;
      margin-right: 5.3vw;

      img {
        min-width: 22.89vw;
      }
    }

    .article-unknown-colors {
      margin-top: 9.3vw;
      margin-right: 2.6vw;

      img {
        min-width: 29.16vw;
      }
    }
  }
</style>
