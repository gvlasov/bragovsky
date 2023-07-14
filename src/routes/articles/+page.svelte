<script lang="ts">
    import ShadowedContainer from "../../lib/ShadowedContainer.svelte";
    import {base} from '$app/paths';
    import painter1 from '$imagesOptimized/Статьи/Художник 1.jpg'
    import painter2 from '$imagesOptimized/Статьи/Художник 2.2.1.jpg'
    import painter3 from '$imagesOptimized/Статьи/Художник 4.2.1.jpg'
    import painter4 from '$imagesOptimized/Статьи/Художник 3.2.1.jpg'
    import tutunov from '$imagesOptimized/Статьи/А. Тутунов.jpg'
    import bragovsky2_a from '$imagesOptimized/Статьи/Творчество 1.jpg'
    import bragovsky2_b from '$imagesOptimized/Статьи/Творчество 4.2.jpg'
    import bragovsky2_c from '$imagesOptimized/Статьи/Творчество 5.1.jpg'
    import konchinSimpleTruths from '$imagesOptimized/Статьи/О Браговском.jpg'
    import nikonov from '$imagesOptimized/Статьи/О Никонове 3.jpg'
    import bragovsky1_a from '$imagesOptimized/Статьи/Каталог 3.jpg'
    import bragovsky1_b from '$imagesOptimized/Статьи/Юный Художник 1.jpg'
    import bragovsky1_c from '$imagesOptimized/Статьи/Юный Художник 3.jpg'
    import bragovsky1_d from '$imagesOptimized/Статьи/Юный Художник 2.jpg'

    import {_} from 'svelte-i18n'
</script>

<div class="articles">
    <div class="left-column">
        <div class="article article-papikyan">
            <ShadowedContainer>
                <a class="thumbnails" href="{base}/articles/papikyan">
                    <img src="{painter1}"/>
                    <img src="{painter2}"/>
                    <img src="{painter3}"/>
                    <img src="{painter4}"/>
                </a>
            </ShadowedContainer>
            <a href="{base}/articles/papikyan">{$_('page.articles.papikyan.caption')}</a>
        </div>
        <div class="article article-tutunov">
            <ShadowedContainer>
                <img src="{tutunov}"/>
            </ShadowedContainer>
            <a href="{base}/articles/papikyan">{@html $_('page.articles.tutunov.caption')}</a>
        </div>
        <div class="article article-bragovsky2">
            <ShadowedContainer>
                <div class="thumbnails">
                    <img src="{bragovsky2_a}"/>
                    <img src="{bragovsky2_b}"/>
                    <img src="{bragovsky2_c}"/>
                </div>
            </ShadowedContainer>
            <a href="{base}/articles/bragovsky2">{@html $_('page.articles.bragovsky2.caption')}</a>
        </div>
        <div class="article article-konchin-simple-truths">
            <ShadowedContainer>
                <img src="{konchinSimpleTruths}"/>
            </ShadowedContainer>
            <a href="{base}/articles/konchin-simple-truths">{@html $_('page.articles.konchinSimpleTruths.caption')}</a>
        </div>
    </div>
    <div class="right-column">
        <div class="article article-nikonov">
            <ShadowedContainer>
                <img src="{nikonov}"/>
            </ShadowedContainer>
            <a href="{base}/articles/nikonov">{@html $_('page.articles.nikonov.caption')}</a>
        </div>

        <div class="article article-bragovsky1">
            <ShadowedContainer>
                <a class="thumbnails" href="{base}/articles/papikyan">
                    <img src="{bragovsky1_a}"/>
                    <img src="{bragovsky1_b}"/>
                    <img src="{bragovsky1_c}"/>
                    <img src="{bragovsky1_d}"/>
                </a>
            </ShadowedContainer>
            <a href="{base}/articles/papikyan">{$_('page.articles.papikyan.caption')}</a>
        </div>
    </div>
</div>

<style lang="scss">
  .articles {
    margin-top: 7.5em;
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
    }
    .right-column {
      grid-column: 2;
      align-items: end;

    }

    .article {
      width: max-content;
      text-align: center;

      & > a {
        font-size: 17px;
        line-height: 42px;
        letter-spacing: 2.6px;
        text-align: center;
        margin-top: 3.8em;
        display: block;
        white-space: nowrap;
      }
    }

    .thumbnails {
      padding: 3.7vw;
    }

    .article-papikyan {
      .thumbnails {
        display: grid;
        grid-template-columns: 1fr 1fr;
        img {
          &:nth-of-type(1) {
            width: 14.44vw;
            margin-right: 3.4vw;
          }

          &:nth-of-type(2) {
            width: 21.8vw;
            margin-top: 1.5vw;
          }

          &:nth-of-type(3) {
            width: 17vw;
            margin-top: 4vw;
          }

          &:nth-of-type(4) {
            width: 14vw;
            margin-left: 4vw;
          }
        }
      }
    }

    .article-tutunov {
      img {
        width: 21.03vw;
      }
    }

    .article-bragovsky2 {
      .thumbnails {
        display: grid;
        grid-template-columns: 1fr 1fr;

        img {
          &:nth-of-type(1) {
            width: 14.8vw;
            grid-column: 1;
            grid-row: 1;
            margin-bottom: 10%;
            margin-left: 8%;
          }

          &:nth-of-type(2) {
            width: 20.8vw;
            grid-column: 2;
            grid-row: 1;
            margin-top: 9%;
            justify-self: center;
          }

          &:nth-of-type(3) {
            width: 25.3vw;
            grid-column: 1/3;
            grid-row: 2;
            justify-self: center
          }
        }
      }
    }
    .article-konchin-simple-truths {
      img {
        width: 40.51vw
      }
    }

    .article-nikonov {
      img {
        width: 22.08vw;
      }
    }

    .article-bragovsky1 {
      .thumbnails {
        display: grid;
        grid-template-columns: 1fr 1fr;
        img {
          &:nth-of-type(1) {
            width: 14.44vw;
            margin-right: 3.4vw;
          }

          &:nth-of-type(2) {
            width: 21.8vw;
            margin-top: 1.5vw;
          }

          &:nth-of-type(3) {
            width: 17vw;
            margin-top: 4vw;
          }

          &:nth-of-type(4) {
            width: 16vw;
            margin-left: 4vw;
          }
        }
      }
    }
  }
</style>
