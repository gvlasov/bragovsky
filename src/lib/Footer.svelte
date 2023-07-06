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
    padding-top: 168px;
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

    @media screen and (max-width: 1680px) {
      padding-top: 145px;
      padding-left: 5px;
      a {
        padding-bottom: 2px;
      }
    }

    @media screen and (max-width: 639px) {
      padding-top: 20px;
      padding-left: 0px;
      a {
        font-size: 10px;
        line-height: 18px;
        letter-spacing: 0.06em;
      }
    }
  }
</style>