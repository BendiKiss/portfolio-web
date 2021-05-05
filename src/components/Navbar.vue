<template>
  <nav id="Navbar" >
   
  <v-toolbar dark >
    
    <div id="nav-left" class="ma-3">
        <router-link to="/home" id="logo">
          <img src="assets/Logo.png" alt="Logo"/>
        </router-link>
      </div>
  <v-spacer></v-spacer>

      <v-toolbar-side-icon class="yellow--text hidden-sm-and-up" @click="drawer = !drawer" id="hamburger"><v-app-bar-nav-icon></v-app-bar-nav-icon></v-toolbar-side-icon>

   <div id="nav-right" class="ma-4 hidden-xs-only" >
          <router-link to="/home"><v-btn id="box1" light class="yellow">Home</v-btn></router-link>
          <router-link to="/about"><v-btn id="box2" light class="yellow">About</v-btn></router-link>
          <router-link to="/Archives"><v-btn id="box3" light class="yellow">Archives</v-btn></router-link>
          <router-link to="/ContactMe"><v-btn id="box4" light class="yellow">Contact me</v-btn></router-link>
  </div>
  </v-toolbar> 

    <v-navigation-drawer dark app right wrap v-model="drawer" class="yellow hidden-sm-and-up">
      <v-list >
        
            <router-link to="/home"><v-btn id="box1">Home</v-btn></router-link>
            <router-link to="/about"><v-btn id="box2">About</v-btn></router-link>
            <router-link to="/Archives"><v-btn id="box3">Archives</v-btn></router-link>
            <router-link to="/ContactMe"><v-btn id="box4">Contact me</v-btn></router-link>
        
      </v-list>
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
#Navbar{
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
}

</style>