<script lang="ts">
    import {_} from 'svelte-i18n';
    import { base } from '$app/paths';

    export let name: string
    export let image: string|null = null
</script>
<div class="category">
    <a href="{base}/life/{name}/">
        <slot>
            <img alt="{$_(`page.life.categories.${name}.title`)}" src="{image}"/>
        </slot>
        <div>{$_(`page.life.categories.${name}.title`)}</div>
    </a>
</div>
<style lang="scss">
  .category {
    text-align: center;
    box-shadow: .3rem .3rem #000;
    padding: 4rem;

    img {
      min-width: 20rem;
      min-height: 20rem;
    }
  }
</style>