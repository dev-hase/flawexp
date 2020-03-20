<template>
      <div>

            <button class="flipbtn" v-on:click="toggleView"> 
                |||
            </button>

            <section class="begriffe pinchView">
                <Content slot-key="begriffe"/>
            </section>

      </div>  
</template>

<script>
export default {
    props: ["titel"],
    methods: {
        toggleView: function() {

            this.$el.querySelector('.begriffe').classList.toggle("pinchView");

        }
      }
};
</script>

<style lang="stylus">

    .begriffe h2
        margin-top -3.25rem !important

    .pinchView

        p
            font-size 12px
            line-height 1.05
            text-align justify
            letter-spacing -.3px
            color #666 
        em
            display flex
            font-size 18px
            line-height 1.25
            text-align left
            margin .25rem 0
            color #111

        h2
            font-size 2.25rem
            margin-bottom .25rem


    .flipbtn
        position fixed
        right 3rem
        bottom 3rem
        transform rotate(90deg) scale(1.5)
        padding .2rem .35rem .3rem .35rem
        box-shadow 2px -2px 2px #999
        background #333
        border none
        color #eee
        border-radius 100%
        outline none

    .flipbtn:hover
        background $accentColor
        color #eee  
        transform rotate(95deg) scale(1.7)  
        transition .13s
        outline none




</style>
