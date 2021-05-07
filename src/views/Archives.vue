<template>
  <div class="archives">
    <h1>Archives</h1>

    <v-container>
      <v-card class="primary my-4" id="artworks">
        
        <v-layout>
          <v-flex xs12 sm6 >
            <div class="secordary ma-4 py-8">Artworks</div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

      <v-card class="primary" id="projects">
        <v-layout>
          <v-flex xs12 sm6 >
            <div class="secordary ma-4 py-8">Projects</div>
          </v-flex>
        </v-layout>
      </v-card>
      
    </v-container>

    <v-container row>
      <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="../assets/homeBG.jpg"
      height="200px"
    ></v-img>

    <v-card-subtitle>
      Project
    </v-card-subtitle>
  
    <v-card-title>
     ABOUT magical ocean
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

      <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="../assets/homeBG.jpg"
      height="200px"
    ></v-img>

    <v-card-subtitle>
      Project
    </v-card-subtitle>

    <v-card-title>
     Short movie
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-container>  



    
  </div>

</template>

<script>
  export default {
    data: () => ({
      show: false,
        items: [
          {
            src: '../assets/homeBG.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      
    
    }),
  }
</script>

<style>


</style>