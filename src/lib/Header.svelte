<script lang="ts">
    import Logo from "./Logo.svelte";
    import Navigation from "./Navigation.svelte";
</script>

<header>
    <Logo/>
    <Navigation/>
</header>

<style lang="scss">
  @import "../mixins";
  header {
    z-index: 2;
    position: relative;
    display: flex;
    padding: 34px 15.8vw 0 24px;
    justify-content: space-between;
    align-items: center;
    @include for-widescreen {
      padding: 2.321vw 3.036vw 0 3.155vw;
    }
  }
</style>