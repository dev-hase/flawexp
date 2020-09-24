<template>

      <article :class="'thema hideTopic ' + topic">

        <h1 v-on:click='hideTopic'>{{ titel }}</h1>
        <img v-on:click='hideTopic' :src=" $withBase(`/img/` + bild) " />
        <div class="unterpunkte">
            <div class="thema-unterpunkt"  v-for="post in posts">
                    <router-link :to="{ path: post.path }">
                            <h2> {{ post.title }} </h2>
                    </router-link>   
            </div>
        </div>
      </article>

</template>

<script>
export default {
    props: ["pfad", "bild", "titel", "topic"],
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

        .thema-unterpunkt
            //display none
            height 0
            padding 0
            margin 0
            h2 
                font-size 0
                transition .6s


    .hideTopic
        .unterpunkte
            height 0 !important
            //padding-bottom 2rem
        img
            opacity .85


#inhalt 

    article
        position relative

    @media (max-width $MQMobile)

        article
            margin-bottom 1.5rem

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
            //background-color #222 !important
        

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

        //background-color #222 !important
        //background linear-gradient(-95deg, #222 70%, #444 100%) !important

        color white
        padding 1rem 1.5rem .25rem
        margin 0
        font-size 2rem
        font-style italic
        height 3.25rem
        @media (max-width $MQNarrow)
            font-size 1.8rem
            padding-bottom 0rem
            line-height 1.6

    img
        min-widht 100%
        transition 2s

        @media (max-width $MQMobile)
            filter grayscale(100%) sepia(30%) contrast(90%) brightness(90%) !important
            cursor pointer


        @media (min-width $MQMobile)
            filter unset !important
            transition 1s

#inhalt .anhänger
    background $C-anhaenger !important
    background linear-gradient(-55deg, $C-anhaenger 10%, darken($C-anhaenger, 50%) 100%) !important

#inhalt .technik
    background $C-technik !important
    background linear-gradient(-55deg, $C-technik 10%, darken($C-technik, 50%) 100%) !important

#inhalt .kommunikation
    background $C-kommunikation !important
    background linear-gradient(-55deg, $C-kommunikation 10%, darken($C-kommunikation, 50%) 100%) !important    

#inhalt .pädagogik
    background $C-paedagogik !important
    background linear-gradient(-55deg, $C-paedagogik 10%, darken($C-paedagogik, 50%) 100%) !important

#inhalt .psychologie
    background $C-technik !important
    background linear-gradient(-55deg, $C-psychologie 10%, darken($C-psychologie, 50%) 100%) !important

#inhalt .verkehrsverhalten
    background $C-verkehrsverhalten !important
    background linear-gradient(-55deg, $C-verkehrsverhalten 10%, darken($C-verkehrsverhalten, 50%) 100%) !important

#inhalt .undefined
    background #222 !important
    background linear-gradient(-55deg, #222 10%, darken(#222, 50%) 100%) !important



.thema-unterpunkt a
    padding 0 !important
    background none !important 

.thema-unterpunkt h2
    //background #222
    color white
    padding .5rem .75rem 
    margin 1px 0 !important
    border-bottom 0 
    font-size 1.25rem
    font-style normal 
    transition .7s
    @media (max-width $MQNarrow)
      font-size 1.1rem
      
    
.thema-unterpunkt h2:hover
    background #eff7ad
    color black

.thema-unterpunkt h2::before
    content: ">"
    

@media (max-width $MQMobile)
    .unterpunkte
        margin-top -.25rem !important
.unterpunkte
    margin-top -1.75rem


.home

    padding 0 !important
    margin 0 !important
    max-width 100vw !important
    background #7d7573
    background linear-gradient(180deg, #7d7573 30%, darken(#7d7573, 20%) 100%) !important

    .description, .footer, #main-title
        color #000 !important

    .footer
        border-top none !important

    .hero
        padding 1rem 0
        background #7d7573
        background-image url('/img/hero.jpg')
        background-image linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(103,96,94,0) 75%,rgba(125,117,115,1) 100%), url('/img/hero.jpg')
        background-size cover
        background-repeat no-repeat
        background-position center
        
        img
            margin-top 7rem !important

    #main-title
        position relative
        font-size 6rem !important
        font-style italic
        text-shadow 2px 3px 3px #777 !important
        @media (max-width $MQMobile)
            font-size 4.5rem !important
            
    #main-title:after
        position absolute
        display inline-block
        margin-left -.75rem
        margin-top -.25rem
        content 'BE'
        color #eee !important
        background tint($accentColor, 20%)
        border-radius 50%
        padding .5rem
        font-size 1.75rem
        text-shadow none
        border 1px solid #333
        box-shadow 2px -1px 3px #333
        z-index 200
        //transform rotate(-2deg) !important
        @media (max-width $MQMobile)
            margin-left -1.5rem
            margin-top -1rem

    .description
        font-size 2.3rem !important
        text-shadow 2px 3px 3px #777 !important
        margin-top -2rem !important
        @media (max-width $MQMobile)
            font-size 1.8rem !important

.inhaltsangabe .page .theme-default-content
    max-width 100vw


</style>
