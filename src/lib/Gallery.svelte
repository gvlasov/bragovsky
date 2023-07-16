<script lang="ts">
    import {onMount} from 'svelte'
    import arrowLeft from '$assets/arrow-left_gallery.svg'
    import arrowRight from '$assets/arrow-right_gallery.svg'
    import closeButton from '$assets/close-button.svg'
    import dotWhite from '$assets/dot-white.svg'
    import dotBlack from '$assets/dot-black.svg'

    function createDots(slide, totalSlides) {
        let dotsElement = document.createElement('div')
        dotsElement.setAttribute('class', 'dots');
        let dot1, dot2, dot3
        if (slide === 0) {
            dot1 = document.createElement('img');
            dot1.src = dotWhite;
            dot2 = document.createElement('img');
            dot2.src = dotBlack;
            dot3 = document.createElement('img');
            dot3.src = dotBlack;
        } else if (slide === totalSlides - 1) {
            dot1 = document.createElement('img');
            dot1.src = dotBlack;
            dot2 = document.createElement('img');
            dot2.src = dotBlack;
            dot3 = document.createElement('img');
            dot3.src = dotWhite;
        } else {
            dot1 = document.createElement('img');
            dot1.src = dotBlack;
            dot2 = document.createElement('img');
            dot2.src = dotWhite;
            dot3 = document.createElement('img');
            dot3.src = dotBlack;
        }
        dotsElement.append(dot1, dot2, dot3)
        return dotsElement
    }

    onMount(() => {
        window.$(".gallery .slider")
            .on('init', (event, slick) => {
                for (let slide = 0; slide < slick.$slides.length; slide++) {
                    if (slide == '0') {
                        dots = 0
                    } else if (slide == slick.$slides.length - 1) {
                        dots = 2
                    } else {
                        dots = 1
                    }
                    slick.$slides[slide].appendChild(createDots(slide, slick.$slides.length))
                }
            })
            .slick({
                arrows: true,
                variableWidth: true,
                slidesPerRow: 1,
                prevArrow: `<img class="arrow-left" src="${arrowLeft}"/>`,
                nextArrow: `<img class="arrow-right" src="${arrowRight}"/>`,
            })
    })
    let dots = 0
    export let open = true

    function close() {
        open = false
    }
</script>

<div class="gallery" class:open={open}>
    <button class="close" on:click={close}>
        <img src="{closeButton}"/>
    </button>
    <div class="slider">
        <slot/>
    </div>
</div>

<style lang="scss">
  @import '../mixins';
  @import '../variables';

  $arrowWidth: 23px;
  .gallery {
    display: none;

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

    align-items: center;
    padding: 1px;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    button.close {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      padding: 30px;
      cursor: pointer;
    }

    .slider {
      user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      max-width:100vw;

      :global(img.slick-arrow) {
        display: none !important;
      }

      :global(.slick-list) {
        display: flex;
        overflow: hidden;
        height: 100vh;
        align-items: center;
        :global(.slick-track) {
          display: flex;
          align-items: center;
        }

        :global(.slick-track .slide) {
          display: inline-block;
          max-height: 100%;
          text-align: center;
          position: relative;
          width: 100vw;

          :global(img) {
            max-height: 100vh;
            width: auto;
          }
        }

      }

      @include for-widescreen {
        $sliderHorizontalPadding: 20px;
        $sliderArrowsGap: 3.6vw;
        padding: 0 $sliderHorizontalPadding;
        gap: $sliderArrowsGap;
        :global(img.slick-arrow) {
          display: initial !important;
          width: $arrowWidth;
        }
        :global(.slick-list) {
          :global(.slick-track .slide) {
            max-width: calc(100vw - $arrowWidth * 2 - $sliderArrowsGap * 2 - $sliderHorizontalPadding * 2);
          }
          margin-right: initial;
        }
      }
    }
  }
</style>
