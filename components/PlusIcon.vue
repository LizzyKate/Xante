<template>
   <img  id="plus-icon" class="" src="../assets/images/Plus icon.png" alt="">
</template>

<script>
export default {
    name: 'PlusIcon'
}
</script>

<style>
    #plus-icon {
        width: 54px;
        height: 47px;
        background: #151F38 !important;
        border-radius: 4px;
        padding:16px 19px;
    }

    @media screen and (max-width: 540px) {
        #plus-icon {
            padding: 12px 14px;
            width: 40.69px;
            height: 34.87px;
        }
    }

</style>