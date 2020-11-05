<template>
    <section>
        <div class="superhero-details">
            <h1>{{ superhero.name }}</h1>
        </div>

        {{ superhero.connections.groupAffiliation.split(';').join(' - ') }}


        {{ superhero.appearance.weight[1] }}
        {{ superhero.appearance.height[1] }}


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
                return superheroes.find(
                    superhero => superhero.slug === this.superheroSlug,
                );
            },
        }
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
