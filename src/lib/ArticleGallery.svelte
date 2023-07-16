<script lang="ts">
    import GallerySlide from "$lib/GallerySlide.svelte";
    import FullscreenGallery from "$lib/FullscreenGallery.svelte";
    import Carousel from "$lib/Carousel.svelte";
    import {indexToPosition} from "$lib/SliderPosition";
    import type {GalleryImage} from "$lib/GalleryImages";

    export let images: GalleryImage[]
    export let fullscreenPosition: number = 0
    export let open = false

    function openImage(event) {
        open = true
        fullscreenPosition = event.detail
    }

</script>

<FullscreenGallery bind:open={open} bind:activeSlide={fullscreenPosition}>
    {#each images as image, index}
        <GallerySlide position="{indexToPosition(index, images.length)}">
            <img src="{image.big}"/>
        </GallerySlide>
    {/each}
</FullscreenGallery>
<Carousel on:open-image={openImage}>
    {#each images as image, index}
        <img src="{image.small}"/>
    {/each}
</Carousel>

<style lang="scss">
</style>