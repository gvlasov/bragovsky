<script lang="ts">
    import IndexSectionHeader from "./IndexSectionHeader.svelte";
    import {_} from 'svelte-i18n'
</script>

<section class="life">
    <IndexSectionHeader pageName="life"/>
    <div class="firstclear"/>
    <figure class="afisha">
        <img src="/Сайт/Фото/_MG_1565-2.jpg"/>
        <figcaption>{$_('page.index.life.afisha.desc')}</figcaption>
    </figure>
    <img class="photo1" src="/Сайт/Фото/Пишет.jpg"/>
    <img class="photo2" src="/Сайт/Фото/С%20Папикяном-5.jpg"/>
    <img class="photo3" src="/Сайт/Фото/На%20льду%201.jpg"/>
    <img class="photo4" src="/Сайт/Фото/Выставка%202.1.jpg"/>
    <img class="photo5" src="/Сайт/Фото/Храм%20в%20Армении%201.jpg"/>
    <img class="photo6" src="/Сайт/Фото/Портрет%205.jpg"/>
    <img class="photo7" src="/Сайт/Фото/Э.%20Браговский.jpg"/>
    <div class="lastclear"/>
</section>
<style lang="scss">
  @import "../variables";

  section.life {
    margin-top: 20vh;

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
      grid-template-columns: 1fr 1fr 1fr auto;
      grid-template-rows: repeat(5, max-content);

      .firstclear, .lastclear {
        display: none;
      }

      figure.afisha {
        grid-column: 4;
        grid-row: 1/6;
        width: 30vw;
        float: right;
      }

      .photo1 {
        grid-column: 1;
        grid-row: 2/4;
        padding-top: 5vw;
        padding-right: 3vw;
      }

      .photo2 {
        grid-column: 1;
        grid-row: 4/6;
        padding-top: 3vw;
        padding-right: 6vw;
      }
      .photo3 {
        grid-column: 3;
        grid-row: 4/6;
        padding-top: 2vw;
        padding-right: 6vw;
        padding-left: 2vw;
      }
      .photo4 {
        grid-column: 2;
        grid-row: 2;
        padding-top: 8vw;
        padding-left: 2vw;
        padding-right: 1vw;
        padding-bottom: 1vw;
      }
      .photo5 {
        grid-column: 3;
        grid-row: 2/4;
        padding-top: 10vw;
        padding-right: 1vw;
        padding-left: 2vw;
        width: 15vw;
      }
      .photo6 {
        grid-column: 2;
        grid-row: 3/5;
        padding-top: 3vw;
      }
      .photo7 {
        grid-column: 2;
        grid-row: 5/6;
        padding-left: 3vw;
        padding-top: 2vw;
      }
    }

    @media screen and (max-width: 640px) {
      text-align: center;
      .firstclear {
        clear: none;
      }
      .lastclear {
        clear: both;
      }
      figure.afisha {
        float: right;
        width: 45vw;

        figcaption {
          text-align: right;
          font-size: .6rem;
          padding-bottom: 1.4em;
        }
      }
      & > img {
        padding: 1.9vw;

        &.photo1 {
          width: 31vw;
          float: left;
          margin-left: -1.5vw;
          margin-top: 2vw;
        }

        &.photo2 {
          width: 30vw;
          float: left;
          margin-left: -1.5vw;
        }

        &.photo3 {
          width: 25vw;
          float: right;
          margin-right: -1.5vw;
        }

        &.photo4 {
          margin-top: 2vw;
          width: 27vw;
        }

        &.photo5 {
          width: 24vw;
          float: left;
          margin-left: -1.5vw;
          clear: left;
        }

        &.photo6 {
          width: 30vw;
          margin-top: 2vw;
          float: left;
        }

        &.photo7 {
          width: 29vw;
          float: right;
        }
      }
    }
  }

</style>
