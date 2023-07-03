<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import {_} from 'svelte-i18n'
    import { base } from '$app/paths';
</script>

<section class="life">
    <SectionHeader pageName="life"/>
    <div class="firstclear"/>
    <figure class="afisha">
        <img src="{base}/Сайт/Фото/_MG_1565-2.jpg"/>
        <figcaption>{$_('page.index.life.afisha.desc')}</figcaption>
    </figure>
    <img class="photo1" src="{base}/Сайт/Фото/Пишет.jpg"/>
    <img class="photo2" src="{base}/Сайт/Фото/С%20Папикяном-5.jpg"/>
    <img class="photo3" src="{base}/Сайт/Фото/На%20льду%201.jpg"/>
    <img class="photo4" src="{base}/Сайт/Фото/Выставка%202.1.jpg"/>
    <img class="photo5" src="{base}/Сайт/Фото/Храм%20в%20Армении%201.jpg"/>
    <img class="photo6" src="{base}/Сайт/Фото/Портрет%205.jpg"/>
    <img class="photo7" src="{base}/Сайт/Фото/Э.%20Браговский.jpg"/>
    <div class="lastclear"/>
</section>
<style lang="scss">
  @import "../../../../variables";

  section.life {
    margin-top: 495px;
    @media screen and (max-width: 639px) {
      margin-top: 60px;
    }

    figure.afisha {

      img {
        box-shadow: 0 0 20px rgb(93 93 93 / 24%);
        min-width: 100%;
      }
      figcaption {
        text-align: right;
        font-size: .7rem;
        padding-right: 1em;
        padding-top: 1.4em;
      }
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
        padding-top: 13%;
        padding-right: 24%;
      }
      .photo3 {
        grid-column: 3;
        grid-row: 4/6;
        padding-top: 12%;
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
        padding-top: 14%;
      }
      .photo7 {
        grid-column: 2;
        grid-row: 5/6;
        padding-top: 8.4%;
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
          font-size: .6rem;
          padding-bottom: 1.4em;
        }
      }
      & > img {
        $padding: 1.9vw;
        padding: $padding;
        box-sizing: border-box;

        &.photo1 {
          padding-left: 0;
          width: 33%;
          float: left;
          margin-top: 5vw;
        }

        &.photo2 {
          padding-left: 0;
          width: 37%;
          float: left;
        }

        &.photo3 {
          width: 30%;
          float: right;
          padding-right: 0;
        }

        &.photo4 {
          width: 33%;
        }

        &.photo5 {
          width: 27%;
          float: left;
          padding-left: 0;
        }

        &.photo6 {
          width: 40%;
          margin-top: 2vw;
          float: left;
        }

        &.photo7 {
          width: 33%;
          float: right;
        }
      }
    }
  }

</style>
