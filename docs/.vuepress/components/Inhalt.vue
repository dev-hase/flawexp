<template>

      <article class="thema hideTopic">

        <h1 v-on:click='hideTopic'>{{ titel }}</h1>
        <img v-on:click='hideTopic' :src=" $withBase(`/img/` + bild) " />
        <div class="unterpunkte">
            <div class="thema-unterpunkt" v-for="post in posts">
                    <router-link :to="{ path: post.path }">
                            <h2> {{ post.title }} </h2>
                    </router-link>   
            </div>
        </div>
      </article>

</template>

<script>
export default {
    props: ["pfad", "bild", "titel"],
    computed: {
        
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.pfad))
                .sort((a, b) => (a.title > b.title) ? 1 : -1)
        },  
  
    },
    methods: {
        hideTopic: function() {
          //alert('tach');
          event.target.parentNode.classList.toggle("hideTopic");
 
        },
    }  
};
</script>

<style lang="stylus">

$highlightB = #ffff66

@media (max-width $MQMobile)
    .hideTopic > .unterpunkte
        display none


#inhalt 

    article
        position relative

    @media (max-width $MQMobile)

        article:not(.hideTopic)::after
            transform rotate(90deg)
            color $highlightB

        article::after
            position absolute
            display inline-block
            right 1.25rem
            height inherit
            content '>'
            cursor pointer
            color #eee
            font-size 2rem
            margin-top 0
            top: 1rem
            font-family 'Montserrat', sans-serif
            font-style normal
            font-weight bold
            transition .3s


    @media (min-width 1200px)
        max-width 80vw

    margin auto auto

    article:not(.hideTopic)

        img
                filter unset !important
                transition 1s

    @media (min-width $MQMobile)
        article
            grid-column span 2 
            display grid
            grid-template-columns 1fr 1fr
            background #222

            h1
                grid-row 1
                grid-column span 2

            img, .unterpunkte
                grid-row 2

            .unterpunkte
                padding 1.5rem


#inhalt
    padding 2rem
    padding-top 4rem
    display grid
    grid-template-columns: 1fr 1fr
    grid-gap 2rem

    @media (max-width $MQMobile)
        grid-template-columns: 1fr
        grid-gap 1rem
        padding .5rem
        padding-top 5rem


.thema

    h1
        background #111
        color white
        padding 1rem 1.5rem .25rem
        margin 0
        font-size 2rem
        font-style italic
        height 3.25rem
        opacity .85
        @media (max-width $MQNarrow)
            font-size 1.8rem
            padding-bottom 0rem
            line-height 1.6

    img
        min-widht 100%
        transition 1.3s

        @media (max-width $MQMobile)
            filter grayscale(100%) sepia(30%) contrast(90%) brightness(90%) !important
            cursor pointer

        @media (min-width $MQMobile)
            filter unset !important
            transition 1s
        

.thema-unterpunkt h2
    background #222
    color white
    padding .5rem .75rem 
    margin 1px 0
    border-bottom 0 
    font-size 1.25rem
    font-style normal 
    @media (max-width $MQNarrow)
      font-size 1.1rem
      
    
.thema-unterpunkt h2:hover
    background #eff7ad
    color black

.thema-unterpunkt h2::before
    content: ">"
    

.unterpunkte
    margin-top -.25rem


</style>
