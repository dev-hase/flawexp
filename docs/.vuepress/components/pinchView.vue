<template>
      <div>

            <button class="flipbtn flipbtnactive" v-on:click="toggleView"> 
               
            </button>

            <section class="pinchlist pinchView">
                <Content slot-key="pinchview"/>
            </section>

      </div>  
</template>

<script>
export default {
    methods: {
        toggleView: function() {

            this.$el.querySelector('.pinchlist').classList.toggle("pinchView");
            this.$el.querySelector('.flipbtn').classList.toggle("flipbtnactive");
        }
      }
};
</script>

<style lang="stylus">

    $highlightB = #fcdc9a

    .pinchView

        p
            font-size 10px
            line-height 1.05
            letter-spacing -.3px
            color #555 
            margin .25rem 0
            transition .4s
            
        h2:last-child
            background red

        em
            display inline-block
            font-size 1rem
            line-height 1.2
            text-align left
            margin .25rem 0
            color #333
            background $highlightB
            background-image url('/img/highlight.png')
            transition background-color 2.5s
            
        mjx-container
            background $highlightB
            padding .2rem

        ul
            position relative
            margin .25rem 0
            background #c5c5c5
            color #eee
            padding .5rem 1.5rem
            margin .75rem 0
            list-style none
            border-radius .2rem
            background-image url('/img/grunge.png')

            em
                background #656565
                background-image url('/img/highlight.png')
                color #fff
                
            li
                position relative
                margin-left 1rem
                padding .35rem 0
                border-bottom 1px solid #989898
                color $textColor
                @media (max-width $MQMobile)
                    font-size .9rem
            li:last-child
                border-bottom none
                
            li:before 
                content ''
                height 1.5rem
                width 1.5rem
                display block
                position absolute
                background-image url('/img/list.png')
                background-size cover
                background-position center
                transform translateY(-50%)
                filter invert(40%)
                left -2rem
                top 50%

            
        h1
            font-size 2rem

        h2
            font-size 1.4rem
            margin-bottom .25rem
            transition .5s

        img
            width 55% !important



        .youtube, iframe, .youtube:before 
            max-height 30vw !important  
            height 15vw !important

        .youtube:before
            background-size 10% !important

        .video-box 
            margin 1rem 0 !important

        @media (min-width 1200px)
            .video-box 
                max-width 75% !important
                margin 2rem 0 !important

            iframe
                min-height 33vw

        @media (max-width 1200px)

            iframe
                min-height 50vh



    .flipbtn
        position fixed
        right 1rem
        top 4.5rem
        padding 1rem
        border .2rem solid #eee
        box-shadow 1px 1px 2px #999
        background #eee
        outline none
        background-size cover
        background-image url('/img/compress.svg')
        transition background-color padding .5s
        z-index 1000
        opacity .8
        background-repeat no-repeat
        border-radius 20%

    .flipbtnactive
        padding .8rem
        right 1.2rem
        top 4.7rem
        background $highlightB
        background-size cover
        background-position .15rem 0
        background-image url('/img/expand.png')
        transition background-color 3.5s
        transition border-color .25s
        background-repeat no-repeat
        border .2rem solid $highlightB
        animation pulse 2s infinite
        animation-direction alternate

        @keyframes pulse {
          0% {
            background-color #eee
            border .2rem solid #eee
          }
          100% {
            background-color $highlightB
            border .2rem solid $highlightB
          }
        }



</style>
