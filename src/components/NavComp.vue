<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{name:home}"> home </router-link>
            </li>
            <!-- <li v-for="ruta in rutas " :key="ruta.name">
                <router-link :to="{name : ruta.name}">
                    {{ruta.name}}
                </router-link>
            </li> -->
        </ul>
    </nav>
    {{ console.log(rutas) }}
</template>

<script>
    export default{
        data(){
            return{
                rutas: this.$router.options.routes
            }
        }
    }
</script>














<style scoped>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav ul{
  list-style: none;
}
</style>