<template>
    <div class="video-box">
        <div class="youtube" :id="videoid" :data-params="combineParams" style="width:640px;height:360px;"></div>
    </div>    
</template>

<script>  
export default {
    props: ["videoid", "start", "end", "mute"],
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
        }
        
    }

};  
</script>

<style lang="stylus" scoped>
        
    .video-box        
        filter grayscale(100%) sepia(30%) contrast(90%) brightness(90%)
        cursor pointer
        min-width 100%
        margin 1.75rem 0
        background-image url('/img/technik.png')
        background-size cover
        div
            min-width 100%
            background-size cover
  
    .youtube 
        transition all 200ms ease-out 
        box-shadow 3px 4px 3px #666 !important  
        max-width 100% !important

</style>
