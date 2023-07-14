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
  @import "../mixins";

  .content {
    padding: 0 $mobileBodyPadding 0 $mobileBodyPadding;
    @include for-widescreen {
      padding: 0 $desktopBodyPadding 0 $desktopBodyPadding;
    }
  }
  .hidden {
    display: none;
  }
</style>