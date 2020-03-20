<template>
      <div class="flipcarddeck">
            <header class="flipcardheader listview">
                {{ titel }}
                <button class="flipbtn" v-on:click="toggleView"> 
                    ...zur Karteikartenansicht
                </button>
            </header>
            <section class="carddeck listview">
                <Content slot-key="cards"/>
            </section>
      </div>  
</template>

<script>
export default {
    props: ["titel"],
    methods: {
        toggleView: function() {

            this.$el.querySelector('.carddeck').classList.toggle("listview");
            this.$el.querySelector('.carddeck').classList.toggle("cardview");

        }
      }
};
</script>

<style lang="stylus" scoped>


</style>
