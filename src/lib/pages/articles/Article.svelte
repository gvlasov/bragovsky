<script lang="ts"></script>

<article>
    <h1>
        <slot name="heading"/>
    </h1>
    <slot name="content"/>
    {#if $$slots.author}
        <div class="author">
            <slot name="author"/>.
        </div>
    {/if}
</article>

<style lang="scss">
  @import "../../../mixins";

  article {
    font-family: Bruta Global Regular, sans-serif;
    margin-top: 3em;

    .author {
      margin-top: 1em;
      color: #262626;
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 0.28px;
    }

    :global(h1) {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 0.32px;
    }

    :global(p) {
      color: #262626;
      margin-top: 2em;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
      letter-spacing: 0.225px;
    }

    @include for-widescreen {
      box-shadow: 0 0 1vw 0 rgba(209, 207, 207, 0.5);
      margin: 124px 0;
      padding: 7.15em 8.1em 7.15em 7.1em;
      font-size: 1.012vw;

      .author {
        margin-top: 85px;
        font-size: 20.81px;
        line-height: 43.4px;
        letter-spacing: 0.4px;
      }

      :global(h1) {
        margin-top: 0;
        font-size: 25.15px;
        line-height: 43.4px;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
        font-weight: 600;
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
