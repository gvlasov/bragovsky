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
    padding-top: 22px;
    padding-bottom: 2em;
    font-size: 10px;
    text-transform: uppercase;

    a {
      border-bottom: .05em solid black;
      padding-bottom: .24em;
      letter-spacing: 0.06em;

      font-size: 10px;
      text-align: center;

      &:hover {
        border-bottom: 0;
      }
    }

    @include for-widescreen {
      font-size: 13px;
      padding-top: 11.2em;
      padding-bottom: 7.55em;
      letter-spacing: 0.4px;
      text-align: center;
      a {
        letter-spacing: 0.025em;
      }
    }

  }
</style>