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
      <v-carousel class="ma-4">
    <v-carousel-item fit 
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
    class="ma-4"
    width="auto"
    max-width="500"
  >
    <v-img
      src="../assets/Archive/magicaloceans.png"
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
          At the end of the first semester, we had to make an educational webpage connected to seas and oceans. The topic was very open about the content, so you could write about the pollution, sea life or the transportation, anything. <br>
          My goup had the same mindset and we came up with many creating and great ideas. We decided to include the indangered the levels of the water, species, pollution and energy.
        </v-card-text>
        <a href="http://joci.intuitivecomputers.eu/s1exam/"> here is the page</a>
      </div>
    </v-expand-transition>
  </v-card>

      <v-card
    class="ma-4"
    width=" auto"
    max-width="500"
  >
    <v-img
      src="../assets/Archive/shortmovie.png"
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
        @click="show= !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          In the second semester we had the project called Short-movie. For this you had to make a couple minutes long little film. <br>
          We had to work in goups of 4-5 but, due to the pandemic situation, i got stuck at home in my home country. So I had to make it on my own. <br>
          Fortunately, I have many friend who helped me a little. We made this short-movie with a ridiculously small budget. <br>
          Enjoy!
        </v-card-text>
        <video src="../assets/Archive/TheMoneyWay.FINAL.mp4" class="video" controls></video>

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
            src: require('../assets/Archive/contest.1.png'),
          },
          {
            src: require('../assets/Archive/bigmckp.jpg'),
          },
          {
            src: require('../assets/Archive/beaturself.headless.jpg'),
          },
          {
            src: require('../assets/Archive/poster.itiswhatitis.png'),
          },

        ],
      
    
    }),
  }
</script>

<style>
.video{
  display: flex;
  width: 500px;
  height: 350px;
  align-self: center;
  justify-self: center;
}
</style>