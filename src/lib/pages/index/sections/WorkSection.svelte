<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import {base} from '$app/paths';
</script>

<section class="life">
    <div class="section-header">
        <SectionHeader pageName="work"/>
    </div>
    <figure class="photo1">
        <img class="shadowed" src="{base}/Сайт/Графика/Графика%2018.%20Resolution%2040.jpg"/>
    </figure>
    <figure class="photo2">
        <img class="shadowed" src="{base}/Сайт/Графика/Графика%2030.%20Resolution%2040.jpg"/>
    </figure>
    <figure class="photo3">
        <img src="{base}/Сайт/Графика/Графика%209.%20Resolution%2020.jpg"/>
    </figure>
    <figure class="photo4">
        <img src="{base}/Сайт/Графика/Графика%203.%20Resolution%2015.jpg"/>
    </figure>
    <figure class="photo5">
        <img class="shadowed" src="{base}/Сайт/Живопись/Автопортет%2060.jpg"/>
    </figure>
    <figure class="photo6">
        <img class="shadowed" src="{base}/Сайт/Живопись/b-s-012.%20Resolution%20115.jpg"/>
    </figure>
    <figure class="photo7">
        <img class="shadowed" src="{base}/Сайт/Живопись/031.%20Resolution%2080.jpg"/>
    </figure>
    <figure class="photo8">
        <img class="shadowed" src="{base}/Сайт/Живопись/В%20список.%20Resolution%2050.jpg"/>
    </figure>
    <figure class="photo9">
        <img class="shadowed" src="{base}/Сайт/Живопись/b-s-096-2.%20Resolution%20110.jpg"/>
    </figure>
    <figure class="photo10">
        <img class="shadowed" src="{base}/Сайт/Живопись/IMG_2407%20Resolution%2040.jpg"/>
    </figure>
</section>
<style lang="scss">
  @import "../../../../variables";

  section.life {
    margin-top: 244px;
    @media screen and (max-width: 639px) {
      margin-top: 80px;
    }
    display: grid;
    grid-template-columns: auto 16.85% 16.99% 32.53%;
    grid-template-rows: repeat(6, min-content);
    column-gap: 5%;
    row-gap: 1vw;
    width: 100%;

    & > figure > img {
      box-shadow: 0 0 20px rgb(93 93 93 / 24%);
    }

    .section-header {
      grid-column: 1/3;
      grid-row: 1;
    }

    .photo1 {
      grid-column: 1;
      grid-row: 2;
      margin-top: 28.0%;
      margin-right: 2.2%;
      margin-left: 1.3%;
    }

    .photo2 {
      grid-column: 1;
      grid-row: 3;
      margin-top: 4.3%;
      border-right: .38vw solid transparent;
      margin-left: 1.3%;
    }

    .photo3 {
      grid-column: 2;
      grid-row: 2/4;
      margin-top: 9.1%;
      margin-left: -2.7%;
      margin-right: 2.6%;
    }

    .photo4 {
      grid-column: 3;
      grid-row: 2/4;
      margin-top: -23.9%;
    }

    .photo5 {
      grid-column: 4;
      grid-row: 1/5;
      margin-top: -7.1%;
    }

    .photo6 {
      grid-column: 1/4;
      grid-row: 4/6;
      margin-top: 4.4%;
      border-right: 3.81vw solid transparent;
    }

    .photo7 {
      grid-column: 4;
      grid-row: 5;
      margin-left: -8.4%;

      img {
        transform: translateY(22.2%);
      }
    }

    .photo8 {
      grid-column: 1/3;
      grid-row: 6;
      margin-top: 14.8%;
      margin-left: 13%;
      margin-right: .6%;
    }

    .photo9 {
      grid-column: 3/5;
      grid-row: 6;
      margin-top: 23.8%;
      margin-left: 5%;
    }

    .photo10 {
      grid-column: 1/5;
      grid-row: 7;
      margin-top: 7.8%;
      margin-left: 8.26%;
      margin-right: 23.4%;
    }
  }

</style>
