<template>
    <div class="video-box">
        <div class="youtube" :id="videoid" :data-params="combineParams" :data-desc="youtubeDesc" style="width:640px;height:360px;"></div>
    </div>    
</template>

<script>  
export default {
    props: ["videoid", "start", "end", "mute", "desc"],
    mounted() {
        let YTScript = document.createElement('script')
        YTScript.setAttribute('src', '/YouTube.js')
        document.head.appendChild(YTScript)
    },
    computed: {
        startAt: function () {
            if (this.start) return this.start.replace (/^/,'&start=')
            else return ''
        },
        endAt: function () {
            if (this.end) return this.end.replace (/^/,'&end=')
            else return ''
        },
        muteState: function () {
            if (this.mute) return this.mute.replace (/^/,'&mute=')
            else return ''
        },
        combineParams: function () {
            let myParams = this.muteState + this.startAt + this.endAt
            return myParams
        },
        youtubeDesc: function () {
            if (this.desc) return this.desc
            else return ''
        },
        
    }

};  
</script>

<style lang="stylus" scoped>
        
    .video-box        
        filter grayscale(70%) sepia(30%) contrast(90%) brightness(90%)
        cursor pointer
        min-width 100%
        margin 2.75rem 0
        
        div
            min-width 100%
            background-size cover
            background-position center

    .youtube:before
        content ''
        position absolute
        display flex
        width 100%
        max-widht 100%
        height 100%
        background #f03a3a
        opacity .93
        background-image url('/img/video.svg')
        background-repeat no-repeat
        background-size 33%
        background-position center

    .youtube:after
        content attr(data-desc)
        color #fff
        top 0
        left 0
        right 0
        font-size 1rem
        font-weight bold
        margin .25rem
        position absolute
        display inline
        min-width 75%
        padding .25rem
        background none


    .youtube 
        max-width 100% !important


</style>
