<template>
  <v-app>
    <Navbar />

    <v-main class="ma-4">
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default {
  name: 'App',

  components: {
     Navbar,
     Footer
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
