<template>
  <button id="l-green-btn">Go to site</button>
</template>

<script>
export default {
  name: 'LGreenBtn',
}
</script>

<style>
#l-green-btn {
  padding: 8px 16px;
  width: 112.1px;
  background: #a2ffe8;
  color: #004b39;
  border-radius: 24px;
}

@media screen and (max-width: 400px) {
  #l-green-btn {
    font-size: 12px;
    line-height: 15px;
    width: 85px;
  }
}
</style>