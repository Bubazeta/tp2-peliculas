<template>
    <p>detalles</p>
    <div>
        <h1>{{ pelicula.title }}</h1>
        <figure>
            <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.poster_path" :alt="pelicula.title" >
            <figcaption>{{ pelicula.overview }}</figcaption>
        </figure>
        <div>
            <h3>
                <strong>generos: </strong>
            </h3>
            <ul>
                <li v-for="genero in pelicula.genres" :key="genero.id">
                    {{ genero.name }}
                </li>
            </ul>
            <p>fecha de lanzamiento: {{ pelicula.release_date }}</p>
            <p v-for="spoken in pelicula.spoken_languages" :key="spoken.name">Lenguajes compatibles : {{ spoken.name }}</p>
        </div>
        <button>❤_🧡</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pelicula: {}
        }
    },
    methods: {
        async getDetalles() {
            // console.log(this.$route);
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU0M2NmNThmZjBkNDZkNWQxNjgxNWMzMGJkZmYwZiIsInN1YiI6IjY2NzI3ZWJlMGJkOWQwZWM1ZjM0NjFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHRYCZx3jh85FAqdkT8QsqwAZCdsODC-SYEALRjwfRg'
                }
            };

            try {
                const {idPelicula} = this.$route.params
                const res = await fetch('https://api.themoviedb.org/3/movie/' + idPelicula + '?language=en-US', options)
                const data = await res.json()
                console.log("detalle de pelicula: ", data);
                return data
            } catch (error) {
                console.log(error);
            }
        }

    },
    async mounted(){
        this.pelicula = await this.getDetalles()
        console.log(this.pelicula);
        
    }
}

</script>