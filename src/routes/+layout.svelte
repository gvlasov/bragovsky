<script lang="ts">
    import '../app.scss'
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    export const prerender = true;
    export const ssr = false
</script>

<div class="content">
    <Header/>
    <slot/>
</div>
<Footer/>
<style lang="scss">
  @import "../variables";

  .content {
    padding: 0 $bodyPadding 0 $bodyPadding;
    @media screen and (max-width: 639px) {
      padding: 0 24px;
    }
  }
</style>