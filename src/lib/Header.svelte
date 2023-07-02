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
    position: sticky;
    top: 0;
    display: flex;
    padding: 3rem 3rem 3rem 3rem;
    justify-content: space-between;
    background-color: white;
  }
</style>