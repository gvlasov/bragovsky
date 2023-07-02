<script lang="ts">
    import IndexSectionHeader from "./IndexSectionHeader.svelte";
</script>

<section class="life">
    <div class="section-header">
        <IndexSectionHeader pageName="work"/>
    </div>
    <img class="photo1" src="/Сайт/Графика/Графика%2018.%20Resolution%2040.jpg"/>
    <img class="photo2" src="/Сайт/Графика/Графика%2030.%20Resolution%2040.jpg"/>
    <img class="photo3" src="/Сайт/Графика/Графика%209.%20Resolution%2020.jpg"/>
    <img class="photo4" src="/Сайт/Графика/Графика%203.%20Resolution%2015.jpg"/>
    <img class="photo5" src="/Сайт/Живопись/Автопортет%2060.jpg"/>
    <img class="photo6" src="/Сайт/Живопись/03BT1638.%20Resolution%20155.jpg"/>
    <img class="photo7" src="/Сайт/Живопись/031.%20Resolution%2080.jpg"/>
    <img class="photo8" src="/Сайт/Живопись/В%20список.%20Resolution%2050.jpg"/>
    <img class="photo9" src="/Сайт/Живопись/b-s-096-2.%20Resolution%20110.jpg"/>
    <img class="photo10" src="/Сайт/Живопись/IMG_2407%20Resolution%2040.jpg"/>
</section>
<style lang="scss">
  @import "../variables";

  section.life {
    margin-top: 20vh;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(6, min-content);
    width: 100%;

    .section-header {
      grid-column: 1/3;
      grid-row: 1;
      padding-bottom: 6vw;
    }

    .photo1 {
      grid-column: 1;
      grid-row: 2;
      width: 17vw;
      padding-top: 4vw;
    }

    .photo2 {
      grid-column: 1;
      grid-row: 3;
      width: 17vw;
      padding-top: 2vw;
    }

    .photo3 {
      grid-column: 2;
      grid-row: 2/4;
      width: 15vw;
      padding-left: 0vw;
      padding-top: 1vw;
    }

    .photo4 {
      grid-column: 3;
      grid-row: 1/3;
      width: 20vw;
      padding-left: 0vw;
      padding-top: 7vw;
      margin-left: auto;
    }

    .photo5 {
      grid-column: 4;
      grid-row: 1/5;
      min-width: 20vw;
      padding-left: 4vw;
      padding-bottom: 7vw;
    }

    .photo6 {
      grid-column: 1/4;
      grid-row: 4/6;
      padding-right: 6vw;
      padding-top: 5vw;
      padding-bottom: 6vw;
    }

    .photo7 {
      grid-column: 4;
      grid-row: 5;
      margin-left: auto;
    }

    .photo8 {
      grid-column: 1/3;
      grid-row: 6;
      padding-left: 4vw;
      padding-right: 2vw;
    }

    .photo9 {
      grid-column: 3/5;
      grid-row: 6;
      padding-top: 6vw;
      padding-left: 4vw;
    }

    .photo10 {
      grid-column: 1/5;
      grid-row: 7;
      padding-top: 6vw;
      padding-left: 7vw;
      padding-right: 19vw;
    }
  }

</style>
