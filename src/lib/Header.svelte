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
    top: 0;
    display: flex;
    padding: 2rem 6vw 2rem 6vw;
    justify-content: space-between;
    background-color: white;
    @media screen and (max-width: 639px) {
      padding: 33px 0 53px 0;
      font-size: 14px;

    }
  }
</style>