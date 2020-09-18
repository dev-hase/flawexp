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

    $highlightB = #ffff66
    $accentColor = #375555

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
            border 1px solid #333
            padding 0 .5rem
            box-shadow 4px 3px 5px #aaa
            background #fff

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

            ul, ol, li, em
                display none

            .video-box, h3, iframe
                display none

        .newSectionHeader
            position relative
            top 1.5rem
            margin-bottom -2.5rem
            display flex
            padding-top 1.75rem !important
            padding-bottom 1.75rem !important
            padding-right 3rem !important
            background #333
            background-image linear-gradient(120deg, #222 80%, #444 100%)
            background-image linear-gradient(120deg, $accentColor 80%, lighten($accentColor, 20%) 100%)
            color #eee
            margin-left 0 !important
            z-index 100
            box-shadow 4px 3px 5px #aaa
            cursor pointer

            font-size 1.4rem 


        .newSectionHeader:hover
            background-color $accentColor
            background-image linear-gradient(120deg, darken($accentColor, 15%) 80%, lighten($accentColor, 10%) 100%)
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
  

</style>