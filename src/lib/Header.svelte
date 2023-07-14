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
      padding-top: max(2.321vw, 34px);
      padding-right: max(3.06vw, 33px);
      padding-left: max(3.095238095vw, 45px);
      padding-bottom: 0;
    }
  }
</style>