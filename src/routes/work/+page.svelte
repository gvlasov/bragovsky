<script lang="ts">
    import LifeCategory from "../../lib/LifeCategory.svelte";
</script>

<div class="categories">
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
