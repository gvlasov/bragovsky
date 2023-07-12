<script lang="ts">
    import ShadowedContainer from "../../lib/ShadowedContainer.svelte";
    import {base} from '$app/paths';
    import painter1 from '$imagesOptimized/Статьи/Художник 1.jpg'
    import painter2 from '$imagesOptimized/Статьи/Художник 2.2.1.jpg'
    import painter3 from '$imagesOptimized/Статьи/Художник 4.2.1.jpg'
    import painter4 from '$imagesOptimized/Статьи/Художник 3.2.1.jpg'
    import {_} from 'svelte-i18n'
</script>

<div class="articles">
    <div class="article">
        <ShadowedContainer>
            <a class="thumbnails" href="{base}/articles/papikyan">
                <img src="{painter1}"/>
                <img src="{painter2}"/>
                <br/>
                <img src="{painter3}"/>
                <img src="{painter4}"/>
            </a>
        </ShadowedContainer>
        <a href="{base}/articles/papikyan">{$_('page.articles.papikyan.caption')}</a>
    </div>
</div>

<style lang="scss">
  .articles {
    margin-top: 7.5em;
    margin-left: 3em;

    .article {
      width: max-content;
      text-align: center;

      .thumbnails {
        display: inline-block;
        padding: 3.7vw;

        img {
          vertical-align: top;

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
            width: 19vw;
            margin-left: 4vw;
          }
        }

      }

      & > a {
        font-size: 1.012vw;
        font-weight: 400;
        line-height: 1em;
        letter-spacing: 2.5999999046325684px;
        text-align: center;
        margin-top: 3.8em;
        margin-left: -0.7em;
        display: block;
      }
    }
  }
</style>
