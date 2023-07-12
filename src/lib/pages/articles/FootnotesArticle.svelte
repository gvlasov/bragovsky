<script lang="ts">
    import ShadowedContainer from "$lib/ShadowedContainer.svelte";
</script>

<ShadowedContainer>
    <article>
        <div class="description">
            <div class="headings">
                <h1>
                    <slot name="h1"/>
                </h1>
                <h2>
                    <slot name="h2"/>
                </h2>
                <h3>
                    <slot name="author"/>
                </h3>
            </div>
        </div>
        <slot name="content"/>
    </article>
</ShadowedContainer>

<style lang="scss">
  article {
    font-family: Bruta Global Regular, sans-serif;
    padding: 4.15em 4.1em 4.15em 4.1em;
    font-size: 1.012vw;

    .description {
      float: left;
      width: 24.2vw;
      text-align: center;

      & > * {
        margin-left: auto;
        margin-right: auto;
        text-align: left;
      }

      .headings {
        display: inline-grid;
        grid-template-columns: max-content;
        grid-template-rows: min-content min-content min-content;
        :global(h1) {
          font-size: 0.952vw;
          line-height: 1.547em;
          letter-spacing: 0.010em;
          margin-top: 4.5em;
          max-width: max-content;
        }

        :global(h2) {
          font-size: 1.488vw;
          line-height: 1.91em;
          letter-spacing: 0.023em;
          max-width: max-content;
          margin-top: 7em;
        }

        :global(h3) {
          font-size: 1.488vw;
          font-weight: 300;
          line-height: 0.8em;
          letter-spacing: 0.026em;
          margin-top: 5.87em;
          margin-bottom: 12em;
          max-width: max-content;
        }
      }
    }

    :global(p) {
      font-size: 1.012vw;
      line-height: 2.553em;
      letter-spacing: 0.035em;
      margin: 0 0 1.8em 0;
    }
  }
</style>
