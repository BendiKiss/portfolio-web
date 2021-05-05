<template>
  <v-app dark>
    <Navbar />

    <v-main class="ma-4">
      <router-view/>
    </v-main>
   
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  name: 'App',

  components: {
     Navbar,
     },

  data () {
    return{
      count: 0
    }
  }
}
</script>

<style>

</style>
