<template>
  <div class="home">

          <p class="grey--text" src="../assets/homeBG.jpg">backgroundImg</p>
          

    <h1 class="gray">Hi!<br> My name is <br> Bendegúz Kiss!</h1>
    <v-layout >
      <v-flex>
        <v-btn elevation="15"  height="80" width="200" class="btn primary secondary--text">Get to know me!</v-btn>
      </v-flex>
    </v-layout>
  
    <v-container class="my-10">
      <botton class="button button-close " align="center" justify="center">Learn more ABOUT me!</botton>
    </v-container>
        <v-container class="my-10">
          <p>Check out my previous artworks and projects in the ARCHIVES!</p>
        </v-container>
    <v-container  class="my-10">
      <p>Get in touch with me at CONTACT ME!</p>
    </v-container>

<v-row  class="dropdown">
    <v-expansion-panels inset>
      <v-expansion-panel
      >
        <v-expansion-panel-header class=" primary secondary--text">Get to know me!</v-expansion-panel-header>
        <v-expansion-panel-content>
              <v-row >
                  <v-expansion-panels inset >
                    <v-expansion-panel
                      v-for="(item,i) in 3"
                      :key="i"
                    >
                      <v-expansion-panel-header>Item</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>        
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>   

  </div>
</template>

<script>


export default {
  data() {
    return {
      count: 0 ,
  }
}};


</script>
<style>
.btn{
  display: flex;
  justify-items: center;
  align-self: center;
}
.dropdown{
  display: flex;
  justify-content: center;
  align-content: center;
  width: 300px;
  height: 80px;
  border-radius: 15px 15px 15px 51px;
  
}


</style>