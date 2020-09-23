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
    $accentColor = #3c936a

    .infoBox
        border 1px solid #333
        box-shadow 4px 3px 5px #aaa
        background-color $accentColor
        background linear-gradient(125deg, darken($accentColor, 20%) 75%, lighten($accentColor, 5%) 100%)
        color #eee


        h1:first-of-type, h2:first-of-type
            display flex
            color #eee
            padding 1.5rem 1rem
            font-size 2.1rem
            padding 3.5rem .5rem 1rem .5rem !important
            margin 0 !important

        p, img
            padding 0 .5rem

        .video-box
            transform scale(.98)

        ul
            margin .5rem
            background #99a393

            em
                background $accentColor
                color $highlight
            li
                border-bottom none

            li:before
                filter invert(95%) !important

        p
            img
                margin-left -.5rem

    .infoBox:not(:first-child)
        margin-top 3.5rem

</style>