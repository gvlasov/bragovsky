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
    padding: 8.4vw 15.8vw 0 5.8vw;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1680px) {
      padding: 39px 51px 39px 52px;
      font-size: 14px;
    }
  }
</style>