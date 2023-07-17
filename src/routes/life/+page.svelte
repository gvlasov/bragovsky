<script lang="ts">
    import {_} from 'svelte-i18n'
    import LifeCategory from "../../lib/LifeCategory.svelte";
    import photos from "$imagesOptimized/Фото/001.jpg"
    import sketches from "$imagesOptimized/Наброски/Автопортрет 11.jpg"
    import books from "$imagesOptimized/Книги/Книга 1-2.jpg"
    import articles from "$imagesOptimized/Статьи/Папикян-газета.jpg"
    import year1971 from "$imagesOptimized/Статьи/1.jpg"
</script>

<div class="categories">
    <LifeCategory name="photos" image="{photos}"/>
    <LifeCategory name="sketches" image="{sketches}"/>
    <LifeCategory name="books" image="{books}"/>
    <LifeCategory name="articles" image="{articles}"/>
    <LifeCategory name="1971" image="{year1971}"/>
    <LifeCategory name="dates">
        <div class="dates-figure">{$_('page.life.')}</div>
    </LifeCategory>
</div>


<style lang="scss">
  .categories {
    display: flex;
    flex-wrap: wrap;

    .categories > * {
      flex-basis: 50%;
    }
  }
</style>
