<template>
    <section>
        <b-container class="superhero-details">
            <h1>{{ superhero.name }}</h1>


        <b-list-group class="col-12 col-md-6 m-auto">
            <b-list-item>
                <b class="d-inline-block text-right w-50">Weight:</b>
                <span class="d-inline-block w-50 text-left pl-2">{{ superhero.appearance.weight['0'] }}</span>
            </b-list-item>
            <b-list-item>
                <b class="d-inline-block text-right w-50">Intelligence:</b>
                <span class="d-inline-block w-50 text-left pl-2">{{ superhero.powerstats.intelligence }}</span>
            </b-list-item>
            <b-list-item>
                <b class="d-inline-block text-right w-50">Strength:</b>
                <span class="d-inline-block w-50 text-left pl-2">{{ superhero.powerstats.strength }}</span>
            </b-list-item>
        </b-list-group>
        <!--{{ superhero.powerstats }}-->
        </b-container>




    </section>

</template>
<script>
    import superheroes from '../json/all.json';

    export default {
        data() {
            return {
                superheroSlug: this.$route.params.slug,
            };
        },
        computed: {
            superhero() {
                const superhero =
                    superheroes.find(
                        superhero => superhero.slug === this.superheroSlug,
                    );
                return superhero;
            },

        },
    };
</script>

<style scoped>
    img {
        max-width: 600px;
        height: auto;
        width: 100%;
        max-height: 400px;
    }
    .experience-details {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
    }
    p {
        margin: 0 40px;
        font-size: 20px;
        text-align: left;
    }
</style>
