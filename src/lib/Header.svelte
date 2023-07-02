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
  }
</style>