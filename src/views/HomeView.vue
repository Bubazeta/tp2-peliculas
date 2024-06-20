<template>
  <div class="home">
    <h1>Peliculas</h1>
    <ul>
      <li v-for="peli in listaPelis" :key="peli.id">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w500' + peli.poster_path" :alt="peli.title" width="125px">
          <figcaption>{{ peli.title }} - {{ peli.release_date }}</figcaption>
          <h2>{{ peli.overview }}</h2>
        </figure>
        <div>
          <button @click="handlerDetalles(peli.id)">detalles</button>
          <button>❤</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      apiKey: "api_key=62543cf58ff0d46d5d16815c30bdff0f",
      urlBase: 'https://api.themoviedb.org/3',
      token: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU0M2NmNThmZjBkNDZkNWQxNjgxNWMzMGJkZmYwZiIsInN1YiI6IjY2NzI3ZWJlMGJkOWQwZWM1ZjM0NjFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHRYCZx3jh85FAqdkT8QsqwAZCdsODC-SYEALRjwfRg',
      listaPelis: []
    }
  },
  methods: {
    async traerPelis() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU0M2NmNThmZjBkNDZkNWQxNjgxNWMzMGJkZmYwZiIsInN1YiI6IjY2NzI3ZWJlMGJkOWQwZWM1ZjM0NjFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mHRYCZx3jh85FAqdkT8QsqwAZCdsODC-SYEALRjwfRg'
        }
      };

      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const data = await res.json()
        console.log("lista de peliculas: ", data);
        return data.results
      } catch (error) {
        console.log(error);
      }
    },
    async handlerDetalles(id) {
      this.$router.push({name:"Detalles",params:{idPelicula:id}})// el push es para redirecionar en vue router
      // this.$router.push(`/detalles/${id}`)
    }

  },
  async mounted() {
    this.listaPelis = await this.traerPelis()
  }
}

</script>
