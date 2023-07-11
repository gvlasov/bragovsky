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
    padding: 8.94vw 15.8vw 0 6.2vw;
    justify-content: space-between;
    align-items: center;
    @include for-widescreen {
      padding: 2.30vw 3.0vw 0 3.15vw;
    }
  }
</style>