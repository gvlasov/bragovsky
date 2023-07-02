<script lang="ts">
    import '../app.scss'
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    export const prerender = true;
    export const ssr = false
</script>

<Header/>
<div class="content">
    <slot/>
</div>
<Footer/>
<style lang="scss">
  @import "../variables";

  .content {
    padding: 0 $bodyPadding 0 $bodyPadding;
  }
</style>