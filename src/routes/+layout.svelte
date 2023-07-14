<script lang="ts">
    import '../app.scss'
    import Header from "../lib/Header.svelte";
</script>

<Header/>
<div class="content">
    <slot/>
</div>
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