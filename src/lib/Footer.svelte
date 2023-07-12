<script lang="ts">
    import {_} from "svelte-i18n";
    import {base} from '$app/paths';
</script>

<footer>
    <a href="{base}/legal">{$_('page.legal.title')}</a>
</footer>

<style lang="scss">
  @import "../mixins";
  footer {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 2em;
    font-size: 10px;
    text-transform: uppercase;

    a {
      border-bottom: .05em solid black;
      padding-bottom: .24em;
      letter-spacing: 0.050em;

      &:hover {
        border-bottom: 0;
      }
    }

    @include for-widescreen {
      font-size: 13px;
      padding-top: 11.2em;
      padding-bottom: 7.55em;
      a {
        letter-spacing: 0.025em;
      }
    }

  }
</style>