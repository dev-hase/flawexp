<template>
      <div>

            <button class="flipbtn" v-on:click="toggleView"> 
                |||
            </button>

            <section class="begriffe">
                <Content slot-key="begriffe"/>
            </section>

      </div>  
</template>

<script>
export default {
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
            font-size 17.5px
            line-height 1.2
            text-align left
            margin .25rem 0
            color #111

        h2
            font-size 1.9rem
            margin-bottom .25rem


    .flipbtn
        position fixed
        right 1rem
        top 4.5rem
        transform rotate(90deg) scale(1.5)
        padding .2rem .35rem .3rem .35rem
        box-shadow 1px -1px 2px #999
        background #333
        border none
        color #eee
        border-radius 100%
        outline none






</style>
