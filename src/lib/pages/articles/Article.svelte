<script lang="ts">
    import ShadowedContainer from "$lib/ShadowedContainer.svelte";
</script>

<ShadowedContainer>
    <article>
        <h1>
            <slot name="heading"/>
        </h1>
        <slot name="content"/>
        <div class="author">
            <slot name="author"/>
        </div>
    </article>
</ShadowedContainer>

<style lang="scss">
  article {
    font-family: Bruta Global Regular, sans-serif;
    padding: 7.15em 8.1em 7.15em 7.1em;
    font-size: 1.012vw;

    :global(h1) {
      font-weight: 600;
      color: #262626;
      font-size: 25.15px;
      line-height: 43.4px;
      letter-spacing: 0.5px;
      margin-bottom: 10px;
    }

    :global(p) {
      color: #262626;
      font-size: 17.34px;
      line-height: 43.4px;
      letter-spacing: 0.4px;
      margin-top: 38px;
    }

    .author {
      margin-top: 85px;
      color: #262626;
      text-align: right;
      font-size: 20.81px;
      font-weight: 600;
      line-height: 43.4px;
      letter-spacing: 0.4px;
    }
  }
</style>
