<template>
      <section class="newSection">
        <header class="collapsed">
            <h2 v-on:click='changeSize' class="newSectionHeader">

                {{title}}
                

            </h2>
        </header>

        <article>
            <slot></slot>
        </article>


      </section>  
</template>

<script>
export default {
    props: ["title"],
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

    $highlightB = #fcdc9a
    $accentColor = #006E54

    .newSection

        article h2:first-of-type
            font-size 0
            z-index -100
            position relative
            top -5rem

        article
            border 1px solid #333
            padding 0 .5rem
            box-shadow 4px 3px 5px #aaa

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
            background #333
            color #eee
            margin-left 0 !important
            z-index 100
            box-shadow 4px 3px 5px #aaa

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

        .collapsed .newSectionHeader::after
            transform rotate(0deg)
            color #eee
  

</style>