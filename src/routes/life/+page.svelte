<script lang="ts">
    import LifeCategory from "../../lib/LifeCategory.svelte";
</script>

<div class="categories">
    <LifeCategory name="photos"/>
    <LifeCategory name="sketches"/>
    <LifeCategory name="books"/>
    <LifeCategory name="articles"/>
    <LifeCategory name="1971"/>
    <LifeCategory name="dates"/>
</div>


<style lang="scss">
  .categories {
    display: flex;
    flex-wrap: wrap;

    .categories > * {
      flex-basis: 50%;
    }
  }
</style>
