<template>
  <button id="dGreenBtn">
      {{ text }}
  </button>
</template>

<script>
export default {
    name: 'DGreenBtn',
    props: [ 'text' ]

}
</script>

<style>
    #dGreenBtn {
        width: 100px;
        height: 36px;
        background: #056237;
        border-radius: 4px;
        padding: 8px 16px;
    }
</style>