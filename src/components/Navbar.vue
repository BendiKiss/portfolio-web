<template>
  <nav id="Navbar" >
   
  <v-toolbar height="100" class="secondary" >
    
    <div id="nav-left" >
        <router-link to="/home" id="logo">
          <v-btn light height="60" width="60" class="ma-5"><v-img
          :src="require('../assets/Logo.svg')"
          class="ma-2"
          contain
          height="40"
          width="30"
        ></v-img></v-btn>
        </router-link>
      </div>
  <v-spacer></v-spacer>

      <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer" id="hamburger"><v-app-bar-nav-icon dark></v-app-bar-nav-icon></v-toolbar-side-icon>

   <div id="nav-right" class="ma-4 hidden-xs-only" >
          <router-link to="/home"><v-btn id="box1" light class="primary ma-1 " height="60">Home</v-btn></router-link>
          <router-link to="/about"><v-btn id="box2" light class="primary ma-1" height="60">About</v-btn></router-link>
          <router-link to="/Archives"><v-btn id="box3" light class="primary ma-1" height="60">Archives</v-btn></router-link>
          <router-link to="/ContactMe"><v-btn id="box4" light class="primary ma-1" height="60">Contact me</v-btn></router-link>
  </div>
  </v-toolbar> 

    <v-navigation-drawer app right v-model="drawer" class="primary hidden-sm-and-up">
            <router-link to="/home" class="ma-8"><v-btn>Home</v-btn></router-link>
            <router-link to="/about" class="ma-8"><v-btn>About</v-btn></router-link>
            <router-link to="/Archives" class="ma-5"><v-btn>Archives</v-btn></router-link>
            <router-link to="/ContactMe" class="ma-5"><v-btn>Contact me</v-btn></router-link>
    </v-navigation-drawer>  

  </nav>
  
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
}
</script>

<style>

#box1{
  color: #232323;}
#box2{
  color: #232323;}
#box3{
  color: #232323;}
#box4{
  color: #232323;}

</style>