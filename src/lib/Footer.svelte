<script lang="ts">
    import {_} from "svelte-i18n";
    import { base } from '$app/paths';
</script>

<footer>
    <a href="{base}/legal">{$_('page.legal.title')}</a>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding-top: 170px;
    padding-bottom: 8vh;
    font-size: 13px;
    text-transform: uppercase;

    a {
      border-bottom: 1px solid black;
      padding-bottom: .2em;
      letter-spacing: 0.025em;

      &:hover {
        border-bottom: 0;
      }
    }
  }
</style>