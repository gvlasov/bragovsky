<script lang="ts">
    import dotWhite from '$assets/dot-white.svg'
    import dotBlack from '$assets/dot-black.svg'
    import type {SliderPosition} from "$lib/SliderPosition";

    export let position: SliderPosition
</script>

<div class="slide">
    <slot/>
    <div class="dots">
        {#if position === 'start' }
            <img src="{dotWhite}"/>
            <img src="{dotBlack}"/>
            <img src="{dotBlack}"/>
        {:else if position === 'middle' }
            <img src="{dotBlack}"/>
            <img src="{dotWhite}"/>
            <img src="{dotBlack}"/>
        {:else}
            <img src="{dotBlack}"/>
            <img src="{dotBlack}"/>
            <img src="{dotWhite}"/>
        {/if}
    </div>
</div>

<style lang="scss">
  @import '../mixins';
  @import '../variables';
</style>
