<script lang="ts">
    import {_} from 'svelte-i18n';
    import {base} from '$app/paths';

    export let name: string
    export let image: string | null = null
    export let style: string = ''
</script>
<figure class="category">
    <a href="{base}/life/{name}/" style="{style}">
        <slot>
            <img alt="{$_(`page.life.categories.${name}.title`)}" src="{image}"/>
        </slot>
        <figcaption>{$_(`page.life.categories.${name}.title`)}</figcaption>
    </a>
</figure>
<style lang="scss">
  @import "../mixins";
</style>