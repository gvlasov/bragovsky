<script lang="ts">
    import {onMount} from 'svelte'
    import arrowLeft from '$assets/arrow-left_slider.svg'
    import arrowRight from '$assets/arrow-right_slider.svg'

    onMount(() => {
        window.$(".carousel-slider").slick({
            infinite: true,
            arrows: true,
            variableWidth: true,
            prevArrow: `<img class="arrow-left" src="${arrowLeft}"/>`,
            nextArrow: `<img class="arrow-right" src="${arrowRight}"/>`
        });
    })
</script>

<div class="carousel-slider">
    <slot/>
</div>

<style lang="scss">
  @import '../mixins';
  @import '../variables';

  .carousel-slider {
    user-select: none;
    max-width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    :global(.slick-list) {
      overflow: hidden;
      margin-right: 0-$mobileBodyPadding;

      :global(img) {
        max-height: 40vw;
      }
    }

    :global(img.slick-arrow) {
      display: none !important;
    }

    @include for-widescreen {
      gap: 3.6vw;
      :global(img.slick-arrow) {
        display: initial !important;
        height: 40px;
      }
      :global(.slick-list) {
        margin-right: initial;
      }
    }
  }
</style>
