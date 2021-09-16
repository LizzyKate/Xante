<template>
  <div class="">
    <div class="media-intro">
      <h2 class="sharp mb-36">Media</h2>
    </div>
    <div class="media-view">
      <div class="media-box" style="background: #938d8d; height: 938px"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
      <div class="media-box" style="background: #393232; height: 698px"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
      <div class="media-box" style="background: #bcaaaa"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.media-intro {
  margin: 120px 120px 143px 120px;
}

.media-view {
  margin-bottom: 163px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.media-box {
  height: 486px;
  width: 100%;
}
</style>