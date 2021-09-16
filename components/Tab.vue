<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
};
</script>

<style>
.tab {
  width: 71px;
  height: 56px;
  background: #1f2b4a;
  border-radius: 4px;
  padding: 18px 12px;
  cursor: pointer;
}

.active-tab {
  background: #281e5d;
  transition: 0.3s ease-in;
}

@media screen and (max-width: 540px) {
  .tab {
    width: auto;
    height: auto;
    padding: 13px 10px;
    font-size: 12px !important;
  }
}
</style>