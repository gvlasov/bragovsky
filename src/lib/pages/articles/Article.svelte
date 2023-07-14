<script lang="ts">
    import ShadowedContainer from "$lib/ShadowedContainer.svelte";
</script>

<ShadowedContainer>
    <article>
        <slot name="content"/>
    </article>
</ShadowedContainer>

<style lang="scss">
  article {
    font-family: Bruta Global Regular, sans-serif;
    padding: 4.15em 4.1em 4.15em 4.1em;
    font-size: 1.012vw;

    :global(p) {
      font-size: 1.012vw;
      line-height: 2.553em;
      letter-spacing: 0.035em;
      margin: 0 0 1.8em 0;
    }
  }
</style>
