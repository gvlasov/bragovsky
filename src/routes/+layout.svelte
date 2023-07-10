<script lang="ts">
    import '../app.scss'
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<Header/>
<div class="content">
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