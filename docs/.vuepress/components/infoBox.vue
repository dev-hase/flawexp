<template>
      <section class="infoBox">

            <slot></slot>

      </section>  
</template>

<script>
export default {


};
</script>

<style lang="stylus">
  
    $highlight = #eff7ad

    .infoBox
        border 1px solid #333
        box-shadow 4px 3px 5px #aaa
        background #333
        color #eee


        h1:first-of-type
            display flex
            color #eee
            background #333
            padding 1.5rem 1rem
            margin-bottom 0
            font-size 2.25rem

        p, img
            padding 0 .5rem

        p
            img
                margin-left -.5rem

    .infoBox:not(:first-child)
        margin-top .75rem

</style>