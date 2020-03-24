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

    .pinchlist h2
        margin-top -3.25rem !important

    .pinchView

        p
            font-size 10px
            line-height 1.05
            letter-spacing -.3px
            color #555 
            margin .25rem 0
            transition .4s

        em
            display inline-block
            font-size 17.25px
            line-height 1.2
            text-align left
            margin .25rem 0
            color #333
            background #fff8c4 
            transition background-color 2.5s

        ul
            font-size 13px
            line-height 1.3
            margin .25rem 0
            color #333

        h2, h1
            font-size 1.8rem
            margin-bottom .25rem
            transition .5s

        img
            width 55% !important


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

    .flipbtnactive
        padding .8rem
        right 1.2rem
        top 4.7rem
        background #fff8c4
        background-size cover
        background-position .15rem 0
        background-image url('/img/expand.png')
        transition background-color 3.5s
        transition border-color .25s
        background-repeat no-repeat
        border .2rem solid #fff8c4
        animation pulse 2s infinite
        animation-direction alternate

        @keyframes pulse {
          0% {
            background-color #eee
            border .2rem solid #eee
          }
          100% {
            background-color #fff8c4
            border .2rem solid #fff8c4
          }
        }


</style>
