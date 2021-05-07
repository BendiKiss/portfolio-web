<template>
  <div class="contactme ma-4 pa-4" justify="center" align="center">
    <h1>Let's connect!</h1>
    <v-container class="primary secondary--text ma-4 pa-4">
      <p>You can find me on many social media platforms and see it for yourself.<br>
      If you write me an email, i will get back to you sooner than you think!<br>
      Do you think I'm just saying? Try it yourself!</p>
    </v-container>

    <v-container class="secondary">
      
     <div column="2" class="primary--text">
        Get in touch!<br>
       <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          dark
          icon
          :href="icon.urllink"
        >
          <v-icon size="24px">
              
           
                
            {{ icon.name }}
            
          </v-icon>
        </v-btn> 
       <br>     
       Here is my email adress: bendeguzkiss1818@gmail.com <br>
      
     </div>
    </v-container>
    


  </div>
</template>

<script>
export default {
    data: () => ({
      icons: [
          {
                name:  'mdi-facebook',
                urllink: "https://www.facebook.com/bendeguz.kiss.7"
          },
          {
                name: 'mdi-youtube',
                urllink: "https://www.youtube.com/channel/UCPFX_UHeBwAkCqta9QiRiyw"
          },
          {
                name: 'mdi-linkedin',
                urllink: "https://www.linkedin.com/in/bendegúzkiss-multimedia/"
          },
          {
                name: 'mdi-instagram',
                urllink: "https://www.instagram.com/bendeguz_kiss/"
          }
      ]}),
  }
</script>

<style>

</style>