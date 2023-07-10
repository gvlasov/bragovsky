<script lang="ts">
    import '../app.scss'
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import {menuOpen} from "../lib/store.js";
</script>

<Header/>
<div class="content" class:hidden={$menuOpen}>
    <slot/>
</div>
<Footer/>
<style lang="scss">
  @import "../variables";

  .content {
    padding: 0 $narrowBodyPadding 0 $narrowBodyPadding;
    @media screen and (min-width: 1680px) {
      padding: 0 $bodyPadding 0 $bodyPadding;
    }
  }
  .hidden {
    display: none;
  }
</style>