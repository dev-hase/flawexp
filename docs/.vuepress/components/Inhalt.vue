<template>

      <article class="thema">

        <h1>{{ titel }}</h1>
        <img :src=" $withBase(`/img/` + bild) " />
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
    }
};
</script>
