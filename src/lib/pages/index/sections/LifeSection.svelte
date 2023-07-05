<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import {_} from 'svelte-i18n'
    import afisha from '$assets/Сайт/Фото/_MG_1565-2.jpg'
    import photo1 from '$assets/Сайт/Фото/Пишет.jpg'
    import photo2 from '$assets/Сайт/Фото/С Папикяном-5.jpg'
    import photo3 from '$assets/Сайт/Фото/На льду 1.jpg'
    import photo4 from '$assets/Сайт/Фото/Выставка 2.1.jpg'
    import photo5 from '$assets/Сайт/Фото/Храм в Армении 1.jpg'
    import photo6 from '$assets/Сайт/Фото/Портрет 5.jpg'
    import photo7 from '$assets/Сайт/Фото/Э. Браговский.jpg'
</script>

<section class="life">
    <SectionHeader pageName="life"/>
    <div class="firstclear"/>
    <figure class="afisha">
        <img src="{afisha}"/>
        <figcaption>{$_('page.index.life.afisha.desc')}</figcaption>
    </figure>
    <div class="photo1">
        <img src="{photo1}"/>
    </div>
    <div class="photo2">
        <img src="{photo2}"/>
    </div>
    <div class="photo3">
        <img src="{photo3}"/>
    </div>
    <div class="photo4">
        <img src="{photo4}"/>
    </div>
    <div class="photo5">
        <img src="{photo5}"/>
    </div>
    <div class="photo6">
        <img src="{photo6}"/>
    </div>
    <div class="photo7">
        <img src="{photo7}"/>
    </div>
    <div class="lastclear"/>
</section>
<style lang="scss">
  @import "../../../../variables";

  section.life {
    margin-top: 495px;
    @media screen and (max-width: 639px) {
      margin-top: 72px;
    }

    figure.afisha {

      img {
        box-shadow: 0 0 20px rgb(93 93 93 / 24%);
        min-width: 100%;
      }

      figcaption {
        text-align: right;
      }
    }

    & > div > img {
      box-shadow: 0 0 20px rgb(93 93 93 / 24%);
      max-width: 100%;
    }

    @media screen and (min-width: 641px) {

      display: grid;
      grid-template-columns: 18.25% 1fr 1fr 39%;
      grid-template-rows: repeat(5, max-content);

      .firstclear, .lastclear {
        display: none;
      }

      figure.afisha {
        grid-column: 4;
        grid-row: 1/6;
        float: right;
        margin-top: -3.9vw;
        figcaption {
          display: none;
        }
      }

      .photo1 {
        grid-column: 1;
        grid-row: 2/4;
        padding-top: 32.5%;
        padding-right: 13.8%;
      }

      .photo2 {
        grid-column: 1;
        grid-row: 4/6;
        padding-top: 10.5%;
        padding-right: 24%;
      }

      .photo3 {
        grid-column: 3;
        grid-row: 4/6;
        padding-top: 10%;
        padding-left: 11.5%;
        padding-right: 32.4%;
      }
      .photo4 {
        grid-column: 2;
        grid-row: 2;
        padding-top: 34.3%;
        padding-left: 15%;
        padding-right: 2%;
      }
      .photo5 {
        grid-column: 3;
        grid-row: 2/4;
        padding-top: 43%;
        padding-right: 23.4%;
        padding-left: 11.5%;
      }
      .photo6 {
        grid-column: 2;
        grid-row: 3/5;
        padding-top: 12%;
      }
      .photo7 {
        grid-column: 2;
        grid-row: 5/6;
        padding-top: 6.4%;
        padding-left: 21%;
      }
    }

    @media screen and (max-width: 639px) {
      text-align: center;
      .firstclear {
        clear: none;
      }
      .lastclear {
        clear: both;
      }
      figure.afisha {
        float: right;
        width: 56%;

        figcaption {
          text-align: right;
          font-size: 8px;
          line-height: 16.8px;
          letter-spacing: 0.057em;
          padding-top: 0;
          padding-right: 3px;
          @media screen and (max-width: 639px) {
            padding-top: 2px;
          }
        }

        @media screen and (max-width: 639px) {
          width: 53.8%;
          margin-top: -2%;
        }
        img {
          margin-top: -8%;
        }
      }
      & > div {
        padding: 1.9%;
        box-sizing: border-box;

        &.photo1 {
          padding-left: 0;
          max-width: 33%;
          float: left;
          margin-top: 1.5%;
          padding-right: 3.4%;
        }

        &.photo2 {
          padding-left: 0;
          width: 34.7%;
          margin-top: -0.5%;
          float: left;
        }

        &.photo3 {
          width: 28.5%;
          float: right;
          padding-right: 0;
          margin-top: 3%;
        }

        &.photo4 {
          width: 34.5%;
          margin-right: 1.4%;
          margin-top: 6.1%;
          float: right;
        }

        &.photo5 {
          width: 26.5%;
          margin-top: -0.7%;
          float: left;
          padding-left: 0;
        }

        &.photo6 {
          width: 40.4%;
          margin-top: 3%;
          float: left;
        }

        &.photo7 {
          padding-left: 0;
          width: 33%;
          margin-right: -2%;
          margin-top: .5%;
          float: right;
        }
      }
    }
  }

</style>
