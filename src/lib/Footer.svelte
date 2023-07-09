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
    padding-top: 7vw;
    padding-bottom: 8vh;
    font-size: 2.55rem;
    text-transform: uppercase;

    a {
      border-bottom: .05em solid black;
      padding-bottom: .24em;
      letter-spacing: 0.047em;

      &:hover {
        border-bottom: 0;
      }
    }

  }
</style>