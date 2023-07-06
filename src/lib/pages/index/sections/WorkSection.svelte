<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import photo1 from '$assets/Сайт/Графика/Графика 18. Resolution 40.jpg'
    import photo2 from '$assets/Сайт/Графика/Графика 30. Resolution 40.jpg'
    import photo3 from '$assets/Сайт/Графика/Графика 9. Resolution 20.jpg'
    import photo4 from '$assets/Сайт/Графика/Графика 3. Resolution 15.jpg'
    import photo5 from '$assets/Сайт/Живопись/Автопортет 60.jpg'
    import photo6 from '$assets/Сайт/Живопись/b-s-012. Resolution 115.jpg'
    import photo7 from '$assets/Сайт/Живопись/031. Resolution 80.jpg'
    import photo8 from '$assets/Сайт/Живопись/В список. Resolution 50.jpg'
    import photo9 from '$assets/Сайт/Живопись/b-s-096-2. Resolution 110.jpg'
    import photo10 from '$assets/Сайт/Живопись/IMG_2407 Resolution 40.jpg'
</script>

<section class="work">
    <div class="section-header">
        <SectionHeader pageName="work"/>
    </div>
    <figure class="photo1">
        <img class="shadowed" src="{photo1}"/>
    </figure>
    <figure class="photo2">
        <img class="shadowed" src="{photo2}"/>
    </figure>
    <figure class="photo3">
        <img src="{photo3}"/>
    </figure>
    <figure class="photo4">
        <img src="{photo4}"/>
    </figure>
    <figure class="photo5">
        <img class="shadowed" src="{photo5}"/>
    </figure>
    <figure class="photo6">
        <img class="shadowed" src="{photo6}"/>
    </figure>
    <figure class="photo7">
        <img class="shadowed" src="{photo7}"/>
    </figure>
    <figure class="photo8">
        <img class="shadowed" src="{photo8}"/>
    </figure>
    <figure class="photo9">
        <img class="shadowed" src="{photo9}"/>
    </figure>
    <figure class="photo10">
        <img class="shadowed" src="{photo10}"/>
    </figure>
</section>
<style lang="scss">
  @import "../../../../variables";

  section.work {
    margin-top: 244px;
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
      margin-top: -8px;
      margin-left: 2px;
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
      margin-top: 6.3%;
      border-right: .38vw solid transparent;
      margin-left: 1.3%;
    }

    .photo3 {
      grid-column: 2;
      grid-row: 2/4;
      margin-top: 9%;
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
      margin-top: -8.5%;
    }

    .photo6 {
      grid-column: 1/4;
      grid-row: 4/6;
      margin-top: 4.4%;
      margin-right: 6.9%;
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
      margin-right: 0.5%;
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
      margin-right: 23.3%;
    }

    @media screen and (max-width: 1680px) {
      margin-top: 214px;
      .section-header {
        $shift: 7px;
        margin-top: 0-$shift;
        padding-bottom: $shift;
      }
      .photo5 {
        margin-top: -8.3%;
      }
      .photo4 {
        margin-top: -25.7%;
      }
      .photo3 {
        margin-top: 7.3%;
      }
      .photo2 {
        margin-top: 3.3%;
        border-right: .38vw solid transparent;
      }
      .photo1 {
        margin-top: 26.0%;
        margin-right: 2.2%;
        margin-left: 1.3%;
      }
      .photo6 {
        margin-top: 4.4%;
      }

      .photo8 {
        margin-top: 14.3%;
      }

      .photo9 {
        margin-top: 23.5%;
        margin-left: 5%;
      }

      .photo10 {
        margin-top: 7.7%;
      }
    }

    @media screen and (max-width: 639px) {
      margin-top: 41px;

      .photo1 {
        grid-column: 1;
        grid-row: 2;
        margin-top: 42.0%;
        margin-right: 2.2%;
        margin-left: 1.3%;
      }

      .photo2 {
        grid-column: 1;
        grid-row: 3;
        margin-top: -3.3%;
        border-right: .38vw solid transparent;
        margin-left: 1.3%;
      }

      .photo3 {
        grid-column: 2;
        grid-row: 2/4;
        margin-top: 24.1%;
        margin-left: -2.7%;
        margin-right: 2.6%;
      }

      .photo4 {
        grid-column: 3;
        grid-row: 2/4;
        margin-top: -6.9%;
      }

      .photo5 {
        grid-column: 4;
        grid-row: 1/5;
        margin-top: 3.1%;
      }

      .photo6 {
        grid-column: 1/4;
        grid-row: 4/6;
        margin-top: 2.4%;
        margin-right: 7%;
      }

      .photo7 {
        grid-column: 4;
        grid-row: 5;
        margin-left: -13.4%;

        img {
          transform: translateY(15.2%);
        }
      }

      .photo8 {
        grid-column: 1/3;
        grid-row: 6;
        margin-top: 3.8%;
        margin-left: 12%;
        margin-right: -3%;
      }

      .photo9 {
        grid-column: 3/5;
        grid-row: 6;
        margin-top: 11.8%;
        margin-left: 2.5%;
      }

      .photo10 {
        grid-column: 1/5;
        grid-row: 7;
        margin-top: 1.5%;
        margin-left: 8.26%;
        margin-right: 26.5%;
      }

    }
  }

</style>
