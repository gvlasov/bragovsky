<script lang="ts">
    import Logo from "./Logo.svelte";
    import Navigation from "./Navigation.svelte";
</script>

<header>
    <Logo/>
    <Navigation/>
</header>

<style lang="scss">
  header {
    position: relative;
    display: flex;
    padding: 44px 67px 139px 60px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1680px) {
      padding: 39px 51px 119px 52px;
      font-size: 14px;
    }
    @media screen and (max-width: 639px) {
      padding: 28px 46px 24.4px 24px;
      font-size: 14px;
    }
  }
</style>