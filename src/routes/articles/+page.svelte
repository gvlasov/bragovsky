<script lang="ts">
    import ShadowedContainer from "../../lib/ShadowedContainer.svelte";
    import {base} from '$app/paths';
    import painter1 from '$imagesOptimized/Статьи/Художник 1.jpg'
    import painter2 from '$imagesOptimized/Статьи/Художник 2.2.1.jpg'
    import painter3 from '$imagesOptimized/Статьи/Художник 4.2.1.jpg'
    import painter4 from '$imagesOptimized/Статьи/Художник 3.2.1.jpg'
    import tutunov from '$imagesOptimized/Статьи/А. Тутунов.jpg'
    import truth2_a from '$imagesOptimized/Статьи/Творчество 1.jpg'
    import truth2_b from '$imagesOptimized/Статьи/Творчество 4.2.jpg'
    import truth2_c from '$imagesOptimized/Статьи/Творчество 5.1.jpg'
    import konchinSimpleTruths from '$imagesOptimized/Статьи/О Браговском.jpg'
    import nikonov from '$imagesOptimized/Статьи/О Никонове 3.jpg'
    import etude1_a from '$imagesOptimized/Статьи/Каталог 3.jpg'
    import etude1_b from '$imagesOptimized/Статьи/Юный Художник 1.jpg'
    import etude1_c from '$imagesOptimized/Статьи/Юный Художник 3.jpg'
    import etude1_d from '$imagesOptimized/Статьи/Юный Художник 2.jpg'
    import kravchenko from '$imagesOptimized/Статьи/Кравченко 2.jpg'
    import konchin75 from '$imagesOptimized/Статьи/75 лет 2.jpg'

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
            <a href="{base}/articles/tutunov">{@html $_('page.articles.tutunov.caption')}</a>
        </div>
        <div class="article article-truth-search">
            <ShadowedContainer>
                <div class="thumbnails">
                    <img src="{truth2_a}"/>
                    <img src="{truth2_b}"/>
                    <img src="{truth2_c}"/>
                </div>
            </ShadowedContainer>
            <a href="{base}/articles/truth-search">{@html $_('page.articles.truth-search.caption')}</a>
        </div>
        <div class="article article-simple-truths">
            <ShadowedContainer>
                <img src="{konchinSimpleTruths}"/>
            </ShadowedContainer>
            <a href="{base}/articles/simple-truths">{@html $_('page.articles.konchinSimpleTruths.caption')}</a>
        </div>
    </div>
    <div class="right-column">
        <div class="article article-nikonov">
            <ShadowedContainer>
                <img src="{nikonov}"/>
            </ShadowedContainer>
            <a href="{base}/articles/nikonov">{@html $_('page.articles.nikonov.caption')}</a>
        </div>
        <div class="article article-from-etude-to-landscape">
            <ShadowedContainer>
                <a class="thumbnails" href="{base}/articles/from-etude-to-landscape">
                    <img src="{etude1_a}"/>
                    <img src="{etude1_b}"/>
                    <img src="{etude1_c}"/>
                    <img src="{etude1_d}"/>
                </a>
            </ShadowedContainer>
            <a href="{base}/articles/papikyan">{$_('page.articles.from-etude-to-landscape.caption')}</a>
        </div>
        <div class="article article-kravchenko">
            <ShadowedContainer>
                <img src="{kravchenko}"/>
            </ShadowedContainer>
            <a href="{base}/articles/kravchenko">{@html $_('page.articles.kravchenko.caption')}</a>
        </div>
        <div class="article article-konchin-75-years">
            <ShadowedContainer>
                <img src="{konchin75}"/>
            </ShadowedContainer>
            <a href="{base}/articles/konchin-75-years">{@html $_('page.articles.konchin75Years.caption')}</a>
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
        margin-top: 2.67em;
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

    .article-tutunov {
      margin-top: 11.4vw;
      margin-left: 2.2vw;
      img {
        width: 21.73vw;
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
        width: 40.51vw
      }
    }

    .article-nikonov {
      margin-top: 14vw;
      margin-right: 5.5vw;
      img {
        width: 22.08vw;
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
        width: 22.89vw;
      }
    }

    .article-konchin-75-years {
      margin-top: 9.3vw;
      margin-right: 2.6vw;
      img {
        width: 29.16vw;
      }
    }
  }
</style>
