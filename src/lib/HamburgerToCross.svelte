<script lang="ts">
    export let open: boolean = false
</script>

<button class:open={open} on:click>
    <span></span>
</button>

<style lang="scss">
  $hamburgerHeight: 13px;
  $hamburgerWeight: 1px;
  button {
    font-weight: 400;
    font-family: "Bruta Global", Arial, sans-serif;
    display: block;
    position: relative;
    width: 35px;
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
        transform: translateY(calc($hamburgerHeight/2) - calc($hamburgerWeight/2)) rotate(-45deg);
      }

      &:after {
        transform: translateY(-(calc($hamburgerHeight/2) - calc($hamburgerWeight/2))) rotate(45deg);
      }

    }

    span {
      display: none;
      font-weight: 400;
      font-family: "Bruta Global", Arial, sans-serif;
      cursor: pointer;
      left: 0;
      position: absolute;
      width: 100%;
      transition: all 0.3s ease 0s;
      height: 0;
      top: 50%;
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