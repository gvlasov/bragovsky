<script lang="ts">
    import {createEventDispatcher, onMount} from 'svelte'
    import arrowLeft from '$assets/arrow-left_slider.svg'
    import arrowRight from '$assets/arrow-right_slider.svg'

    const dispatch = createEventDispatcher();

    let gallery
    onMount(() => {
        gallery = window.$(".carousel-slider")
        gallery
            .on('init', function () {
                gallery.find('.slick-slide').each(function(i) {
                    const deltaPx = 6;
                    let startX;
                    let startY;

                    this.addEventListener('mousedown', function (event) {
                        startX = event.pageX;
                        startY = event.pageY;
                    });

                    this.addEventListener('mouseup', function (event) {
                        console.log(event.target)
                        const diffX = Math.abs(event.pageX - startX);
                        const diffY = Math.abs(event.pageY - startY);

                        if (diffX < deltaPx && diffY < deltaPx) {
                            dispatch('open-image', event.target.getAttribute('data-slick-index'))
                        }
                    });
                })
            })
            .slick({
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
        margin-right: 6px;
      }
    }

    :global(img.slick-arrow) {
      display: none !important;
    }

    @include for-widescreen {
      gap: 3.0vw;
      :global(img.slick-arrow) {
        display: initial !important;
        height: 2.4vw;
      }
      :global(.slick-list) {
        margin-right: initial;

        :global(img) {
          max-height: 27.083vw;
          margin-right: 3.4vw;
        }
      }
    }
  }
</style>
