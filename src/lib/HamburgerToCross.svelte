<script lang="ts">
    export let open: boolean = false
</script>

<button class:open={open} on:click>
    <span></span>
</button>

<style lang="scss">
  $hamburgerHeight: 3.22vw;
  $hamburgerWeight: .28vw;
  button {
    font-weight: 400;
    font-family: "Bruta Glb", Arial, sans-serif;
    display: block;
    position: relative;
    width: 7.1vw;
    height: $hamburgerHeight;
    cursor: pointer;
    margin-left: auto;

    &:after, &:before {
      content: "";
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    &.open {

      &:before {
        transform: translateY($hamburgerHeight/2-$hamburgerWeight/2) rotate(-45deg);
      }

      &:after {
        transform: translateY(-($hamburgerHeight/2-$hamburgerWeight/2)) rotate(45deg);
      }

    }

    span {
      display: none;
      font-weight: 400;
      font-family: "Bruta Glb", Arial, sans-serif;
      cursor: pointer;
      left: 0;
      position: absolute;
      width: 100%;
      transition: all 0.3s ease 0s;
      height: 0;
      top: 50%;
      transform: scale(1) translate(0, -50%);
    }

    &:before, &:after, span {
      left: 0;
      position: absolute;
      height: $hamburgerWeight;
      width: 100%;
      -webkit-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
      background-color: #000;
      border-radius: $hamburgerWeight;
    }

  }
</style>