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
    z-index: 2;
    position: relative;
    display: flex;
    padding: 8.94vw 15.8vw 0 6.2vw;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-device-width: 1680px) {
      padding: 2.35vw 3.5vw 0 3.15vw;
    }
  }
</style>