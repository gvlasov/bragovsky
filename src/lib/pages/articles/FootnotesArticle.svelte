<script lang="ts"></script>

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

<style lang="scss">
  @import "../../../mixins";
  @import "../../../variables";

  article {
    .description {

    }

    .headings {
      :global(h1) {
        margin-top: 20px;
        font-size: 19px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.57px;
      }

      :global(h2) {
        margin-top: 38px;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.39px;
      }

      :global(h3) {
        margin-top: 38px;
        margin-bottom: 42px;
        font-size: 13px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.39px;
        text-transform: uppercase;
      }
    }

    :global(p) {
      margin-top: 1.7em;
      font-size: 15px;
      font-weight: 400;
      line-height: 35px;
      letter-spacing: 0.225px;
    }

    :global(figure) {
      max-width: 100vw;
      min-width: 100vw;
      margin: 0 0-$mobileBodyPadding 0 0-$mobileBodyPadding;

      :global(img) {
        width: 100%;
      }

      :global(figcaption) {
        text-align: right;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px; /* 166.667% */
        letter-spacing: 1.8px;
      }
    }

    @include for-widescreen {
      box-shadow: 0 0 1vw 0 rgba(209, 207, 207, 0.5);
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

      :global(figure) {
        margin: 0;
        margin-top: 0.8em;
        max-width: 35.8vw;
        min-width: initial;

        :global(&.footnote-figure-left) {
          float: left;
          margin-right: 4.7vw;

          :global(figcaption) {
            text-align: left;
          }
        }

        :global(&.footnote-figure-right) {
          float: right;
          margin-left: 4.7vw;

          :global(figcaption) {
            text-align: right;
          }
        }

        :global(figcaption) {
          font-size: 0.952vw;
          line-height: 1.190vw;
          letter-spacing: 0.138em;
          margin-top: 2.6em;
        }
      }
    }
  }
</style>
