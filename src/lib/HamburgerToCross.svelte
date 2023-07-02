<script lang="ts">
    export let open: boolean = false
</script>

<button class:open={open} on:click>
    <span class="top"></span>
    <span class="bottom"></span>
</button>

<style lang="scss">

  $color: black;
  button {
    zoom: .5;
    width: 60px;
    height: 34px;
    position: relative;
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 1px;
      width: 100%;
      background: $color;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;

      &.top {
        top: 0;
      }

      &.bottom {
        top: 26px;
      }
    }

    &.open {
      .top {
        top: 18px;
        transform: translateY(-9px) rotate(-45deg);
      }

      .bottom {
        transform: translateY(-9px) rotate(45deg);
      }
    }
  }

</style>