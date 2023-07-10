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
    <div class="section-header">
        <SectionHeader pageName="life"/>
    </div>
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
    margin-top: 20.3vw;
    display: block;
    text-align: center;

    & > div > img, figure.afisha > img {
      box-shadow: 0 0 3vw rgb(93 93 93 / 24%);
      max-width: 100%;
    }

    .lastclear {
      display: block;
      clear: both;
    }

    figure.afisha {
      float: right;
      margin-top: -3.7vw;
      width: 54%;

      figcaption {
        display: block;
        text-align: right;
        font-size: 2.05vw;
        letter-spacing: 0.057em;
        padding-top: 1.05em;
        padding-right: .65vw;
      }
    }

    & > div {
      padding: 1.9%;
      box-sizing: border-box;

      &.photo1 {
        padding-left: 0;
        padding-top: 4.3%;
        max-width: 33%;
        float: left;
        margin-top: 1.7%;
        padding-right: 3.6%;
      }

      &.photo2 {
        padding-left: 0;
        padding-right: 2%;
        padding-top: 2%;
        width: 34.7%;
        margin-top: 1.3%;
        float: left;
      }

      &.photo3 {
        width: 26.6%;
        float: right;
        padding-right: 0;
        margin-top: 4.2%;
        padding-left: 0%;
      }

      &.photo4 {
        width: 34%;
        margin-right: 3.3%;
        margin-top: 6.4%;
        margin-bottom: 1.6%;
        float: right;
      }

      &.photo5 {
        width: 24.5%;
        margin-top: 3.2%;
        float: left;
        padding-left: 0;
        padding-top: 0%;
        padding-right: 0%;
      }

      &.photo6 {
        width: 40.7%;
        margin-top: 3.4%;
        margin-left: 2%;
        float: left;
      }

      &.photo7 {
        padding-left: 0;
        width: 32.8%;
        margin-right: -2.0%;
        margin-top: 2.0%;
        float: right;
      }
    }

    @media screen and (min-device-width: 1680px) {
      display: grid;
      grid-template-columns: 18.25% 1fr 1fr 39%;
      grid-template-rows: repeat(5, max-content);
      margin-top: 480px;

      .section-header {
        grid-column: 1/3;
        grid-row: 1;
      }

      .firstclear, .lastclear {
        display: none;
      }

      figure.afisha {
        grid-column: 4;
        grid-row: 1/6;
        float: right;
        width: 100%;
        margin-top: -9%;

        figcaption {
          display: none;
        }
      }

      & > div {
        max-width: initial !important;
        padding: 0;

        &.photo1 {
          grid-column: 1;
          grid-row: 2/4;
          padding-top: 29.5%;
          padding-right: 13.8%;
        }

        &.photo2 {
          grid-column: 1;
          grid-row: 4/6;
          padding-top: 9%;
          padding-right: 24%;
          width: 100%;
        }

        &.photo3 {
          grid-column: 3;
          grid-row: 4/6;
          padding-top: 5.5%;
          padding-left: 11.5%;
          padding-right: 32.4%;
          width: 100%;
        }

        &.photo4 {
          grid-column: 2;
          grid-row: 2;
          padding-top: 27%;
          padding-left: 15%;
          padding-right: 2%;
          width: 100%;
        }

        &.photo5 {
          grid-column: 3;
          grid-row: 2/4;
          padding-top: 39%;
          padding-right: 23.4%;
          padding-left: 11.5%;
          width: 100%;
        }

        &.photo6 {
          grid-column: 2;
          grid-row: 3/5;
          padding-top: 7.5%;
          margin-left: 0%;
          width: 100%;
        }

        &.photo7 {
          grid-column: 2;
          grid-row: 5/6;
          padding-top: 4.6%;
          padding-left: 21%;
          width: 100%;
        }
      }

    }

  }

</style>
