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
    margin-top: 130px;
    :global(.description) {
      :global(.headings) {
        :global(h1) {
          margin-top: 56px;
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
    }

    :global(p) {
      margin-top: 1.7em;
      font-size: 15px;
      font-weight: 400;
      line-height: 35px;
      letter-spacing: 0.225px;
    }

    :global(figure) {
      max-width: 100%;
      min-width: 100%;

      :global(img) {
        width: 100%;
      }

      :global(figcaption) {
        margin-top: 18px;
        text-align: right;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
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
            font-size: 15.61px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0.3px;
            margin-top: 4.5em;
            max-width: max-content;
          }

          :global(h2) {
            max-width: 8em;
            margin-top: 5.87em;
            font-size: 25.15px;
            font-weight: 400;
            line-height: 50.3px;
            letter-spacing: 0.5px;
          }

          :global(h3) {
            color: #262626;
            font-size: 25.15px;
            font-weight: 300;
            line-height: 17.3px;
            letter-spacing: 0.5px;
            margin-top: 5.87em;
            margin-bottom: 12em;
            max-width: max-content;
            text-transform: none;
          }
        }
      }

      :global(p) {
        margin: 0 0 1.8em 0;
        font-family: Bruta Global Regular;
        font-size: 17.34px;
        font-style: normal;
        font-weight: 400;
        line-height: 43.4px; /* 250.288% */
        letter-spacing: 0.4px;
      }

      :global(figure) {
        margin: 0;
        margin-top: 0.8em;
        max-width: 35.8vw;
        min-width: initial;

        :global(figcaption) {
          font-size: 15.61px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 2.4px;
          margin-bottom: 2em;
        }
      }
      :global(figure.footnote-figure-left) {
        float: left;
        margin-right: 4.7vw;

        :global(figcaption) {
          text-align: left;
        }


      }
      :global(figure.footnote-figure-right) {
        float: right;
        margin-left: 4.7vw;

        :global(figcaption) {
          text-align: right;
        }
      }
    }
  }
</style>
