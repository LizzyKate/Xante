<template>
  <button id="prybtn" class="">
      {{ text }}
  </button>
</template>

<script>
export default {
    name: 'PryButton',
    props: [
        'text'
    ]

}
</script>

<style scoped>
    #prybtn {
        /* height: 52px; */
        /* width: 150px; */
        border-radius: 4px;
        padding: 16px;
        background: #281E5D;
        color: #fff;
        font-weight: 700;
        letter-spacing: 0em;
    }

    #prybtn :hover {
        background: #3E2F8C;
    }

     @media screen and (max-width: 768px) {
        #prybtn {
            padding: 8px;
            font-size: 12px;
        }
    }
</style>