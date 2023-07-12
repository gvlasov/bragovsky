<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import photo1 from '$assets/Сайт_optimal/Графика/Графика 18. Resolution 40.jpg'
    import photo2 from '$assets/Сайт_optimal/Графика/Графика 30. Resolution 40.jpg'
    import photo3 from '$assets/Сайт_optimal/Графика/Графика 9. Resolution 20.jpg'
    import photo4 from '$assets/Сайт_optimal/Графика/Графика 3. Resolution 15.jpg'
    import photo5 from '$assets/Сайт_optimal/Живопись/Автопортет 60.jpg'
    import photo6 from '$assets/Сайт_optimal/Живопись/b-s-012. Resolution 115.jpg'
    import photo7 from '$assets/Сайт_optimal/Живопись/031. Resolution 80.jpg'
    import photo8 from '$assets/Сайт_optimal/Живопись/В список. Resolution 50.jpg'
    import photo9 from '$assets/Сайт_optimal/Живопись/b-s-096-2. Resolution 110.jpg'
    import photo10 from '$assets/Сайт_optimal/Живопись/IMG_2407 Resolution 40.jpg'
</script>

<section class="work">
    <div class="section-header">
        <SectionHeader pageName="work"/>
    </div>
    <figure class="photo1">
        <img class="shadow-a" src="{photo1}"/>
    </figure>
    <figure class="photo2">
        <img class="shadow-a" src="{photo2}"/>
    </figure>
    <figure class="photo3">
        <img class="shadow-a" src="{photo3}"/>
    </figure>
    <figure class="photo4">
        <img class="shadow-a" src="{photo4}"/>
    </figure>
    <figure class="photo5">
        <img class="shadow-b" src="{photo5}"/>
    </figure>
    <figure class="photo6">
        <img class="shadow-b" src="{photo6}"/>
    </figure>
    <figure class="photo7">
        <img class="shadow-b" src="{photo7}"/>
    </figure>
    <figure class="photo8">
        <img class="shadow-b" src="{photo8}"/>
    </figure>
    <figure class="photo9">
        <img class="shadow-b" src="{photo9}"/>
    </figure>
    <figure class="photo10">
        <img class="shadow-b" src="{photo10}"/>
    </figure>
</section>
<style lang="scss">
  @import "../../../../variables";
  @import "../../../../mixins";

  section.work {
    margin-top: 41px;
    display: grid;
    grid-template-columns: auto 16.85% 16.99% 32.53%;
    column-gap: 5%;
    width: 100%;

    .shadow-a {
      box-shadow: 0 0 1.190vw 0 rgba(196, 195, 195, 0.5);
    }

    .shadow-b {
      box-shadow: 0 0 1.190vw 0 rgba(137, 136, 136, 0.5);
    }

    .section-header {
      grid-column: 1/3;
      grid-row: 1;
      margin-left: 0;
    }

    .photo1 {
      grid-column: 1;
      grid-row: 2;
      margin-top: 60.0%;
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
      margin-top: 43.1%;
      margin-left: -2.7%;
      margin-right: 2.6%;
    }

    .photo4 {
      grid-column: 3;
      grid-row: 2/4;
      margin-top: 11.4%;
    }

    .photo5 {
      grid-column: 4;
      grid-row: 1/5;
      margin-top: 4%;
    }

    .photo6 {
      grid-column: 1/4;
      grid-row: 4/6;
      margin-top: 4.0%;
      margin-right: 7%;
    }

    .photo7 {
      grid-column: 4;
      grid-row: 5;
      margin-left: -13.4%;
      margin-bottom: -14%;

      img {
      }
    }

    .photo8 {
      grid-column: 1/3;
      grid-row: 6;
      margin-top: 7.2%;
      margin-left: 12.9%;
      margin-right: -3%;
    }

    .photo9 {
      grid-column: 3/5;
      grid-row: 6;
      margin-top: 14%;
      margin-left: 2.5%;
    }

    .photo10 {
      grid-column: 1/5;
      grid-row: 7;
      margin-top: 3%;
      margin-left: 8.26%;
      margin-right: 26.8%;
    }

    @include for-widescreen {
      margin-top: 11.6vw;
      .section-header {
        margin-top: -0.7%;
        margin-left: -0.4%;
      }

      .shadow-a {
        box-shadow: 0px 0px 26.25px 0px rgba(196, 195, 195, 0.5);
      }

      .shadow-b {
        box-shadow: 0px 0px 26.25px 0px rgba(137, 136, 136, 0.5);
      }

      .photo1 {
        margin-top: 13%;
      }
      .photo2 {
        margin-top: -8%;
      }
      .photo3 {
        margin-top: -7%;
      }
      .photo4 {
        margin-top: -40%;
      }
      .photo5 {
        margin-top: -4.5%;
      }
      .photo6 {
        margin-top: 0;
        transform: translateY(1.0%);
      }
      .photo7 {
        margin-top: 27%;
        transform: translateY(-5.0%);
        margin-left: -8.5%;
      }
      .photo8 {
        margin-top: 9.5%;
        margin-right: 0.5%;
      }
      .photo9 {
        margin-top: 20.0%;
        margin-left: 5%;
      }
      .photo10 {
        margin-top: 8.8%;
        margin-right: 23.4%;
      }
    }

  }


</style>
