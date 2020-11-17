<template>
      <section class="newSection">
        <header class="collapsed">
            <h2 v-on:click='changeSize' class="newSectionHeader">

                {{title}}
                

            </h2>
        </header>

        <article :class="addClass">
            <slot></slot>
        </article>


      </section>  
</template>

<script>
export default {
    props: ["title", "addClass"],
    mounted() {
        //alert('hiiii');

        //document.getElementsByClassName('newSection').forEach(el => el.addEventListener('click', this.changeSize));
    },
    methods: {
        changeSize: function() {
          //alert('tach');
          event.target.parentNode.classList.toggle("collapsed");
          //event.target.style.color = 'yellow';
 
        }
    }

};
</script>

<style lang="stylus">


    .newSection:last-of-type
        margin-bottom 2rem

    .newSection


        article h2:first-of-type
            font-size 0
            z-index -100
            position relative
            top -5rem
            word-break break-word

        article
            //border 1px solid #333
            padding 0
            //box-shadow 4px 3px 4px #444
            background #fff

            p, h1, h2, h3
                padding 0 .5rem

        .law 
            ul
                li:before
                    display none

            ul, ol

                line-height 1.2
                margin 0.1rem 0


                li
                    em
                        background $highlightB
                        color #333

                    border-bottom unset
                    padding .25rem 0


            ul
                margin-left -1.5rem !important

            ol
                margin-left -.5rem !important

            strong
                opacity .4
                font-weight normal

        .collapsed ~ article
            //font-size 0 !important
            //visibility hidden

            p, ul, ol, li, em
                font-size 0 !important

            ul, ol, li, em, img
                display none

            .video-box, h3, iframe
                display none

        .newSectionHeader
            position relative
            top 1.5rem
            margin-bottom -2.55rem
            display flex
            padding-top 1.75rem !important
            padding-bottom 1.75rem !important
            padding-right 3rem !important
            background #444
            background-image linear-gradient(120deg, #444 80%, #666 100%)
            //background-image linear-gradient(120deg, $accentColor 80%, lighten($accentColor, 20%) 100%)
            color #eee
            margin-left 0 !important
            z-index 100
            //box-shadow 4px 0px 3px #444
            cursor pointer

            font-size 1.4rem 


        .newSectionHeader:hover
            background-image linear-gradient(120deg, #666 80%, #888 100%)
            //background-image linear-gradient(120deg, #222 80%, #444 100%)
        .newSectionHeader::after
            position absolute
            display inline-block
            right 1.25rem
            height inherit
            content '>'
            transform rotate(90deg)
            cursor pointer
            color $highlightB
            font-size 2rem
            margin-top -.25rem
            top: 1.75rem
            font-family 'Montserrat', sans-serif
            font-style normal
            font-weight bold
            transition .3s

        .collapsed .newSectionHeader::after
            transform rotate(0deg)
            color #eee

    .verkehrsverhalten .newSectionHeader
        background $C-verkehrsverhalten
        background-image linear-gradient(120deg, $C-verkehrsverhalten 80%, $C-verkehrsverhalten 100%)

    .verkehrsverhalten .newSectionHeader:hover
        background-color lighten($C-verkehrsverhalten, 20%)
        background-image linear-gradient(120deg, lighten($C-verkehrsverhalten, 20%) 80%, lighten($C-verkehrsverhalten, 40%) 100%)
    .verkehrsverhalten ul
        em
            background tint($C-verkehrsverhalten, 15%)
        li:before
            filter invert(25%) 

    .psychologie .newSectionHeader
        background $C-psychologie
        background-image linear-gradient(120deg, $C-psychologie 80%, $C-psychologie 100%)

    .psychologie .newSectionHeader:hover
        background-color lighten($C-psychologie, 20%)
        background-image linear-gradient(120deg, lighten($C-psychologie, 20%) 80%, lighten($C-psychologie, 40%) 100%)
    .psychologie ul
        em
            background tint($C-psychologie, 15%)
        li:before
            filter invert(25%) 


    .kommunikation .newSectionHeader
        background $C-kommunikation
        background-image linear-gradient(120deg, $C-kommunikation 80%, $C-kommunikation 100%)

    .kommunikation .newSectionHeader:hover
        background-color lighten($C-kommunikation, 20%)
        background-image linear-gradient(120deg, lighten($C-kommunikation, 20%) 80%, lighten($C-kommunikation, 40%) 100%)
    .kommunikation ul
        em
            background tint($C-kommunikation, 15%)
        li:before
            filter invert(25%) 
  
    .pädagogik .newSectionHeader
        background $C-paedagogik
        background-image linear-gradient(120deg, $C-paedagogik 80%, $C-paedagogik 100%)

    .pädagogik .newSectionHeader:hover
        background-color lighten($C-paedagogik, 20%)
        background-image linear-gradient(120deg, lighten($C-paedagogik, 20%) 80%, lighten($C-paedagogik, 40%) 100%)
    .pädagogik ul
        em
            background tint($C-paedagogik, 15%)
        li:before
            filter invert(25%) 

    .anhänger .newSectionHeader
        background $C-anhaenger
        background-image linear-gradient(120deg, $C-anhaenger 80%, $C-anhaenger 100%)

    .anhänger .newSectionHeader:hover
        background-color lighten($C-anhaenger, 20%)
        background-image linear-gradient(120deg, lighten($C-anhaenger, 20%) 80%, lighten($C-anhaenger, 40%) 100%)
    .anhänger ul
        em
            background tint($C-anhaenger, 15%)
        li:before
            filter invert(25%) 

    .technik .newSectionHeader
        background $C-technik
        background-image linear-gradient(120deg, $C-technik 80%, $C-technik 100%)

    .technik .newSectionHeader:hover
        background-color lighten($C-technik, 20%)
        background-image linear-gradient(120deg, lighten($C-technik, 20%) 80%, lighten($C-technik, 40%) 100%)     

    .technik ul
        em
            background tint($C-technik, 15%) 
        li:before
            filter invert(25%) 

</style>