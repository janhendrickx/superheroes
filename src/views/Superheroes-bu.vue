<template>
    <div class="superheroes">
        <h1>Superheroes</h1>
        <div v-for="superhero in superheroes" :key="superhero.name">
            <router-link :to="{
                  name: 'SuperheroDetails',
                  params: { slug: superhero.slug }
                }"
            >
                {{ superhero.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import superheroes from '../json/all.json';
    export default {
        name: "superheroes",
        components: {},
        data() {
            return {
                superheroes: superheroes
            };
        }
    };
</script>