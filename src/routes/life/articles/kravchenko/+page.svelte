<script lang="ts">
    import Article from "$lib/pages/articles/Article.svelte";
    import {_} from 'svelte-i18n'
</script>

<Article name="unknown-colors">
    <svelte:fragment slot="heading">
        <div class="heading">{$_('page.kravchenko.author')}</div>
    </svelte:fragment>
    <svelte:fragment slot="content">{@html $_('page.kravchenko.text')}</svelte:fragment>
</Article>

<style lang="scss">
  .heading {
    text-decoration: underline;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 17.34px;
  }
</style>