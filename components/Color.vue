<template>
  <div id="color-dot" :class="{ yellow: theme === 'yellow', green: theme === 'green' }"></div>
</template>

<script>
export default {
    name: 'Color',
    props: ['theme']

}
</script>

<style>
    #color-dot {
       width: 14px;
       height: 14px;
       border-radius: 50%;
    }

    #color-dot.yellow {
       background:  #FFB200;
    }
    
    #color-dot.green {
       background:  #39B87D;
    }
</style>