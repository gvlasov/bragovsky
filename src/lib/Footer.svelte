<script lang="ts">
    import {_} from "svelte-i18n";
    import {base} from '$app/paths';
</script>

<footer>
    <a href="{base}/legal">{$_('page.legal.title')}</a>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding-top: 7.1vw;
    padding-bottom: 2em;
    font-size: 2.60vw;
    text-transform: uppercase;

    a {
      border-bottom: .05em solid black;
      padding-bottom: .24em;
      letter-spacing: 0.050em;

      &:hover {
        border-bottom: 0;
      }
    }

    @media screen and (min-device-width: 1680px) {
      font-size: 13px;
      padding-top: 13em;
      padding-bottom: 7.55em;
      a {
        letter-spacing: 0.025em;
      }
    }

  }
</style>