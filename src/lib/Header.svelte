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
    @media screen and (max-width: 639px) {
      padding: 29px 24px 23px 24px;
      font-size: 14px;
    }
  }
</style>