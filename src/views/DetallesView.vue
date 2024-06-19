<template>
    <div>
        <h1>detalles</h1>
        <div>
            <h2>{{ pelicula.title }}</h2>
            <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.poster_path" :alt="pelicula.title" width="125px">
            <ul>
                <li>
                    <strong>generos: </strong>
                </li>
                <li v-for="genero in pelicula.genres" :key="genero.id">
                    {{ genero.name }}
                </li>
            </ul>
        </div>
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