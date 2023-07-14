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
  @import "../../../mixins";
  article {
    font-family: Bruta Global Regular, sans-serif;

    .author {
      color: #262626;
      font-weight: 600;
      text-align: right;
    }

    :global(h1) {
      font-weight: 600;
      color: #262626;
    }

    :global(p) {
      color: #262626;
      margin-top: 2em;
    }

    @include for-widescreen {
      padding: 7.15em 8.1em 7.15em 7.1em;
      font-size: 1.012vw;

      .author {
        margin-top: 85px;
        font-size: 20.81px;
        line-height: 43.4px;
        letter-spacing: 0.4px;
      }

      :global(h1) {
        font-size: 25.15px;
        line-height: 43.4px;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
      }

      :global(p) {
        font-size: 17.34px;
        line-height: 43.4px;
        letter-spacing: 0.4px;
        margin-top: 38px;
      }
    }
  }
</style>
