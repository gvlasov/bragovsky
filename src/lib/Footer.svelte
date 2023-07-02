<script lang="ts">
    import {_} from "svelte-i18n";
</script>

<footer>
    <a href="/legal">{$_('page.legal.title')}</a>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;

    a {
      border-bottom: 1px solid black;
      padding-bottom: .2rem;

      &:hover {
        border-bottom: 0;
      }
    }
  }
</style>