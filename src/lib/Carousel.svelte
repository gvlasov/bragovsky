<script lang="ts">
    import {onMount} from 'svelte'
    import arrowLeft from '$assets/arrow-left_slider.svg'
    import arrowRight from '$assets/arrow-right_slider.svg'

    onMount(() => {
        window.$(".slider").slick({
            infinite: true,
            arrows: true,
            variableWidth: true,
            prevArrow: `<img class="arrow-left" src="${arrowLeft}"/>`,
            nextArrow: `<img class="arrow-right" src="${arrowRight}"/>`
        });
    })
</script>

<div class="slider">
    <slot/>
</div>

<style lang="scss">
  @import '../mixins';

  .slider {
    user-select: none;
    max-width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    :global(.slick-list) {
      overflow: hidden;
    }

    :global(img.slick-arrow) {
      display: none;
    }

    @include for-widescreen {
      gap: 3.6vw;
      :global(img.slick-arrow) {
        height: 40px;
      }
    }
  }
</style>
