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
  

    .infoBox
        border 1px solid #333
        box-shadow 4px 3px 5px #aaa
        background-color #444
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

        img
            max-height 60vh
            min-width 100%
            object-fit cover
            object-position center left

        .video-box
            transform scale(.98)

        ul
            margin .5rem
            //background #222

            p
                color #eee


            em
                //background #555
                color #fff
            li
                border-bottom none
                color #eee

            li:before
                filter invert(100%) !important
                opacity .9

        p
            img
                margin-left -.5rem



    .infoBox:not(:first-child)
        margin-top 3.5rem


    .verkehrsverhalten .infoBox
        background-color $C-verkehrsverhalten
        background linear-gradient(125deg, darken($C-verkehrsverhalten, 20%) 75%, lighten($C-verkehrsverhalten, 5%) 100%)
        ul
            background darken($C-verkehrsverhalten, 50%)
            em
                background darken($C-verkehrsverhalten, 10%)          

    .psychologie .infoBox
        background-color $C-psychologie
        background linear-gradient(125deg, darken($C-psychologie, 20%) 55%, lighten($C-psychologie, 25%) 100%)
        ul
            background darken($C-psychologie, 50%)
            em
                background darken($C-psychologie, 10%)   

    .kommunikation .infoBox
        background-color $C-kommunikation
        background linear-gradient(125deg, darken($C-kommunikation, 20%) 55%, lighten($C-kommunikation, 25%) 100%)
        ul
            background darken($C-kommunikation, 50%)
            em
                background darken($C-kommunikation, 10%)   

    .pädagogik .infoBox
        background-color $C-paedagogik
        background linear-gradient(125deg, darken($C-paedagogik, 20%) 55%, lighten($C-paedagogik, 25%) 100%)
        ul
            background darken($C-paedagogik, 50%)
            em
                background darken($C-paedagogik, 10%)        

    .anhänger .infoBox
        background-color $C-anhaenger
        background linear-gradient(125deg, darken($C-anhaenger, 20%) 55%, lighten($C-anhaenger, 25%) 100%)
        ul
            background darken($C-anhaenger, 50%)
            em
                background darken($C-anhaenger, 10%)
   
    .technik .infoBox
        background-color $C-technik
        background linear-gradient(125deg, darken($C-technik, 20%) 55%, lighten($C-technik, 25%) 100%)
        ul
            background darken($C-technik, 50%)
            em
                background darken($C-technik, 10%)
            

</style>