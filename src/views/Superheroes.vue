<template>
    <b-container class="superheroes">
        <h1 class="mb-4">Superheroes</h1>
        <b-row>
            <div class="col-4" v-for="superhero in superheroes" :key="superhero.name">
                <b-link :to="{
                      name: 'SuperheroDetails',
                      params: { slug: superhero.slug }
                    }"
                >
                    <b-card no-body class="mb-4">
                        <b-card-body>
                            <img class="img-fluid" :src="superhero.images.sm" alt="Card image cap">
                            <h4 class="pt-2">{{ superhero.name }}</h4>

                            <b-card-text v-for="team in teams" v-bind:key="team.name">
                                {{ superhero.appearance.race }}
                            </b-card-text>
                        </b-card-body>
                    </b-card>
                </b-link>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    import superheroes from '../json/all.json';

    export default {
        name: "superheroes",
        components: {},
        data() {
            return {
                superheroes: superheroes,
                teams: superheroes.connections.groupAffiliation
            };
        }
    };
</script>