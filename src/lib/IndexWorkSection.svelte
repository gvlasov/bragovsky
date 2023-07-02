<script lang="ts">
    import IndexSectionHeader from "./IndexSectionHeader.svelte";
    import {base} from '$app/paths';
</script>

<section class="life">
    <div class="section-header">
        <IndexSectionHeader pageName="work"/>
    </div>
    <img class="photo1 graphic" src="{base}/Сайт/Графика/Графика%2018.%20Resolution%2040.jpg"/>
    <img class="photo2 graphic" src="{base}/Сайт/Графика/Графика%2030.%20Resolution%2040.jpg"/>
    <img class="photo3 graphic" src="{base}/Сайт/Графика/Графика%209.%20Resolution%2020.jpg"/>
    <img class="photo4 graphic" src="{base}/Сайт/Графика/Графика%203.%20Resolution%2015.jpg"/>
    <img class="photo5" src="{base}/Сайт/Живопись/Автопортет%2060.jpg"/>
    <img class="photo6" src="{base}/Сайт/Живопись/b-s-012.%20Resolution%20115.jpg"/>
    <img class="photo7" src="{base}/Сайт/Живопись/031.%20Resolution%2080.jpg"/>
    <img class="photo8" src="{base}/Сайт/Живопись/В%20список.%20Resolution%2050.jpg"/>
    <img class="photo9" src="{base}/Сайт/Живопись/b-s-096-2.%20Resolution%20110.jpg"/>
    <img class="photo10" src="{base}/Сайт/Живопись/IMG_2407%20Resolution%2040.jpg"/>
</section>
<style lang="scss">
  @import "../variables";

  section.life {
    margin-top: 20vh;
    @media screen and (max-width: 639px) {
      margin-top: 80px;
    }
    display: grid;
    grid-template-columns: 18% 18% 18% 33%;
    column-gap: 4%;
    row-gap: 1vw;
    grid-template-rows: repeat(6, min-content);
    width: 100%;

    .graphic {
      box-shadow: 0 0 20px rgb(93 93 93 / 24%);
    }

    .section-header {
      grid-column: 1/3;
      grid-row: 1;
    }

    .photo1 {
      grid-column: 1;
      grid-row: 2;
      margin-top: 3vw;
    }

    .photo2 {
      grid-column: 1;
      grid-row: 3;
    }

    .photo3 {
      grid-column: 2;
      grid-row: 2/4;
    }

    .photo4 {
      grid-column: 3;
      grid-row: 1/3;
      margin-top: 5vw;
    }

    .photo5 {
      grid-column: 4;
      grid-row: 1/5;
      min-width: 20vw;
    }

    .photo6 {
      grid-column: 1/4;
      grid-row: 4/6;
      padding-right: 6vw;
    }

    .photo7 {
      grid-column: 4;
      grid-row: 5;
      padding-top: 11vw;
    }

    .photo8 {
      grid-column: 1/3;
      grid-row: 6;
      padding-left: 4vw;
    }

    .photo9 {
      grid-column: 3/5;
      grid-row: 6;
      margin: auto 0;
      padding-right: 4vw;
    }

    .photo10 {
      grid-column: 1/5;
      grid-row: 7;
      padding: 4vw 17vw 0 9vw;
    }
  }

</style>
