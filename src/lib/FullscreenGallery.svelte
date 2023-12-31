<script lang="ts">
    import {onMount} from 'svelte'
    import arrowLeft from '$assets/arrow-left_gallery.svg'
    import arrowRight from '$assets/arrow-right_gallery.svg'
    import closeButton from '$assets/close-button.svg'
    import closeButtonDesktop from '$assets/close-button-fat.svg'

    let gallery
    onMount(() => {
        gallery = window.$(".gallery .slider");
        gallery.slick({
            arrows: true,
            speed: 400,
            fade: true,
            cssEase: 'linear',
            variableWidth: true,
            slidesPerRow: 1,
            prevArrow: `<img class="arrow-left" src="${arrowLeft}"/>`,
            nextArrow: `<img class="arrow-right" src="${arrowRight}"/>`,
        })
    })
    export let open = true
    export let activeSlide = 0

    function moveToSlide(slide) {
        if (!gallery) {
            throw new Error("Gallery not initialized")
        }
        gallery.slick('slickGoTo', slide, true)
    }

    $: activeSlide, new Promise((res) => setTimeout(() => res(), 0)).then(() => gallery && moveToSlide(activeSlide))

    function close() {
        open = false
    }
</script>

<div class="gallery" class:open={open}>
    <button class="close" on:click={close}>
        <img src="{closeButton}" class="mobile"/>
        <img src="{closeButtonDesktop}" class="desktop"/>
    </button>
    <div class="slider">
        <slot/>
    </div>
</div>

<style lang="scss">
  @import '../mixins';
  @import '../variables';

  .gallery {
    display: none;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    &.open {
      display: flex;
    }

    :global(.dots) {
      position: absolute;
      bottom: -30px;
      left: 50%;
      display: flex;
      gap: 8px;
      transform: translateX(-50%);
    }

    :global(ul.dots) {
      display: flex;
      justify-content: center;

      :global(li) {
        display: none;
      }
    }

    button.close {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      padding: 30px;
      cursor: pointer;

      img.desktop {
        display: none;
      }

      img.mobile {
        display: block;
      }
    }

    .slider {
      user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      max-width: 100vw;

      :global(img.slick-arrow) {
        display: none !important;
      }

      :global(.slick-list) {
        display: flex;
        overflow: hidden;
        height: 100vh;
        align-items: center;
        vertical-align: center;
        position: relative;

        :global(.slick-track) {
          display: flex;
          align-items: center;
          height: 100%;
        }

        :global(.slick-track .slide) {
          display: inline-block;
          max-height: 100%;
          text-align: center;
          position: absolute !important;
          left: 0 !important;
          width: 100vw;
          top: 50% !important;
          transform: translateY(-50%);

          :global(img) {
            max-height: 100vh;
          }

        }
      }

    }

    @include for-widescreen {
      button.close {
        img.desktop {
          display: block;
        }

        img.mobile {
          display: none;
        }
      }
      .slider {
        $sliderHorizontalPadding: 20px;
        $sliderArrowsGap: 3.6vw;
        $arrowWidth: 1.8vw;
        padding: 0 $sliderHorizontalPadding;
        gap: $sliderArrowsGap;
        :global(img.slick-arrow) {
          display: initial !important;
          width: $arrowWidth;
        }
        :global(.slick-list) {
          :global(.slick-track .slide) {
            max-width: calc(100vw - ($arrowWidth * 2) - ($sliderArrowsGap * 2) - ($sliderHorizontalPadding * 2));

            :global(img) {
              padding: 8px 0;
            }
          }

          margin-right: initial;
        }
      }
    }
  }
</style>
