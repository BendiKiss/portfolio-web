<template>
  <div  class="home" justify="center" >

    <h1 class="greeting ma-8 pa-4">Hi!<br> My name is <br> Bendegúz Kiss!</h1>
   
    <v-container justify="center" class="my-5">    
        <v-btn elevation="15"  height="80" width="200" class="btn primary secondary--text" @click="bottom=!bottom">Get to know me!</v-btn>
          <div v-show=" bottom=true" class="links secodary">
          <router-link to="/about" class="ma-4 pa-4">Learn more ABOUT me!</router-link> <br>
          <router-link to="/Archives" class="ma-4 pa-4">Check out my previous artworks and projects in the Archive!</router-link> <br>
          <router-link to="/ContactMe" class="ma-4 pa-4">Get in touch with me!</router-link> <br>
      </div>
    </v-container>
  

  </div>
</template>

<script>


export default {
  data() {
    return {
      bottom: false ,
  }
}};


</script>
<style>

.home{
  background-image: url("../assets/homeBG.jpg");
  background-blend-mode: screen ;
  background-attachment: scroll ;
  background-size: cover;
  

}
.greeting{
  background-color: rgba(255, 255, 255, 0.5);
  width: 270px;  
}
.btn{
  display: flex;
  justify-items: center;
  align-self: center;
}
.links{
  display: flex;
  justify-items: center;
  align-self: center;
  background: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  width: 500px;
}


</style>