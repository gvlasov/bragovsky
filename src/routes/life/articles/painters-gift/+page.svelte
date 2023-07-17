<script lang="ts">
    import Article from "$lib/pages/articles/Article.svelte";
    import {_} from 'svelte-i18n'
</script>

<Article>
    <svelte:fragment slot="heading">{$_('page.painters-gift.heading')}</svelte:fragment>
    <svelte:fragment slot="content">{@html $_('page.painters-gift.content')}</svelte:fragment>
    <svelte:fragment slot="author">{$_('page.painters-gift.author')}</svelte:fragment>
</Article>


<style lang="scss">

  article {

    .part1 {
      margin-bottom: 2.3em;
    }

    .part2 {
      margin-bottom: 3em;

    }

    .part3 {
      margin-top: -0.8em;
    }

    .part4 {
      padding-top: 0.5em;
    }

  }

</style>
