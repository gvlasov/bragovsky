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
    padding: 46px 60px 126px 60px;
    justify-content: space-between;
    background-color: white;
    @media screen and (max-width: 639px) {
      padding: 33px 24px 53px 24px;
      font-size: 14px;
    }
  }
</style>